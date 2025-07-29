import crypto from 'node:crypto';

export class User{
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public id = crypto.randomUUID(),
    ){}
}

//Para los usuarios Clientes y Administradores. Creo sub clases?