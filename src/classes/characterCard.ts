import { Skill } from "./skill";


// Character Definition
export class Character {
  // Instance Variables
  private name: string;
  private hp: number;
  private ki: number;
  private speed: number;
  private skills: [Skill];
  private tags: [string] | string;
  private blocking: boolean = true; // No constructor assignment needed
  private maxHP : number = 0; // Will be reassigned after construction
  private enemy : string = "";
  // TODO : Code out the enemy and owner associated function


  constructor(
    name: string,
    hp: number,
    ki: number,
    speed: number,
    skills: [Skill],
    tags: [string] | string = ""
  ) {
    this.name = name;
    this.hp = hp;
    this.ki = ki;
    this.speed = speed;
    this.skills = skills;
    this.tags = tags;
    this.calculateMaxHp();
  }

  // Public Instance Methods

  public getStat(name : "hp" | "ki" | "speed") : number {
    switch (name) {
        case "hp":
            return this.hp
        case "ki":
            return this.ki
        case "speed":
            return this.ki
    }
  }

  /**
   * This function usually needs only the first param to add the amount to the stat
   * but it can also be used by setting the amount to 0 and using the second
   * param to change it directly to that value. Then returns the stat
   *
   * @param amount - Adds the given amount to the characters stat (Can be negative to decrease)
   * @param value - sets the characters stat to the given value
   * @returns The characters stat after the calculations are made
   */
  public changeStat(
    key: "hp" | "ki" | "speed",
    amount: number,
    value?: number
  ): number {
    if (value !== undefined) {
      if (amount === 0 && value >= 0) {
        switch (key) {
          case "hp":
            this.hp = value;
            return this.hp;
          case "ki":
            this.ki = value;
            return this.ki;
          case "speed":
            this.speed = value;
            return this.speed;
        }
      } else {
        throw new Error(
          "amount needs to be 0 and value needs to be a positive number!"
        );
      }
    } else {
      switch (key) {
        case "hp":
          if (this.hp + amount < 0) {
            this.hp = 0; // Ensure the stat doesn't drop below 0
          } else {
            this.hp += amount; // Increment or decrement the stat
          }
          return this.hp; // Return the updated stat
        case "ki":
          if (this.ki + amount < 0) {
            this.ki = 0; // Ensure the stat doesn't drop below 0
          } else {
            this.ki += amount; // Increment or decrement the stat
          }
          return this.ki; // Return the updated stat
        case "speed":
          if (this.speed + amount < 0) {
            this.speed = 0; // Ensure the stat doesn't drop below 0
          } else {
            this.speed += amount; // Increment or decrement the stat
          }
          return this.speed; // Return the updated stat
      }
    }
  }

  public useSkill(name: string) {}

  public takeDamage(amount: number): void {
    this.hp -= amount;
    console.log(`${this.name} took ${amount} damage`);
  }

  public checkBlocking(): boolean {
    return this.blocking;
  }

  public toggleBlock() : void {
    this.blocking = !this.blocking
  }

  public checkForTag(tagName : string): boolean {
    return this.tags.includes(tagName) ? true : false
  }

  // Private Instance Method
  private calculateMaxHp(): void {
    this.maxHP = this.hp;
    console.log(`${this.name}'s max health was reassigned to ${this.maxHP}`);
  }
}
