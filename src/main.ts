import Phaser from "phaser";
import { color } from "three/webgpu";

// File Constants
const WIDTH: number = 1130;
const HEIGHT: number = 850;

class MainScene extends Phaser.Scene {
  // CLass Variables
  private playerName: "" | Phaser.GameObjects.Text = "";

  // Constructor
  constructor() {
    super("MainScene");
  }

  // Helper Function // TODO : Implement this

  // Preload
  preload(): void {
    this.load.image("board", "board.png");
    this.load.image("charCard", "CharacterCard-Back.png");
  }

  // Create
  create(): void {
    // Adding Board
    const gameBoard = this.add
      .image(WIDTH / 2, HEIGHT / 2, "board")
      .setScale(0.125);
    const card = this.add
      .image(WIDTH / 2 + 312, HEIGHT / 2, "charCard")
      .setScale(0.125);
    const graphics = this.add.graphics();

    // User Cards Filller
    graphics.fillStyle(0xffa500); // Orange color
    const userCard1 = graphics
      .fillRect(2845, 4625, card.width, card.height)
      .setScale(0.125);
    const userCard2 = graphics
      .fillRect(2845 + 1290, 4625, card.width, card.height)
      .setScale(0.125);
    const userCard3 = graphics
      .fillRect(2845 + 1290 + 1275, 4625, card.width, card.height)
      .setScale(0.125);

    // Enemy Cards Filler
    graphics.fillStyle(0x991144); // Orange color
    const enemyCard1 = graphics
      .fillRect(2845, 1140, card.width, card.height)
      .setScale(0.125);
    const enemyCard2 = graphics
      .fillRect(2845 + 1290, 1140, card.width, card.height)
      .setScale(0.125);
    const enemyCard3 = graphics
      .fillRect(2845 + 1290 + 1275, 1140, card.width, card.height)
      .setScale(0.125);

    // Time elapsed
    const elapsedTime: Phaser.GameObjects.Text = this.add
      .text(525, 20, "00:20:12")
      .setFontSize(20);

    // Adding
    this.playerName = this.add.text(50, 100, "Player Name");
  }

  // Update
  update(): void {}
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: WIDTH,
  height: HEIGHT,
  backgroundColor: "#2d2d2d",
  scene: [MainScene],
  parent: "game-container", // Match the ID in the HTML file
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};

const game = new Phaser.Game(config);

// import { CardShowcase } from './scenes/threeScene'

// let cardShowcase: CardShowcase | null = null;

// function showCardOverlay() {

//     // Container String
//     const container : string = "cardShowcase";

//   // Display the overlay
//   const overlay = document.getElementById(container);
//   if (overlay) overlay.style.display = 'block';

//   // Initialize Three.js scene
//   cardShowcase = new CardShowcase(container);
//   cardShowcase.loadCard('CharacterCard-Back.png', 'GokuBlackBaseform.png');

//   // Hide after 3 seconds
//   setTimeout(() => {
//     if (overlay) overlay.style.display = 'none';
//     cardShowcase?.destroy();
//     cardShowcase = null;
//   }, 10000);
// }

// showCardOverlay()
