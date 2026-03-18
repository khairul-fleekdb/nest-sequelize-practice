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
