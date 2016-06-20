System.register(["@angular/core", '../select2/select2.component', '../editable/editable.component', './queries/match.query', './queries/match_phrase.query', './queries/match_phase_prefix.query', './queries/range.query', './queries/gt.query', './queries/lt.query', './queries/term.query', './queries/exists.query', './queries/terms.query', './queries/prefix.query'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, select2_component_1, editable_component_1, match_query_1, match_phrase_query_1, match_phase_prefix_query_1, range_query_1, gt_query_1, lt_query_1, term_query_1, exists_query_1, terms_query_1, prefix_query_1;
    var SinglequeryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (select2_component_1_1) {
                select2_component_1 = select2_component_1_1;
            },
            function (editable_component_1_1) {
                editable_component_1 = editable_component_1_1;
            },
            function (match_query_1_1) {
                match_query_1 = match_query_1_1;
            },
            function (match_phrase_query_1_1) {
                match_phrase_query_1 = match_phrase_query_1_1;
            },
            function (match_phase_prefix_query_1_1) {
                match_phase_prefix_query_1 = match_phase_prefix_query_1_1;
            },
            function (range_query_1_1) {
                range_query_1 = range_query_1_1;
            },
            function (gt_query_1_1) {
                gt_query_1 = gt_query_1_1;
            },
            function (lt_query_1_1) {
                lt_query_1 = lt_query_1_1;
            },
            function (term_query_1_1) {
                term_query_1 = term_query_1_1;
            },
            function (exists_query_1_1) {
                exists_query_1 = exists_query_1_1;
            },
            function (terms_query_1_1) {
                terms_query_1 = terms_query_1_1;
            },
            function (prefix_query_1_1) {
                prefix_query_1 = prefix_query_1_1;
            }],
        execute: function() {
            SinglequeryComponent = (function () {
                function SinglequeryComponent() {
                    this.queryList = this.queryList;
                    this.removeArray = [];
                    this.selector = {
                        field: 'field-select',
                        query: 'query-select'
                    };
                    this.informationList = {};
                }
                // on initialize set the query selector
                SinglequeryComponent.prototype.ngOnInit = function () {
                    this.querySelector = '.query-' + this.queryIndex + '-' + this.internalIndex;
                };
                SinglequeryComponent.prototype.ngOnChanges = function () {
                    setTimeout(function () {
                        if (this.query.selectedField) {
                            console.log(this.result.resultQuery.availableFields);
                            var isFieldExists = this.getField(this.query.selectedField);
                            if (!isFieldExists.length) {
                                this.removeQuery();
                            }
                        }
                    }.bind(this), 300);
                };
                SinglequeryComponent.prototype.ngAfterViewInit = function () {
                    console.log('here', this.existsQuery);
                    this.informationList = {
                        'match': this.matchQuery.information,
                        'match_phrase': this.match_phraseQuery.information,
                        'match-phase-prefix': this.match_phase_prefixQuery.information,
                        'range': this.rangeQuery.information,
                        'gt': this.gtQuery.information,
                        'lt': this.ltQuery.information,
                        'term': this.termQuery.information,
                        'terms': this.termsQuery.information,
                        'exists': this.existsQuery.information
                    };
                };
                SinglequeryComponent.prototype.getQueryFormat = function (outputQuery) {
                    this.query.appliedQuery = outputQuery;
                    console.log(this.query.appliedQuery);
                    this.buildQuery();
                };
                // delete query
                SinglequeryComponent.prototype.removeQuery = function () {
                    this.internal.splice(this.internalIndex, 1);
                    this.buildQuery();
                };
                // field select - change event
                // On selecting the field, we are checking if field is analyzed or not
                // and according to that show the available query
                SinglequeryComponent.prototype.analyzeTest = function (res) {
                    $(res.selector).parents('.editable-pack').removeClass('on');
                    this.query.field = this.getField(res.val)[0];
                    this.query.analyzeTest = this.query.field.index === 'not_analyzed' ? 'not_analyzed' : 'analyzed';
                    this.query.type = this.query.field.type;
                    this.query.selectedField = res.val;
                    this.buildQuery();
                };
                // Query select - change event
                SinglequeryComponent.prototype.queryCallback = function (res) {
                    res.selector.parents('.editable-pack').removeClass('on');
                    this.query.query = res.val;
                    this.query.selectedQuery = this.queryList[this.query.analyzeTest][this.query.type][this.query.query];
                    this.buildQuery();
                };
                // build the query
                // buildquery method is inside build.component
                SinglequeryComponent.prototype.exeBuild = function () {
                    var _this = this;
                    setTimeout(function () { return _this.buildQuery(); }, 300);
                };
                SinglequeryComponent.prototype.getField = function (fieldName) {
                    return this.result.resultQuery.availableFields.filter(function (ele) {
                        return ele.name === fieldName;
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SinglequeryComponent.prototype, "mapping", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SinglequeryComponent.prototype, "types", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SinglequeryComponent.prototype, "selectedTypes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SinglequeryComponent.prototype, "result", void 0);
                __decorate([
                    core_1.ViewChild(match_query_1.MatchQuery), 
                    __metadata('design:type', match_query_1.MatchQuery)
                ], SinglequeryComponent.prototype, "matchQuery", void 0);
                __decorate([
                    core_1.ViewChild(match_phrase_query_1.Match_phraseQuery), 
                    __metadata('design:type', match_phrase_query_1.Match_phraseQuery)
                ], SinglequeryComponent.prototype, "match_phraseQuery", void 0);
                __decorate([
                    core_1.ViewChild(match_phase_prefix_query_1.Match_phase_prefixQuery), 
                    __metadata('design:type', match_phase_prefix_query_1.Match_phase_prefixQuery)
                ], SinglequeryComponent.prototype, "match_phase_prefixQuery", void 0);
                __decorate([
                    core_1.ViewChild(range_query_1.RangeQuery), 
                    __metadata('design:type', range_query_1.RangeQuery)
                ], SinglequeryComponent.prototype, "rangeQuery", void 0);
                __decorate([
                    core_1.ViewChild(gt_query_1.GtQuery), 
                    __metadata('design:type', gt_query_1.GtQuery)
                ], SinglequeryComponent.prototype, "gtQuery", void 0);
                __decorate([
                    core_1.ViewChild(lt_query_1.LtQuery), 
                    __metadata('design:type', lt_query_1.LtQuery)
                ], SinglequeryComponent.prototype, "ltQuery", void 0);
                __decorate([
                    core_1.ViewChild(term_query_1.TermQuery), 
                    __metadata('design:type', term_query_1.TermQuery)
                ], SinglequeryComponent.prototype, "termQuery", void 0);
                __decorate([
                    core_1.ViewChild(terms_query_1.TermsQuery), 
                    __metadata('design:type', terms_query_1.TermsQuery)
                ], SinglequeryComponent.prototype, "termsQuery", void 0);
                __decorate([
                    core_1.ViewChild(prefix_query_1.PrefixQuery), 
                    __metadata('design:type', prefix_query_1.PrefixQuery)
                ], SinglequeryComponent.prototype, "prefixQuery", void 0);
                __decorate([
                    core_1.ViewChild(exists_query_1.ExistsQuery), 
                    __metadata('design:type', exists_query_1.ExistsQuery)
                ], SinglequeryComponent.prototype, "existsQuery", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SinglequeryComponent.prototype, "query", void 0);
                SinglequeryComponent = __decorate([
                    core_1.Component({
                        selector: 'single-query',
                        templateUrl: './app/build/singlequery/singlequery.component.html',
                        inputs: ['mapping', 'types', 'selectedTypes', 'result', 'config', 'query', 'queryList', 'addQuery', 'internal', 'internalIndex', 'queryIndex', 'buildQuery', 'buildInsideQuery', 'buildSubQuery', 'createQuery', 'setQueryFormat', 'editorHookHelp', 'urlShare'],
                        directives: [
                            editable_component_1.EditableComponent,
                            SinglequeryComponent,
                            select2_component_1.select2Component,
                            match_query_1.MatchQuery,
                            match_phrase_query_1.Match_phraseQuery,
                            match_phase_prefix_query_1.Match_phase_prefixQuery,
                            range_query_1.RangeQuery,
                            gt_query_1.GtQuery,
                            lt_query_1.LtQuery,
                            term_query_1.TermQuery,
                            terms_query_1.TermsQuery,
                            exists_query_1.ExistsQuery
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SinglequeryComponent);
                return SinglequeryComponent;
            }());
            exports_1("SinglequeryComponent", SinglequeryComponent);
        }
    }
});
//# sourceMappingURL=singlequery.component.js.map