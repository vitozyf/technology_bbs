import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('clocking')
export class Clocking {
  @PrimaryGeneratedColumn()
  id: number;

  // 部门
  @Column({ type: 'varchar', length: 300, charset: 'utf8mb4' })
  department: string;

  @Column({ type: 'varchar', length: 300, charset: 'utf8mb4' })
  name: string;

  @Column({ type: 'double' })
  attendance_days: number;

  @Column({ type: 'double' })
  actual_attendance_days: number;

  @Column({ type: 'double', nullable: true })
  leakage_num: number;

  @Column({ type: 'double', nullable: true })
  late_days: number;

  @Column({ type: 'double', nullable: true })
  leave_early_days: number;

  @Column({ type: 'double' })
  absenteeism_days: number;

  @Column({ type: 'double' })
  sick_leave_days: number;

  @Column({ type: 'double' })
  private_affair_leave_days: number;

  @Column({ type: 'double' })
  other_leave_days: number;

  @Column({ type: 'varchar', length: 2000, charset: 'utf8mb4' })
  remake: string;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
