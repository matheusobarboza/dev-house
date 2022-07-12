import express from 'express'
import cors from 'cors'
import routes from './routes'
import mongoose from 'mongoose'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.midllewares()
    this.routes()
    this.database()
  }

  private midllewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    mongoose.connect('mongodb+srv://devhouse:devhouse@cluster0.sjbcjtc.mongodb.net/?retryWrites=true&w=majority')
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
