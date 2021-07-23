import { Request as Req } from 'express'
import { ContainerBuilder } from 'node-dependency-injection'

interface RequestWithDIContainer extends Req {
  container: ContainerBuilder
}

export default RequestWithDIContainer
