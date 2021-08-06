class File {
  private _name: string
  private _data: Buffer

  constructor(name: string, data: Buffer) {
    this._name = name
    this._data = data
  }

  public name = (): string => {
    return this._name
  }

  public data = (): Buffer => {
    return this._data
  }
}

export default File
