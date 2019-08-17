import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'tinyint',
    default: 0,
    select: false,
  })
  is_delete: number;

  // 用户名
  @Column({
    length: 500,
  })
  user_name: string;

  // 密码
  @Column()
  password: string;

  // 手机号
  @Column({
    length: 11,
    nullable: true,
  })
  mobile: string;

  // 地址
  @Column({
    nullable: true,
  })
  address: string;

  // 年龄
  @Column({
    type: 'int',
    nullable: true,
  })
  age: number;

  // 性别
  @Column({
    type: 'int',
    width: 10,
    nullable: true,
  })
  gender: number;

  // 标签
  @Column({
    type: 'simple-array',
    nullable: true,
  })
  tags: string[];

  @CreateDateColumn({ update: false })
  create_time: string;

  @UpdateDateColumn()
  update_time: string;
}
