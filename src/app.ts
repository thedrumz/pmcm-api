import express, { Application, Request, Response } from 'express'
import { config } from 'dotenv'

// Start dotenv config
config()

const app: Application = express()

const port = process.env.PORT || 3000

app.get('/test', (req: Request, res: Response) => {
  res.send('Hello world')
})

app.listen(port, () => {
  console.log(`App is listening on port ${port} !`)
})
