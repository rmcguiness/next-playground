'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function ThreeJsTileDemo() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Initialize scene, camera, and renderer
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x111111);

        const camera = new THREE.PerspectiveCamera(
            100, // Field of view
            window.innerWidth / window.innerHeight, // Aspect ratio
            0.1, // Near clipping plane
            1000 // Far clipping plane
        );

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;

        // Mount renderer to the div
        mountRef.current.appendChild(renderer.domElement);

        // Add OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;

        // Load texture
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('/android-chrome-512x512.png', () => {
            // This callback runs when the texture is loaded
            // Create a canvas to sample the edge color from the texture
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            if (context && texture.image) {
                // Set canvas size to match the texture
                canvas.width = texture.image.width;
                canvas.height = texture.image.height;

                // Draw the texture image on the canvas
                context.drawImage(texture.image, 0, 0);

                // Sample color from the edge of the image (adjust coordinates as needed)
                // This assumes your rounded image has a consistent border color
                const edgePixel = context.getImageData(texture.image.width / 2, 5, 1, 1).data;

                // Create a color from the sampled pixel
                const edgeColor = new THREE.Color(
                    edgePixel[0] / 255,
                    edgePixel[1] / 255,
                    edgePixel[2] / 255
                );

                // Update the side material with the sampled color
                sideMaterial.color.set(edgeColor);
            }
        });

        // Replace BoxGeometry with a rounded box using ChamferBox from threejs-meshline
        // Since you're not using threejs-meshline, we'll create a rounded box differently
        // by using THREE.Shape and THREE.ExtrudeGeometry

        // First, create a rounded rectangle shape
        const roundedRectShape = new THREE.Shape();
        const width = 3;
        const height = 3;
        const radius = 0.5; // Adjust this for more or less rounding

        // Starting position
        roundedRectShape.moveTo(-width / 2 + radius, -height / 2);

        // Bottom edge
        roundedRectShape.lineTo(width / 2 - radius, -height / 2);

        // Bottom right corner
        roundedRectShape.quadraticCurveTo(
            width / 2, -height / 2,
            width / 2, -height / 2 + radius
        );

        // Right edge
        roundedRectShape.lineTo(width / 2, height / 2 - radius);

        // Top right corner
        roundedRectShape.quadraticCurveTo(
            width / 2, height / 2,
            width / 2 - radius, height / 2
        );

        // Top edge
        roundedRectShape.lineTo(-width / 2 + radius, height / 2);

        // Top left corner
        roundedRectShape.quadraticCurveTo(
            -width / 2, height / 2,
            -width / 2, height / 2 - radius
        );

        // Left edge
        roundedRectShape.lineTo(-width / 2, -height / 2 + radius);

        // Bottom left corner
        roundedRectShape.quadraticCurveTo(
            -width / 2, -height / 2,
            -width / 2 + radius, -height / 2
        );


        // Extrude settings
        const extrudeSettings = {
            steps: 1,
            depth: 0.2, // Thickness of the tile
            bevelEnabled: true,
            bevelThickness: 0.1,
            bevelSize: 0.1,
            bevelSegments: 3
        };

        // Create the tile geometry by extruding the shape
        const tileGeometry = new THREE.ExtrudeGeometry(roundedRectShape, extrudeSettings);

        // Create materials for the tile
        const topMaterial = new THREE.MeshStandardMaterial({
            map: texture,
            roughness: 0.3,
            metalness: 0.5
        });

        const sideMaterial = new THREE.MeshStandardMaterial({
            color: 0x555555,
            roughness: 0.5,
            metalness: 0.2
        });

        // Create a multi-material array - top face uses the texture, sides use the side material
        const materials = [
            sideMaterial, // right side
            sideMaterial, // left side
            topMaterial,  // top side (with texture)
            sideMaterial, // bottom side
            sideMaterial, // front side
            sideMaterial  // back side
        ];

        // Create the tile mesh with the geometry and materials
        // const tile = new THREE.Mesh(tileGeometry, new THREE.MeshStandardMaterial({
        //     map: texture,
        //     roughness: 0.3,
        //     metalness: 0.5
        // }));
        // Create the tile mesh with the geometry and materials
        const tile = new THREE.Mesh(tileGeometry, materials);


        tile.castShadow = true;
        tile.receiveShadow = true;
        tile.rotation.x = -1;
        tile.position.y = 0;
        scene.add(tile);


        // Add a plane to receive shadows
        const planeGeometry = new THREE.PlaneGeometry(10, 10);
        const planeMaterial = new THREE.MeshStandardMaterial({
            color: 0x222222,
            roughness: 0.8,
            metalness: 0.2,
            side: THREE.DoubleSide
        });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -Math.PI / 2;
        plane.position.y = -1;
        plane.receiveShadow = true;
        scene.add(plane);

        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 1024;
        directionalLight.shadow.mapSize.height = 1024;
        scene.add(directionalLight);

        // Add a point light to highlight the tile
        const pointLight = new THREE.PointLight(0x3366ff, 1, 10);
        pointLight.position.set(2, 2, 2);
        scene.add(pointLight);

        // Set camera position
        camera.position.set(4, 3, 4);
        camera.lookAt(0, 0, 0);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Update controls
            controls.update();

            // Render the scene
            renderer.render(scene, camera);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current?.removeChild(renderer.domElement);

            // Dispose of resources
            tileGeometry.dispose();
            topMaterial.dispose();
            sideMaterial.dispose();
            planeGeometry.dispose();
            planeMaterial.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div className="w-full h-screen">
            <div ref={mountRef} className="w-full h-full" />
        </div>
    );
}
