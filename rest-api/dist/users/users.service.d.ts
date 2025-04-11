import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private users;
    findAll(role?: 'ADMIN' | 'ENGINEER' | 'INTERN'): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    } | undefined;
    create(user: CreateUserDto): {
        name: string;
        email: string;
        role: "INTERN" | "ENGINEER" | "ADMIN";
        id: number;
    };
    update(id: number, updatedUser: UpdateUserDto): {
        id: number;
        name: string;
        email: string;
        role: string;
    } | undefined;
    delete(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    } | undefined;
}
