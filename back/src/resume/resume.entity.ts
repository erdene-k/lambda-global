import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Resume {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" }) 
  content: string;
  
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}