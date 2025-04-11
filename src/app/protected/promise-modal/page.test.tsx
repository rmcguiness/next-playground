import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PromiseModalPage from './page';


jest.mock('./components/index', () => ({
  ServerButtonWrapper: () => <div data-testid="mock-server-button">Mock Server Button</div>
}));

describe('PromiseModalPage', () => {
  it('renders the page with server button wrapper', () => {
    render(<PromiseModalPage />);
    expect(screen.getByTestId('mock-server-button')).toBeInTheDocument();
  });
});



