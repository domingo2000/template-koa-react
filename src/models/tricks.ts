import { Table, Column, Model } from 'sequelize-typescript';

@Table
class Trick extends Model {
  @Column
  name!: string;

  @Column
  description!: string;
}

export default Trick;
