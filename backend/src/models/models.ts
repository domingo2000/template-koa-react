import { Table, Column, Model, BelongsToMany, ForeignKey, Scopes } from 'sequelize-typescript';

@Table({
  tableName: 'user_tricks',
  underscored: true,
})
class UserTrick extends Model {
  @ForeignKey(() => User)
  @Column
  UserId!: number;

  @ForeignKey(() => Trick)
  @Column
  TrickId!: number;
}

@Table({
  tableName: 'users',
  underscored: true,
})
class User extends Model {
  @Column
  name!: string;

  @BelongsToMany(() => Trick, () => UserTrick)
  tricks!: Array<Trick & {UserTrick: UserTrick}>;
  
}

@Table({
  tableName: 'tricks',
  underscored: true,
})
class Trick extends Model {
  @Column
  name!: string;

  @Column
  description!: string;

  @BelongsToMany(() => User, () => UserTrick)
  users!: User[];
}


export { User, Trick, UserTrick };
