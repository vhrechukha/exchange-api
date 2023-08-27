import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { type BaseEntity } from 'typeorm';

import { ClassType } from '../types/class-type';

export function BaseResolver<T extends ClassType>(
  EntityClass: T,
  EntityDTOClass: any,
  EntityUpdateDTOClass: any,
  EntityService: any,
) {
  @Resolver({ isAbstract: true })
  abstract class BaseResolverHost {
    protected constructor(readonly _entityService: typeof EntityService) {}

    @Query(() => [EntityClass], { name: `${EntityClass.name.toLowerCase()}s` })
    async findAll(): Promise<BaseEntity[]> {
      return await this._entityService.findAll();
    }

    @Query(() => EntityClass, { name: `${EntityClass.name.toLowerCase()}` })
    async findOne(
      @Args('id', { type: () => Int }) id: number,
    ): Promise<BaseEntity> {
      return await this._entityService.findOne(id);
    }

    @Mutation(() => EntityClass)
    async create(
      @Args('createInput', { type: () => EntityDTOClass }) createInput: any, // Use the correct input type
    ): Promise<BaseEntity> {
      return await this._entityService.create(createInput);
    }

    @Mutation(() => EntityClass)
    async update(
      @Args('updateInput', { type: () => EntityUpdateDTOClass })
      updateInput: any,
    ): Promise<BaseEntity> {
      return await this._entityService.update(updateInput);
    }

    @Mutation(() => Boolean)
    async remove(
      @Args('id', { type: () => Int }) id: number,
    ): Promise<boolean> {
      return await this._entityService.remove(id);
    }
  }

  return BaseResolverHost;
}
