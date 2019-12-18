import React, { useEffect } from "react";

// import events from './events';

import '../styles.css';

const Scene = ({ text }) => {
  useEffect(() => {
    // events();
    console.log(text);
  });

  return (
    <div className="scene">
      <a-scene embedded arjs='trackingMethod: best;'>
        <a-assets>
          <a-mixin
            id="text"
            text={`align: center; width: 3; font: https://cdn.aframe.io/fonts/Aileron-Semibold.fnt; value: ${text};`}
          ></a-mixin>
        </a-assets>
        <a-marker id="marker" markerhandler emitevents="true" cursor="rayOrigin: mouse" type="barcode" value="51" smooth="true" smoothCount="10" smoothTolerance="0.005" smoothThreshold="1">
          <a-text id="text" mixin="text" position="0 1 0" wrap-count="15" rotation="-90 0 0" color="blue"></a-text>
        </a-marker>
        <a-entity camera></a-entity>
        {/* <a-marker markerhandler emitevents="true" cursor="rayOrigin: mouse" preset="hiro" id="marker">
          <a-box id="text" position="0 0.5 0" rotation="0 0 0" material="color: yellow;"></a-box>
        </a-marker>
        <a-camera-static/> */}
      </a-scene>
    </div>
  );
};

export default Scene;
