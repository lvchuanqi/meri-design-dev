(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{292:function(t,a,s){"use strict";s.r(a);var e={name:"PickerTimeView",data:()=>({timeH:"08",timeHm:"08:09",timeHms:"",timeHDouble:"",timeHmDouble:"",timeHmsDouble:"11:09:31-13:14:42",timeEnd24HmDouble:"",timeEnd2400HmDouble:"",scopes:[]}),methods:{timeChangeH(t){console.log("选择的时分::::",t),this.timeH=t},timeChangeHm(t){console.log("选择的时分::::",t),this.timeHm=t},timeChangeHms(t){console.log("选择的时分秒::::",t),this.timeHms=t},timeChangeHDouble(t){console.log("选择的时分秒::::",t),this.timeHDouble=t},timeChangeHmDouble(t){console.log("选择的时分秒::::",t),this.timeHmDouble=t},timeChangeHmsDouble(t){console.log("选择的时分秒::::",t),this.timeHmsDouble=t},timeEnd24ChangeHmsDouble(t){console.log("选择的时分秒::::",t),this.scopes=[t]},timeEnd2400ChangeHmDouble(t){console.log("选择的时分秒::::",t)}}},n=s(7),r=Object(n.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"pickertime-时分秒选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pickertime-时分秒选择"}},[t._v("#")]),t._v(" PickerTime 时分秒选择")]),t._v(" "),s("h3",{attrs:{id:"时间点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时间点"}},[t._v("#")]),t._v(" 时间点")]),t._v(" "),s("h4",{attrs:{id:"format-h"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#format-h"}},[t._v("#")]),t._v(' format="h"')]),t._v(" "),s("PickerTime",{attrs:{time:t.timeH,format:"h"},on:{change:t.timeChangeH}}),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PickerTime")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":time")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("timeH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@change")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("timeChangeH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\ntimeH: '08'\ntimeChangeH(time) {\n    this.timeH = time;\n}\n")])])]),s("h4",{attrs:{id:"format-hm-scopetime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#format-hm-scopetime"}},[t._v("#")]),t._v(' format="hm" + scopeTime')]),t._v(" "),s("PickerTime",{attrs:{time:t.timeHm,format:"hm",scopeTime:"10:01:29-20:30:49"},on:{change:t.timeChangeHm}}),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PickerTime")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":time")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("timeHm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scopeTime")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("10:01:29-20:30:49"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@change")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("timeChangeHm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\ntimeHm: '10:09'\ntimeChangeHm(time) {\n    this.timeHm = time;\n}\n")])])]),s("h4",{attrs:{id:"format-hms-scopetime-hideclear-placeholder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#format-hms-scopetime-hideclear-placeholder"}},[t._v("#")]),t._v(' format="hms" + scopeTime + hideClear + placeholder')]),t._v(" "),s("PickerTime",{attrs:{time:t.timeHms,format:"hms",scopeTime:"10:01:29-20:30:49",hideClear:!0,placeholder:"请选择"},on:{change:t.timeChangeHms}}),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PickerTime")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":time")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("timeHms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scopeTime")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("10:01:29-20:30:49"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":hideClear")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("placeholder")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("请选择"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@change")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("timeChangeHms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\ntimeHms: ''\ntimeChangeHms(time) {\n    this.timeHms = time;\n}\n")])])]),s("h3",{attrs:{id:"时间段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时间段"}},[t._v("#")]),t._v(" 时间段")]),t._v(" "),s("h4",{attrs:{id:"format-h-range"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#format-h-range"}},[t._v("#")]),t._v(' format="h" + range')]),t._v(" "),s("PickerTime",{attrs:{time:t.timeHDouble,format:"h",range:!0},on:{change:t.timeChangeHDouble}}),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PickerTime")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":time")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("timeHDouble"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":range")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@change")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("timeChangeHDouble"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\ntimeHDouble: ''\ntimeChangeHDouble(time) {\n    this.timeHDouble = time;\n}\n")])])]),s("h4",{attrs:{id:"format-hm-range"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#format-hm-range"}},[t._v("#")]),t._v(' format="hm" + range')]),t._v(" "),s("PickerTime",{attrs:{time:t.timeHmDouble,format:"hm",range:!0},on:{change:t.timeChangeHmDouble}}),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PickerTime")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":time")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("timeHmDouble"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":range")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@change")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("timeChangeHmDouble"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\ntimeHmDouble: ''\ntimeChangeHmDouble(time) {\n    this.timeHmDouble = time;\n}\n")])])]),s("h4",{attrs:{id:"format-hms-scopetime-range-hideclear-placeholder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#format-hms-scopetime-range-hideclear-placeholder"}},[t._v("#")]),t._v(' format="hms" + scopeTime + range + hideClear + placeholder')]),t._v(" "),s("PickerTime",{attrs:{time:t.timeHmsDouble,format:"hms",scopeTime:"10:01:29-20:30:49",range:!0,hideClear:!0,placeholder:"开始-结束"},on:{change:t.timeChangeHmsDouble}}),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PickerTime")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":time")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("timeHmsDouble"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scopeTime")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("10:01:29-20:30:49"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":range")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":hideClear")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("placeholder")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("开始-结束"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@change")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("timeChangeHmsDouble"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\ntimeHmsDouble: '11:09:31-13:14:42'\ntimeChangeHmsDouble(time) {\n    this.timeHmsDouble = time;\n}\n")])])]),s("h3",{attrs:{id:"attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("#")]),t._v(" Attributes")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("必须")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("time")]),t._v(" "),s("td",[t._v("时间")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("''")]),t._v(" "),s("td",[t._v("no")])]),t._v(" "),s("tr",[s("td",[t._v("format")]),t._v(" "),s("td",[t._v("时分秒格式可选值【h/hm/hms】")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("'hms'")]),t._v(" "),s("td",[t._v("no")])]),t._v(" "),s("tr",[s("td",[t._v("scopeTime")]),t._v(" "),s("td",[t._v("可选择的时间段")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("''")]),t._v(" "),s("td",[t._v("no")])]),t._v(" "),s("tr",[s("td",[t._v("range")]),t._v(" "),s("td",[t._v("开启时间段选择器")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("no")])]),t._v(" "),s("tr",[s("td",[t._v("disabled")]),t._v(" "),s("td",[t._v("禁用点击")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("no")])]),t._v(" "),s("tr",[s("td",[t._v("hideClear")]),t._v(" "),s("td",[t._v("是否隐藏清除按钮")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("no")])]),t._v(" "),s("tr",[s("td",[t._v("placeholder")]),t._v(" "),s("td",[t._v("占位符")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("'选择时间'/'开始时间-结束时间'")])]),t._v(" "),s("tr",[s("td",[t._v("change")]),t._v(" "),s("td",[t._v("提交选中时间回调")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("--")]),t._v(" "),s("td",[t._v("Yes")])]),t._v(" "),s("tr",[s("td",[t._v("focusChange")]),t._v(" "),s("td",[t._v("时间空间展开的回调")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("--")]),t._v(" "),s("td",[t._v("No")])]),t._v(" "),s("tr",[s("td",[t._v("errorText")]),t._v(" "),s("td",[t._v("错误提示文本")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("''")]),t._v(" "),s("td",[t._v("no")])]),t._v(" "),s("tr",[s("td",[t._v("errorShow")]),t._v(" "),s("td",[t._v("错误提示文本显隐状态")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("no")])]),t._v(" "),s("tr",[s("td",[t._v("triggerBorder")]),t._v(" "),s("td",[t._v("触发器边框是否显示")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("no")])])])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);