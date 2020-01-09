import React from "react";

const Scene = ({ content }) => {
  return (
    <>
      <a-marker preset="kanji">
        {content.map(({ color, text }, i) => (
          <a-entity
            key={`text-${i}`}
            position={`0 0 ${i * 0.5}`}
            geometry="primitive: plane; width: auto; height: auto"
            material="color: #00aaff"
            align="left"
            rotation="-90 0 0"
            text={`color: ${color}; wrap-count: 10; font: https://cdn.aframe.io/fonts/Aileron-Semibold.fnt; value: ${text};`}
          ></a-entity>
        ))}
      </a-marker>
    </>
  );
};

export default Scene;
