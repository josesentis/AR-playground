import React from "react";

const Scene = ({ text }) => {
  return (
    <>
       <a-assets>
          <a-mixin
            id="text"
            text={`align: center; width: 3; font: https://cdn.aframe.io/fonts/Aileron-Semibold.fnt; value: ${text};`}
          ></a-mixin>
        </a-assets>
        <a-marker id="marker"
          preset="hiro"
          markerhandler
          emitevents="true"
          cursor="rayOrigin: mouse"
          smooth="true"
          smoothCount="10"
          smoothTolerance="0.005"
          smoothThreshold="1"
        >
          <a-text id="text" mixin="text" position="0 1 0" wrap-count="15" rotation="-90 0 0" color="blue"></a-text>
        </a-marker>
    </>
  );
};

export default Scene;
