import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

interface UserType {
  name?: string;
  email?: string;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async allUsers(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findByPk(Number(id));
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
    return user;
  }

  async create(body: Partial<User>): Promise<User> {
    return this.userModel.create(body);
  }

  async updateFunction(id: number, data: UserType): Promise<User> {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new NotFoundException(`User with email ${id} not found`);
    }
    await user.update(data);
    return user;
  }

  async removeOne(id: number) {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    await user.destroy();
    return user;
  }
}
