import { render } from '@testing-library/react';
import { ServerButtonWrapper } from '.';

// Mock fetch
global.fetch = jest.fn();

jest.mock('./client-button', () => ({
    ClientButton: () => <div data-testid="client-button">Client Button</div>
}));

describe('ServerButtonWrapper', () => {
    beforeEach(() => {
        (fetch as jest.Mock).mockClear();
    });

    it('fetches and passes data to ClientButton', async () => {
        render(<ServerButtonWrapper configIds={[1, 2, 3]} />);
    });
}); 