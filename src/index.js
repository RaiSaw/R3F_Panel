import { createRoot } from 'react-dom/client'
import { Stats } from '@react-three/drei'
import './style.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Stats />
  </>,
)
/* function Shoe({ random, color = new THREE.Color(), ...props }) {
  const ref = useRef()
  onst [hovered, setHover] = useState(false)
  useFrame((state) => {
    const t = state.clock.getElapsedTime() + random * 10000
    ref.current.rotation.set(Math.cos(t / 4) / 2, Math.sin(t / 4) / 2, Math.cos(t / 1.5) / 2)
    ref.current.position.y = Math.sin(t / 1.5) / 2
    ref.current.scale.x = ref.current.scale.y = ref.current.scale.z = THREE.MathUtils.lerp(ref.current.scale.z, hovered ? 1.4 : 1, 0.1)
    ref.current.color.lerp(color.set(hovered ? 'red' : 'white'), hovered ? 1 : 0.1)
  })
  return (
    <group {...props}>
      <Instance ref={ref} /* onPointerOver={(e) => (e.stopPropagation(), setHover(true))} onPointerOut={(e) => setHover(false)}/>
    </group>
  )
} */