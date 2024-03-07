import * as THREE from 'three'
import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { Bvh, Instances, Instance, Text, Clone, OrbitControls, Environment, useGLTF, Html } from '@react-three/drei'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useControls } from 'leva'
import { Slider } from 'antd'
import Model from './Model'
import { Placeholder } from './Placeholder'
/* import {data} from "./store" */

// using Drei helpers, getting used to R3f envi
const positions = [
  { id:1, position: [0, -12.8, 0] },
  { id:2, position: [0, -6.4, 0] },
  { id:3, position: [0, 0, 0] },
  { id:4, position: [0, 6.4, 0] },
  { id:5, position: [0, 12.8, 0] }
];

const data = Array.from(positions)

export default function App() {

  const bldg = useGLTF('/panelEdited.glb')
  // how they use state
  const [myRange, set] = useState(3)
  const [model, setModel] = useState([]);
  //debug ui
  const { range } = useControls({ range: { value: 3, min: 1, max: 3, step: 1 } })

  const addModel = () => {
    const r = 6.4
    setModel((i, position) => [...model,
    <Clone
      key={i}
      object={bldg.scene}
      scale={0.069}
      position={position}
      castShadows
      />
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
            {/* <Models data={data} range={myRange}/> */}
          <Instances range={myRange} data={data}>
            {data.map(( i, props, mod) => (
              <>
              <Clone
              key={mod.id}
              object={bldg.scene}
              scale={0.069}
              position={mod.position}
              castShadow
              {...props}
              />
              <boxGeometry />
              <meshStandardMaterial />
            </>
            ))}
          </Instances>
          </Suspense>
        </Bvh>
        {/* mixing with an external html */}
        <Html occlude distanceFactor={1.5} position={[-10, 0, 0]} transform>
        <span style={{fontSize: 150 }}>Range</span>
          {/* <button
            style={{ width: 700, height: 400, background:"teal", color: 'white', fontSize: 150 }}
            nChange={(value) => ((controls.enabled = false), set(value))}
            onAfterChange={() => (controls.enabled = true)}
            onClick={() => addModel()}
          >
          Add floor
          </button> */}
          <Slider
          min={1}
          max={3}
          step={1}
          value={myRange}
          style={{ width: 500, height: 100, background:"teal", color: 'white', fontSize: 150 }}
          onChange={(value) => set(value)}
        />
          {/* <input style={{ width: "20", background:"teal", color: 'white' }} type="range" min="1" max="5" value={myRange} onChange={(value) => (set(value))} className="slider" id="myRange"/> */}
      </Html>
        <Environment preset="city" />
        <OrbitControls autoRotateSpeed={1} />
      </Canvas>
  )
}

// Instance/s
const Models = ({ myRange, data }) => {
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
}