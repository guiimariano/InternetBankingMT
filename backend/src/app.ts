import * as cors from 'cors'
import * as express from 'express'
import * as mongoose from 'mongoose'

import URI from './config/db.config'


class App {
  public app: express.Application
  public PORT: number
  public constructor () {
    this.app = express()
    this.PORT = 3333;
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.app.use(express.json())
    this.app.use(cors())
  }

  public database (): void {
    mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  private routes (): void {
    this.app.get('/', (req, res) => {
      return res.json({message: "Hello MB Team"})
    })
  }
}

export default new App().app