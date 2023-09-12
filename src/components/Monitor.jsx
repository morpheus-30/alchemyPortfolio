import React, { useMemo } from "react";
import { Suspense, useRef } from "react";
import { Canvas, } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

function Monitor({ src, position }) {
    const model = useGLTF(src)
    const scene = React.useMemo(() => model.scene.clone(true), [model]);
    return <mesh>
        {/* <axesHelper /> */}
        <primitive object={scene} position={position} scale={2} />
    </mesh>
}


function ThreeMonitors() {
    return (
        <group rotation={[0.4, 9.43, 0]} scale={3} position={[0, -1, 0]}>
            <React.Suspense >
                {/* <Monitor src="laptop.glb" position={[-1.5, 0, -0.5]} /> */}
                <Monitor src="laptop.glb" position={[-1, -0.5, -1]} />
                {/* <Monitor src="laptop.glb" position={[0.5, 0, -0.5]} /> */}
            </React.Suspense>
        </group>
    );
}


const MonitorCanvas = (props) => {

    return (


        <div className="h-screen items-end" id="section-1">
            <Canvas
                frameloop="demand"
                shadows
                camera={{ position: [0, 4, 7], fov: 60 }}
                gl={{ preserveDrawingBuffer: true }}
                onClick={props.onClick}
            >
                <ThreeMonitors />

                {/* <ambientLight intensity={1} /> */}


                <spotLight position={[0, 0, -5]} />
                {/* <spotLight position={[0, 0, 5]} /> */}
                {/* <spotLight position={[5, 5, 5]} /> */}
                <spotLight position={[-5, -5, -5]} />

                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} dampingFactor={1} />
                {/* <axesHelper /> */}
                <Preload all />x

            </Canvas>
        </div>


    )
}
export default MonitorCanvas;