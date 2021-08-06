import { FileRepository } from '../domain/FileRepository'
import AWS from 'aws-sdk'

class AwsRepository implements FileRepository {
  private _s3: AWS.S3

  constructor() {
    this._s3 = new AWS.S3({
      accessKeyId: 'AKIAY2GCTB2QPQG4LXVW',
      secretAccessKey: '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',
    })
  }

  public upload = async (name: string, file: Buffer, folder: string): Promise<string> => {
    const params = {
      Bucket: 'pmcm-v2',
      Key: `${folder}/${name}`,
      Body: file,
    }
    const res = await this._s3.upload(params).promise()
    return res.Location
  }
}

export default AwsRepository
