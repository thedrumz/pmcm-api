import { FileRepository } from '../domain/FileRepository'

class TestFileRepository implements FileRepository {
  public upload = async (name: string, file: Buffer, folder: string): Promise<string> => {
    return new Promise((res) => {
      res('http://domain.com/path/to/image')
    })
  }
}

export default TestFileRepository
