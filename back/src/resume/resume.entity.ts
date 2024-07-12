import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Resume {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 'longtext' }) 
  content: string;
  
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}