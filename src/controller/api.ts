import {
  Inject,
  Controller,
  Provide,
  Query,
  Get,
  Post,
  ALL,
  Body,
  Put,
  Del,
} from '@midwayjs/decorator';
import { Context } from 'egg';
import { IGetUserResponse } from '../interface';
import { StudentService } from '../service/user';
import { Student } from '../entity/student';

@Provide()
@Controller('/api/student')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  studentService: StudentService;

  @Get('/get')
  async get(@Query() id: number): Promise<IGetUserResponse> {
    const students = await this.studentService.get(id);
    return { success: true, message: 'OK', data: students };
  }

  @Post('/save')
  async save(@Body(ALL) student: Student): Promise<IGetUserResponse> {
    const result = await this.studentService.save(student);
    return { success: true, message: 'OK', data: result };
  }

  @Put('/put')
  async put(@Body(ALL) student: Student): Promise<IGetUserResponse> {
    const result = await this.studentService.put(student);
    return { success: true, message: 'OK', data: result };
  }
  @Get('/list')
  async list(): Promise<IGetUserResponse> {
    const students = await this.studentService.list();
    return { success: true, message: 'OK', data: students };
  }
  @Del('/delete')
  async delete(@Query() id: number): Promise<IGetUserResponse> {
    const students = await this.studentService.delete(id);
    return { success: true, message: 'OK', data: students };
  }
}
