import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MuiIcons, { IconProps } from '.';

describe('MuiIcons Component', () => {
  it('renders an image with src and alt attributes', () => {
    const iconProps: IconProps = {
      src: 'icon.png',
      alt: 'Icon Alt Text',
    };

    const { getByAltText } = render(<MuiIcons {...iconProps} />);

    const image = getByAltText('Icon Alt Text') as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toContain('icon.png');
  });

  it('applies custom styles', () => {
    const iconProps: IconProps = {
      src: 'icon.png',
      alt: 'Icon Alt Text',
      style: { width: '50px', height: '50px' },
    };

    const { getByAltText } = render(<MuiIcons {...iconProps} />);

    const image = getByAltText('Icon Alt Text') as HTMLImageElement;
    expect(image).toHaveStyle('width: 50px; height: 50px;');
  });

  it('handles click events', () => {
    let clicked = false;
    const handleClick = () => {
      clicked = true;
    };

    const iconProps: IconProps = {
      src: 'icon.png',
      alt: 'Icon Alt Text',
      onClick: handleClick,
    };

    const { getByAltText } = render(<MuiIcons {...iconProps} />);

    const image = getByAltText('Icon Alt Text') as HTMLImageElement;
    fireEvent.click(image);

    expect(clicked).toBe(true);
  });
});
