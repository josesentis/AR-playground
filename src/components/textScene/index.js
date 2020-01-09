import React from "react";

const Scene = ({ content }) => {
  return (
    <>
      <a-assets>
        {content.map(({ text }, i) => (
          <a-mixin
            id={`text-${i}`}
            key={`mixin-${i}`}
            text={`align: left; width: 4; font: https://cdn.aframe.io/fonts/Aileron-Semibold.fnt; value: ${text};`}
          ></a-mixin>
        ))}
      </a-assets>
      <a-marker preset="kanji">
        {content.map(({ color }, i) => (
          <a-box>
            <a-text
              mixin={`text-${i}`}
              key={`text-${i}`}
              position={`0 0 ${i * 0.5}`}
              wrap-count="20"
              // rotation="-90 0 0"
              color={color}
            ></a-text>
          </a-box>
        ))}
      </a-marker>
    </>
  );
};

export default Scene;
