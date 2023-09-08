import React from "react";
import { Suspense, useRef } from "react";
import { Canvas, } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader'


const Keyboard = () => {

    const keyboard = useGLTF('keyboard/keyboard.glb')
    return (
        <group >
            <mesh>
                <hemisphereLight intensity={0.1} groundColor="black" />
                <pointLight intensity={0.1} position={[10, 1, 10]} />
                <spotLight intensity={0.5} position={[0, -10, 10]} />
                <spotLight intensity={0.1} position={[0, 10, -10]} />
                <primitive object={keyboard.scene} rotation-x={0.5} scale={1} />
            </mesh>
        </group>

    )
}
const Space_boi = () => {

    const keyboard = useGLTF('space_boi/scene.gltf')
    const meshRef = useRef()
    const handleClickScroll = () => {
        const element = document.getElementById('section-1');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    function onclick() {
        console.log("clicked");
    }
    return (
        <group >
            <mesh ref={meshRef} position={[0.1, -0.8, 0.1]} onWheel={handleClickScroll}>
                <hemisphereLight intensity={0.1} groundColor="black" />
                <pointLight intensity={0.1} position={[10, 1, 10]} />
                <spotLight intensity={0.5} position={[0, -10, 10]} />
                <spotLight intensity={0.1} position={[0, 10, -10]} />
                <primitive object={keyboard.scene} scale={0.3} />

            </mesh>
        </group>

    )
}

const KeyboardCanvas = () => {
    function handleScroll() {
        console.log("scrolling");
    }
    return (
        <div className="h-screen items-end" onScroll={handleScroll}>
            <Canvas
                frameloop="demand"
                shadows
                camera={{ position: [2, -1, 2], fov: 60 }}
                gl={{ preserveDrawingBuffer: true }}
            >
                <Suspense>

                    <OrbitControls enableZoom={false} autoRotate={true} enableRotate={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} dampingFactor={1} />
                    {/* <axesHelper args={[5]} /> */}
                    {/* <Environment preset="park" background={true}  /> */}

                    {/* <Keyboard /> */}
                    <Space_boi />

                </Suspense>
                <Preload all />

            </Canvas>
        </div>
    )
}
export default KeyboardCanvas;