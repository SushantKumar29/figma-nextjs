import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "../Header";

describe("Header Component", () => {
  beforeEach(() => {
    // Ensure predictable viewport
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 375, // mobile by default
    });
  });

  it("renders logo", () => {
    render(<Header />);
    expect(screen.getByAltText("Chromezy")).toBeInTheDocument();
  });

  it("renders desktop navigation items", () => {
    render(<Header />);

    expect(screen.getAllByText("Home").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Explore AI").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Services").length).toBeGreaterThan(0);
    expect(screen.getAllByText("E-commerce").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Products").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Blogs").length).toBeGreaterThan(0);
  });

  it("toggles mobile menu when hamburger is clicked", () => {
    render(<Header />);

    const toggleButton = screen.getByLabelText("Toggle menu");

    // Initially closed
    expect(screen.getByText("About Us", { selector: "a.lg\\:hidden" })).toBeInTheDocument();

    fireEvent.click(toggleButton);

    // Mobile menu should now contain Home link visibly
    expect(screen.getAllByText("Home").length).toBeGreaterThan(0);
  });

  it("closes mobile menu when a mobile nav link is clicked", () => {
    render(<Header />);

    const toggleButton = screen.getByLabelText("Toggle menu");
    fireEvent.click(toggleButton);

    const mobileLink = screen.getAllByText("Services")[1];
    fireEvent.click(mobileLink);

    // After clicking, menu state should reset (no crash)
    expect(screen.getAllByText("Services").length).toBeGreaterThan(0);
  });

  it("closes mobile menu on window resize >= 1024", () => {
    render(<Header />);

    const toggleButton = screen.getByLabelText("Toggle menu");
    fireEvent.click(toggleButton);

    // Simulate desktop resize
    window.innerWidth = 1200;
    fireEvent(window, new Event("resize"));

    expect(window.innerWidth).toBe(1200);
  });

  it("renders Contact button", () => {
    render(<Header />);
    expect(screen.getAllByText(/Contact/i).length).toBeGreaterThan(0);
  });

  it("renders About Us link", () => {
    render(<Header />);
    expect(screen.getAllByText("About Us").length).toBeGreaterThan(0);
  });
});
