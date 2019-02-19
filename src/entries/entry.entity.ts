import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Entry {
  @PrimaryColumn()
  id: string;

  @Column()
  display_name: string;

  @Column()
  email: string;
}