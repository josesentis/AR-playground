import React from "react";

const Scene = () => (
  <a-scene embedded arjs="sourceType: webcam;">
    <a-box position="0 0.5 0" material="opacity: 0.5;"></a-box>
    <a-marker-camera
      type="pattern"
      patternUrl="./pattern-Marker.patt"
    ></a-marker-camera>
  </a-scene>
);

export default Scene;
