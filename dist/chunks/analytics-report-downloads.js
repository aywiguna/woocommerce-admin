(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[13],{488:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return V}));var a=r(12),n=r.n(a),o=r(13),c=r.n(o),i=r(14),s=r.n(i),u=r(15),l=r.n(u),d=r(7),m=r.n(d),p=r(0),f=r(1),b=r.n(f),y=r(523),v=r(9),h=r.n(v),_=r(2),g=r(11),O=r(3),j=r(16),w=r.n(j),R=r(47),D=r(21),S=r(142),C=r(25),E=r(22),q=r(29),k=r(503),P=r(495);function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=m()(e);if(t){var n=m()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return l()(this,r)}}var x=function(e){s()(r,e);var t=F(r);function r(){var e;return n()(this,r),(e=t.call(this)).getHeadersContent=e.getHeadersContent.bind(h()(e)),e.getRowsContent=e.getRowsContent.bind(h()(e)),e.getSummary=e.getSummary.bind(h()(e)),e}return c()(r,[{key:"getHeadersContent",value:function(){return[{label:Object(_.__)("Date","woocommerce-admin"),key:"date",defaultSort:!0,required:!0,isLeftAligned:!0,isSortable:!0},{label:Object(_.__)("Product Title","woocommerce-admin"),key:"product",isSortable:!0,required:!0},{label:Object(_.__)("File Name","woocommerce-admin"),key:"file_name"},{label:Object(_.__)("Order #","woocommerce-admin"),screenReaderLabel:Object(_.__)("Order Number","woocommerce-admin"),key:"order_number"},{label:Object(_.__)("Username","woocommerce-admin"),key:"user_id"},{label:Object(_.__)("IP","woocommerce-admin"),key:"ip_address"}]}},{key:"getRowsContent",value:function(e){var t=this.props.query,r=Object(D.getPersistedQuery)(t),a=Object(C.g)("dateFormat",q.defaultTableDateFormat);return Object(O.map)(e,(function(e){var t,n,o=e._embedded,c=e.date,i=e.file_name,s=e.file_path,u=e.ip_address,l=e.order_id,d=e.order_number,m=e.product_id,f=e.username,b=o.product[0],y=b.code,v=b.name;if("woocommerce_rest_product_invalid_id"===y)t=Object(_.__)("(Deleted)","woocommerce-admin"),n=Object(_.__)("(Deleted)","woocommerce-admin");else{var h=Object(D.getNewPath)(r,"/analytics/products",{filter:"single_product",products:m});t=Object(p.createElement)(R.Link,{href:h,type:"wc-admin"},v),n=v}return[{display:Object(p.createElement)(R.Date,{date:c,visibleFormat:a}),value:c},{display:t,value:n},{display:Object(p.createElement)(R.Link,{href:s,type:"external"},i),value:i},{display:Object(p.createElement)(R.Link,{href:Object(C.f)("post.php?post=".concat(l,"&action=edit")),type:"wp-admin"},d),value:d},{display:f,value:f},{display:u,value:u}]}))}},{key:"getSummary",value:function(e){var t=e.download_count,r=void 0===t?0:t,a=this.props,n=a.query,o=a.defaultDateRange,c=Object(q.getCurrentDates)(n,o),i=w()(c.primary.after),s=w()(c.primary.before).diff(i,"days")+1,u=this.context.getCurrencyConfig();return[{label:Object(_._n)("day","days",s,"woocommerce-admin"),value:Object(S.formatValue)(u,"number",s)},{label:Object(_._n)("download","downloads",r,"woocommerce-admin"),value:Object(S.formatValue)(u,"number",r)}]}},{key:"render",value:function(){var e=this.props,t=e.query,r=e.filters,a=e.advancedFilters;return Object(p.createElement)(k.a,{endpoint:"downloads",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["download_count"],query:t,tableQuery:{_embed:!0},title:Object(_.__)("Downloads","woocommerce-admin"),columnPrefsKey:"downloads_report_columns",filters:r,advancedFilters:a})}}]),r}(p.Component);x.contextType=P.a;var T=Object(g.withSelect)((function(e){return{defaultDateRange:e(E.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range}}))(x),A=r(500),I=r(499),N=r(501),L=r(502);function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=m()(e);if(t){var n=m()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return l()(this,r)}}var V=function(e){s()(r,e);var t=M(r);function r(){return n()(this,r),t.apply(this,arguments)}return c()(r,[{key:"render",value:function(){var e=this.props,t=e.query,r=e.path;return Object(p.createElement)(p.Fragment,null,Object(p.createElement)(L.a,{query:t,path:r,filters:y.c,advancedFilters:y.a,report:"downloads"}),Object(p.createElement)(N.a,{charts:y.b,endpoint:"downloads",query:t,selectedChart:Object(A.a)(t.chart,y.b),filters:y.c,advancedFilters:y.a}),Object(p.createElement)(I.a,{charts:y.b,endpoint:"downloads",path:r,query:t,selectedChart:Object(A.a)(t.chart,y.b),filters:y.c,advancedFilters:y.a}),Object(p.createElement)(T,{query:t,filters:y.c,advancedFilters:y.a}))}}]),r}(p.Component);V.propTypes={query:b.a.object.isRequired}},497:function(e,t,r){"use strict";r.d(t,"e",(function(){return d})),r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return f})),r.d(t,"d",(function(){return b})),r.d(t,"f",(function(){return y})),r.d(t,"h",(function(){return v})),r.d(t,"g",(function(){return h}));var a=r(23),n=r(26),o=r.n(n),c=r(3),i=r(21),s=r(22),u=r(25),l=r(498);function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.identity;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,c="function"==typeof e?e(n):e,s=Object(i.getIdsFromQuery)(r);if(s.length<1)return Promise.resolve([]);var u={include:s.join(","),per_page:s.length};return o()({path:Object(a.addQueryArgs)(c,u)}).then((function(e){return e.map(t)}))}}d(s.NAMESPACE+"/products/attributes",(function(e){return{key:e.id,label:e.name}}));var m=d(s.NAMESPACE+"/products/categories",(function(e){return{key:e.id,label:e.name}})),p=d(s.NAMESPACE+"/coupons",(function(e){return{key:e.id,label:e.code}})),f=d(s.NAMESPACE+"/customers",(function(e){return{key:e.id,label:e.name}})),b=d(s.NAMESPACE+"/products",(function(e){return{key:e.id,label:e.name}})),y=d(s.NAMESPACE+"/taxes",(function(e){return{key:e.id,label:Object(l.a)(e)}}));function v(e){var t=e.attributes,r=e.name,a=Object(u.g)("variationTitleAttributesSeparator"," - ");if(r.indexOf(a)>-1)return r;var n=t.map((function(e){return e.option})).join(", ");return n?r+a+n:r}var h=d((function(e){var t=e.products;return t?s.NAMESPACE+"/products/".concat(t,"/variations"):s.NAMESPACE+"/variations"}),(function(e){return{key:e.id,label:v(e)}}))},498:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(2);function n(e){return[e.country,e.state,e.name||Object(a.__)("TAX","woocommerce-admin"),e.priority].map((function(e){return e.toString().toUpperCase().trim()})).filter(Boolean).join("-")}},499:function(e,t,r){"use strict";var a=r(5),n=r.n(a),o=r(12),c=r.n(o),i=r(13),s=r.n(i),u=r(14),l=r.n(u),d=r(15),m=r.n(d),p=r(7),f=r.n(p),b=r(0),y=r(2),v=r(20),h=r(73),_=r(11),g=r(3),O=r(1),j=r.n(O),w=r(47),R=r(22),D=r(29),S=r(495),C=r(496),E=r(21);function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=f()(e);if(t){var n=f()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return m()(this,r)}}var F=function(e){l()(r,e);var t=P(r);function r(){return c()(this,r),t.apply(this,arguments)}return s()(r,[{key:"shouldComponentUpdate",value:function(e){return e.isRequesting!==this.props.isRequesting||e.primaryData.isRequesting!==this.props.primaryData.isRequesting||e.secondaryData.isRequesting!==this.props.secondaryData.isRequesting||!Object(g.isEqual)(e.query,this.props.query)}},{key:"getItemChartData",value:function(){var e=this.props,t=e.primaryData,r=e.selectedChart;return t.data.intervals.map((function(e){var t={};return e.subtotals.segments.forEach((function(e){if(e.segment_label){var a=t[e.segment_label]?e.segment_label+" (#"+e.segment_id+")":e.segment_label;t[e.segment_id]={label:a,value:e.subtotals[r.key]||0}}})),k({date:Object(h.format)("Y-m-d\\TH:i:s",e.date_start)},t)}))}},{key:"getTimeChartData",value:function(){var e=this.props,t=e.query,r=e.primaryData,a=e.secondaryData,n=e.selectedChart,o=e.defaultDateRange,c=Object(D.getIntervalForQuery)(t),i=Object(D.getCurrentDates)(t,o),s=i.primary,u=i.secondary;return r.data.intervals.map((function(e,r){var o=Object(D.getPreviousDate)(e.date_start,s.after,u.after,t.compare,c),i=a.data.intervals[r];return{date:Object(h.format)("Y-m-d\\TH:i:s",e.date_start),primary:{label:"".concat(s.label," (").concat(s.range,")"),labelDate:e.date_start,value:e.subtotals[n.key]||0},secondary:{label:"".concat(u.label," (").concat(u.range,")"),labelDate:o.format("YYYY-MM-DD HH:mm:ss"),value:i&&i.subtotals[n.key]||0}}}))}},{key:"getTimeChartTotals",value:function(){var e=this.props,t=e.primaryData,r=e.secondaryData,a=e.selectedChart;return{primary:Object(g.get)(t,["data","totals",a.key],null),secondary:Object(g.get)(r,["data","totals",a.key],null)}}},{key:"renderChart",value:function(e,t,r,a){var n=this.props,o=n.emptySearchResults,c=n.filterParam,i=n.interactiveLegend,s=n.itemsLabel,u=n.legendPosition,l=n.path,d=n.query,m=n.selectedChart,p=n.showHeaderControls,f=n.primaryData,v=Object(D.getIntervalForQuery)(d),h=Object(D.getAllowedIntervalsForQuery)(d),_=Object(D.getDateFormatsForInterval)(v,f.data.intervals.length),g=o?Object(y.__)("No data for the current search","woocommerce-admin"):Object(y.__)("No data for the selected date range","woocommerce-admin"),O=this.context,j=O.formatAmount,S=O.getCurrencyConfig;return Object(b.createElement)(w.Chart,{allowedIntervals:h,data:r,dateParser:"%Y-%m-%dT%H:%M:%S",emptyMessage:g,filterParam:c,interactiveLegend:i,interval:v,isRequesting:t,itemsLabel:s,legendPosition:u,legendTotals:a,mode:e,path:l,query:d,screenReaderFormat:_.screenReaderFormat,showHeaderControls:p,title:m.label,tooltipLabelFormat:_.tooltipLabelFormat,tooltipTitle:"time-comparison"===e&&m.label||null,tooltipValueFormat:Object(R.getTooltipValueFormat)(m.type,j),chartType:Object(D.getChartTypeForQuery)(d),valueType:m.type,xFormat:_.xFormat,x2Format:_.x2Format,currency:S()})}},{key:"renderItemComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData;if(r.isError)return Object(b.createElement)(C.a,{isError:!0});var a=t||r.isRequesting,n=this.getItemChartData();return this.renderChart("item-comparison",a,n)}},{key:"renderTimeComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData,a=e.secondaryData;if(!r||r.isError||a.isError)return Object(b.createElement)(C.a,{isError:!0});var n=t||r.isRequesting||a.isRequesting,o=this.getTimeChartData(),c=this.getTimeChartTotals();return this.renderChart("time-comparison",n,o,c)}},{key:"render",value:function(){return"item-comparison"===this.props.mode?this.renderItemComparison():this.renderTimeComparison()}}]),r}(b.Component);F.contextType=S.a,F.propTypes={filters:j.a.array,isRequesting:j.a.bool,itemsLabel:j.a.string,limitProperties:j.a.array,mode:j.a.string,path:j.a.string.isRequired,primaryData:j.a.object,query:j.a.object.isRequired,secondaryData:j.a.object,selectedChart:j.a.shape({key:j.a.string.isRequired,label:j.a.string.isRequired,order:j.a.oneOf(["asc","desc"]),orderby:j.a.string,type:j.a.oneOf(["average","number","currency"]).isRequired}).isRequired},F.defaultProps={isRequesting:!1,primaryData:{data:{intervals:[]},isError:!1,isRequesting:!1},secondaryData:{data:{intervals:[]},isError:!1,isRequesting:!1}};t.a=Object(v.compose)(Object(_.withSelect)((function(e,t){var r=t.charts,a=t.endpoint,n=t.filters,o=t.isRequesting,c=t.limitProperties,i=t.query,s=t.advancedFilters,u=c||[a],l=function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||0===t.length)return null;var n=t.slice(0),o=n.pop();if(o.showFilters(r,a)){var c=Object(E.flattenFilters)(o.filters),i=r[o.param]||o.defaultValue||"all";return Object(g.find)(c,{value:i})}return e(n,r,a)}(n,i),d=Object(g.get)(l,["settings","param"]),m=t.mode||function(e,t){if(e&&t){var r=Object(g.get)(e,["settings","param"]);if(!r||Object.keys(t).includes(r))return Object(g.get)(e,["chartMode"])}return null}(l,i)||"time-comparison",p=e(R.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,f={mode:m,filterParam:d,defaultDateRange:p};if(o)return f;var b=u.some((function(e){return i[e]&&i[e].length}));if(i.search&&!b)return k(k({},f),{},{emptySearchResults:!0});var y=r&&r.map((function(e){return e.key})),v=Object(R.getReportChartData)({endpoint:a,dataType:"primary",query:i,select:e,limitBy:u,filters:n,advancedFilters:s,defaultDateRange:p,fields:y});if("item-comparison"===m)return k(k({},f),{},{primaryData:v});var h=Object(R.getReportChartData)({endpoint:a,dataType:"secondary",query:i,select:e,limitBy:u,filters:n,advancedFilters:s,defaultDateRange:p,fields:y});return k(k({},f),{},{primaryData:v,secondaryData:h})})))(F)},500:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(3);function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object(a.find)(t,{key:e});return r||t[0]}},501:function(e,t,r){"use strict";var a=r(12),n=r.n(a),o=r(13),c=r.n(o),i=r(14),s=r.n(i),u=r(15),l=r.n(u),d=r(7),m=r.n(d),p=r(0),f=r(2),b=r(20),y=r(11),v=r(1),h=r.n(v),_=r(21),g=r(47),O=r(142),j=r(22),w=r(29),R=r(27),D=r(496),S=r(495);function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=m()(e);if(t){var n=m()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return l()(this,r)}}var E=function(e){s()(r,e);var t=C(r);function r(){return n()(this,r),t.apply(this,arguments)}return c()(r,[{key:"formatVal",value:function(e,t){var r=this.context,a=r.formatAmount,n=r.getCurrencyConfig;return"currency"===t?a(e):Object(O.formatValue)(n(),t,e)}},{key:"getValues",value:function(e,t){var r=this.props,a=r.emptySearchResults,n=r.summaryData.totals,o=n.primary?n.primary[e]:0,c=n.secondary?n.secondary[e]:0,i=a?0:o,s=a?0:c;return{delta:Object(O.calculateDelta)(i,s),prevValue:this.formatVal(s,t),value:this.formatVal(i,t)}}},{key:"render",value:function(){var e=this,t=this.props,r=t.charts,a=t.query,n=t.selectedChart,o=t.summaryData,c=t.endpoint,i=t.report,s=t.defaultDateRange,u=o.isError,l=o.isRequesting;if(u)return Object(p.createElement)(D.a,{isError:!0});if(l)return Object(p.createElement)(g.SummaryListPlaceholder,{numberOfItems:r.length});var d=Object(w.getDateParamsFromQuery)(a,s).compare;return Object(p.createElement)(g.SummaryList,null,(function(t){var a=t.onToggle;return r.map((function(t){var r=t.key,o=t.order,s=t.orderby,u=t.label,l=t.type,m={chart:r};s&&(m.orderby=s),o&&(m.order=o);var b=Object(_.getNewPath)(m),y=n.key===r,v=e.getValues(r,l),h=v.delta,O=v.prevValue,j=v.value;return Object(p.createElement)(g.SummaryNumber,{key:r,delta:h,href:b,label:u,prevLabel:"previous_period"===d?Object(f.__)("Previous Period:","woocommerce-admin"):Object(f.__)("Previous Year:","woocommerce-admin"),prevValue:O,selected:y,value:j,onLinkClickCallback:function(){a&&a(),Object(R.recordEvent)("analytics_chart_tab_click",{report:i||c,key:r})}})}))}))}}]),r}(p.Component);E.propTypes={charts:h.a.array.isRequired,endpoint:h.a.string.isRequired,limitProperties:h.a.array,query:h.a.object.isRequired,selectedChart:h.a.shape({key:h.a.string.isRequired,label:h.a.string.isRequired,order:h.a.oneOf(["asc","desc"]),orderby:h.a.string,type:h.a.oneOf(["average","number","currency"]).isRequired}).isRequired,summaryData:h.a.object,report:h.a.string},E.defaultProps={summaryData:{totals:{primary:{},secondary:{}},isError:!1}},E.contextType=S.a,t.a=Object(b.compose)(Object(y.withSelect)((function(e,t){var r=t.charts,a=t.endpoint,n=t.limitProperties,o=t.query,c=t.filters,i=t.advancedFilters,s=n||[a],u=s.some((function(e){return o[e]&&o[e].length}));if(o.search&&!u)return{emptySearchResults:!0};var l=r&&r.map((function(e){return e.key})),d=e(j.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range;return{summaryData:Object(j.getSummaryNumbers)({endpoint:a,query:o,select:e,limitBy:s,filters:c,advancedFilters:i,defaultDateRange:d,fields:l}),defaultDateRange:d}})))(E)},523:function(e,t,r){"use strict";r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return p})),r.d(t,"a",(function(){return f}));var a,n,o=r(8),c=r.n(o),i=r(44),s=r.n(i),u=r(2),l=r(43),d=r(497),m=Object(l.applyFilters)("woocommerce_admin_downloads_report_charts",[{key:"download_count",label:Object(u.__)("Downloads","woocommerce-admin"),type:"number"}]),p=Object(l.applyFilters)("woocommerce_admin_downloads_report_filters",[{label:Object(u.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(u.__)("All Downloads","woocommerce-admin"),value:"all"},{label:Object(u.__)("Advanced Filters","woocommerce-admin"),value:"advanced"}]}]),f=Object(l.applyFilters)("woocommerce_admin_downloads_report_advanced_filters",{title:Object(u._x)("Downloads Match {{select /}} Filters","A sentence describing filters for Downloads. See screen shot for context: https://cloudup.com/ccxhyH2mEDg","woocommerce-admin"),filters:{product:{labels:{add:Object(u.__)("Product","woocommerce-admin"),placeholder:Object(u.__)("Search","woocommerce-admin"),remove:Object(u.__)("Remove product filter","woocommerce-admin"),rule:Object(u.__)("Select a product filter match","woocommerce-admin"),title:Object(u.__)("{{title}}Product{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(u.__)("Select product","woocommerce-admin")},rules:[{value:"includes",label:Object(u._x)("Includes","products","woocommerce-admin")},{value:"excludes",label:Object(u._x)("Excludes","products","woocommerce-admin")}],input:{component:"Search",type:"products",getLabels:d.d}},customer:{labels:{add:Object(u.__)("Username","woocommerce-admin"),placeholder:Object(u.__)("Search customer username","woocommerce-admin"),remove:Object(u.__)("Remove customer username filter","woocommerce-admin"),rule:Object(u.__)("Select a customer username filter match","woocommerce-admin"),title:Object(u.__)("{{title}}Username{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(u.__)("Select customer username","woocommerce-admin")},rules:[{value:"includes",label:Object(u._x)("Includes","customer usernames","woocommerce-admin")},{value:"excludes",label:Object(u._x)("Excludes","customer usernames","woocommerce-admin")}],input:{component:"Search",type:"usernames",getLabels:d.c}},order:{labels:{add:Object(u.__)("Order #","woocommerce-admin"),placeholder:Object(u.__)("Search order number","woocommerce-admin"),remove:Object(u.__)("Remove order number filter","woocommerce-admin"),rule:Object(u.__)("Select a order number filter match","woocommerce-admin"),title:Object(u.__)("{{title}}Order #{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(u.__)("Select order number","woocommerce-admin")},rules:[{value:"includes",label:Object(u._x)("Includes","order numbers","woocommerce-admin")},{value:"excludes",label:Object(u._x)("Excludes","order numbers","woocommerce-admin")}],input:{component:"Search",type:"orders",getLabels:(n=s()(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.split(","),e.next=3,r.map((function(e){return{id:e,label:"#"+e}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)})}},ip_address:{labels:{add:Object(u.__)("IP Address","woocommerce-admin"),placeholder:Object(u.__)("Search IP address","woocommerce-admin"),remove:Object(u.__)("Remove IP address filter","woocommerce-admin"),rule:Object(u.__)("Select an IP address filter match","woocommerce-admin"),title:Object(u.__)("{{title}}IP Address{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(u.__)("Select IP address","woocommerce-admin")},rules:[{value:"includes",label:Object(u._x)("Includes","IP addresses","woocommerce-admin")},{value:"excludes",label:Object(u._x)("Excludes","IP addresses","woocommerce-admin")}],input:{component:"Search",type:"downloadIps",getLabels:(a=s()(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.split(","),e.next=3,r.map((function(e){return{id:e,label:e}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})}}}})}}]);