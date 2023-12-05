import React from "react";

export interface IconProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties | object;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const MuiIcons = ({ style, width, height, ...props }: IconProps) => {
  return (
    <img
      {...props}
      width={width}
      height={height}
      style={{ cursor: "pointer", ...style }}
    />
  );
};

export default MuiIcons;
