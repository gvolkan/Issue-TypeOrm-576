import { Driver } from "../../driver/Driver";
import { RelationIdLoadResult } from "../relation-id/RelationIdLoadResult";
import { ObjectLiteral } from "../../common/ObjectLiteral";
import { Alias } from "../Alias";
import { JoinAttribute } from "../JoinAttribute";
import { RelationCountLoadResult } from "../relation-count/RelationCountLoadResult";
import { EntityMetadata } from "../../metadata/EntityMetadata";
/**
 * Transforms raw sql results returned from the database into entity object.
 * Entity is constructed based on its entity metadata.
 */
export declare class RawSqlResultsToEntityTransformer {
    protected driver: Driver;
    protected joinAttributes: JoinAttribute[];
    protected rawRelationIdResults: RelationIdLoadResult[];
    protected rawRelationCountResults: RelationCountLoadResult[];
    constructor(driver: Driver, joinAttributes: JoinAttribute[], rawRelationIdResults: RelationIdLoadResult[], rawRelationCountResults: RelationCountLoadResult[]);
    /**
     * Since db returns a duplicated rows of the data where accuracies of the same object can be duplicated
     * we need to group our result and we must have some unique id (primary key in our case)
     */
    transform(rawResults: any[], alias: Alias): any[];
    /**
     * Groups given raw results by ids of given alias.
     */
    protected group(rawResults: any[], alias: Alias): any[][];
    /**
     * Transforms set of data results into single entity.
     */
    protected transformRawResultsGroup(rawResults: any[], alias: Alias): ObjectLiteral | undefined;
    protected transformColumns(rawResults: any[], alias: Alias, entity: ObjectLiteral, metadata: EntityMetadata): boolean;
    /**
     * Transforms joined entities in the given raw results by a given alias and stores to the given (parent) entity
     */
    protected transformJoins(rawResults: any[], entity: ObjectLiteral, alias: Alias): boolean;
    protected transformRelationIds(rawSqlResults: any[], alias: Alias, entity: ObjectLiteral): boolean;
    protected transformRelationCounts(rawSqlResults: any[], alias: Alias, entity: ObjectLiteral): boolean;
    private createValueMapFromJoinColumns(relation, parentAlias, rawSqlResults);
    private extractEntityPrimaryIds(relation, relationIdRawResult);
}
