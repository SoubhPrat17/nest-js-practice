"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    users = [{ 'id': 1, 'name': 'Taylor Brown', 'email': 'taylor.brown@yahoo.com', 'role': 'ENGINEER' },
        { 'id': 2, 'name': 'Sam Davis', 'email': 'sam.davis@outlook.com', 'role': 'INTERN' },
        { 'id': 3, 'name': 'Alex Johnson', 'email': 'alex.johnson@gmail.com', 'role': 'ADMIN' },
        { 'id': 4, 'name': 'Casey Lee', 'email': 'casey.lee@example.com', 'role': 'ENGINEER' },
        { 'id': 5, 'name': 'Jordan Smith', 'email': 'jordan.smith@yahoo.com', 'role': 'INTERN' }
    ];
    findAll(role) {
        if (role) {
            const rolesArray = this.users.filter(user => user.role === role);
            if (rolesArray.length === 0)
                throw new common_1.NotFoundException(`No users with role ${role}`);
            return rolesArray;
        }
        return this.users;
    }
    findOne(id) {
        const user = this.users.find(user => user.id === id);
        return user;
    }
    create(user) {
        const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...user
        };
        this.users.push(newUser);
        return newUser;
    }
    update(id, updatedUser) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updatedUser };
            }
            return user;
        });
        return this.findOne(id);
    }
    delete(id) {
        const removedUser = this.findOne(id);
        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map