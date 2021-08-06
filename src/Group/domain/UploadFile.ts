export interface UploadFilePrimitives {
  name: string
  data: Buffer
}

class UploadFile {
  private _fileName: string
  private _fileData: Buffer

  constructor(name: string, data: Buffer) {
    this._fileName = name
    this._fileData = data
  }

  public fileName(): string {
    return this._fileName
  }

  public fileData(): Buffer {
    return this._fileData
  }

  public static fromPrimitives(plainData: UploadFilePrimitives): UploadFile {
    return new UploadFile(plainData.name, plainData.data)
  }

  public toPrimitives(): UploadFilePrimitives {
    return {
      name: this._fileName,
      data: this._fileData,
    }
  }
}

export default UploadFile
