import { v4 as uuidv4 } from 'uuid'

class Uuid {
  public value(): string {
    return uuidv4()
  }
}

export default Uuid
