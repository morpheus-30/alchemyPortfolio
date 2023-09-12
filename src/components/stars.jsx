import React, { useMemo } from "react";
import { Suspense, useRef } from "react";
import { Canvas, } from "@react-three/fiber";
import { OrbitControls, Preload, Stars, useGLTF } from "@react-three/drei";
// import CanvasLoader from '../Loader'



function Star({ src, position }) {
    const model = useGLTF("stars.glb")
    return <mesh>
        <hemisphereLight intensity={0.1} groundColor="black" />
        <pointLight intensity={0.1} position={[10, 1, 10]} />
        <spotLight intensity={0.5} position={[0, -10, 10]} />
        <spotLight intensity={0.1} position={[0, 10, -10]} />

        <primitive object={model.scene} position={position} scale={0.5} />
    </mesh>
}

const StarsCanvas = () => {
    return (


        <div className="h-screen items-end" id="section-1">
            <div className="flex absolute h-screen w-screen z-8">
                <Canvas
                    frameloop="demand"
                    shadows
                    camera={{ position: [0, 4, 7], fov: 100 }}
                    gl={{ preserveDrawingBuffer: true }}
                >
                    <Star position={[0,0,0]} />


                    <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} dampingFactor={1} autoRotate={true} />
                    {/* <axesHelper /> */}
                    <Preload all />

                </Canvas>
            </div>
        </div>


    )
}
export default StarsCanvas;