/*
  Auto-generated by Spline
*/

import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera, PerspectiveCamera } from '@react-three/drei'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/RjYUaEAmH-HCOxdF/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#74757a']} />
      <group {...props} dispose={null}>
        <mesh
          name="text"
          geometry={nodes.text.geometry}
          material={materials['text 2']}
          castShadow
          receiveShadow
          position={[-9.9, 90.82, 90.33]}
          rotation={[-0.26, -0.37, -0.07]}
          scale={[3.38, 3.38, 4.25]}
        />
        <mesh
          name="text1"
          geometry={nodes.text1.geometry}
          material={materials.text}
          castShadow
          receiveShadow
          position={[-5.41, 103.11, 71.45]}
          rotation={[-0.26, -0.37, -0.07]}
          scale={[3.38, 3.38, 4.27]}
        />
        <PerspectiveCamera
          name="Camera"
          makeDefault={false}
          far={100000}
					near={70}
					fov={1}
					position={[-120.75, 159.51, 10000090.86]}
					rotation={[-0.28, -0.42, -0.12]}
					scale={1}
        />
        <mesh
          name="Cylinder"
          geometry={nodes.Cylinder.geometry}
          material={materials.Gradient}
          castShadow
          receiveShadow
          position={[50.68, 146.31, 132.74]}
          rotation={[-1.19, -0.63, -3]}
          scale={1}
        />
        <mesh
          name="Cylinder1"
          geometry={nodes.Cylinder1.geometry}
          material={materials.Gradient}
          castShadow
          receiveShadow
          position={[33.6, 200.37, 167.11]}
          rotation={[-1.19, -0.63, -3]}
          scale={1}
        />
        <mesh
          name="Cylinder2"
          geometry={nodes.Cylinder2.geometry}
          material={materials.Gradient}
          castShadow
          receiveShadow
          position={[-29.39, 122.1, 67.34]}
          rotation={[-1.19, -0.63, -3]}
          scale={1}
        />
        <mesh
          name="Helix"
          geometry={nodes.Helix.geometry}
          material={materials['Gradient 3']}
          castShadow
          receiveShadow
          position={[20.1, 13.07, 81.4]}
          rotation={[2.8, -0.46, -2.96]}
          scale={1}
        />
        <mesh
          name="Helix1"
          geometry={nodes.Helix1.geometry}
          material={materials.Gradient}
          castShadow
          receiveShadow
          position={[-9.32, 49.46, 64.9]}
          rotation={[-1.88, -0.74, 1.22]}
          scale={1}
        />
        <mesh
          name="Helix2"
          geometry={nodes.Helix2.geometry}
          material={materials['Gradient 2']}
          castShadow
          receiveShadow
          position={[-24.92, 70.64, 63.61]}
          rotation={[0.93, -0.74, 0.14]}
        />
        <mesh
          name="Background"
          geometry={nodes.Background.geometry}
          material={materials.background}
          castShadow
          receiveShadow
          position={[34.57, 15.27, 22.98]}
          rotation={[0.04, -0.25, -0.04]}
          scale={[1, 1, 1.14]}
        />
        <directionalLight
          name="Directional Light 2"
          castShadow
          intensity={0.72}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-674.016}
          shadow-camera-right={674.016}
          shadow-camera-top={674.016}
          shadow-camera-bottom={-674.016}
          position={[200, 300, 300]}
        />
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-1000}
          shadow-camera-right={1000}
          shadow-camera-top={1000}
          shadow-camera-bottom={-1000}
          position={[200, 300, 300]}
        />
        <OrthographicCamera
          name="1"
          makeDefault={true}
          far={100000}
          near={-100000}
          position={[-231.34, 241.28, 551.9]}
          rotation={[-0.28, -0.42, -0.12]}
          scale={1}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
      </group>
    </>
  )
}
