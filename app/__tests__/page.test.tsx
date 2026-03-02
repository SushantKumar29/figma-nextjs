import { render, screen } from "@testing-library/react";
import Home from "../page";

jest.mock("@/components", () => ({
  ParallaxBackground: () => <div data-testid="parallax" />,
  Header: () => <div data-testid="header" />,
  Hero: () => <div data-testid="hero" />,
  ClientsStrip: () => <div data-testid="clients" />,
  Services: () => <div data-testid="services" />,
  Testimonials: () => <div data-testid="testimonials" />,
  CaseStudies: () => <div data-testid="case-studies" />,
  Technology: () => <div data-testid="technology" />,
  Features: () => <div data-testid="features" />,
  Contact: () => <div data-testid="contact" />,
  Footer: () => <div data-testid="footer" />,
}));

describe("Home Page", () => {
  it("renders main layout container", () => {
    const { container } = render(<Home />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders background gradient layers", () => {
    const { container } = render(<Home />);
    const gradients = container.querySelectorAll(".absolute.inset-0");
    expect(gradients.length).toBeGreaterThanOrEqual(2);
  });

  it("renders all page sections", () => {
    render(<Home />);

    expect(screen.getByTestId("parallax")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("hero")).toBeInTheDocument();
    expect(screen.getByTestId("clients")).toBeInTheDocument();
    expect(screen.getByTestId("services")).toBeInTheDocument();
    expect(screen.getByTestId("testimonials")).toBeInTheDocument();
    expect(screen.getByTestId("case-studies")).toBeInTheDocument();
    expect(screen.getByTestId("technology")).toBeInTheDocument();
    expect(screen.getByTestId("features")).toBeInTheDocument();
    expect(screen.getByTestId("contact")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders a main element", () => {
    render(<Home />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
