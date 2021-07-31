import GroupId from './value-object/GroupId'
import GroupName from './value-object/GroupName'
import GroupStyle from './value-object/GroupStyle'

export interface GroupPrimitives {
  groupId?: string
  groupName: string
  style: string
}

class Group {
  private _groupId: GroupId
  private _groupName: GroupName
  private _style: GroupStyle

  constructor(groupId: GroupId, groupName: GroupName, style: GroupStyle) {
    this._groupName = groupName
    this._groupId = groupId
    this._style = style
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

  public static fromPrimitives(plainData: GroupPrimitives): Group {
    return new Group(new GroupId(), new GroupName(plainData.groupName), new GroupStyle(plainData.style))
  }

  public toPrimitives(): GroupPrimitives {
    return {
      groupId: this._groupId.value(),
      groupName: this._groupName.value(),
      style: this._style.value(),
    }
  }
}

export default Group
