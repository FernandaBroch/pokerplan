import DeckService from "../services/DeckService";
import { v4 as uuidv4 } from 'uuid';

class User{

  id: String
  
  nickName: string

  deck: DeckService

  /**
   * Constructor
   */
  public constructor(nickName: string){

    this.setId();

    this.nickName = nickName;
    
  }

  /**
   * Set Id
   */
  public setId() {
    this.id = uuidv4();
  }
}

export default User;