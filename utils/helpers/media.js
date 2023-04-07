import { createMedia } from "@artsy/fresnel";

const AppMedia = createMedia({
  breakpoints: {
    sm: 0,
    md: 1300,
    lg: 1462.5,
    xl: 1500,
  },
});
export const mediaStyles = AppMedia.createMediaStyle();

export const { Media, MediaContextProvider } = AppMedia;
