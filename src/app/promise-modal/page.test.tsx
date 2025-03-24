import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ServerButtonWrapper from "./components/server-button-wrapper";

jest.mock('next/navigation', () => ({
  useParams: () => ({
    lang: 'en',
    esite: 'prime'
  })
}));

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => ({
    'button.submit': 'Submit',
    'button.cancel': 'Cancel'
  }[key] || key)
}));

describe('ServerButtonWrapper', () => {
  it('should render the component', () => {
    render(<ServerButtonWrapper configIds={[]} />);
    expect(screen.getByText('Server Button Wrapper')).toBeInTheDocument();
  });
});

