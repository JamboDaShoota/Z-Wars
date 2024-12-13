import { Character } from "../characterCard"

// Special Card Definition
export class Special {
    
    // Instance Variables
    private notes : string

    constructor(notes : string = "") {
        this.notes = notes
    }

    use(targets : [Character]) {
        throw new Error("I havent wrote out this method yet")
    }

}