export interface FileRepository {
  upload(name: string, file: Buffer, folder: string): Promise<string>
}
