import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Rule, RuleType } from "@midwayjs/decorator";

@EntityModel('student')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  @Rule(RuleType.number().required())
  name: string;
  @Column()
  @Rule(RuleType.number().required())
  address: string;
  @Column()
  sex: string;
  @Column()
  @Rule(RuleType.number().required().min(0).max(100))
  age: number;
  @Column({
    type: 'datetime',
    name: 'create_time',
  })
  createTime: Date;
}
