import React from "react";

const Scene = ({ src }) => {
  return (
    <>
      <a-assets>
        <img id="transpImage" src={src} alt="" />
      </a-assets>
      <a-marker preset="hiro">
        <a-image
          width="4"
          height="4"
          position="0 0.25 0"
          rotation="-90 0 0"
          src="#transpImage"
        ></a-image>
      </a-marker>
      <a-camera-static />
    </>
  );
};

export default Scene;
