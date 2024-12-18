// Imports
import { Character } from "./characterCard";
import { Skill } from "./skill";
import { shuffleArray } from "../utils";
import { Player } from "./player";
// Deck Definition
export class Deck {
  // Instance Variables
private characterCards: Character[] = [
    new Character(
      "Goku",
      15000,
      15,
      500,
      [
        new Skill(
          "kamehameha",
          5,
          2500,
          "Goku is the greatest saiyan of all time"
        ),
      ],
      "Transform"
    ),
    new Character(
      "Vegeta",
      14000,
      14,
      600,
      [
        new Skill(
          "galick gun",
          8,
          2200,
          "Vegeta is the prince of all saiyans"
        ),
      ],
      "Transform"
    ),
    new Character(
      "Krillin",
      7500,
      10,
      200,
      [
        new Skill(
          "solar flare",
          7,
          2100,
          "Krillin has six stars on his head"
        ),
      ]
    ),
  ];

  constructor() {
    shuffleArray(this.characterCards);
  }

  public dealRandomCard(targetPlayer: Player) {}
}
