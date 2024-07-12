import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Resume {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;
  
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}