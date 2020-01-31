/* eslint-disable */
import React from 'react';

// import ShaderLoader from './shaderLoader';
import { fragment, vertex } from './shaders';

const TARGET_ID = 'spray';
const LOADED_CLASS = 'loaded';
let mat;
let mesh;
let w = window.innerWidth;
let h = window.innerHeight;
let renderer;
let spray;
let plane;
let camera;
let clock;
let scene;
let arToolkitSource, arToolkitContext;
let markerRoot;

const setUp = () => {
  // Declares THREE Animation properties ------------------------
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  spray = document.getElementById(TARGET_ID);

  renderer.setSize(w, h);
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  spray.appendChild(renderer.domElement);

  plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(1, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
  plane.material.visible = false;
  plane.position.z = 11;

  camera = new THREE.OrthographicCamera(-w / 2, w / 2, h / 2, -h / 2, 0.00001, 1000); // left, right, top, bottom
  camera.position.z = 500;

  const white = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const geo = new THREE.PlaneBufferGeometry(1, 1, 1, 1); // -.5 to .5 on XY
  mesh = new THREE.Mesh(geo, white);
  mesh.scale.set(w, h, 1);

  scene = new THREE.Scene();
  scene.add(camera);
  scene.add(plane);
  scene.add(mesh);

  clock = new THREE.Clock();

  mat = new THREE.ShaderMaterial({
    vertexShader: vertex,
    fragmentShader: fragment,
    uniforms: {
      resolution: {
        type: 'v2',
        value: new THREE.Vector2(w, h),
      },
      time: {
        type: 'f',
        value: 0,
      },
      color1: {
        typee: 'cv',
        value: [new THREE.Color(0xff004e), new THREE.Color(0xffb04b), new THREE.Color(0xa73ff4)],
      },
      color2: {
        typee: 'cv',
        value: [new THREE.Color(0x5c3fdc), new THREE.Color(0x6cdcac), new THREE.Color(0xfadb00)],
      },
      tint: { type: 'f', value: 0 },
    },
  });

  mesh.material = mat;

    // ------------------ NEW -----------------------
	arToolkitSource = new THREEx.ArToolkitSource({
		sourceType : 'webcam',
  });

	arToolkitSource.init(function onReady(){
		resize();
  });
	// create atToolkitContext
	arToolkitContext = new THREEx.ArToolkitContext({
		cameraParametersUrl: 'data/camera_para.dat',
		detectionMode: 'mono'
	});

	// copy projection matrix to camera when initialization complete
	arToolkitContext.init( function onCompleted(){
		camera.projectionMatrix.copy( arToolkitContext.getProjectionMatrix() );
	});

	// build markerControls
	markerRoot = new THREE.Group();
  scene.add(markerRoot);

	let markerControls = new THREEx.ArMarkerControls(arToolkitContext, markerRoot, {
		type: 'pattern', patternUrl: "data/hiro.patt",
	})

	markerRoot.add(mesh);
  // ------------------ NEW -----------------------

  resize();

  clock.start();
  spray.classList.add(LOADED_CLASS);
};

const resize = () => {
  w = window.innerWidth;
  h = window.innerHeight;

  renderer.setSize(w, h);

  camera.top = h / 2;
  camera.bottom = -h / 2;
  camera.left = -w / 2;
  camera.right = w / 2;
  camera.updateProjectionMatrix();

  if (mesh) {
    mesh.scale.set(w, h, 1);
    mat.uniforms.resolution.value.set(w, h);
  }

  arToolkitSource.onResize();
  arToolkitSource.copySizeTo(renderer.domElement);

  if (arToolkitContext.arController !== null) {
    arToolkitSource.copySizeTo(arToolkitContext.arController.canvas);
  }
};

const animate = function() {
	requestAnimationFrame(animate);

	if (mat) mat.uniforms.time.value = clock.getElapsedTime();
	if (arToolkitSource.ready !== false) arToolkitContext.update(arToolkitSource.domElement);

	renderer.render(scene, camera);
};

const init = () => {
  setUp();
  animate();

  window.addEventListener('resize', resize, false);
};

class Spray extends React.Component {
  componentDidMount() {
    init();
  }

  render () {
    return <div id="spray"></div>;
  }
}

export default Spray;
