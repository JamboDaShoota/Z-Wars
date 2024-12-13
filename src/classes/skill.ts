export class Skill {
    // Instnace Variables
    private name : string
    private ki : number
    private dmg : number
    private note : string

    // Constructor
    constructor(name : string, ki : number, dmg : number, note : string = "") {
        this.name = name
        this.ki = ki
        this.dmg = dmg
        this.note = note
    }

    // Public Instance Methods
    public use() {
        throw new Error("The use function for skills has not been implemented yet")
    } 

    // private Instance Methods
    private changeStat(
        key: "ki" | "dmg",
        amount: number,
        value?: number
      ): void {
        if (value !== undefined) {
          if (amount === 0 && value >= 0) {
            switch (key) {
              case "ki":
                this.ki = value;
                break
              case "dmg":
                this.dmg = value;
                break
            }
          } else {
            throw new Error(
              "amount needs to be 0 and value needs to be a positive number!"
            );
          }
        } else {
          switch (key) {
            case "ki":
              if (this.ki + amount < 0) {
                this.ki = 0; // Ensure the stat doesn't drop below 0
              } else {
                this.ki += amount; // Increment or decrement the stat
              }
              break
            case "dmg":
              if (this.dmg + amount < 0) {
                this.dmg = 0; // Ensure the stat doesn't drop below 0
              } else {
                this.dmg += amount; // Increment or decrement the stat
              }
              break
          }
        }
      }
}
