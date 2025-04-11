import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ServerButtonWrapper from "../app/protected/promise-modal/components/server-button-wrapper";

jest.mock('next/navigation', () => ({
  useParams: () => ({
    lang: 'test',
    esite: 'test'
  })
}));

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => ({
    'button.submit': 'Submit',
    'button.cancel': 'Cancel'
  }[key] || key)
}));
jest.mock('@/components/navbar/NavBar', () => {
  return function MockNavBar({ children }: { children?: React.ReactNode }) {
    return <div data-testid="mock-navbar">{children}</div>;
  };
});

describe('ServerButtonWrapper', () => {
  it('should render the component', () => {
    render(<ServerButtonWrapper configIds={[]} />);
    expect(screen.getByText('Server Button Wrapper')).toBeInTheDocument();
  });
});

