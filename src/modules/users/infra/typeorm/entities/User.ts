import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import {
  IsEmail,
  MinLength,
  MaxLength,
  validateOrReject,
} from "class-validator";
import BaseEntity from "./BaseEntity";

@Entity("users")
export default class User extends BaseEntity {
  @Column({ type: "varchar", length: 80 })
  @MinLength(3, { message: "Name is too short" })
  @MaxLength(80, { message: "Name is too long" })
  name: string;

  @Column({ type: "varchar", length: 180, unique: true })
  @MaxLength(180, { message: "Email is too long" })
  @MinLength(3, { message: "Email is too short" })
  @IsEmail({}, { message: "Email is not valid" })
  email: string;

  @Column({ type: "varchar", length: 255, select: false })
  @MinLength(6, { message: "Password must be at least 6 characters" })
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async isValid() {
    await validateOrReject(this);
  }
}
