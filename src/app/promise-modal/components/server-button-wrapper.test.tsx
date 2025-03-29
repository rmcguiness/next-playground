import { render, screen } from '@testing-library/react';
import ServerButtonWrapper from './server-button-wrapper';

// Mock fetch
global.fetch = jest.fn();

describe('ServerButtonWrapper', () => {
    beforeEach(() => {
        (fetch as jest.Mock).mockClear();
    });

    it('fetches and passes data to ClientButton', async () => {
        const mockInitialData = { id: 1, title: 'Test', body: 'Test body' };
        (fetch as jest.Mock).mockImplementation(() =>
            Promise.resolve({ json: () => Promise.resolve(mockInitialData) })
        );

        await render(<ServerButtonWrapper configIds={[1, 2, 3]} />);
        expect(fetch).toHaveBeenCalledTimes(1);
    });
}); 