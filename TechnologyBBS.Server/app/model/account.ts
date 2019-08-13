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
  is_delete: boolean;

  @Column({
    length: 500,
  })
  user_name: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  address: string;

  @Column({
    type: 'int',
    nullable: true,
  })
  age: number;

  @Column({
    type: 'int',
    width: 10,
    nullable: true,
  })
  gender: number;

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
