import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query,ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    //  GET /users or /users?role=value
    @Get()
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return this.usersService.findAll(role)
    }

    // GET /users/:id
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id)
    }

    // POST /users
    @Post()
    create(@Body(ValidationPipe) user: CreateUserDto) {
        return this.usersService.create(user)
    }

    // PATCH /users/:id
    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) userUpdate: UpdateUserDto) {
        return this.usersService.update(id, userUpdate)
    }

    // DELETE /users/:id
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.delete(id)
    }
}
