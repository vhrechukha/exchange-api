import { Injectable, NotFoundException } from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export abstract class BaseService<T = any> {
  protected constructor(
    readonly _entity: { new (): T },
    private readonly _repository: Repository<T>,
  ) {}

  async create(createInput: DeepPartial<T>): Promise<T> {
    const entity = this._repository.create(createInput);
    return await this._repository.save(entity);
  }

  async findAll(): Promise<T[]> {
    return await this._repository.find();
  }

  async findOne(id: number): Promise<T> {
    const entity = await this._repository.findOneBy({ id } as any);
    if (!entity) {
      throw new NotFoundException(`${this._entity.name} not found`);
    }
    return entity;
  }

  async update(id: number, updateInput: DeepPartial<T>): Promise<T> {
    await this.findOne(id); // to check if entity exists
    await this._repository.update(id, updateInput as any); // Casting to any
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this._repository.delete(id);
    return result.affected > 0;
  }
}
