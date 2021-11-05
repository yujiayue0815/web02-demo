import { Provide } from '@midwayjs/decorator';
import { Repository } from 'typeorm';
import { Student } from '../entity/student';
import { InjectEntityModel } from '@midwayjs/orm';

@Provide()
export class StudentService {
  @InjectEntityModel(Student)
  studentModel: Repository<Student>;
  async get(id: number) {
    const student = new Student();
    student.id = id;
    return await this.studentModel.find(student);
  }

  async save(student: Student) {
    return await this.studentModel.save(student);
  }

  async put(student: Student) {
    return this.studentModel.save(student);
  }

  async delete(id: number) {
    return await this.studentModel.delete(id);
  }

  async list() {
    return await this.studentModel.find();
  }
}
