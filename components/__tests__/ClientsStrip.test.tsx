import { render, screen } from "@testing-library/react";
import { ClientsStrip } from "../ClientsStrip";

describe("ClientsStrip Component", () => {
  it("renders the section container", () => {
    const { container } = render(<ClientsStrip />);
    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("renders exactly 7 client logos", () => {
    render(<ClientsStrip />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(7);
  });

  it("renders correct alt text for each logo", () => {
    render(<ClientsStrip />);

    for (let i = 1; i <= 7; i++) {
      expect(screen.getByAltText(`Client logo ${i}`)).toBeInTheDocument();
    }
  });

  it("renders horizontal divider lines", () => {
    const { container } = render(<ClientsStrip />);
    const dividers = container.querySelectorAll(".bg-white\\/10");
    expect(dividers.length).toBeGreaterThanOrEqual(2);
  });

  it("renders images with correct src format", () => {
    render(<ClientsStrip />);
    const images = screen.getAllByRole("img");

    images.forEach((img) => {
      expect(img.getAttribute("src")).toContain("/figma/parallax-scroll/");
    });
  });
});
