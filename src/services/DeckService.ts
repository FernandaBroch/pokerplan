import Card from "../models/Card"

interface Deck{
  deck: Array<Card>
}

class DeckService {
  
  /**
     * setCards
     */
  public setCards = ():Deck => {

    return this.calcFibonacci(40)
    
  }
  /**
   * calcFibonacci
   */
  public calcFibonacci = (maxNumber: number):Deck => {
    let card1: Card
    card1 = {
      type: 1
    }
    let card2: Card
    card2 = {
      type: 2
    }
    let card3: Card
    card3 = {
      type: 3
    }
    let array: Deck
    array = {
      deck: [ card1, card2, card3 ]
    }
    

    // let previousNumber: Card
    // previousNumber = {
    //   type: 0
    // }
    // let actualNumber: Card
    // actualNumber = {
    //   type: 1
    // }
    // for(let i = 1 ;i < maxNumber ;i++){
    //   let aux = actualNumber
    //   actualNumber.type = actualNumber.type + previousNumber.type
    //   array.deck.push(actualNumber)
    //   previousNumber = aux
    // }

    console.log(array)
    return array

  }
}
export default DeckService;