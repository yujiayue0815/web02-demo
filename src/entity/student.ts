import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@EntityModel('student')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  address: string;
  @Column()
  sex: string;
  @Column()
  age: number;
  @Column({
    type: 'datetime',
    name: 'create_time',
  })
  createTime: Date;
}
