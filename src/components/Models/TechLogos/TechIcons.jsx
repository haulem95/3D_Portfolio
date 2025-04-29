import React from 'react'
import { Environment, Float, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
const TechIcons = ( { model }) => {

    const scene = useGLTF(model.modelPath);
  return (
    <Canvas>
        <ambientLight intensity={0.3} />
        <Environment preset='city'/>
        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
            <group scale={model.scale}>
                <primitive object={scene.scene} />
            </group>
        </Float>
    </Canvas>
  )
}

export default TechIcons