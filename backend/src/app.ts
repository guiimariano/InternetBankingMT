import 'dotenv/config'

import * as cors from 'cors'
import * as express from 'express'
import * as mongoose from 'mongoose'

import MONGO_URI from './config/db.config'
import routes from './routes'


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
    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(express())
  }

  public database (): void {
    mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  private routes (): void {
    this.app.use(routes)
  }
}

export default new App().app