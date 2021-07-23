import { NextFunction, Request, Response } from 'express'
import CustomError from '../../../Shared/domain/exceptions/CustomError'

const ErrorMiddleware = (error: CustomError, request: Request, response: Response, next: NextFunction): void => {
  if (!(error instanceof CustomError)) {
    response.send(error)
    return
  }

  const status = error.statusCode() || 500
  const message = error.errorMessage() || 'Something went wrong'

  response.status(status).send({
    status,
    message,
  })
}

export default ErrorMiddleware
