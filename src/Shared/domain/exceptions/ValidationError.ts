import CustomError from './CustomError'

class ValidationError extends CustomError {
  constructor(messages: string) {
    super(messages, 422)
  }
}

export default ValidationError
