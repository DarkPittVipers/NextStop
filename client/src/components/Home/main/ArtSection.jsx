import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import * as Three from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function ArtSection({ imageUrl }) {
  const mount = useRef(null);

  useEffect(() => {
    let width = mount.current.clientWidth;
    let height = width * 0.5625;

    const scene = new Three.Scene();

    const camera = new Three.PerspectiveCamera(75, 16 / 9, 0.1, 1000);
    const renderer = new Three.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor('#000000');

    camera.position.setZ(1.5);

    const getPixels = (url) => new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          context.drawImage(img, 0, 0);
          const pixelData = context.getImageData(0, 0, img.naturalWidth, img.naturalHeight);
          resolve(pixelData);
        } catch (e) {
          reject(e);
        }
      };
    });

    const addVoxel = (position = new Three.Vector3(), color = 0xFF00FF) => {
      const geometry = new Three.BoxGeometry(1, 1, 1);
      const material = new Three.MeshStandardMaterial({ color });
      material.roughness = 0.5;
      const voxel = new Three.Mesh(geometry, material);

      voxel.position.set(position.x, position.y, position.z);
      scene.add(voxel);
    };

    const buildImage = () => {
      getPixels(imageUrl)
        .then((pixelData) => {
          const { width: imageWidth, height: imageHeight, data } = pixelData;

          for (let i = 0; i < data.length; i += 4) {
            if (data[i + 3] > 127) {
              const r = data[i];
              const g = data[i + 1];
              const b = data[i + 2];

              // eslint-disable-next-line no-bitwise
              const color = (r << 16) + (g << 8) + b;

              const pixelX = (i / 4) % imageWidth;
              const pixelY = Math.floor((i / 4) / imageWidth);

              const worldSpaceX = pixelX - (imageWidth / 2) + 0.5;
              const worldSpaceY = (imageHeight / 2) - pixelY - 0.5;

              addVoxel(new Three.Vector3(worldSpaceX, worldSpaceY), color);
            }
          }

          const aspectRatio = imageWidth / imageHeight;
          const largerValue = aspectRatio > 1.75 ? imageWidth : imageHeight;
          camera.position.setZ(largerValue * 1.1);
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.error(err));
    };

    if (imageUrl) {
      buildImage();
    }

    const directionalLight = new Three.DirectionalLight(0xFFFFFF, 1);
    directionalLight.position.set(4, 5, 3);

    const ambientLight = new Three.AmbientLight(0x808080);
    scene.add(directionalLight, ambientLight);

    // const lightHelper = new Three.DirectionalLightHelper(directionalLight);
    // const gridHelper = new Three.GridHelper(128, 64);
    // const axesHelper = new Three.AxesHelper(5);
    // scene.add(axesHelper);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.minPolarAngle = Math.PI / 2 - Math.PI * 0.2;
    controls.maxPolarAngle = Math.PI / 2 + Math.PI * 0.2;
    controls.minAzimuthAngle = -1;
    controls.maxAzimuthAngle = 1;
    controls.rotateSpeed = 0.2;

    const renderScene = () => {
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      width = mount.current.clientWidth;
      height = width * 0.5625;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderScene();
    };

    const animate = () => {
      controls.update();

      renderScene();
      requestAnimationFrame(animate);
    };

    mount.current.appendChild(renderer.domElement);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      mount.current.removeChild(renderer.domElement);
    };
  }, [imageUrl]);

  return (
    <Container className="questionContainer" style={{ padding: 0 }}>

      <div ref={mount} />

    </Container>
  );
}

ArtSection.propTypes = {
  imageUrl: PropTypes.string
};

ArtSection.defaultProps = {
  imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png'
};
