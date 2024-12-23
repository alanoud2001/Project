import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
//import "@testing-library/jest-dom/extend-expect";
import Counter from "./Counter";

describe(Counter, () => {
    it("counter displays correct initial count",() => { 
        render(<Counter initialCount={5} />)
        const h3element = screen.getByTestId("count")
        expect(h3element).toHaveTextContent(5)
    })
    it("increments the count when the increment button is clicked", () => {
        render(<Counter initialCount={5} />);
        const h3element = screen.getByTestId("count");
        const btnelement = screen.getByTestId("increment");
        fireEvent.click(btnelement);
        expect(h3element).toHaveTextContent(6);
      })
     it("decrements the count when the decrement button is clicked", () => {
       render(<Counter initialCount={5} />);
       const h3element = screen.getByTestId("count");
       const btnelement = screen.getByTestId("decrement");
       fireEvent.click(btnelement);
       expect(h3element).toHaveTextContent(4);
     })
     it("resets the count to 0 when the restart button is clicked", () => {
       render(<Counter initialCount={5} />);
       const h3element = screen.getByTestId("count");
       const btnelement = screen.getByTestId("restart");
       fireEvent.click(btnelement);
       expect(h3element).toHaveTextContent(0);
     })
     it("switches the sign of the count when the switch sign button is clicked", () => {
       render(<Counter initialCount={5} />);
       const h3element = screen.getByTestId("count");
       const btnelement = screen.getByTestId("switchsign");
       fireEvent.click(btnelement);
       expect(h3element).toHaveTextContent(-5);
     });
})

