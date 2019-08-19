import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Account } from './account';

@Entity('topics')
export class Topic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 150 })
  title: string;

  @Column({ type: 'varchar', length: 10000 })
  content: string;

  @Column({ type: 'tinyint', default: 0 })
  top: boolean; // 置顶帖

  @Column({ type: 'tinyint', default: 0 })
  good: boolean; // 精华帖

  @Column({ type: 'tinyint', default: 0 })
  lock: boolean; // 被锁定主题

  @Column({ type: 'int', default: 0 })
  reply_count: number; // 回复量

  @Column({ type: 'int', default: 0 })
  visit_count: number; // 访问量

  @Column({ type: 'int', default: 0 })
  collect_count: number; // 收藏量

  @Column({ type: 'varchar', length: 30 })
  last_reply: string; // 最后回复userid

  @Column({ default: () => 'NOW()' })
  last_reply_at: Date; // 最后回复时间

  @Column({ type: 'tinyint', default: 0 })
  content_is_html: boolean; // 内容是否为html

  @Column({ type: 'varchar' })
  tab: string; // 所属板块： ask 问答； share 分享； job 招聘； good 精华。

  @Column({ type: 'tinyint', default: 0, select: false })
  deleted: boolean;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @ManyToOne(() => Account, user => user.topics)
  author_id: string;
}
