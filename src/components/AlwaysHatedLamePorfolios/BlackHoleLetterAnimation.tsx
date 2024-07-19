import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import "./BlackHoleLetterAnimation.css";

const BlackHoleComp = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredMesh, setHoveredMesh] = useState<string | null>(null);

  class Star {
    public positionX: number;
    public positionY: number;
    public positionZ: number;
    public star: THREE.Mesh;
    private shape: THREE.SphereGeometry;
    private material: THREE.MeshBasicMaterial;

    constructor() {
      this.positionX = Math.random() * 400 - 200;
      this.positionY = Math.random() * 400 - 200;
      this.positionZ = Math.random() * 400 - 200;
      this.shape = new THREE.SphereGeometry(0.2, 32, 32);
      this.material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      this.star = new THREE.Mesh(this.shape, this.material);
      this.star.position.set(this.positionX, this.positionY, this.positionZ);
    }
  }

  useEffect(() => {
    let stars: Array<Star> = [];
    if (canvasRef.current) {
      const scene = new THREE.Scene();
      const initialColor = new THREE.Color("#afcaad");
      scene.background = initialColor;

      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 50;
      camera.position.y = 0;
      camera.position.x = 0;

      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      const blackHoleGroup = new THREE.Group();
      scene.add(blackHoleGroup);

      const blackHoleRadius = 4;
      const blackHoleSegments = 64;
      const blackHoleGeometry = new THREE.SphereGeometry(
        blackHoleRadius,
        blackHoleSegments,
        blackHoleSegments
      );
      const blackHoleMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          varying vec2 vUv;
          void main() {
            vec2 center = vec2(0.5, 0.5);
            float dist = distance(vUv, center);
            float alpha = smoothstep(0.5, 0.2, dist);
            vec3 color = mix(vec3(0.0), vec3(0.5, 0.0, 0.5), smoothstep(0.2, 0.5, dist));
            color += 0.05 * sin(dist * 50.0 - time * 2.0);
            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
      });
      const blackHole = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);
      blackHoleGroup.add(blackHole);

      const diskGeometry = new THREE.RingGeometry(
        blackHoleRadius,
        blackHoleRadius * 3,
        64
      );
      const diskMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          varying vec2 vUv;
      
          float noise(vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
          }
      
          void main() {
            float angle = atan(vUv.y - 0.5, vUv.x - 0.5);
            float dist = distance(vUv, vec2(0.5));
            
            vec3 baseColor = mix(vec3(0.1, 0.05, 0.3), vec3(0.7, 0.3, 0.1), smoothstep(0.33, 0.47, dist));
            
            float noiseValue = noise(vUv * 10.0 + time * 0.1);
            baseColor += noiseValue * 0.1;
            
            baseColor += 0.05 * sin(dist * 30.0 - time + angle * 5.0);
      
            float alpha = smoothstep(0.33, 0.35, dist) * (1.0 - smoothstep(0.45, 0.47, dist));
            
            float glow = exp(-dist * 5.0) * 0.2;
            baseColor += vec3(glow);
      
            gl_FragColor = vec4(baseColor, alpha);
          }
        `,
        side: THREE.DoubleSide,
        transparent: true,
        blending: THREE.AdditiveBlending,
      });
      const accretionDisk = new THREE.Mesh(diskGeometry, diskMaterial);
      accretionDisk.rotation.x = Math.PI / 4;
      blackHoleGroup.add(accretionDisk);

      const linkedInTexture = new THREE.TextureLoader().load(
        "./src/assets/linkedInOrbit.png"
      );
      const linkedIn = new THREE.BoxGeometry(2, 2, 2);
      const materialLinkedIn = new THREE.MeshBasicMaterial({
        map: linkedInTexture,
      });
      const linkedInCube = new THREE.Mesh(linkedIn, materialLinkedIn);
      linkedInCube.name = "linkedin";
      linkedInCube.position.set(-10, 0, 0);
      scene.add(linkedInCube);

      const githubTexture = new THREE.TextureLoader().load(
        "./src/assets/githubOrbit.png"
      );
      const githubBox = new THREE.BoxGeometry(2, 2, 2);
      const githubMaterial = new THREE.MeshBasicMaterial({
        map: githubTexture,
      });
      const githubMesh = new THREE.Mesh(githubBox, githubMaterial);
      githubMesh.name = "github";
      githubMesh.position.set(10, 0, 0); 
      scene.add(githubMesh);
      blackHoleGroup.add(githubMesh);
      blackHoleGroup.add(linkedInCube);

      blackHoleGroup.position.y = -13; 

      for (let i = 0; i < 2000; i++) {
        let star = new Star();
        stars.push(star);
        scene.add(star.star);
      }

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(0, 1, 0);
      scene.add(directionalLight);

      const controls = new OrbitControls(camera, canvasRef.current);
      controls.enableDamping = true;
      controls.enableRotate = true;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;

      let scrollProgress = 0;
      let time = 0;

      const handleScroll = () => {
        scrollProgress =
          window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        scrollProgress = Math.min(Math.max(scrollProgress, 0), 1);
        const backGroundScroll = Math.min(scrollProgress * 2.4, 1);

        const transitionColor = new THREE.Color().lerpColors(
          initialColor,
          new THREE.Color(0, 0, 0),
          backGroundScroll
        );
        scene.background = transitionColor;
        document.body.style.backgroundColor = transitionColor.getStyle();

        const nameLandingPage = document.getElementById("landing_name_intro");
        const greetingLandingPage = document.getElementById("landing_p_intro");
        if (nameLandingPage && greetingLandingPage) {
          const textColor = new THREE.Color().lerpColors(
            new THREE.Color(0, 0, 0),
            new THREE.Color(1, 1, 1),
            backGroundScroll
          );
          nameLandingPage.style.color = textColor.getStyle();
          greetingLandingPage.style.color = textColor.getStyle();
        }
      };
      const updateObjectPositions = (progress: number) => {
        const maxRightPosition = window.innerWidth / 8;
        const targetX = progress * maxRightPosition;
        blackHoleGroup.position.x = targetX;
      
        linkedInCube.position.x = -10 - progress * 20;
        githubMesh.position.x = 10 + progress * 20;
      };

      const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      
        updateObjectPositions(scrollProgress);
      };
      
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", onWindowResize);

      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      const onMouseMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        setMousePosition({ x: event.clientX, y: event.clientY });
      };

      const onClick = () => {
        if (hoveredMesh === "linkedin") {
          window.open("https://www.linkedin.com", "_blank");
        } else if (hoveredMesh === "github") {
          window.open("https://www.github.com", "_blank");
        }
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("click", onClick);

      const animate = () => {
        requestAnimationFrame(animate);
      
        time += 0.01;
      
        (blackHoleMaterial as THREE.ShaderMaterial).uniforms.time.value = time;
        (diskMaterial as THREE.ShaderMaterial).uniforms.time.value = time;
      
        const scale = Math.max(1 - scrollProgress * 0.5, 0.5);
        blackHole.scale.set(scale, scale, scale);
        accretionDisk.scale.set(scale, scale, scale);
      
        const rotationSpeed = 0.005;
        accretionDisk.rotation.z += rotationSpeed * 2;
      
        updateObjectPositions(scrollProgress);
        accretionDisk.rotation.z += rotationSpeed * 2;
      
        const maxRightPosition = window.innerWidth / 8;
        const targetX = scrollProgress * maxRightPosition;
        blackHoleGroup.position.x += (targetX - blackHoleGroup.position.x) * 0.05;
      
        linkedInCube.position.x = -10 - scrollProgress * 20;
        githubMesh.position.x = 10 + scrollProgress * 20;
      
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects([linkedInCube, githubMesh]);
      
        if (intersects.length > 0) {
          const intersectedObject = intersects[0].object;
          setHoveredMesh(intersectedObject.name);
          intersectedObject.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
          document.body.style.cursor = "pointer";
        } else {
          setHoveredMesh(null);
          document.body.style.cursor = "default";
          linkedInCube.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
          githubMesh.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
        }
      
        controls.update();
        renderer.render(scene, camera);
      };
      
      animate();

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", onWindowResize);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("click", onClick);
      };
    }
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="webgl" />
      {hoveredMesh && (
        <div
          style={{
            position: "absolute",
            left: mousePosition.x + 10,
            top: mousePosition.y + 10,
            background: "rgba(0, 0, 0, 0.7)",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            pointerEvents: "none",
          }}
        >
          {hoveredMesh === "linkedin" ? "Visit LinkedIn" : "Visit GitHub"}
        </div>
      )}
    </>
  );
};

export default BlackHoleComp;
