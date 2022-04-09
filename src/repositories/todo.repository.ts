import {ContextTags, inject, injectable} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MemoryDataSource} from '../datasources';
import {Todo, TodoRelations} from '../models';

@injectable({tags: {[ContextTags.KEY]: 'repositorys.TodoRepository'}})
export class TodoRepository extends DefaultCrudRepository<
Todo,
typeof Todo.prototype.id,
TodoRelations
> {
  constructor(
    @inject('datasources.memory') dataSource: MemoryDataSource,
  ) {
    super(Todo, dataSource);
  }
}
