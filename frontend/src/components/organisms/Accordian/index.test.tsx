import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Accordian from '.';
import { CandidateData } from '../../../utils/data';


describe('Candidate Accordian', () => {
  it("Accordion Card successfull", () => {
    render(<Accordian title="Candidate Information" cardData={CandidateData} />)

    const text = screen.getByText("Candidate Information");
    expect(text).toBeInTheDocument();   
})
it("candidate Information successfull", () => {
    render(<Accordian title="Candidate Information" cardData={CandidateData} />)

    const text = screen.getByText("Candidate Information");
    expect(text).toBeInTheDocument(); 
    
    const accordion = screen.getByRole("button");
    expect(accordion).toBeInTheDocument();
    fireEvent.click(accordion);
    expect(screen.getByText(CandidateData[0].subtitle)).toBeInTheDocument();

    fireEvent.click(accordion);
    expect(screen.getByTestId('item-style')).toBeInTheDocument;
    fireEvent.click(accordion);
    expect(screen.queryByTestId('item-style')).not.toBeInTheDocument;
})
});
