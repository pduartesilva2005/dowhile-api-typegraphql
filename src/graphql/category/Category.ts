import { ObjectType, Field } from "type-graphql";

@ObjectType()
export default class Category {
  @Field()
  name: String;

  @Field()
  description: String;

  @Field()
  _id: String;
}