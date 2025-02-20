import { Column, Entity, PrimaryColumn } from 'typeorm';

import crypto from 'crypto';

export enum ProjectStatus {
  Pending = 'pending',
  Active = 'active',
  Canceled = 'canceled',
  Completed = 'completed',
}

@Entity()
export class Project {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ type: 'datetime', nullable: true })
  started_at: Date | null;

  @Column({ type: 'datetime', nullable: true })
  canceled_at: Date | null;

  @Column({ type: 'datetime', nullable: true })
  forecasted_end_at: Date | null;

  @Column({ type: 'simple-enum', enum: ProjectStatus })
  status: ProjectStatus = ProjectStatus.Pending;

  constructor(
    props: {
      name: string;
      description: string;
      started_at?: Date | null;
      cancelled_at?: Date | null;
      forecasted_at?: Date | null;
    },
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id ?? crypto.randomUUID();
  }
}
