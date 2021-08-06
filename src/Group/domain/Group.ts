import GroupId from './value-object/GroupId'
import GroupImage from './value-object/GroupImage'
import GroupName from './value-object/GroupName'
import GroupStyle from './value-object/GroupStyle'

export interface GroupPrimitives {
  groupId?: string
  groupName: string
  style: string
  image: string
}

class Group {
  private _groupId: GroupId
  private _groupName: GroupName
  private _style: GroupStyle
  private _image: GroupImage

  constructor(groupId: GroupId, groupName: GroupName, style: GroupStyle, image?: GroupImage) {
    this._groupName = groupName
    this._groupId = groupId
    this._style = style
    this._image = image
  }

  public groupName(): string {
    return this._groupName.value()
  }

  public groupId(): string {
    return this._groupId.value()
  }

  public style(): string {
    return this._style.value()
  }

  public image(): string {
    return this._image.value()
  }

  public setImage(image: string): void {
    this._image = new GroupImage(image)
  }

  public static fromPrimitives({ groupName, style, image }: GroupPrimitives): Group {
    return new Group(new GroupId(), new GroupName(groupName), new GroupStyle(style), new GroupImage(image))
  }

  public static generateId(): string {
    return new GroupId().value()
  }

  public toPrimitives(): GroupPrimitives {
    return {
      groupId: this._groupId.value(),
      groupName: this._groupName.value(),
      style: this._style.value(),
      image: this._image.value(),
    }
  }
}

export default Group
