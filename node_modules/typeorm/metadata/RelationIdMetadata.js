"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Contains all information about entity's relation count.
 */
var RelationIdMetadata = (function () {
    // ---------------------------------------------------------------------
    // Constructor
    // ---------------------------------------------------------------------
    function RelationIdMetadata(options) {
        this.entityMetadata = options.entityMetadata;
        this.target = options.args.target;
        this.propertyName = options.args.propertyName;
        this.relationNameOrFactory = options.args.relation;
        this.alias = options.args.alias;
        this.queryBuilderFactory = options.args.queryBuilderFactory;
    }
    // ---------------------------------------------------------------------
    // Public Builder Methods
    // ---------------------------------------------------------------------
    /**
     * Builds some depend relation id properties.
     * This builder method should be used only after entity metadata, its properties map and all relations are build.
     */
    RelationIdMetadata.prototype.build = function () {
        var propertyPath = this.relationNameOrFactory instanceof Function ? this.relationNameOrFactory(this.entityMetadata.propertiesMap) : this.relationNameOrFactory;
        var relation = this.entityMetadata.findRelationWithPropertyPath(propertyPath);
        if (!relation)
            throw new Error("Cannot find relation " + propertyPath + ". Wrong relation specified for @RelationId decorator.");
        this.relation = relation;
    };
    return RelationIdMetadata;
}());
exports.RelationIdMetadata = RelationIdMetadata;

//# sourceMappingURL=RelationIdMetadata.js.map
