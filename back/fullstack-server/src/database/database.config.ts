import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const dataBaseConfig: SequelizeModuleOptions = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'users',
    autoLoadModels: true,
    synchronize: true,
};