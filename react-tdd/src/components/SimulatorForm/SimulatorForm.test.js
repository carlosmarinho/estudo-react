import { render, screen } from "@testing-library/react";
import Users from "./Users";

const list = [
    { id: 1, name: "Gripp" },
    { id: 2, name: "Issa" },
    { id: 3, name: "Guilherme" },
];

it("should render a list with 3 elements", () => {
    render(<Users users={list} />);
    const users = screen.getAllByRole("listitem");
    expect(users.length).toBe(3);
});
