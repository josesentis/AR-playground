import React from "react";

import '../styles.css';

const Scene = () => (
  <div className="scene">
    <a-scene embedded arjs='trackingMethod: best;'>
      <a-marker preset="hiro">
        <a-box position="0 0.5 0" material="color: yellow;"></a-box>
      </a-marker>
      <a-camera-static/>
    </a-scene>
  </div>
);

export default Scene;
