import { Router  } from "express";
import { sanitizeCharacterInput, findAll, findOne, add, update, remove} from "./users.controler.js";

export const userRouter = Router()

userRouter.get('/', findAll)
userRouter.get('/:id', findOne)
userRouter.post('/', sanitizeCharacterInput, add) 
userRouter.put('/:id', sanitizeCharacterInput, update)
userRouter.patch('/:id', sanitizeCharacterInput, update)
userRouter.delete('/:id', remove)

//los sanitizeCharacterInput son middleware?