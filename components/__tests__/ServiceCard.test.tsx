import { render, screen } from "@testing-library/react";
import { ServiceCard } from "../ServiceCard";

const baseProps = {
  title: "Test Title",
  description: "Test description",
  cta: "Test CTA",
  tone: "mvp" as const,
};

describe("ServiceCard Component", () => {
  it("renders title, description and CTA", () => {
    render(<ServiceCard {...baseProps} />);

    expect(screen.getByText(baseProps.title)).toBeInTheDocument();
    expect(screen.getByText(baseProps.description)).toBeInTheDocument();
    expect(screen.getByText(baseProps.cta)).toBeInTheDocument();
  });

  it("renders 'Our Services' badge", () => {
    render(<ServiceCard {...baseProps} />);
    expect(screen.getByText("Our Services")).toBeInTheDocument();
  });

  it("renders anchor with correct href", () => {
    render(<ServiceCard {...baseProps} />);
    expect(screen.getByRole("link")).toHaveAttribute("href", "#contact");
  });

  it("renders background image for selected tone", () => {
    const { container } = render(<ServiceCard {...baseProps} />);

    const images = container.querySelectorAll("img");
    const backgroundImage = Array.from(images).find((img) =>
      img.getAttribute("src")?.includes("dots.svg")
    );

    expect(backgroundImage).toBeTruthy();
  });

  it("renders arrow icon image", () => {
    const { container } = render(<ServiceCard {...baseProps} />);

    const images = container.querySelectorAll("img");
    const arrow = Array.from(images).find((img) =>
      img.getAttribute("src")?.includes("arrow-top-right.svg")
    );

    expect(arrow).toBeTruthy();
  });

  it("applies correct tone background class", () => {
    const { container } = render(<ServiceCard {...baseProps} />);
    const root = container.firstChild as HTMLElement;

    expect(root.className).toContain("bg-[#3D4DB7]");
  });
});
