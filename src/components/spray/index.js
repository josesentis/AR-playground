/* eslint-disable */
import React from 'react';

import { fragment, vertex } from './shaders';

const TARGET_ID = 'spray';
let scene, camera, renderer, clock, deltaTime, totalTime;
let arToolkitSource, arToolkitContext;
let markerRoot1;
let material1, mesh1;

function onResize() {
  arToolkitSource.onResize()
  arToolkitSource.copySizeTo(renderer.domElement)
  if (arToolkitContext.arController !== null) {
    arToolkitSource.copySizeTo(arToolkitContext.arController.canvas)
  }
}

function initialize() {
  scene = new THREE.Scene();

  let ambientLight = new THREE.AmbientLight(0xcccccc, 0.5);
  scene.add(ambientLight);

  camera = new THREE.Camera();
  scene.add(camera);

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  renderer.setClearColor(new THREE.Color('lightgrey'), 0)
  renderer.setSize(640, 480);
  renderer.domElement.style.position = 'absolute'
  renderer.domElement.style.top = '0px'
  renderer.domElement.style.left = '0px'
  document.body.appendChild(renderer.domElement);

  clock = new THREE.Clock();
  deltaTime = 0;
  totalTime = 0;

  ////////////////////////////////////////////////////////////
  // setup arToolkitSource
  ////////////////////////////////////////////////////////////

  arToolkitSource = new THREEx.ArToolkitSource({
    sourceType: 'webcam',
  });

  arToolkitSource.init(function onReady() {
    onResize()
  });

  ////////////////////////////////////////////////////////////
  // setup arToolkitContext
  ////////////////////////////////////////////////////////////

  // create atToolkitContext
  arToolkitContext = new THREEx.ArToolkitContext({
    cameraParametersUrl: 'data/camera_para.dat',
    detectionMode: 'mono'
  });

  // copy projection matrix to camera when initialization complete
  arToolkitContext.init(function onCompleted() {
    camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
  });

  ////////////////////////////////////////////////////////////
  // setup markerRoots
  ////////////////////////////////////////////////////////////

  // build markerControls
  markerRoot1 = new THREE.Group();
  scene.add(markerRoot1);
  let markerControls1 = new THREEx.ArMarkerControls(arToolkitContext, markerRoot1, {
    type: 'pattern', patternUrl: "data/hiro.patt",
  })

  let geometry1 = new THREE.PlaneBufferGeometry(1, 1, 4, 4);

  let loader = new THREE.TextureLoader();
  let texture = loader.load('images/color-grid.png', render);

  material1 = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 1.0 },
      baseTexture: { value: texture }
    },
    vertexShader: vertex,
    fragmentShader: fragment
  });

  mesh1 = new THREE.Mesh(geometry1, material1);
  mesh1.rotation.x = -Math.PI / 2;

  markerRoot1.add(mesh1);
}

function update() {
  // update artoolkit on every frame
  if (arToolkitSource.ready !== false)
    arToolkitContext.update(arToolkitSource.domElement);

  material1.uniforms.time.value += deltaTime;
}

function render() {
  renderer.render(scene, camera);
}

const animate = function () {
  requestAnimationFrame(animate);
  deltaTime = clock.getDelta();
  totalTime += deltaTime;
  update();
  render();
};

const init = () => {
  initialize();
  animate();

  window.addEventListener('resize', onResize, false);
};


class Spray extends React.Component {
  componentDidMount() {
    init();
  }

  render() {
    return (<div id="spray"></div>);
  }
}

export default Spray;
