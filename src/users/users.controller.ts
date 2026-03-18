import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';

interface UserType {
  name?: string;
  email?: string;
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('all')
  allUsers() {
    return this.usersService.allUsers();
  }

  @Get('oneUser/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Get('findEmail/:email')
  findByEmail(@Param('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @Post('createUser')
  create(@Body() body: { name: string; email: string }) {
    return this.usersService.create(body);
  }

  @Put('updateOne/:id')
  updateFunction(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UserType,
  ) {
    return this.usersService.updateFunction(id, body);
  }

  @Delete('remove/:id')
  removeOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.removeOne(id);
  }
}
