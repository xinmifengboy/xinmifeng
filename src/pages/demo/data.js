import * as three from 'three'
export const data = {
  h: [
    [-10,6,0],
    [-10,2,0],
    [-10,4,0],
    [-8,4,0],
    [-8,6,0],
    [-8,2,0],
  ],
}
 
export const setPostion = positions => {
  const points = []
  console.log(positions)
  positions.forEach(element => points.push(new three.Vector3(...element)))
  return points
}