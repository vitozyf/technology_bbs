import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30, charset: 'utf8mb4' })
  name: string;

  @Column({ type: 'float' })
  need_days: number;

  @Column({ type: 'varchar', length: 20 })
  gowork_tile: string;

  @Column({ type: 'varchar', length: 20 })
  afterwork_tile: string;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
