"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Index metadata contains all information about table's index.
 */
var IndexMetadata = (function () {
    // ---------------------------------------------------------------------
    // Constructor
    // ---------------------------------------------------------------------
    function IndexMetadata(options) {
        /**
         * Indicates if this index must be unique.
         */
        this.isUnique = false;
        /**
         * Indexed columns.
         */
        this.columns = [];
        /**
         * Map of column names with order set.
         * Used only by MongoDB driver.
         */
        this.columnNamesWithOrderingMap = {};
        this.entityMetadata = options.entityMetadata;
        if (options.columns)
            this.columns = options.columns;
        if (options.args) {
            this.target = options.args.target;
            this.isUnique = options.args.unique;
            this.givenName = options.args.name;
            this.givenColumnNames = options.args.columns;
        }
    }
    // ---------------------------------------------------------------------
    // Public Build Methods
    // ---------------------------------------------------------------------
    /**
     * Builds some depend index properties.
     * Must be called after all entity metadata's properties map, columns and relations are built.
     */
    IndexMetadata.prototype.build = function (namingStrategy) {
        var _this = this;
        var map = {};
        this.tableName = this.entityMetadata.tableName;
        // if columns already an array of string then simply return it
        if (this.givenColumnNames) {
            var columnPropertyNames_1 = [];
            if (this.givenColumnNames instanceof Array) {
                columnPropertyNames_1 = this.givenColumnNames;
                columnPropertyNames_1.forEach(function (name) { return map[name] = 1; });
            }
            else {
                // if columns is a function that returns array of field names then execute it and get columns names from it
                var columnsFnResult_1 = this.givenColumnNames(this.entityMetadata.propertiesMap);
                if (columnsFnResult_1 instanceof Array) {
                    columnPropertyNames_1 = columnsFnResult_1.map(function (i) { return String(i); });
                    columnPropertyNames_1.forEach(function (name) { return map[name] = 1; });
                }
                else {
                    columnPropertyNames_1 = Object.keys(columnsFnResult_1).map(function (i) { return String(i); });
                    Object.keys(columnsFnResult_1).forEach(function (columnName) { return map[columnName] = columnsFnResult_1[columnName]; });
                }
            }
            // console.log("columnPropertyNames:", columnPropertyNames);
            // console.log("this.entityMetadata.columns:", this.entityMetadata.columns);
            var columns_1 = this.entityMetadata.columns.filter(function (column) { return columnPropertyNames_1.indexOf(column.propertyPath) !== -1; });
            // console.log("columns:", columns);
            this.entityMetadata.relations
                .filter(function (relation) { return relation.isWithJoinColumn && columnPropertyNames_1.indexOf(relation.propertyName) !== -1; })
                .forEach(function (relation) { return columns_1.push.apply(columns_1, relation.joinColumns); });
            // todo: better to extract all validation into single place if possible
            var missingColumnNames = columnPropertyNames_1.filter(function (columnPropertyName) {
                return !_this.entityMetadata.columns.find(function (column) { return column.propertyPath === columnPropertyName; }) &&
                    !_this.entityMetadata.relations.find(function (relation) { return relation.isWithJoinColumn && relation.propertyPath === columnPropertyName; });
            });
            if (missingColumnNames.length > 0) {
                throw new Error("Index " + (this.givenName ? "\"" + this.givenName + "\" " : "") + "contains columns that are missing in the entity: " + missingColumnNames.join(", "));
            }
            this.columns = columns_1;
        }
        this.columnNamesWithOrderingMap = Object.keys(map).reduce(function (updatedMap, key) {
            var column = _this.entityMetadata.columns.find(function (column) { return column.propertyPath === key; });
            if (column)
                updatedMap[column.databaseName] = map[key];
            return updatedMap;
        }, {});
        this.name = namingStrategy.indexName(this.givenName ? this.givenName : undefined, this.entityMetadata.tableName, this.columns.map(function (column) { return column.databaseName; }));
        return this;
    };
    return IndexMetadata;
}());
exports.IndexMetadata = IndexMetadata;

//# sourceMappingURL=IndexMetadata.js.map
