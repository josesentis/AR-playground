import React from "react";

// https://imgur.com/a/UXC7eYW

const Scene = () => (
  <>
    <a-marker type="pattern" url="./patterns/face/pattern-face.patt">
      <a-box position="0 0.5 0" material="color: red;"></a-box>
    </a-marker>
  </>
);

export default Scene;
