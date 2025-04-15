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
  ...jest.requireActual('next-intl'),
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
jest.mock('next/headers', () => ({
  headers: () => ({
    headersList: [
      {
        name: 'x-forwarded-for',
        value: '127.0.0.1',
      },
    ],
    get: jest.fn().mockReturnValue('test'),
  }),
}));
describe('ServerButtonWrapper', () => {
  it('should render the component', () => {
    render(<ServerButtonWrapper configIds={[]} />);
    expect(screen.getByText('Server Button Wrapper')).toBeInTheDocument();
  });
});

