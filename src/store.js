/* const randomVector = (r) => [r / 2 - Math.random() * r, r / 2 - Math.random() * r, r / 2 - Math.random() * r]
const randomEuler = () => [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]
const data = Array.from({ length: 5 }, (r = 10) => ({ random: Math.random(), position: randomVector(r), rotation: randomEuler() }))
 */
const randomVector = (r) => [0, (Math.random() * r/2), 0]
const data = Array.from({ length: 5 }, (r = 50) => ({ random: Math.random(), position: randomVector(r), rotation: [0, -18.9, 0] }))

export { data }