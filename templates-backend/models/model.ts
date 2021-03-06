import { Table, Column, Model, BelongsTo, HasMany, BelongsToMany, ForeignKey, Scopes } from 'sequelize-typescript';

// _Resource
@Table({
  tableName: '_resources',
  underscored: true,
})
class _Resource extends Model {
  @Column
  name: string
}


// One to Many
@Table({
  tableName: '_players',
  underscored: true,
})
class _Player extends Model {
  @Column
  name: string

  @ForeignKey(() => _Team)
  @Column
  _teamId: number

  @BelongsTo(() => _Team)
  _team: _Team
}

@Table({
  tableName: '_teams',
  underscored: true,
})
class _Team extends Model {
  @Column
  name: string

  @HasMany(() => _Player)
  _players: _Player[]
}

// Many to Many
@Table({
  tableName: '_books',
  underscored: true,
})
class _Book extends Model {
  @BelongsToMany(() => _Author, () => _BookAuthor)
  _authors: _Author[]
}

@Table({
  tableName: '_authors',
  underscored: true,
})
class _Author extends Model {
  @BelongsToMany(() => _Book, () => _BookAuthor)
  _books: _Book[]
}

@Table({
  tableName: '_author_books',
  underscored: true,
})
class _BookAuthor extends Model {
  @ForeignKey(() => _Book)
  @Column
  _bookId: number

  @ForeignKey(() => _Author)
  @Column
  _authorId: number
}
