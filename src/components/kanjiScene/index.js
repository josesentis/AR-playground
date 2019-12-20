import React from "react";

import '../styles.css';

const Scene = () => {
  return (
    <div className="scene">
      <a-scene embedded arjs='sourceType: webcam;'>
        <a-box position='0 0.5 0' material='color: red;'></a-box>
        <a-marker-camera type='pattern' url="./patterns/kanji/pattern-kanji.patt"></a-marker-camera>
      </a-scene>
    </div>
  );
};

export default Scene;
