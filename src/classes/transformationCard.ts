// Imports
import { Character } from "./characterCard";
import { Skill } from "./skill";

// Transformation Definition
export class Transformation extends Character {
  private baseCharacter: Character;

  constructor(
    name: string,
    hp: number,
    ki: number,
    speed: number,
    skills: [Skill],
    tags: [string] | string = "",
    baseCharacter: Character
  ) {
    super(name, hp, ki, speed, skills, tags);
    this.baseCharacter = baseCharacter;
  }

}
