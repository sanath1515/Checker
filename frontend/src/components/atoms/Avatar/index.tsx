import React from 'react';
import { Avatar, AvatarProps as MuiAvatarProps } from '@mui/material';

export interface CustomAvatarProps extends MuiAvatarProps {}

const CustomAvatar: React.FC<CustomAvatarProps> = (muiAvatarProps: CustomAvatarProps) => {
  return <Avatar {...muiAvatarProps} />;
};

export default CustomAvatar;

