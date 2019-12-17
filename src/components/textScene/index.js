import React from "react";

import '../styles.css';

const Scene = ({ text }) => {
  console.log(text);

  return (
    <div className="scene">
      <a-scene embedded arjs='trackingMethod: best;'>
        <a-assets>
          <a-mixin
            id="text"
            text={`align: center; width: 3; font: https://cdn.aframe.io/fonts/Aileron-Semibold.fnt; value: ${text};`}
          ></a-mixin>
        </a-assets>
        <a-marker type="barcode" value="51" smooth="true" smoothCount="10" smoothTolerance="0.005" smoothThreshold="1">
          <a-text mixin="text" position="0 1 0" wrap-count="15" rotation="-90 0 0" color="blue"></a-text>
        </a-marker>
        <a-camera-static/>
      </a-scene>
    </div>
  );
};

export default Scene;
