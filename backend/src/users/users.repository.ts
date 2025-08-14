import { Repository } from "../shared/repository.js";
import { User } from "./user.entity.js";

const users = [
    new User(
        'Facundo',
        'Hildebrandt',
        'casluhildebrandt@gmail.com',
        'f15380c7-dde7-4767-a72a-42c520d21808',
    ),
]


export class UserRepository implements Repository<User>{
    public findAll(): User[] | undefined {
        return users
    }

    public findOne(item: { id: string; }): User | undefined {
        return users.find((us) => us.id === item.id)
    }

    public add(item: User): User | undefined {
        users.push(item)
        return item
    }

    public update(item: User): User | undefined {
        const userId = users.findIndex(user => user.id===item.id)

        if(userId!==-1){
        users[userId] = {...users[userId], ...item}
        }
        return users[userId]
    }

    public delete(item: { id: string; }): User | undefined {
        const userId = users.findIndex((user) => user.id === item.id)

        if(userId !== -1){
            const deleteUser = users[userId]
            users.splice(userId, 1)
            return deleteUser
        }
    }
}