import { render, screen } from "@testing-library/react";
import ParentSuspense from "./parent-sus";
import { act } from "react";
import { sleep } from "@/utils/sleep";

jest.mock("./child-sus", () => ({
    ChildSuspense: () => <div data-testid="child-content">Child Content</div>
}));

const renderComp = () => {
    const comp = ParentSuspense();
    return render(comp);
}

describe('ParentSuspense', () => {
    it('Should render the children', async () => {
        await render(<ParentSuspense />);
        const childContent = await screen.findByTestId('child-content');
        expect(childContent).toBeInTheDocument();
    });
});