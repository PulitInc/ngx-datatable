"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DatatableGroupHeaderTemplateDirective = (function () {
    function DatatableGroupHeaderTemplateDirective(template) {
        this.template = template;
    }
    return DatatableGroupHeaderTemplateDirective;
}());
DatatableGroupHeaderTemplateDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[ngx-datatable-group-header-template]'
            },] },
];
/** @nocollapse */
DatatableGroupHeaderTemplateDirective.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
]; };
exports.DatatableGroupHeaderTemplateDirective = DatatableGroupHeaderTemplateDirective;
//# sourceMappingURL=body-group-header-template.directive.js.map