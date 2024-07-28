import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

function easeInOutSine(x) {
    return -(Math.cos(Math.PI * x) - 1) / 2;
}

const OpticsSim = () => {
    const refContainer = useRef()
    const [loading, setLoading] = useState(true)
    const refRenderer = useRef()
    const [_camera, SetCamera] = useState()
    const [target] = useState(new THREE.Vector3(-0.5, 2.5, 0))
    const [initialCameraPosition] = useState(
        new THREE.Vector3(
            10 * Math.sin(0.2 * Math.PI),
            10,
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

            const scale = scH * 0.005 + 8.5
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

            //DirectionalLight
            const sunLight = new THREE.DirectionalLight(0xffffff, 0.5);
            sunLight.position.set(5, 2, -10);
            scene.add(sunLight);

            const controls = new OrbitControls(camera, renderer.domElement)
            controls.autoRotate = true
            controls.target = target
            setControls(controls)

            //All object
            var Geometry, Material;
            var objectArray = [];
            for (var i = 0; i < 5; i++) {
                Geometry = new THREE.BoxGeometry(1, 2, 4);
                Material = new THREE.MeshPhongMaterial({
                    color: 0x00ff00
                });
                var Mash = new THREE.Mesh(Geometry, Material);

                Mash.position.set(
                    (i % 2) * 5 - 2.5,
                    0,
                    i * -5
                );
                objectArray.push(Mash);
                scene.add(Mash);
            }
            var LaserBeam1 = new LaserBeam({
                reflectMax: 1
            });
            add2Scene(LaserBeam1);

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
                    camera.position.y = p.y
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

                LaserBeam1.object3d.position.set(4.5, 0, 7);
                LaserBeam1.intersect(
                    new THREE.Vector3(-4.5, 0, -4.5 + Math.cos(Date.now() * 0.05 * Math.PI / 180) * 2),
                    objectArray
                );

                renderer.render(scene, camera)
            }

            animate()
            setLoading(false)

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

    function add2Scene(obj) {
        scene.add(obj.object3d);
        scene.add(obj.pointLight);

        if (obj.reflectObject != null) {
            add2Scene(obj.reflectObject);
        }
    }

    function LaserBeam(iconfig) {
        var config = {
            length: 100,
            reflectMax: iconfig.reflectMax - 1
        };

        this.object3d = new THREE.Object3D();
        this.reflectObject = null;
        this.pointLight = new THREE.PointLight(0xffffff, 1, 4);
        var raycaster = new THREE.Raycaster();
        var canvas = generateLaserBodyCanvas();
        var texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;

        //texture
        var material = new THREE.MeshBasicMaterial({
            map: texture,
            blending: THREE.AdditiveBlending,
            color: 0x4444aa,
            side: THREE.DoubleSide,
            depthWrite: false,
            transparent: true
        });
        var geometry = new THREE.PlaneGeometry(1, 0.1 * 5);
        geometry.rotateY(0.5 * Math.PI);

        //use planes to simulate laserbeam
        var i, nPlanes = 15;
        for (i = 0; i < nPlanes; i++) {
            var mesh = new THREE.Mesh(geometry, material);
            mesh.position.z = 1 / 2;
            mesh.rotation.z = i / nPlanes * Math.PI;
            this.object3d.add(mesh);
        }

        if (config.reflectMax > 0)
            this.reflectObject = new LaserBeam(config);

        this.intersect = function (direction, objectArray = []) {

            raycaster.set(
                this.object3d.position.clone(),
                direction.clone().normalize()
            );

            var intersectArray = [];
            intersectArray = raycaster.intersectObjects(objectArray, true);

            //have collision
            if (intersectArray.length > 0) {
                this.object3d.scale.z = intersectArray[0].distance;
                this.object3d.lookAt(intersectArray[0].point.clone());
                this.pointLight.visible = true;

                //get normal vector
                var normalMatrix = new THREE.Matrix3().getNormalMatrix(intersectArray[0].object.matrixWorld);
                var normalVector = intersectArray[0].face.normal.clone().applyMatrix3(normalMatrix).normalize();

                //set pointLight under plane
                this.pointLight.position.x = intersectArray[0].point.x + normalVector.x * 0.5;
                this.pointLight.position.y = intersectArray[0].point.y + normalVector.y * 0.5;
                this.pointLight.position.z = intersectArray[0].point.z + normalVector.z * 0.5;

                //calculation reflect vector
                var reflectVector = new THREE.Vector3(
                    intersectArray[0].point.x - this.object3d.position.x,
                    intersectArray[0].point.y - this.object3d.position.y,
                    intersectArray[0].point.z - this.object3d.position.z
                ).normalize().reflect(normalVector);

                //set reflectObject
                if (this.reflectObject != null) {
                    this.reflectObject.object3d.visible = true;
                    this.reflectObject.object3d.position.set(
                        intersectArray[0].point.x,
                        intersectArray[0].point.y,
                        intersectArray[0].point.z
                    );

                    //iteration reflect
                    this.reflectObject.intersect(reflectVector.clone(), objectArray);
                }
            }
            //non collision
            else {
                this.object3d.scale.z = config.length;
                this.pointLight.visible = false;
                this.object3d.lookAt(
                    this.object3d.position.x + direction.x,
                    this.object3d.position.y + direction.y,
                    this.object3d.position.z + direction.z
                );
            }
        }
    }

    function generateLaserBodyCanvas() {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.width = 1;
        canvas.height = 64;
        // set gradient
        var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, 'rgba(  0,  0,  0,0.1)');
        gradient.addColorStop(0.1, 'rgba(160,160,160,0.3)');
        gradient.addColorStop(0.5, 'rgba(255,255,255,0.5)');
        gradient.addColorStop(0.9, 'rgba(160,160,160,0.3)');
        gradient.addColorStop(1.0, 'rgba(  0,  0,  0,0.1)');
        // fill the rectangle
        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);
        // return the just built canvas 
        return canvas;
    }

    return (
        <Box
            ref={refContainer}
            className='rop'
            m="auto"
            mt={['-20px', '-60px', '-120px']}
            mb={['0px', '0px', '0px']}
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

export default OpticsSim