import React from "react";
import Helmet from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <script src="https://aframe.io/releases/0.6.0/aframe.min.js"></script>
        <script src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"></script>
      </Helmet>
    </div>
  );
}

export default App;
