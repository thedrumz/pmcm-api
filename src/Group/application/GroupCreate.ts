import { FileRepository } from '../../File/domain/FileRepository'
import PersistenceError from '../../Shared/domain/exceptions/PersistenceError'
import Group, { GroupPrimitives } from '../domain/Group'
import { GroupRepository } from '../domain/GroupRepository'
import { UploadFilePrimitives } from '../domain/UploadFile'

interface Data {
  group: GroupPrimitives
  files: {
    image: UploadFilePrimitives
  }
}

class GroupCreate {
  private _groupRepository: GroupRepository
  private _fileRepository: FileRepository

  public constructor(groupRepository: GroupRepository, fileRepository: FileRepository) {
    this._groupRepository = groupRepository
    this._fileRepository = fileRepository
  }

  public run = async ({ group, files }: Data): Promise<GroupPrimitives> => {
    const groupId = Group.generateId()
    // const groupToSave = Group.fromPrimitives({ ...group })

    // Save file
    let fileUrl: string
    try {
      fileUrl = await this._fileRepository.upload(files.image.name, files.image.data, groupId)
    } catch (error) {
      throw new PersistenceError('File persistence error, group not created')
    }

    // Save group (with files)
    const groupToSave = Group.fromPrimitives({ ...group, image: fileUrl })
    // groupToSave.setImage(fileUrl)
    try {
      await this._groupRepository.save(groupToSave)
    } catch (error) {
      throw new PersistenceError('Database error, group not created')
    }
    return groupToSave.toPrimitives()
  }
}

export default GroupCreate
