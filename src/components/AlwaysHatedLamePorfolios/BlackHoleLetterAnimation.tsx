import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import "./BlackHoleLetterAnimation.css";

const BlackHoleComp = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      const scene = new THREE.Scene();
      scene.background = new THREE.Color("#afcaad");
      const sphere = new THREE.SphereGeometry(4, 64, 64);
      const sphereMaterial = new THREE.MeshStandardMaterial({
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      });
      
      const mesh = new THREE.Mesh(sphere, sphereMaterial);
      scene.add(mesh);

      const linkedInTexture = new THREE.TextureLoader().load('./src/assets/linkedInOrbit.png')
      const linkedIn = new THREE.BoxGeometry(1, 1, 1);
      const materialLinkedIn = new THREE.MeshBasicMaterial({
        map: linkedInTexture,
      });
      const linkedInCube = new THREE.Mesh(linkedIn, materialLinkedIn);
      linkedInCube.position.set(6, 6, 0);
      scene.add(linkedInCube);


      const githubTexture = new THREE.TextureLoader().load('./src/assets/githubOrbit.png')
      const githubBox = new THREE.BoxGeometry(1, 1, 1);
      const githubMaterial = new THREE.MeshBasicMaterial({
        map: githubTexture,
      });
      const githubMesh = new THREE.Mesh(githubBox, githubMaterial);
      scene.add(githubMesh);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Set light color to white (0xffffff) and intensity to 1
      directionalLight.position.set(0, 1, 0); // Set position to shine from above (0, 1, 0)
      scene.add(directionalLight);
      

      const camera = new THREE.PerspectiveCamera(
        20,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 40;
      camera.position.y = -100;
      camera.position.x = 20;
      scene.add(camera);

      const geometryRing = new THREE.RingGeometry(10.1, 10.2, 32);
      const materialRing = new THREE.MeshBasicMaterial({
        color: 0xfffff,
        side: THREE.DoubleSide,
      });
      const meshRing = new THREE.Mesh(geometryRing, materialRing);

      const geometryRing2 = new THREE.RingGeometry(5.1, 5.2, 32);
      const materialRing2 = new THREE.MeshBasicMaterial({
        color: 0xfffff,
        side: THREE.DoubleSide,
      });
      const meshRing2 = new THREE.Mesh(geometryRing2, materialRing2);
      scene.add(meshRing);
      scene.add(meshRing2);

      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
      const controls = new OrbitControls(camera, canvasRef.current);

      controls.enableDamping = true;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.autoRotate = true;
      controls.rotateSpeed = 5;

      //grid helper---------------------------
    {/*
      const size = 40;

      const divisions = 40;

      const gridHelper = new THREE.GridHelper(size, divisions);
      scene.add(gridHelper);
    */}
      //grid helper---------------------------

      window.addEventListener("resize", () => {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(2);
      });
      let t: number = 0;
      let t2: number = 0;
      const loop = () => {
        window.requestAnimationFrame(loop);
        
        t += .02;
        t2 += .026;

        linkedInCube.rotation.y += 0.0;
        githubMesh.rotation.x += 0.0;

        meshRing.rotation.y -= 0.02;
        meshRing2.rotation.z -= 0.026;


        githubMesh.position.x = 10 * Math.cos(t) + 0;
        githubMesh.position.z = 10 * Math.sin(t) + 0;


        linkedInCube.position.y = 5 * Math.sin(t) + 0;
        linkedInCube.position.x = 5 * Math.cos(t) + 0;

        renderer.render(scene, camera);
      };
      loop();
    }
  }, []);

  return <canvas ref={canvasRef} className='webgl' />;
};

export default BlackHoleComp;
