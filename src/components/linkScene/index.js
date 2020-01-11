import React from "react";

const Scene = ({ content }) => {
  return (
    <>
      <a-marker preset="hiro">
{/*        <a-text
          color="black"
          position="0 0 0.5"
          rotation="-90 0 0"
          value="Cick me!"
          mylink="href: http://www.google.com;"
></a-text> */}
        <a-link
          color="black"
          position="0 0 0"
          rotation="-90 0 0"
          title="Click me!"
          href="http://www.google.com"
          src="http://www.google.com"
        ></a-link>
      </a-marker>
    </>
  );
};

export default Scene;
