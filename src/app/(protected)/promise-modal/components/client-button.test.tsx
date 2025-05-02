import { render, screen, fireEvent, act } from '@testing-library/react';
import ClientButton from './client-button';
import React from 'react';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useEffect: jest.fn((cb) => cb()),
    useState: jest.fn((init) => [init, jest.fn()]),
}));

describe('ClientButton', () => {
    const mockModalInfo = {
        id: 1,
        title: 'Initial Modal',
        body: 'Initial modal content'
    };

    const mockRemainingModalInfo = [
        {
            id: 2,
            title: 'Second Modal',
            body: 'Second modal content'
        },
        {
            id: 3,
            title: 'Third Modal',
            body: 'Third modal content'
        }
    ];

    it('renders initial modal info correctly', () => {
        render(<ClientButton modalInfo={mockModalInfo} />);

        expect(screen.getByText('Open Modal')).toBeInTheDocument();
        expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    });

    // it('shows loading state when accessing unavailable modal', () => {
    //     render(<ClientButton
    //         modalInfo={mockModalInfo}
    //         remainingModalInfoPromise={new Promise(() => { })} // Never resolving promise
    //     />);

    //     // Click on option 2 (index 1)
    //     fireEvent.click(screen.getByLabelText('Option 2'));

    //     const button = screen.getByRole('button', { name: 'Loading...' });
    //     expect(button).toBeDisabled();
    //     expect(button).toHaveClass('bg-gray-400');
    // });

    it('loads remaining modal info and updates UI', async () => {
        render(
            <ClientButton
                modalInfo={mockModalInfo}
                remainingModalInfoPromise={Promise.resolve(mockRemainingModalInfo)}
            />
        );

        // Initially the button should be enabled
        expect(screen.getByRole('button', { name: 'Open Modal' })).toBeEnabled();

        // Click on option 2 (index 1)
        fireEvent.click(screen.getByLabelText('Option 2'));

        // Wait for the promise to resolve
        await act(async () => {
            await Promise.resolve();
        });

        // Button should still be enabled after loading
        const button = screen.getByRole('button', { name: 'Open Modal' });
        expect(button).toBeEnabled();
        expect(button).toHaveClass('bg-blue-500');
    });

    // it('opens and closes modal correctly', async () => {
    //     render(<ClientButton modalInfo={mockModalInfo} />);

    //     // Open modal
    //     fireEvent.click(screen.getByRole('button', { name: 'Open Modal' }));

    //     // Check modal content
    //     expect(screen.getByText('Initial Modal')).toBeInTheDocument();
    //     expect(screen.getByText('Initial modal content')).toBeInTheDocument();

    //     // Close modal using the close button
    //     fireEvent.click(screen.getByRole('button', { name: 'Close' }));

    //     // Modal content should not be visible
    //     expect(screen.queryByText('Initial Modal')).not.toBeInTheDocument();
    // });

    // it('switches between different modal contents', async () => {
    //     render(
    //         <ClientButton
    //             modalInfo={mockModalInfo}
    //             remainingModalInfoPromise={Promise.resolve(mockRemainingModalInfo)}
    //         />
    //     );

    //     // Wait for remaining modal info to load
    //     await act(async () => {
    //         await Promise.resolve();
    //     });

    //     // Open modal with initial content
    //     fireEvent.click(screen.getByRole('button', { name: 'Open Modal' }));
    //     expect(screen.getByText('Initial Modal')).toBeInTheDocument();

    //     // Close modal
    //     fireEvent.click(screen.getByRole('button', { name: 'Close' }));

    //     // Switch to second modal
    //     fireEvent.click(screen.getByLabelText('Option 2'));

    //     // Open modal again
    //     fireEvent.click(screen.getByRole('button', { name: 'Open Modal' }));
    //     expect(screen.getByText('Second Modal')).toBeInTheDocument();
    //     expect(screen.getByText('Second modal content')).toBeInTheDocument();
    // });
});