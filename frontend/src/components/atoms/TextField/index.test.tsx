import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { InputField } from '.';

describe('InputField Component', () => {
  it('renders with a label and placeholder', () => {
    const { getByLabelText, getByPlaceholderText } = render(
      <InputField label="Username" placeholder="Enter your username" />
    );

    expect(getByLabelText('Username')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter your username')).toBeInTheDocument();
  });

  it('handles value change', () => {
    let value = '';
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      value = e.target.value;
    };

    const { getByLabelText } = render(
      <InputField label="Email" onChange={handleChange} />
    );

    const input = getByLabelText('Email') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test@example.com' } });

    expect(value).toBe('test@example.com');
  });

  it('renders with helper text', () => {
    const { getByText } = render(
      <InputField label="Password" helperText="Enter a strong password" />
    );

    expect(getByText('Enter a strong password')).toBeInTheDocument();
  });

  it('renders as disabled', () => {
    const { getByLabelText } = render(
      <InputField label="Disabled Field" placeholder="This field is disabled" disabled />
    );

    const input = getByLabelText('Disabled Field') as HTMLInputElement;
    expect(input).toBeDisabled();
  });



});