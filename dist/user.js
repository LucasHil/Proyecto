import crypto from 'node:crypto';
export class User {
    constructor(firstName, lastName, email, id = crypto.randomUUID()) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.id = id;
    }
}
//Para los usuarios Clientes y Administradores. Creo sub clases?
//# sourceMappingURL=user.js.map