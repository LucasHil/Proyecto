import express from 'express';
import { User } from './user.js';
const app = express();
app.use(express.json());
const users = [
    new User('Lucas', 'Hildebrandt', 'casluhildebrandt@gmail.com', 'f15380c7-dde7-4767-a72a-42c520d21808'),
];
//funcion zanitizar
function sanitizeCharacterInput(req, res, next) {
    req.body.sanitizedInput = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    };
    Object.keys(req.body.sanitizedInput).forEach(key => {
        if (req.body.sanitizedInput[key] === undefined)
            delete req.body.sanitizedInput[key];
    });
    next();
}
// ACA EMPIEZA LOS MÉTODOS
//get all - traemos todos los usuarios
app.get('/api/users', (req, res) => {
    res.json(users);
});
//get one - traemos un solo usuario
app.get('/api/users/:id', (req, res) => {
    const us = users.find((us) => us.id === req.params.id);
    if (!us) {
        return res.status(404).send({ message: 'User not found' });
    }
    res.json({ data: us });
});
//post - crear un nuevo usuario
app.post('/api/users', sanitizeCharacterInput, (req, res) => {
    const input = req.body.sanitizedInput;
    const us = new User(input.firstName, input.lastName, input.email, input.id);
    users.push(us); //lo agregamos al array
    return res.status(201).send({ message: 'User created', data: us });
});
//put - modificar un usuario
app.put('/api/users/:id', sanitizeCharacterInput, (req, res) => {
    const userId = users.findIndex(user => user.id === req.params.id);
    if (userId === -1) {
        return res.status(404).send({ message: 'User not found' });
    }
    users[userId] = { ...users[userId], ...req.body.sanitizedInput };
    return res.status(200).send({ message: 'User updated successfully', data: users[userId] });
});
//delete -- borrar un usuario
app.delete('/api/users/:id', (req, res) => {
    const userId = users.findIndex((user) => user.id === req.params.id);
    if (userId === -1) {
        res.status(404).send({ Message: 'User not found' });
    }
    else {
        users.splice(userId, 1);
        res.status(200).send({ Message: 'User deleted succefully' });
    }
});
//Para cuando un recurso no existe
app.use((_, res) => {
    return res.status(404).send({ message: 'Resource not found' });
});
//---
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
});
//# sourceMappingURL=app.js.map