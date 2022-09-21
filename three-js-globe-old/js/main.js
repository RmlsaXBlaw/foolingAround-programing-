import * as THREE from 'https://unpkg.com/three@0.144.0/build/three.module.js'
import vertexShader from '../shaders/vertex.glsl'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth/innerHeight,
    0.1,
    1000
)

const renderer = new THREE.WebGLRenderer(
    {
        antialias: true
    }
)
renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)

//create sphere
const sphere = new THREE.Mesh(new THREE.SphereGeometry(
    //radius, how many width segments, how many height segments
    5,
    50), new THREE.ShaderMaterial({
        // vertexShader: ,
        // fragmentShader: 
    }))

scene.add(sphere)

camera.position.z = 10

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()