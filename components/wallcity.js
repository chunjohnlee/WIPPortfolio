import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loaderGLTFModel } from '../libs/model'

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4));
}

function easeInOutSine(x) {
    return -(Math.cos(Math.PI * x) - 1) / 2;

}

const WallCity = () => {
    const refContainer = useRef()
    const [loading, setLoading] = useState(true)
    const refRenderer = useRef()
    const [_camera, SetCamera] = useState()
    const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))
    const [initialCameraPosition] = useState(
        new THREE.Vector3(
            10 * Math.sin(0.2 * Math.PI),
            0,
            10 * Math.cos(0.2 * Math.PI))
    )
    const [scene] = useState(new THREE.Scene())
    const [_controls, setControls] = useState()

    const handleWindowResize = useCallback(() => {
        const { current: renderer } = refRenderer
        const { current: container } = refContainer
        if (container && renderer) {
            const scW = container.clientWidth
            const scH = container.clientHeight
            renderer.setSize(scW, scH)
        }
    }, [])

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const { current: container } = refContainer
        if (container) {
            const scW = container.clientWidth
            const scH = container.clientHeight

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            })
            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(scW, scH)
            renderer.outputEncoding = THREE.sRGBEncoding
            container.appendChild(renderer.domElement)
            refRenderer.current = renderer

            const scale = scH * 0.005 + 4.8
            const camera = new THREE.OrthographicCamera(
                -scale,
                scale,
                scale,
                -scale,
                0.01,
                50000
            )
            camera.position.copy(initialCameraPosition)
            camera.lookAt(target)
            SetCamera(camera)

            const ambientLight = new THREE.AmbientLight(0xffffff, 1)
            scene.add(ambientLight)

            const controls = new OrbitControls(camera, renderer.domElement)
            controls.autoRotate = true
            controls.target = target
            setControls(controls)

            loaderGLTFModel(scene, '/Wall_Only.glb', {
                receiveShadow: false,
                castShadow: false
            }).then(() => {
                animate()
                setLoading(false)
            })

            let req = null
            let frame = 0
            const maxFrame = 2000
            const animate = () => {
                req = requestAnimationFrame(animate)

                frame = frame <= maxFrame ? frame + 1 : 0

                if (frame <= maxFrame) {
                    const p = initialCameraPosition
                    const angle = easeInOutSine(frame / maxFrame * 2) * Math.PI / 4
                    const offset = - Math.PI / 2
                    camera.position.y = 5
                    camera.position.x =
                        p.x * Math.cos(angle + offset) +
                        p.z * Math.sin(angle + offset)
                    camera.position.z =
                        p.z * Math.cos(angle + offset) -
                        p.x * Math.sin(angle + offset)
                    camera.lookAt(target)
                } else {
                    controls.update()
                }

                renderer.render(scene, camera)
            }

            return () => {
                cancelAnimationFrame(req)
                renderer.domElement.remove()
                renderer.dispose()
            }
        }
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false)
        return () => {
            window.removeEventListener('resize', handleWindowResize, false)
        }
    }, [handleWindowResize])

    return (
        <Box
            ref={refContainer}
            className='wall-city'
            m="auto"
            mt={['-20px', '-60px', '-120px']}
            mb={['-10px', '-20px', '-40px']}
            w={[280, 480, 640]}
            h={[280, 480, 640]}
            position="relative"
        >
            {loading && (
                <Spinner
                    size="xl"
                    position="absolute"
                    left="50%"
                    top="50%"
                    ml="calc(0px - var(--spinner-size) / 2)"
                    mt="calc(0px - var(--spinner-size))"
                />
            )}
        </Box>
    )
}

export default WallCity