import { render, screen } from "@testing-library/react";
import { Hero } from "../Hero";

describe("Hero Component", () => {
  it("renders main heading correctly", () => {
    render(<Hero />);

    expect(screen.getByText(/from/i)).toBeInTheDocument();
    expect(screen.getByText(/concept/i)).toBeInTheDocument();
    expect(screen.getByText(/reality/i)).toBeInTheDocument();
  });

  it("renders subheading text", () => {
    render(<Hero />);

    expect(screen.getByText(/We Engineer your Software Success/i)).toBeInTheDocument();
  });

  it("renders description paragraph", () => {
    render(<Hero />);

    expect(screen.getByText(/At Chromezy, we translate your ideas/i)).toBeInTheDocument();
  });

  it("renders all stats cards", () => {
    render(<Hero />);

    expect(screen.getByText("200%")).toBeInTheDocument();
    expect(screen.getByText("Revenue Growth")).toBeInTheDocument();

    expect(screen.getByText("4X")).toBeInTheDocument();
    expect(screen.getByText("Speed to Market")).toBeInTheDocument();

    expect(screen.getByText("73%")).toBeInTheDocument();
    expect(screen.getByText("New Orders")).toBeInTheDocument();

    expect(screen.getByText("10K+")).toBeInTheDocument();
    expect(screen.getByText("Active Users")).toBeInTheDocument();
  });

  it("renders AI badge text", () => {
    render(<Hero />);

    expect(screen.getByText(/Introducing AI Automation/i)).toBeInTheDocument();
  });
});
