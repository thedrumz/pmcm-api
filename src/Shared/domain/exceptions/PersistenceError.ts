import CustomError from './CustomError'

class PersistenceError extends CustomError {
  constructor(messages: string) {
    super(messages, 500)
  }
}

export default PersistenceError
