import React from "react";

import '../styles.css';

const Scene = ({ src }) => {
  return (
    <div className="scene">
      <a-scene embedded arjs='trackingMethod: best;'>
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
        <a-camera-static/>
      </a-scene>
    </div>
  );
};

export default Scene;
