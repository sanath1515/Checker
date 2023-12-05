import { render } from "@testing-library/react";
import CustomAvatar, { CustomAvatarProps } from ".";

describe('Avatar Component', () => {
  it('should render with specified props', () => {
    const src = 'profile_image';
    const alt = "Avatar Alt Text";
    const style: React.CSSProperties = {
      border: "2px solid black",
      borderRadius: "50%",
    };
    const sx: CustomAvatarProps["sx"] = {
      width: 100,
      height: 100,
    };

    const { getByAltText } = render(
      <CustomAvatar src={src} alt={alt} style={style} sx={sx} />
    );
    const avatar = getByAltText("Avatar Alt Text");
    expect(avatar).toBeInTheDocument();
    expect(avatar.tagName).toBe("IMG");
  });
});
