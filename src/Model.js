import * as THREE from 'three'
import { useRef, useState, Suspense } from 'react'
import { useGLTF } from '@react-three/drei'


export default function Model(props) {
    const ref = useRef()
    const { nodes, materials } = useGLTF("/panelEdited.glb");
    return (
      <group {...props} dispose={null} ref={ref}>
        <group rotation={[0, 0, 0]} scale={0.013} >
            <group position={[7389.582, 0, -8231.031]} scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.BackWall1.geometry}
                material={materials["tiles2.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.BackWall10.geometry}
                material={materials["tiles2.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.BackWall11.geometry}
                material={materials["tiles3.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.BackWall12.geometry}
                material={materials["tiles3.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.BackWall13.geometry}
                material={materials["tiles3.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.BackWall14.geometry}
                material={materials["tiles2.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.BackWall15.geometry}
                material={materials["tiles2.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.BackWall2.geometry}
                material={materials["tiles.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.BackWall3.geometry}
                material={materials["tiles3.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.BackWall4.geometry}
                material={materials["tiles2.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.BackWall5.geometry}
                material={materials["tiles.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.BackWall6.geometry}
                material={materials["tiles.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.BackWall7.geometry}
                material={materials["tiles.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.BackWall8.geometry}
                material={materials["Mat.040"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.BackWall9.geometry}
                material={materials["tiles3.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.BackWallMid1.geometry}
                material={materials["tiles3.001"]}
                position={[-78.786, -95.78, 155.963]}
                rotation={[-0.009, 0.016, 0.002]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Base1.geometry}
                material={materials["flooring default.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Base2.geometry}
                material={materials["flooring default.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.DeckEdgeDotted1.geometry}
                material={materials["deck edges dotted.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.DeckEdges.geometry}
                material={materials["deck edge.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.DeckEgdeDotted.geometry}
                material={materials["deck edge dotted2.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.DeckMidBase.geometry}
                material={materials["flooring1.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.DeckMidBase001.geometry}
                material={materials["flooring1.001"]}
                position={[-39.552, -95.575, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FrontWall1.geometry}
                material={materials["tiles2.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FrontWall10.geometry}
                material={materials["tiles.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FrontWall11.geometry}
                material={materials["tiles.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FrontWall12.geometry}
                material={materials["tiles.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FrontWall13.geometry}
                material={materials["tiles3.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FrontWall14.geometry}
                material={materials["tiles.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FrontWall15.geometry}
                material={materials["tiles.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FrontWall2.geometry}
                material={materials["tiles.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FrontWall3.geometry}
                material={materials["tiles3.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FrontWall4.geometry}
                material={materials["tiles.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FrontWall5.geometry}
                material={materials["tiles.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FrontWall6.geometry}
                material={materials["tiles.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FrontWall7.geometry}
                material={materials["tiles.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FrontWall8.geometry}
                material={materials["tiles3.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FrontWall9.geometry}
                material={materials["tiles.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.InnerDeckEdge.geometry}
                material={materials["deck edge2.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.sideBaseDeckWalls.geometry}
                material={materials["tiles3.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.SideWall2_5.geometry}
                material={materials["tiles.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.SideWall2_7.geometry}
                material={materials["tiles2.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.SideWall2_9.geometry}
                material={materials["tiles3.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.sideWall4.geometry}
                material={materials["tiles3.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.SideWall7.geometry}
                material={materials["tiles.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.SideWall8.geometry}
                material={materials["tiles3.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.SideWall9.geometry}
                material={materials["tiles.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.SideWalls1.geometry}
                material={materials["tiles.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.SideWalls2.geometry}
                material={materials["tiles2.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.SideWalls2_1.geometry}
                material={materials["tiles3.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.SideWallsBase.geometry}
                material={materials["tiles.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.SideWallsBase2.geometry}
                material={materials["tiles2.001"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Window1.geometry}
                material={materials["Mat.004"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Window2.geometry}
                material={materials["Mat.004"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Window3.geometry}
                material={materials["Mat.040"]}
                position={[-39.552, -79.467, 154.89]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Window4.geometry}
                material={materials["Mat.040"]}
                position={[-39.552, -79.467, 154.89]}
              />
          </group>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door.geometry}
          material={materials.door}
          position={[43.934, -32.096, 160.287]}
          rotation={[1.584, 0, 3.116]}
          scale={[20.317, 20.317, 21.2]}
        />
      </group>
    );
  }
  
  useGLTF.preload("/panelEdited.glb");