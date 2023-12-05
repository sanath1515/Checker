import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CandidateDetails from "./index";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import { NavbarProvider } from "../../utils/navbarContext";

describe("CandidateDetails", () => {
  const CandidateData = [
    {
      id: 1,
      title: "Name",
      subtitle: "John Smith",
      iconSrc: "user",
    },
    {
      id: 2,
      title: "Email",
      subtitle: "John.smith@checkr.com",
      iconSrc: "EmailIcon",
    },
  ];

  const reportData = [
    {
      id: 1,
      title: "Status",
      subtitle: "Clear",
      iconSrc: "Clear",
    },
    {
      id: 2,
      title: "Adjudication",
      subtitle: "-",
      iconSrc: "Adjucation",
    },
  ];
  it("renders loading state initially", () => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: CandidateData });
    render(
      <MemoryRouter>
        <NavbarProvider>
          <CandidateDetails />
        </NavbarProvider>
      </MemoryRouter>
    );

    expect(screen.getByText("Pre-Adverse Action")).toBeInTheDocument();
    expect(screen.getByText("Engage")).toBeInTheDocument();
  });

  it("renders without errors", () => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: CandidateData });
    render(
      <MemoryRouter>
        <NavbarProvider>
          <CandidateDetails />
        </NavbarProvider>
      </MemoryRouter>
    );

    const Candidate = screen.getByText("Candidate Information");
    expect(Candidate).toBeInTheDocument();
  });

  it("report Information rendered successfull", () => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: reportData });
    render(
      <MemoryRouter>
        <NavbarProvider>
          <CandidateDetails />
        </NavbarProvider>
      </MemoryRouter>
    );

    const text = screen.getByText("Report Information");
    expect(text).toBeInTheDocument();
    fireEvent.click(text);
    expect(screen.getByText(CandidateData[0].title)).toBeInTheDocument();
  });

  it("Header Button Functionality", async () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavbarProvider>
          <CandidateDetails />
        </NavbarProvider>
      </MemoryRouter>
    );

    const backButton = screen.getByAltText("Back");
    expect(backButton).toBeInTheDocument();
    fireEvent.click(backButton);

    const preAdverseActionButton = getByText("Pre-Adverse Action");
    expect(preAdverseActionButton).toBeInTheDocument();
    fireEvent.click(preAdverseActionButton);

    expect(getByText("Pre-Adverse Action Notice")).toBeInTheDocument();
  });

  it("click on engage button", async () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavbarProvider>
          <CandidateDetails />
        </NavbarProvider>
      </MemoryRouter>
    );

    const button = getByText("Engage");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
  });
});
