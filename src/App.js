import * as THREE from 'three'
import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { Bvh, Instances, Clone, OrbitControls, Environment, useGLTF, Html } from '@react-three/drei'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useControls } from 'leva'
import { Slider } from 'antd'
import Model from './Model'
import { Placeholder } from './Placeholder'
/* import {data} from "./store" */

// using Drei helpers, getting used to R3f envi

export default function App() {
  const positions = [
    [0, -6.4, 0],
    [0, 0, 0],
    [0, 6.4, 0],
    [0, 12.8, 0],
    [0, 19.2, 0],
  ];
// load model
  const bldg = useGLTF('/panelEdited.glb')
  const [flr, set] = useState(0)
  const [model, setModel] = useState([]);
  // debug ui
  /* const { range } = useControls({ range: { value: 3, min: 1, max: 3, step: 1 } }) */

  const addFloor = () => {
    if (flr < positions.length) {
      const currentPosition = positions[flr];
      setModel((prevObj) => [
        ...model,
        <Clone
          key={flr}
          object={bldg.scene}
          scale={0.069}
          position={currentPosition}
          castShadows
          rotation={[0, 9.43, 0]}
          />
      ])
      console.log(model)
      set((prev)=> prev + 1)
    }
  }
  const removeFloor = () => {
      setModel((prev) => [
        ...prev.slice(1)
      ])
    console.log(model)
  }
  /* const controls = useThree((state) => state.controls) - only used inside a canvas component */

  return (
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
        <ambientLight intensity={0.5 * Math.PI} />
        <directionalLight intensity={0.3} position={[5, 25, 20]} />
        <Bvh firstHitOnly>
          <Suspense fallback={<Placeholder/>}>
          <Instances range={flr}>
            <boxGeometry />
            <meshStandardMaterial />
            {model.map(( mod, i) => (
              <group key={i}>
                {mod}
              </group>
            ))}
          </Instances>
          <Clone
          object={bldg.scene}
          scale={0.069}
          position={[-6.1, -12.8, -13]}
          castShadow
          />
          </Suspense>
        </Bvh>
        {/* mixing with an external html */}
        <Html occlude distanceFactor={1.5} position={[-3, -20, 0]} transform>
          <div className='container'>
          <button
            className='btn'
            type="button"
            /* onChange={(value) => ((controls.enabled = false), set(value))}
            onAfterChange={() => (controls.enabled = true)} */
            onClick={addFloor}
          >
          Add floor
          </button>
          <button
            className='btn'
            type="button"
            /* onChange={(value) => ((controls.enabled = false), set(value))}
            onAfterChange={() => (controls.enabled = true)} */
            onClick={()=> removeFloor()}
          >
          Remove floor
          </button>
          </div>
      </Html>
        <Environment preset="city" />
        <OrbitControls autoRotateSpeed={1} />
      </Canvas>
  )
}

// Instance/s
/* const Models = ({ myRange, data }) => {
  const bldg = useGLTF('/panelEdited.glb')
  const [model, setModel] = useState([]);
  return (
    <Instances range={myRange} object={bldg.scene}>
      <boxGeometry />
      <meshStandardMaterial />
      {data.map((mod, i, props) => (
        <Floor key={i} {...props}/>
      ))}
    </Instances>
  )
}
function Floor({ ...props }) {
  const ref = useRef()
  return (
    <group {...props}>
      <Instance ref={ref}/>
    </group>
  )
} */