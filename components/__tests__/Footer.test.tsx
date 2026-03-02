import { render, screen } from "@testing-library/react";
import { Footer } from "../Footer";

describe("Footer Component", () => {
  it("renders footer element with correct id", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveAttribute("id", "footer");
  });

  it("renders logo image", () => {
    render(<Footer />);
    const logo = screen.getByAltText("Chromezy logo");
    expect(logo).toBeInTheDocument();
    expect(logo.getAttribute("src")).toContain("logo-final.svg");
  });

  it("renders company description", () => {
    render(<Footer />);
    expect(screen.getByText(/Not just about software/i)).toBeInTheDocument();
  });

  it("renders Terms and Privacy links", () => {
    render(<Footer />);
    expect(screen.getByText("Terms")).toBeInTheDocument();
    expect(screen.getByText("Privacy")).toBeInTheDocument();
  });

  it("renders contact phone and email", () => {
    render(<Footer />);
    expect(screen.getByText("+1 315 308 0901")).toBeInTheDocument();
    expect(screen.getByText("sales@chromezy.com")).toBeInTheDocument();
  });

  it("renders left navigation links", () => {
    render(<Footer />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Career")).toBeInTheDocument();
    expect(screen.getByText("Case Study")).toBeInTheDocument();
    expect(screen.getByText("Join the Team")).toBeInTheDocument();
  });

  it("renders right navigation links", () => {
    render(<Footer />);

    expect(screen.getByText("AI")).toBeInTheDocument();
    expect(screen.getByText("MVP")).toBeInTheDocument();
    expect(screen.getByText("SaaS")).toBeInTheDocument();
    expect(screen.getByText("E-commerce")).toBeInTheDocument();
    expect(screen.getByText("Work with us")).toBeInTheDocument();
  });

  it("renders copyright section", () => {
    render(<Footer />);
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
    expect(screen.getByText(/Dbnk Designs, All Rights Reserved/i)).toBeInTheDocument();
  });

  it("renders social media links", () => {
    render(<Footer />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(10);
  });
});
