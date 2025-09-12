import { Request, Response, NextFunction } from "express";
import { UserRepository } from "./users.repository.js";
import { User } from "./user.entity.js";

//Este .ts tiene toda la lógica de negocio

const repository = new UserRepository()

function sanitizeCharacterInput(req: Request, res: Response, next:NextFunction){
    req.body.sanitizedInput = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    }
 
    Object.keys(req.body.sanitizedInput).forEach(key => { 
        if(req.body.sanitizedInput[key] === undefined)
        delete req.body.sanitizedInput[key]
    })
    next()
}


async function findAll(req: Request, res: Response) {
  res.json({ data: await repository.findAll() })
}

async function findOne(req: Request, res: Response) {
  const id = req.params.id
  const user = await repository.findOne({ id })
  if (!user) {
    return res.status(404).send({ message: 'User not found' })
  }
  res.json({ data: user })
}


async function add(req: Request, res: Response) {
  const input = req.body.sanitizedInput

  const userInput = new User(
    input.firstName,
    input.lastName,
    input.email
  )

  const user = await repository.add(userInput)
  return res.status(201).send({ message: 'User created', data: user })
}

async function update(req: Request, res: Response) {
  const user = await repository.update(req.params.id, req.body.sanitizedInput)

  if (!user) {
    return res.status(404).send({ message: 'User not found' })
  }

  return res.status(200).send({ message: 'User updated successfully', data: user })
}


async function remove(req: Request, res: Response) {
  const id = req.params.id
  const user = await repository.delete({ id })

  if (!user) {
    res.status(404).send({ message: 'User not found' })
  } else {
    res.status(200).send({ message: 'User deleted successfully' })
  }
}




export{sanitizeCharacterInput, findAll, findOne, add, update, remove}