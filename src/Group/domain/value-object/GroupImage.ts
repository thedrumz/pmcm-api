import StringValueObject from '../../../Shared/domain/value-object/StringValueObject'
import ValidationError from '../../../Shared/domain/exceptions/ValidationError'

class GroupImage extends StringValueObject {
  constructor(value: string) {
    super(value)

    this.ensureNotEmpty(value)
  }

  ensureNotEmpty = (value: string): void => {
    if (!value) throw new ValidationError('Image is required')
  }
}

export default GroupImage
