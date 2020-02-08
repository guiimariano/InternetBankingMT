import 'dotenv/config'

import * as cors from 'cors'
import * as express from 'express'
import { connect } from 'mongoose'

import MONGO_URI from './config/db.config'
import routes from './routes/index.routes'

// const MONGO_URI: string = process.env.APP_BD_URI as string
class App {
  public app: express.Application
  public constructor () {
    this.app = express()
    process.env.TZ = 'America/Sao_Paulo'

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.app.use(express())
    this.app.use(express.json())
    this.app.use(cors())
  }

  public database (): void {
    connect(MONGO_URI, {
      // useMongoClient:true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  private routes (): void {
    this.app.use(routes)
  }
}

export default new App().app
