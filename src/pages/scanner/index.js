import React, { useEffect, useState } from 'react';

// import ImageScene from '../../components/imageScene';
import CustomScene from '../../components/customScene';
// import HiroScene from '../../components/hiroScene';
// import TextScene from '../../components/textScene';

import '../../styles.css';
import poster from './poster.png';

const Scanner = () => {
  const [loaded, setLoaded] = useState(false);
  // const [src, setSrc] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
      // setSrc(poster);
    }, 1000);

    return () => clearTimeout(timer);
  });

  if (!loaded) return <p>Loading...</p>;

  return (
    <div className="scene">
      <a-scene embedded arjs='trackingMethod: best;'>
        {/* <ImageScene src={src} /> */}
        {/* <HiroScene /> */}
        <CustomScene />
        {/* <TextScene /> */}
        <a-camera-static />
      </a-scene>
    </div>
  );
};

export default Scanner;