import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import "./BlackHoleLetterAnimation.css";
import "./BlackHoleLetterAnimation.css";

const BlackHoleComp = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  //STARS CLASS ---------------------->

  class Star {
    public positionX: number;
    public positionY: number;
    public positionZ: number;
    public star: THREE.Mesh;
    private shape: THREE.SphereGeometry;
    private material: THREE.MeshBasicMaterial;


    constructor() {
      this.positionX = Math.floor(Math.random() * 50 - 25);
      this.positionY = Math.floor(Math.random() * 50 - 25);
      this.positionZ = Math.floor(Math.random() * 50 - 25);
      this.shape = new THREE.SphereGeometry(0.1, 32, 32);
      this.material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      this.star = new THREE.Mesh(this.shape, this.material);
    }

    update(): void {
      if (!this.isInBounds()) {
        this.createRandomPosition();
      }
    }

    private isInBounds(): boolean {
      if (
        this.positionX > 50 ||
        this.positionX < -50 ||
        this.positionY > 50 ||
        this.positionY < -50 ||
        this.positionZ > 50 ||
        this.positionZ < -50
      ) {
        return false;
      } else {
        return true;
      }
    }
    private createRandomPosition() {
      let x = Math.random() * window.innerHeight;
      let y = Math.random() * window.innerWidth;
      let z = Math.random() * Math.sqrt(window.innerWidth);

      this.positionX = x;
      this.positionY = y;
      this.positionZ = z;
    }
  }

  useEffect(() => {
    let stars: Array<Star> = [];
    if (canvasRef.current) {
      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      const scene = new THREE.Scene();
      const initialColor = new THREE.Color("#afcaad");
      scene.background = initialColor;

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

      // Store the initial camera position outside the handleScroll function
      const initialCameraPosition = camera.position.clone();

      const maxDisplacement = 100;

      const handleScroll = () => {
        const scrollProgress = window.scrollY / 150; // Calculate the scroll progress as a value between 0 and 1

        // Limit the scroll progress to a range between 0 and 1
        const clampedScrollProgress = Math.min(Math.max(scrollProgress, 0), 10);

        const transitionColor = new THREE.Color().lerpColors(
          initialColor,
          new THREE.Color(0, 0, 0),
          clampedScrollProgress
        );

        scene.background = transitionColor;
        document.body.style.backgroundColor = transitionColor.getStyle(); // Set body background color

        const nameLandingPage = document.getElementById("landing_name_intro");
        const greetingLandingPage = document.getElementById("landing_p_intro");

        if (nameLandingPage && greetingLandingPage) {
          const textColor = new THREE.Color().lerpColors(
            new THREE.Color(0, 0, 0),
            new THREE.Color(1, 1, 1),
            clampedScrollProgress
          );
          nameLandingPage.style.color = textColor.getStyle();
          greetingLandingPage.style.color = textColor.getStyle();
        }

        // Calculate the new position of the camera based on scroll progress and screen size
        let newX =
          initialCameraPosition.x -
          clampedScrollProgress * 6 * (window.innerWidth / window.innerHeight);
        const newY =
          initialCameraPosition.y -
          clampedScrollProgress * (window.innerWidth / window.innerHeight);
        const newZ = initialCameraPosition.z;

        // Calculate the desired position of the div based on scroll progress and window dimensions
        const desiredX = window.innerWidth / 6; // X coordinate relative to the window width
        const desiredY = window.innerHeight * 0.1; // Y coordinate relative to the window height

        // Calculate the translation amount based on the initial position and desired position
        const translateX = desiredX * scrollProgress;
        const translateY = desiredY * scrollProgress;

        // Apply the translation to the div if it exists
        if (nameLandingPage) {
          nameLandingPage.style.transform = `translate(${-translateX}px, ${translateY}px)`;
        }

        const displacementOrbit = newX - initialCameraPosition.x;

        if (displacementOrbit > maxDisplacement) {
          newX = displacementOrbit - initialCameraPosition.x;
        }

        camera.position.set(newX, newY, newZ);
      };

      // Add event listener for window resize

      // Call handleScroll initially to set the initial positions
      handleScroll();

      window.addEventListener("scroll", handleScroll);

      const sphere = new THREE.SphereGeometry(4, 64, 64);
      const sphereMaterial = new THREE.MeshStandardMaterial({
        color: "#ffffff",
        roughness: 1,
        metalness: -0.3,
      });

      const mesh = new THREE.Mesh(sphere, sphereMaterial);
      scene.add(mesh);

      const linkedInTexture = new THREE.TextureLoader().load(
        "./src/assets/linkedInOrbit.png"
      );
      const linkedIn = new THREE.BoxGeometry(1, 1, 1);
      const materialLinkedIn = new THREE.MeshBasicMaterial({
        map: linkedInTexture,
      });
      const linkedInCube = new THREE.Mesh(linkedIn, materialLinkedIn);
      scene.add(linkedInCube);

      const githubTexture = new THREE.TextureLoader().load(
        "./src/assets/githubOrbit.png"
      );
      const githubBox = new THREE.BoxGeometry(1, 1, 1);
      const githubMaterial = new THREE.MeshBasicMaterial({
        map: githubTexture,
      });
      const githubMesh = new THREE.Mesh(githubBox, githubMaterial);
      scene.add(githubMesh);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Set light color to white (0xffffff) and intensity to 1
      directionalLight.position.set(0, 1, 0); // Set position to shine from above (0, 1, 0)
      scene.add(directionalLight);

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
      const axesHelper = new THREE.AxesHelper(5);
      scene.add(axesHelper);
      controls.enableDamping = true;
      controls.enableRotate = false
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.autoRotate = true;
      controls.rotateSpeed = 5;

      //grid helper---------------------------
      {
        /*
        
      const size = 40;

      const divisions = 40;

      const gridHelper = new THREE.GridHelper(size, divisions);
      scene.add(gridHelper);
    
      */
      }
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
      for (let i = 0; i < 100; i++) {
        let star = new Star();
        star.star.position.setX(star.positionX);
        star.star.position.setY(star.positionY);
        star.star.position.setZ(star.positionZ);
        stars.push(star);
        scene.add(stars[i].star);
      }

      const loop = () => {
        window.requestAnimationFrame(loop);

        t += 0.01;
        t2 -= 0.019;

        for (let i = 0; i < stars.length; i++) {
          let star = stars[i];
          star.positionZ += i / 15;
          star.star.position.setZ(star.positionZ);
          if (star.positionZ > 50) {
            star.positionZ -= 1000;
            star.star.position.setZ(star.positionZ);
          }
        }

        linkedInCube.rotation.y += 0.01;
        githubMesh.rotation.y += 0.01;

        meshRing.rotation.y -= 0.01;
        meshRing2.rotation.y += 0.019;

        githubMesh.position.x = 10 * Math.cos(t) + 0;
        githubMesh.position.z = 10 * Math.sin(t) + 0;

        linkedInCube.position.x = 5 * Math.cos(t2) + 0;
        linkedInCube.position.z = 5 * Math.sin(t2) + 0;

        renderer.render(scene, camera);
      };
      loop();
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return <canvas ref={canvasRef} className='webgl' />;
};

export default BlackHoleComp;
