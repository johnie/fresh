import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Counter from "~/components/counter";

describe("Counter", () => {
  it("increments the count when clicked", () => {
    render(<Counter />);

    const button = screen.getByRole("button", { name: "Clicks: 0" });
    fireEvent.click(button);

    expect(screen.getByRole("button", { name: "Clicks: 1" })).toBeVisible();
  });
});
