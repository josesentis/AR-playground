import React from "react";

import './scene.css';

const Scene = () => (
  <div className="scene">
    <a-scene embedded arjs='trackingMethod: best;'>
      <a-anchor hit-testing-enabled='true'>
        <a-box position='0 0.5 0' material='opacity: 0.5;'>
        <a-entity position="1 0 0" scale="3 3 3" text="value: HELLO; color:black"></a-entity>
        </a-box>
      </a-anchor>
      <a-camera-static/>
    </a-scene>
  </div>
);

export default Scene;
