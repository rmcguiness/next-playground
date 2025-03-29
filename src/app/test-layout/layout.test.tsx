import { render, screen } from "@testing-library/react";
import TestLayout from "./layout";

describe('TestLayout', () => {
    // Create a container element that we'll reuse
    let container: HTMLElement;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        container.remove();
    });

    it('Should render the children', () => {
        render(<TestLayout><div>Test</div></TestLayout>, {
            container
        });

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});