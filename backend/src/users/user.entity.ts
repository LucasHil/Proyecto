import crypto from 'node:crypto';

export class User{
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public id?: number
    ){}
}

//Para los usuarios Clientes y Administradores. Creo sub clases?