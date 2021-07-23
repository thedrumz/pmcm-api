class StringValueObject {
  private _value: string

  constructor(value: string) {
    this._value = value
  }

  public value(): string {
    return this._value
  }
}

export default StringValueObject
