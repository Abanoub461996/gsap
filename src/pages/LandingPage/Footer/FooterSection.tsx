import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

gsap.registerPlugin(ScrollTrigger);

const MorphingShape: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);


  function createGeometry() {
    const geometry = new THREE.BoxGeometry(2, 2, 2, 32, 32, 32);

    geometry.morphAttributes.position = [];

    const positionAttribute = geometry.attributes.position;

    const spherePositions = [];
    const twistPositions: number[] = [];
    const direction = new THREE.Vector3(1, 0, 0);
    const vertex = new THREE.Vector3();

    for (let i = 0; i < positionAttribute.count; i++) {
      const x = positionAttribute.getX(i);
      const y = positionAttribute.getY(i);
      const z = positionAttribute.getZ(i);

      spherePositions.push(
        x * Math.sqrt(1 - (y * y) / 2 - (z * z) / 2 + (y * y * z * z) / 3),
        y * Math.sqrt(1 - (z * z) / 2 - (x * x) / 2 + (z * z * x * x) / 3),
        z * Math.sqrt(1 - (x * x) / 2 - (y * y) / 2 + (x * x * y * y) / 3)
      );

      vertex.set(x * 2, y, z);
      vertex
        .applyAxisAngle(direction, (Math.PI * x) / 2)
        .toArray(twistPositions, twistPositions.length);
    }

    geometry.morphAttributes.position[0] = new THREE.Float32BufferAttribute(
      spherePositions,
      3
    );
    geometry.morphAttributes.position[1] = new THREE.Float32BufferAttribute(
      twistPositions,
      3
    );

    return geometry;
  }

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x8fbcd4);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      20
    );
    camera.position.z = 10;
    scene.add(camera);

    scene.add(new THREE.AmbientLight(0x8fbcd4, 1.5));
    const pointLight = new THREE.PointLight(0xffffff, 200);
    camera.add(pointLight);

    const geometry = createGeometry();

    const material = new THREE.MeshPhongMaterial({
      color: 0xff0000,
      flatShading: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    mesh.morphTargetInfluences = [0, 0];

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current?.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
    gsap.to(mesh.morphTargetInfluences, {
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: () => {
          renderer.render(scene, camera); 
        },
      },
      0: 1, 
    });

    return () => {
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div  ref={wrapperRef} style={{ height: "400vh", position: "relative" }}>
      <div
        ref={containerRef}
        style={{ width: "100%", height: "100vh", position: "sticky", top: 0 }}
      />
    </div>
  );
};

export default MorphingShape;
