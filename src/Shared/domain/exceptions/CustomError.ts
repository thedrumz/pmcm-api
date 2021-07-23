class CustomError extends Error {
  private _errorMessage: string
  private _statusCode: number

  constructor(errorMessage: string, statusCode: number) {
    super(errorMessage)
    this._statusCode = statusCode
    this._errorMessage = errorMessage
  }

  statusCode = (): number => this._statusCode
  errorMessage = (): string => this._errorMessage
}

export default CustomError
