import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CheckboxComponent, { CustomCheckboxProps } from './';

describe('CheckboxComponent Testcases', () => {
  it('should render a default unchecked checkbox', () => {
    const { getByLabelText } = render(<CheckboxComponent label="Check me" />);
    const checkbox = getByLabelText('Check me');
    
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it('should render a checked checkbox when "checked" prop is true', () => {
    const { getByLabelText } = render(<CheckboxComponent label="Checked" checked />);
    const checkbox = getByLabelText('Checked');
    
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
  });

  it('should render a disabled checkbox when "disabled" prop is true', () => {
    const { getByLabelText } = render(<CheckboxComponent label="Disabled" disabled />);
    const checkbox = getByLabelText('Disabled');
    
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeDisabled();
  });

  it('should call the "onChange" function when clicked', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(<CheckboxComponent label="Clickable" onChange={handleChange} />);
    const checkbox = getByLabelText('Clickable');
    
    fireEvent.click(checkbox);
    
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
 
});
