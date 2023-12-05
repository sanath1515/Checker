import React from "react";
import { render, screen } from "@testing-library/react";
import UserCard from ".";
import { user } from "../../../../public/Images/user.svg";

describe("UserCard Component", () => {
  it("should render with title and subTitle", () => {
    const props = {
      title: "John",
      subTitle: "Doe",
      icon: user,
    };

    render(<UserCard {...props} />);

    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Doe")).toBeInTheDocument();
  });

  it("should render with an icon", () => {
    const props = {
      title: "John",
      subTitle: "Doe",
      icon: user,
    };

    render(<UserCard {...props} />);

    expect(screen.getByAltText("User Not Found")).toBeInTheDocument();
  });
});
