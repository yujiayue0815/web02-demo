import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import * as orm from '@midwayjs/orm';

import { Application } from 'egg';
import { join } from 'path';

import * as swagger from '@midwayjs/swagger';

@Configuration({
  imports: [swagger],
})
export class ContainerConfiguration {}
@Configuration({
  imports: [orm],
  importConfigs: [join(__dirname, './config')],
  conflictCheck: true,
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  async onReady() {}
}
