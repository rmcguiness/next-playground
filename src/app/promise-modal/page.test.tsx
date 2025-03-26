import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PromiseModalPage from './page';
describe('ServerButtonWrapper', () => {

  it('should load first option immediately and others after 5 seconds', async () => {
    render(<PromiseModalPage />);


  });


});



