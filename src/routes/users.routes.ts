//import { id } from 'date-fns/locale';
import { Router } from 'express';
import User from '../models/User';
//import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try{
    const { nickName } = request.body;

    // const createUser = new CreateUserService();

    const createUser = new User(nickName);

    // const user = await createUser.execute({
    //   nickName, 

    // });

    const userWithoutPassword = {
      id: createUser.id,
      nickName: createUser.nickName
    }
    
    return response.json(userWithoutPassword);
  }catch(err){

    return response.status(400).json({ error: err.message });

  }
  
});

export default usersRouter;