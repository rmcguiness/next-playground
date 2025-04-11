import { render, screen } from "@testing-library/react";
import ParentSuspense from "./parent-sus";

jest.mock("./child-sus", () => ({
    ChildSuspense: () => <div data-testid="child-content">Child Content</div>
}));

describe('ParentSuspense', () => {
    it('Should render the children', async () => {
        render(<ParentSuspense />);
        const childContent = await screen.findByTestId('child-content');
        expect(childContent).toBeInTheDocument();
    });
});