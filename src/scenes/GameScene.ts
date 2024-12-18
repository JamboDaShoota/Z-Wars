// Imports
import Phaser from "phaser";
import { Game } from "../classes/game";

// File Config Values // TODO : Move this to a seperate config file later
const WIDTH : number = 1130
const HEIGHT : number = 850

export class GameScene extends Phaser.Scene {
  // Class Variables
  private board : string | Phaser.Loader.LoaderPlugin = "board.png"
  private _testCCB : string | Phaser.Loader.LoaderPlugin = "CharacterCard-Back.png" // _testCCB stands for test Character Card Backing
  private gameBackend : Game = new Game();

  constructor() {
    super("MainScene");
  }

  preload() : void {
    this.load.image("board", this.board as string);
    this.load.image("characterCard", this._testCCB as string);
  }
  create() : void {
    // Add The Game Board
    const gameBoard = this.add.image(WIDTH / 2, HEIGHT / 2, "board").setScale(0.125)
  }

  update() : void {}
}
