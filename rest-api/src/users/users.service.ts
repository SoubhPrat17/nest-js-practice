import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [{ 'id': 1, 'name': 'Taylor Brown', 'email': 'taylor.brown@yahoo.com', 'role': 'ENGINEER' },
    { 'id': 2, 'name': 'Sam Davis', 'email': 'sam.davis@outlook.com', 'role': 'INTERN' },
    { 'id': 3, 'name': 'Alex Johnson', 'email': 'alex.johnson@gmail.com', 'role': 'ADMIN' },
    { 'id': 4, 'name': 'Casey Lee', 'email': 'casey.lee@example.com', 'role': 'ENGINEER' },
    { 'id': 5, 'name': 'Jordan Smith', 'email': 'jordan.smith@yahoo.com', 'role': 'INTERN' }
    ]

    findAll(role?: 'ADMIN' | 'ENGINEER' | 'INTERN') {
        if (role) {
            const rolesArray = this.users.filter(user => user.role === role);
            if (rolesArray.length === 0) throw new
                NotFoundException(`No users with role ${role}`)
            return rolesArray
        }
        return this.users
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id)
        return user
    }

    create(user: CreateUserDto) {
        const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id)
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...user
        }
        this.users.push(newUser)
        return newUser
    }

    update(id: number, updatedUser: UpdateUserDto) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updatedUser }
            }
            return user
        })

        return this.findOne(id)
    }

    delete(id: number) {
        const removedUser = this.findOne(id)
        this.users = this.users.filter(user => user.id !== id)

        return removedUser
    }
}
