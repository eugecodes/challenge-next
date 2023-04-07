import { useState, useEffect } from "react";
import clsx from "clsx";

import GradientImageWrapper from "parts/GradientImageWrapper";

const Image = ({
  style,
  className,
  loadingUI,
  placeholderPath,
  gradientOverlayEnabled,
  overlayClass,
  fetchpriority,
  alt,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    return () => setLoaded(false);
  }, []);

  const onImageLoadHandler = () => {
    setLoaded(true);
  };

  return (
    <>
      {!loaded && loadingUI}
      <GradientImageWrapper
        className={overlayClass}
        overlayEnabled={gradientOverlayEnabled}
      >
        <img
          className={clsx("img", className)}
          onLoad={onImageLoadHandler}
          fetchpriority={fetchpriority}
          onError={(event) => {
            setError(true);
            if (event.target.src !== placeholderPath) {
              event.target.src = placeholderPath;
            }
          }}
          style={{
            ...style,
            display: loaded ? "block" : "none",
          }}
          alt={alt ?? ""}
          {...rest}
        />
      </GradientImageWrapper>
      <style jsx>{`
        .img {
          object-fit: ${error ? "contain" : "cover"};
        }
      `}</style>
    </>
  );
};

export default Image;
