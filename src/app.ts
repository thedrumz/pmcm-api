import express, { Application, Response, NextFunction, RequestHandler } from 'express'
import NDIMiddleware from 'node-dependency-injection-express-middleware'
import FileUpload from 'express-fileupload'
import path from 'path'
import RequestWithDIContainer from './express/RequestWithDIContainer'
import GroupCreate from './Group/application/GroupCreate'
import ErrorMiddleware from './Group/infrastructure/middleware/ErrorMiddleware'

const app: Application = express()

// parse application/json
app.use(express.json() as RequestHandler)

// file uploads
app.use(FileUpload())

// Dependency injection
const options = {
  serviceFilePath: path.join(__dirname, `/dependency-injection/application_${process.env.NODE_ENV}.yaml`),
}
app.use(new NDIMiddleware(options).middleware())

// Endpoints
//---------------------

app.get('/', (req: RequestWithDIContainer, res: Response) => {
  res.send('Hello world')
})

app.post('/group', async (req: RequestWithDIContainer, res: Response, next: NextFunction) => {
  const groupCreate: GroupCreate = req.container.get('GroupCreate')

  try {
    const group = await groupCreate.run({ group: req.body, files: req.files as { image } })
    res.send(group)
  } catch (error) {
    // Pass error to middleware
    next(error)
  }
})

// Handle exceptions
app.use(ErrorMiddleware)

export default app
