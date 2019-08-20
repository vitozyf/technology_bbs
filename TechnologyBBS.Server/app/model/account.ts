import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Topic } from './topic';

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'tinyint',
    default: 0,
    select: false,
    transformer: {
      from(value) {
        return !!value;
      },

      to(value) {
        return value ? 1 : 0;
      },
    },
  })
  is_delete: boolean;

  @Column({
    length: 500,
    nullable: true,
  })
  name: string; // 用户名

  @Column({
    length: 500,
  })
  user_name: string; // 登录用户名

  @Column()
  password: string; // 密码

  @Column({ nullable: true })
  email: string; // email

  @Column({ nullable: true })
  url: string; // 个人主页

  @Column({
    length: 11,
    nullable: true,
  })
  mobile: string; // 手机号

  @Column({
    type: 'int',
    nullable: true,
  })
  gender: number; // 性别

  @Column({
    type: 'simple-array',
    nullable: true,
    charset: 'utf8mb4',
  })
  tags: string[]; // 标签

  @Column({ type: 'varchar', length: 200, charset: 'utf8mb4', nullable: true })
  location: string; // 所在地点

  @Column({ type: 'varchar', length: 500, charset: 'utf8mb4', nullable: true })
  signature: string; // 签名

  @Column({ type: 'varchar', length: 100, nullable: true })
  avatar: string; // 头像

  @Column({
    type: 'tinyint',
    default: 0,
    transformer: {
      from(value) {
        return !!value;
      },

      to(value) {
        return value ? 1 : 0;
      },
    },
  })
  is_block: boolean; // 是否锁定

  @Column({ type: 'int', default: 0 })
  topic_count: number; // 话题量

  @Column({ type: 'int', default: 0 })
  reply_count: number; // 回复量

  @Column({ type: 'int', default: 0 })
  following_count: number; // 关注量

  @Column({ type: 'int', default: 0 })
  follower_count: number; // 被关注量

  @Column({ type: 'int', default: 0 })
  score: number; // 积分

  @Column({ type: 'int', default: 0 })
  collect_topic_count: number; // 收藏的话题数量

  @CreateDateColumn()
  create_at: string;

  @UpdateDateColumn()
  update_at: string;

  @OneToMany(() => Topic, topic => topic.author_id)
  topics: Topic[];
}

// profile_image_url: { type: String },
// profile: { type: String },
// weibo: { type: String },
// githubId: { type: String },
// githubUsername: { type: String },
// githubAccessToken: { type: String },
// collect_tag_count: { type: Number, default: 0 },
// is_star: { type: Boolean },
// level: { type: String },
// active: { type: Boolean, default: false },
// receive_reply_mail: { type: Boolean, default: false },
// receive_at_mail: { type: Boolean, default: false },
// from_wp: { type: Boolean },
// retrieve_time: { type: Number },
// retrieve_key: { type: String },
// accessToken: { type: String },
