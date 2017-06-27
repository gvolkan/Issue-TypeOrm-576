import { EntitySchema } from "./EntitySchema";
import { MetadataArgsStorage } from "../metadata-args/MetadataArgsStorage";
export declare class EntitySchemaTransformer {
    transform(schemas: EntitySchema[]): MetadataArgsStorage;
}
