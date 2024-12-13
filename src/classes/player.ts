import { Character } from "./characterCard";
import { Special } from "./specialCards/specialCard";

export class Player {
    public name : string;
    private hp : number;
    private hand : any[];
    
    constructor(name : string, hp : number, hand : Character[]) {
        this.name = name
        this.hp = hp
        this.hand = hand
    }

    public takeDamage(amount : number) {
        this.hp += amount
        console.log(`${this.name} took ${amount} dmg`)
    }

    public addToHand(card : Character | Special | Character[] | Special[]) {
        if (Array.isArray(card)) {
            card.forEach(element => {
                this.hand.push(element)
            });
        } else {
            this.hand.push(card)
        }
    }

}


// TODO Write out this class