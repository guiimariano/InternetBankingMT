import 'dotenv/config'

import * as cors from 'cors'
import * as express from 'express'
import * as helmet from 'helmet'
import * as mongoose from 'mongoose'

import MONGO_URI from './config/db.config'
import Routes from './routes/main.routes'


class App {
  public app: express.Application
  public constructor () {
    process.env.TZ = 'America/Sao_Paulo'
    this.app = express()
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.app.use(helmet())
    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(express())
  }

  public database (): void {
    mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    })
  }

  private routes (): void {
    this.app.use(Routes)
  }
}

export default new App().app