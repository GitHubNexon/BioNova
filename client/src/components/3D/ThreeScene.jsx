import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { Box3, Vector3 } from "three";

const Lighting = () => (
  <>
    <ambientLight intensity={0.6} /> 
    <directionalLight position={[5, 5, 5]} intensity={0.7} castShadow />
    <pointLight position={[10, 10, 10]} intensity={1} />
    <spotLight position={[0, 10, 0]} angle={0.15} penumbra={1} intensity={2} castShadow />
  </>
);

const Model = ({ url, textureUrl }) => {
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, scene);
 
  const [diffuse, normal, roughness] = useTexture(textureUrl);

  React.useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]]?.play();
    }
  }, [actions]);

  scene.traverse((child) => {
    if (child.isMesh) {
      // Apply different textures to different materials or parts of the model
      child.material.map = diffuse;
      child.material.normalMap = normal;
      child.material.roughnessMap = roughness;
      child.material.needsUpdate = true;
    }
  });


  scene.position.set(0, 0, 0); 
  return <primitive object={scene} scale={[10, 10, 10]} />;
};

const ThreeScene = () => {
  const modelPath = "https://raw.githubusercontent.com/GitHubNexon/3D-Models/main/mech_drone/scene.gltf";
  const texturePath = [
    "https://raw.githubusercontent.com/GitHubNexon/3D-Models/main/mech_drone/textures/Robot_diffuse.jpeg", 
    "https://raw.githubusercontent.com/GitHubNexon/3D-Models/main/mech_drone/textures/Robot_emissive.jpeg", 
    "https://raw.githubusercontent.com/GitHubNexon/3D-Models/main/mech_drone/textures/Robot_normal.jpeg"
  ];
  return (
    <div className="relative w-full h-screen overflow-hidden cursor-grab m-auto">
      <Canvas
        camera={{ position: [-1, 10, -10], fov: 50 }}
        style={{ width: '100%', height: '100%' }} 
      >
        <Lighting />
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minDistance={5}
          maxDistance={20}
        />
        <Environment preset="sunset" />
        <Suspense fallback={null}>
          <Model url={modelPath} textureUrl={texturePath} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
