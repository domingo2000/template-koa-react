import { Table, Column, Model, BelongsToMany, ForeignKey } from 'sequelize-typescript';

@Table
class UserTrick extends Model {
  @ForeignKey(() => User)
  @Column
  UserId!: number;

  @ForeignKey(() => Trick)
  @Column
  TrickId!: number;
}

@Table
class User extends Model {
  @Column
  name!: string;

  @BelongsToMany(() => Trick, () => UserTrick)
  tricks!: Array<Trick & {UserTrick: UserTrick}>;
  
}

@Table
class Trick extends Model {
  @Column
  name!: string;

  @Column
  description!: string;

  @BelongsToMany(() => User, () => UserTrick)
  users!: User[];
}


export { User, Trick, UserTrick };
