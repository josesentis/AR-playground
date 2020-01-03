import React, { useEffect, useState } from 'react';

import ImageScene from '../../components/imageScene';
import KanjiScene from '../../components/kanjiScene';
// import HiroScene from '../../components/hiroScene';
// import TextScene from '../../components/textScene';

import poster from './poster.png';
import '../../styles.css';

const Scanner = () => {
  const [loaded, setLoaded] = useState(false);
  const [src, setSrc] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
      setSrc(poster);
    }, 1000);

    return () => clearTimeout(timer);
  });

  if (!loaded) return <p>Loading...</p>;

  return (
    <div className="scene">
      <a-scene embedded arjs='trackingMethod: best;'>
        <ImageScene src={src} />
        {/* <HiroScene /> */}
        <KanjiScene />
        {/* <TextScene /> */}
        <a-camera-static />
      </a-scene>
    </div>
  );
};

export default Scanner;