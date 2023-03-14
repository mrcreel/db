import 'reflect-metadata'
import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'mongodb',
  url: 'mongodb+srv://michael:michael_password@ms-prep-football-archiv.1dbe7gc.mongodb.net/rawData?retryWrites=true&w=majority',
  useNewUrlParser: true,
  useUnifiedTopology: true,
  synchronize: true,
  logging: true,
  entities: ['src/entity/*.*'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
})
