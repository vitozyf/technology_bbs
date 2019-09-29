import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Leave {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30, charset: 'utf8mb4' })
  name: string;

  @Column({ type: 'float' })
  sick_leave: number;

  @Column({ type: 'float' })
  private_leave: number;

  @Column({ type: 'float' })
  other_leave: number;

  @Column({ type: 'datetime' })
  leave_start_time: string;

  @Column({ type: 'datetime' })
  leave_end_time: string;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
