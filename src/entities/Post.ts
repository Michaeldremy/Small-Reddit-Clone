import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

// This is creating a table and fields of that table in our database
@Entity()
export class Post {
  @PrimaryKey()
  id!: number;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  title!: string;

}