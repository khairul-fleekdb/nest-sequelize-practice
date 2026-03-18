## Project setup

```bash
# create project
nest new project-name
# install all dependencies
npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## nest + sequelize orm install

```bash
#install
npm install --save @nestjs/sequelize sequelize sequelize-typescript

#install type
npm install --save-dev @types/sequelize
```

## install mySQL
```bash
#install
npm install mysql2
```

## set up mySQL app.module.ts
```bash
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql', // or 'postgres', 'sqlite', etc.
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Khairul@37',
      database: 'college',
      autoLoadModels: true,
      synchronize: true, // ⚠️ only for development
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

```

## file set up user.model.ts

```bash
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  email: string;
}

```

## any service setup users.service.ts
```bash
constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}
```

