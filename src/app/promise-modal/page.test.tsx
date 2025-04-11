import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PromiseModalPage from './page';


jest.mock('@/components/navbar', () => ({
  NavBar: () => <div data-testid="mock-navbar">Mock NavBar</div>
}));

jest.mock('./components/index', () => ({
  ServerButtonWrapper: () => <div data-testid="mock-server-button">Mock Server Button</div>
}));

describe('PromiseModalPage', () => {
  it('renders the page with navbar and server button wrapper', () => {
    render(<PromiseModalPage />);
    expect(screen.getByTestId('mock-navbar')).toBeInTheDocument();
    expect(screen.getByTestId('mock-server-button')).toBeInTheDocument();
  });
});



