import React, { useEffect, useState } from 'react';

// import ImageScene from '../../components/imageScene';
import KanjiScene from '../../components/kanjiScene';

import poster from './poster.png';

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
    <div>
      {/* <ImageScene src={src} /> */}
      <KanjiScene />
    </div>
  );
};

export default Scanner;