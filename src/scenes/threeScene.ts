// Imports
import * as THREE from "three";

// CardShowcase Definition
export class CardShowcase {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private card: THREE.Mesh | null = null;
  private isAnimating: boolean = false;
  private containerID: string;

  constructor(containerId: string) {
    this.containerID = containerId;

    // Create Scene
    this.scene = new THREE.Scene();

    // Set up Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 3;

    // Set up Renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById(containerId)?.appendChild(this.renderer.domElement);

    // Add Light
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(2, 2, 5);
    this.scene.add(light);

    // Render Loop
    this.animate();
  }

  async loadCard(frontTexture: string, backTexture: string) {
    // Load Textures
    const loader = new THREE.TextureLoader();
    const front = await loader.loadAsync(frontTexture);
    const back = await loader.loadAsync(backTexture);

    // Create Card Geometry and Materials
    const geometry = new THREE.BoxGeometry(2, 3, 0.05); // Card size
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x000000 }), // Right edge (default black)
      new THREE.MeshBasicMaterial({ color: 0x000000 }), // Left edge (default black)
      new THREE.MeshBasicMaterial({ color: 0x000000 }), // Top edge (default black)
      new THREE.MeshBasicMaterial({ color: 0x000000 }), // Bottom edge (default black)
      new THREE.MeshBasicMaterial({ map: front }), // Front face (card front texture)
      new THREE.MeshBasicMaterial({ map: back }), // Back face
    ];

    // Create Mesh
    this.card = new THREE.Mesh(geometry, materials);
    this.scene.add(this.card);

    // Start Animating
    this.isAnimating = true;
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Rotate the card
    if (this.card) {
      this.card.rotation.y += 0.01; // Slow rotation
    }

    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    // Stop Animation and Clean Up
    this.isAnimating = false;
    this.renderer.dispose();
    document
      .getElementById(this.containerID)
      ?.removeChild(this.renderer.domElement);
  }
}

// Credits Definiton
class Credits extends Phaser.Scene {
  constructor(containerID: string) {
    super();
  }
}
