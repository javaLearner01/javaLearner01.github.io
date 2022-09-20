(function(e) {
	function t(t) {
		for (var n, r, s = t[0], l = t[1], c = t[2], u = 0, d = []; u < s.length; u++) r = s[u], Object.prototype
			.hasOwnProperty.call(i, r) && i[r] && d.push(i[r][0]), i[r] = 0;
		for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
		p && p(t);
		while (d.length) d.shift()();
		return o.push.apply(o, c || []), a()
	}

	function a() {
		for (var e, t = 0; t < o.length; t++) {
			for (var a = o[t], n = !0, r = 1; r < a.length; r++) {
				var s = a[r];
				0 !== i[s] && (n = !1)
			}
			n && (o.splice(t--, 1), e = l(l.s = a[0]))
		}
		return e
	}
	var n = {},
		r = {
			home: 0
		},
		i = {
			home: 0
		},
		o = [];

	function s(e) {
		return l.p + "js/" + ({
			"page-home": "page-home"
		} [e] || e) + "." + {
			"chunk-707d1e16": "13b0d9f4",
			"page-home": "33754602"
		} [e] + ".js"
	}

	function l(t) {
		if (n[t]) return n[t].exports;
		var a = n[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return e[t].call(a.exports, a, a.exports, l), a.l = !0, a.exports
	}
	l.e = function(e) {
		var t = [],
			a = {
				"chunk-707d1e16": 1,
				"page-home": 1
			};
		r[e] ? t.push(r[e]) : 0 !== r[e] && a[e] && t.push(r[e] = new Promise((function(t, a) {
			for (var n = "css/" + ({
						"page-home": "page-home"
					} [e] || e) + "." + {
						"chunk-707d1e16": "7aa4b51a",
						"page-home": "2d389ded"
					} [e] + ".css", i = l.p + n, o = document.getElementsByTagName("link"), s =
					0; s < o.length; s++) {
				var c = o[s],
					u = c.getAttribute("data-href") || c.getAttribute("href");
				if ("stylesheet" === c.rel && (u === n || u === i)) return t()
			}
			var d = document.getElementsByTagName("style");
			for (s = 0; s < d.length; s++) {
				c = d[s], u = c.getAttribute("data-href");
				if (u === n || u === i) return t()
			}
			var p = document.createElement("link");
			p.rel = "stylesheet", p.type = "text/css", p.onload = t, p.onerror = function(t) {
				var n = t && t.target && t.target.src || i,
					o = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
				o.code = "CSS_CHUNK_LOAD_FAILED", o.request = n, delete r[e], p.parentNode
					.removeChild(p), a(o)
			}, p.href = i;
			var f = document.getElementsByTagName("head")[0];
			f.appendChild(p)
		})).then((function() {
			r[e] = 0
		})));
		var n = i[e];
		if (0 !== n)
			if (n) t.push(n[2]);
			else {
				var o = new Promise((function(t, a) {
					n = i[e] = [t, a]
				}));
				t.push(n[2] = o);
				var c, u = document.createElement("script");
				u.charset = "utf-8", u.timeout = 120, l.nc && u.setAttribute("nonce", l.nc), u.src = s(e);
				var d = new Error;
				c = function(t) {
					u.onerror = u.onload = null, clearTimeout(p);
					var a = i[e];
					if (0 !== a) {
						if (a) {
							var n = t && ("load" === t.type ? "missing" : t.type),
								r = t && t.target && t.target.src;
							d.message = "Loading chunk " + e + " failed.\n(" + n + ": " + r + ")", d.name =
								"ChunkLoadError", d.type = n, d.request = r, a[1](d)
						}
						i[e] = void 0
					}
				};
				var p = setTimeout((function() {
					c({
						type: "timeout",
						target: u
					})
				}), 12e4);
				u.onerror = u.onload = c, document.head.appendChild(u)
			} return Promise.all(t)
	}, l.m = e, l.c = n, l.d = function(e, t, a) {
		l.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: a
		})
	}, l.r = function(e) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, l.t = function(e, t) {
		if (1 & t && (e = l(e)), 8 & t) return e;
		if (4 & t && "object" === typeof e && e && e.__esModule) return e;
		var a = Object.create(null);
		if (l.r(a), Object.defineProperty(a, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var n in e) l.d(a, n, function(t) {
				return e[t]
			}.bind(null, n));
		return a
	}, l.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e["default"]
		} : function() {
			return e
		};
		return l.d(t, "a", t), t
	}, l.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, l.p = "/wec-counselor-leave-apps/leave/", l.oe = function(e) {
		throw console.error(e), e
	};
	var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
		u = c.push.bind(c);
	c.push = t, c = c.slice();
	for (var d = 0; d < c.length; d++) t(c[d]);
	var p = u;
	o.push([0, "chunk-vendors", "chunk-common"]), a()
})({
	0: function(e, t, a) {
		e.exports = a("4d71")
	},
	"0172": function(e, t, a) {
		e.exports = {
			"error-light": "#f48c71",
			primary: "#3399ff",
			success: "#00cc66",
			warning: "#ff9900",
			error: "#ff4400",
			other: "#db3fd5",
			"text-dark": "#464c5b",
			"text-normal": "#657180",
			"text-light": "#9ea7b4",
			disabled: "#c3cbd6",
			border: "#d7dde4",
			divider: "#e3e8ee",
			bg: "#f5f7f9",
			white: "#fff",
			"school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
			"loop-task-green": "#75d8a6",
			"tag-brown": "#c2a366",
			"disabled-light": "#f7f7f7",
			"school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
			"success-light": "rgba(0, 204, 102, 0.1)",
			"warning-light": "rgba(255, 153, 0, 0.1)",
			"primary-light": "rgba(51, 153, 255, 0.1)",
			"safe-area-inset-bottom": "9.06667vw"
		}
	},
	"21ed": function(e, t, a) {
		e.exports = {
			"error-light": "#f48c71",
			primary: "#3399ff",
			success: "#00cc66",
			warning: "#ff9900",
			error: "#ff4400",
			other: "#db3fd5",
			"text-dark": "#464c5b",
			"text-normal": "#657180",
			"text-light": "#9ea7b4",
			disabled: "#c3cbd6",
			border: "#d7dde4",
			divider: "#e3e8ee",
			bg: "#f5f7f9",
			white: "#fff",
			"school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
			"loop-task-green": "#75d8a6",
			"tag-brown": "#c2a366",
			"disabled-light": "#f7f7f7",
			"school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
			"success-light": "rgba(0, 204, 102, 0.1)",
			"warning-light": "rgba(255, 153, 0, 0.1)",
			"primary-light": "rgba(51, 153, 255, 0.1)",
			"safe-area-inset-bottom": "9.06667vw"
		}
	},
	"2d2b": function(e, t, a) {
		"use strict";
		var n = a("2f73"),
			r = a.n(n);
		r.a
	},
	"2f73": function(e, t, a) {
		e.exports = {
			"error-light": "#f48c71",
			primary: "#3399ff",
			success: "#00cc66",
			warning: "#ff9900",
			error: "#ff4400",
			other: "#db3fd5",
			"text-dark": "#464c5b",
			"text-normal": "#657180",
			"text-light": "#9ea7b4",
			disabled: "#c3cbd6",
			border: "#d7dde4",
			divider: "#e3e8ee",
			bg: "#f5f7f9",
			white: "#fff",
			"school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
			"loop-task-green": "#75d8a6",
			"tag-brown": "#c2a366",
			"disabled-light": "#f7f7f7",
			"school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
			"success-light": "rgba(0, 204, 102, 0.1)",
			"warning-light": "rgba(255, 153, 0, 0.1)",
			"primary-light": "rgba(51, 153, 255, 0.1)",
			"safe-area-inset-bottom": "9.06667vw"
		}
	},
	3425: function(e, t, a) {
		"use strict";
		var n = a("21ed"),
			r = a.n(n);
		r.a
	},
	"3a49": function(e, t, a) {
		e.exports = {
			"error-light": "#f48c71",
			primary: "#3399ff",
			success: "#00cc66",
			warning: "#ff9900",
			error: "#ff4400",
			other: "#db3fd5",
			"text-dark": "#464c5b",
			"text-normal": "#657180",
			"text-light": "#9ea7b4",
			disabled: "#c3cbd6",
			border: "#d7dde4",
			divider: "#e3e8ee",
			bg: "#f5f7f9",
			white: "#fff",
			"school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
			"loop-task-green": "#75d8a6",
			"tag-brown": "#c2a366",
			"disabled-light": "#f7f7f7",
			"school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
			"success-light": "rgba(0, 204, 102, 0.1)",
			"warning-light": "rgba(255, 153, 0, 0.1)",
			"primary-light": "rgba(51, 153, 255, 0.1)",
			"safe-area-inset-bottom": "9.06667vw"
		}
	},
	"437f": function(e, t, a) {
		e.exports = {
			"error-light": "#f48c71",
			primary: "#3399ff",
			success: "#00cc66",
			warning: "#ff9900",
			error: "#ff4400",
			other: "#db3fd5",
			"text-dark": "#464c5b",
			"text-normal": "#657180",
			"text-light": "#9ea7b4",
			disabled: "#c3cbd6",
			border: "#d7dde4",
			divider: "#e3e8ee",
			bg: "#f5f7f9",
			white: "#fff",
			"school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
			"loop-task-green": "#75d8a6",
			"tag-brown": "#c2a366",
			"disabled-light": "#f7f7f7",
			"school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
			"success-light": "rgba(0, 204, 102, 0.1)",
			"warning-light": "rgba(255, 153, 0, 0.1)",
			"primary-light": "rgba(51, 153, 255, 0.1)",
			"safe-area-inset-bottom": "9.06667vw"
		}
	},
	4517: function(e, t, a) {
		"use strict";
		var n = a("b28b"),
			r = a.n(n);
		r.a
	},
	"4c78": function(e, t, a) {
		"use strict";
		var n = a("d69d"),
			r = a.n(n);
		r.a
	},
	"4d71": function(e, t, a) {
		"use strict";
		a.r(t);
		a("e623"), a("e379"), a("5dc8"), a("37e1");
		var n = a("2b0e"),
			r = a("08f7"),
			i = a("8d5e"),
			o = a("3a2e"),
			s = a("d7ac"),
			l = a("334b"),
			c = a("2371");
		Object(o["l"])(), Object(o["n"])(), Object(i["a"])(), n["a"].prototype.$EventBus = new n["a"], n["a"]
			.directive("scroll", r["a"]), n["a"].config.productionTip = !1, new n["a"]({
				router: s["a"],
				store: l["a"],
				render: function(e) {
					return e(c["a"])
				}
			}).$mount("#app")
	},
	"5ad1": function(e, t, a) {
		e.exports = {
			"error-light": "#f48c71",
			primary: "#3399ff",
			success: "#00cc66",
			warning: "#ff9900",
			error: "#ff4400",
			other: "#db3fd5",
			"text-dark": "#464c5b",
			"text-normal": "#657180",
			"text-light": "#9ea7b4",
			disabled: "#c3cbd6",
			border: "#d7dde4",
			divider: "#e3e8ee",
			bg: "#f5f7f9",
			white: "#fff",
			"school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
			"loop-task-green": "#75d8a6",
			"tag-brown": "#c2a366",
			"disabled-light": "#f7f7f7",
			"school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
			"success-light": "rgba(0, 204, 102, 0.1)",
			"warning-light": "rgba(255, 153, 0, 0.1)",
			"primary-light": "rgba(51, 153, 255, 0.1)",
			"safe-area-inset-bottom": "9.06667vw"
		}
	},
	"5c99": function(e, t, a) {
		"use strict";
		var n = a("9201"),
			r = a.n(n);
		r.a
	},
	"62c5": function(e, t, a) {
		"use strict";
		var n = a("6e09"),
			r = a.n(n);
		r.a
	},
	"66a4": function(e, t, a) {
		e.exports = {
			"error-light": "#f48c71",
			primary: "#3399ff",
			success: "#00cc66",
			warning: "#ff9900",
			error: "#ff4400",
			other: "#db3fd5",
			"text-dark": "#464c5b",
			"text-normal": "#657180",
			"text-light": "#9ea7b4",
			disabled: "#c3cbd6",
			border: "#d7dde4",
			divider: "#e3e8ee",
			bg: "#f5f7f9",
			white: "#fff",
			"school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
			"loop-task-green": "#75d8a6",
			"tag-brown": "#c2a366",
			"disabled-light": "#f7f7f7",
			"school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
			"success-light": "rgba(0, 204, 102, 0.1)",
			"warning-light": "rgba(255, 153, 0, 0.1)",
			"primary-light": "rgba(51, 153, 255, 0.1)",
			"safe-area-inset-bottom": "9.06667vw"
		}
	},
	"6b3e": function(e, t, a) {
		"use strict";
		var n = a("3a49"),
			r = a.n(n);
		r.a
	},
	"6e09": function(e, t, a) {
		e.exports = {
			"error-light": "#f48c71",
			primary: "#3399ff",
			success: "#00cc66",
			warning: "#ff9900",
			error: "#ff4400",
			other: "#db3fd5",
			"text-dark": "#464c5b",
			"text-normal": "#657180",
			"text-light": "#9ea7b4",
			disabled: "#c3cbd6",
			border: "#d7dde4",
			divider: "#e3e8ee",
			bg: "#f5f7f9",
			white: "#fff",
			"school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
			"loop-task-green": "#75d8a6",
			"tag-brown": "#c2a366",
			"disabled-light": "#f7f7f7",
			"school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
			"success-light": "rgba(0, 204, 102, 0.1)",
			"warning-light": "rgba(255, 153, 0, 0.1)",
			"primary-light": "rgba(51, 153, 255, 0.1)",
			"safe-area-inset-bottom": "9.06667vw"
		}
	},
	7387: function(e, t, a) {
		"use strict";
		var n = a("5ad1"),
			r = a.n(n);
		r.a
	},
	8092: function(e, t, a) {
		"use strict";
		var n = a("437f"),
			r = a.n(n);
		r.a
	},
	9201: function(e, t, a) {
		e.exports = {
			"error-light": "#f48c71",
			primary: "#3399ff",
			success: "#00cc66",
			warning: "#ff9900",
			error: "#ff4400",
			other: "#db3fd5",
			"text-dark": "#464c5b",
			"text-normal": "#657180",
			"text-light": "#9ea7b4",
			disabled: "#c3cbd6",
			border: "#d7dde4",
			divider: "#e3e8ee",
			bg: "#f5f7f9",
			white: "#fff",
			"school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
			"loop-task-green": "#75d8a6",
			"tag-brown": "#c2a366",
			"disabled-light": "#f7f7f7",
			"school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
			"success-light": "rgba(0, 204, 102, 0.1)",
			"warning-light": "rgba(255, 153, 0, 0.1)",
			"primary-light": "rgba(51, 153, 255, 0.1)",
			"safe-area-inset-bottom": "9.06667vw"
		}
	},
	"99c6": function(e, t, a) {
		"use strict";
		var n = a("d0bb"),
			r = a.n(n);
		r.a
	},
	ac37: function(e, t, a) {
		"use strict";
		a.d(t, "u", (function() {
			return c
		})), a.d(t, "i", (function() {
			return d
		})), a.d(t, "c", (function() {
			return f
		})), a.d(t, "y", (function() {
			return v
		})), a.d(t, "t", (function() {
			return b
		})), a.d(t, "x", (function() {
			return y
		})), a.d(t, "h", (function() {
			return x
		})), a.d(t, "w", (function() {
			return k
		})), a.d(t, "d", (function() {
			return T
		})), a.d(t, "k", (function() {
			return S
		})), a.d(t, "a", (function() {
			return R
		})), a.d(t, "g", (function() {
			return _
		})), a.d(t, "q", (function() {
			return L
		})), a.d(t, "j", (function() {
			return E
		})), a.d(t, "C", (function() {
			return M
		})), a.d(t, "B", (function() {
			return N
		})), a.d(t, "n", (function() {
			return F
		})), a.d(t, "m", (function() {
			return W
		})), a.d(t, "D", (function() {
			return V
		})), a.d(t, "p", (function() {
			return H
		})), a.d(t, "o", (function() {
			return z
		})), a.d(t, "s", (function() {
			return G
		})), a.d(t, "r", (function() {
			return Z
		})), a.d(t, "b", (function() {
			return K
		})), a.d(t, "l", (function() {
			return Q
		})), a.d(t, "e", (function() {
			return X
		})), a.d(t, "A", (function() {
			return ee
		})), a.d(t, "E", (function() {
			return ae
		})), a.d(t, "z", (function() {
			return re
		})), a.d(t, "v", (function() {
			return oe
		})), a.d(t, "f", (function() {
			return le
		}));
		a("99af"), a("ac1f"), a("5319"), a("1276");
		var n = a("fa78"),
			r = a("8364"),
			i = a("794f"),
			o = a("d7ac"),
			s = {
				2210070006: "已被发布者删除、撤回"
			};
		n["a"].use("response", (function(e) {
			var t = e.code,
				a = s[t];
			return a && o["a"].replace({
				path: "/page-empty",
				query: {
					errorText: a
				}
			}), e
		}));
		var l = Object(r["c"])("/leave/stu/jssdk/queryConfig");

		function c() {
			return n["a"].post(l, {
				url: window.location.href.split("#")[0],
				platform: Object(i["a"])()
			})
		}
		var u = Object(r["c"])("leave/stu/list");

		function d() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [u].concat(t))
		}
		var p = Object(r["c"])("leave/checkApplyCondition");

		function f() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [p].concat(t))
		}
		var h = Object(r["c"])("leave/queryLeaveTypes");

		function v() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [h].concat(t))
		}
		var m = Object(r["c"])("leave/stu/obtainApproveFlow");

		function b() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [m].concat(t))
		}
		var g = Object(r["c"])("leave/stu/queryLeaveTypeCfg");

		function y() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [g].concat(t))
		}
		var w = Object(r["c"])("leave/stu/detail");

		function x() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [w].concat(t))
		}
		var C = Object(r["c"])("leave/queryLeaveDetail");

		function k() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [C].concat(t))
		}
		var O = Object(r["c"])("leave/stu/checkOnceLeave");

		function T() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [O].concat(t))
		}
		var A = Object(r["c"])("leave/stu/getStuBasicInfo");

		function S() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [A].concat(t))
		}
		var j = Object(r["c"])("leave/addCheatRecord");

		function R() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [j].concat(t))
		}
		var I = Object(r["c"])("leave/getCheatModuleStatus");

		function _() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].get.apply(n["a"], [I].concat(t))
		}
		var D = Object(r["c"])("leave/apply");

		function L() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [D].concat(t))
		}
		var E = Object(r["c"])("leave/getMobileOSSAccess"),
			P = Object(r["c"])("leave/stu/searchTeacherOrStudent4cc");

		function M() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [P].concat(t))
		}
		var $ = Object(r["c"])("leave/stu/querySearchHistory4cc");

		function N() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [$].concat(t))
		}
		var q = Object(r["c"])("leave/press");

		function F() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [q].concat(t))
		}
		var B = Object(r["c"])("leave/withdraw");

		function W() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [B].concat(t))
		}
		var U = Object(r["c"])("leave/terminate");

		function V() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [U].concat(t))
		}
		var H = Object(r["c"])("leave/report");

		function z() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [H].concat(t))
		}
		var G = Object(r["c"])("leave/saveExtend");

		function Z() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [G].concat(t))
		}
		var J = Object(r["c"])("leave/stu/addSearchHistory4cc");

		function K() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [J].concat(t))
		}
		var Q = Object(r["c"])("leave/obs/getUploadPolicy");
		var X = Object(r["c"])("/leave/stu/downloadMedia"),
			Y = Object(r["c"])("leave/stu/queryReportApprover");

		function ee() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [Y].concat(t))
		}
		var te = Object(r["c"])("leave/stu/withdrawReport");

		function ae() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [te].concat(t))
		}
		var ne = Object(r["c"])("/leave/stu/queryReportApproveFlow");

		function re() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [ne].concat(t))
		}
		var ie = Object(r["c"])("/leave/stu/queryHolidayAutoDefine");

		function oe() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [ie].concat(t))
		}
		var se = Object(r["c"])("leave/stu/getAntiFakeInfo");

		function le() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			return n["a"].post.apply(n["a"], [se].concat(t))
		}
	},
	b230: function(e, t, a) {
		"use strict";
		var n = a("c190"),
			r = a.n(n);
		r.a
	},
	b28b: function(e, t, a) {
		e.exports = {
			"error-light": "#f48c71",
			primary: "#3399ff",
			success: "#00cc66",
			warning: "#ff9900",
			error: "#ff4400",
			other: "#db3fd5",
			"text-dark": "#464c5b",
			"text-normal": "#657180",
			"text-light": "#9ea7b4",
			disabled: "#c3cbd6",
			border: "#d7dde4",
			divider: "#e3e8ee",
			bg: "#f5f7f9",
			white: "#fff",
			"school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
			"loop-task-green": "#75d8a6",
			"tag-brown": "#c2a366",
			"disabled-light": "#f7f7f7",
			"school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
			"success-light": "rgba(0, 204, 102, 0.1)",
			"warning-light": "rgba(255, 153, 0, 0.1)",
			"primary-light": "rgba(51, 153, 255, 0.1)",
			"safe-area-inset-bottom": "9.06667vw"
		}
	},
	c190: function(e, t, a) {
		e.exports = {
			"error-light": "#f48c71",
			primary: "#3399ff",
			success: "#00cc66",
			warning: "#ff9900",
			error: "#ff4400",
			other: "#db3fd5",
			"text-dark": "#464c5b",
			"text-normal": "#657180",
			"text-light": "#9ea7b4",
			disabled: "#c3cbd6",
			border: "#d7dde4",
			divider: "#e3e8ee",
			bg: "#f5f7f9",
			white: "#fff",
			"school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
			"loop-task-green": "#75d8a6",
			"tag-brown": "#c2a366",
			"disabled-light": "#f7f7f7",
			"school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
			"success-light": "rgba(0, 204, 102, 0.1)",
			"warning-light": "rgba(255, 153, 0, 0.1)",
			"primary-light": "rgba(51, 153, 255, 0.1)",
			"safe-area-inset-bottom": "9.06667vw"
		}
	},
	ca8a: function(e, t, a) {
		"use strict";
		var n = a("0172"),
			r = a.n(n);
		r.a
	},
	cdea: function(e, t, a) {
		"use strict";
		a.d(t, "a", (function() {
			return d
		}));
		var n = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "cat-tip flex-center font-white font-12 bg-warning",
					on: {
						click: e.openWhy
					}
				}, [a("cat-icon", {
					staticClass: "tip-icon",
					attrs: {
						size: "3.73333vw",
						name: "question"
					}
				}), a("div", {
					staticClass: "text-trunc"
				}, [e._v(" " + e._s(e.tipConfig.notAllowTitle) + " ")])], 1)
			},
			r = [],
			i = (a("622e"), a("dd68")),
			o = a("60a3"),
			s = {
				components: {
					CatIcon: i["a"]
				},
				props: {
					tipConfig: {
						type: Object,
						default: function() {
							return {}
						}
					}
				},
				methods: {
					openWhy: function() {
						Object(o["j"])({
							url: this.tipConfig.notAllowUrl || ""
						})
					}
				}
			},
			l = s,
			c = (a("6b3e"), a("2877")),
			u = Object(c["a"])(l, n, r, !1, null, null, null),
			d = u.exports
	},
	d0bb: function(e, t, a) {
		e.exports = {
			"error-light": "#f48c71",
			primary: "#3399ff",
			success: "#00cc66",
			warning: "#ff9900",
			error: "#ff4400",
			other: "#db3fd5",
			"text-dark": "#464c5b",
			"text-normal": "#657180",
			"text-light": "#9ea7b4",
			disabled: "#c3cbd6",
			border: "#d7dde4",
			divider: "#e3e8ee",
			bg: "#f5f7f9",
			white: "#fff",
			"school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
			"loop-task-green": "#75d8a6",
			"tag-brown": "#c2a366",
			"disabled-light": "#f7f7f7",
			"school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
			"success-light": "rgba(0, 204, 102, 0.1)",
			"warning-light": "rgba(255, 153, 0, 0.1)",
			"primary-light": "rgba(51, 153, 255, 0.1)",
			"safe-area-inset-bottom": "9.06667vw"
		}
	},
	d69d: function(e, t, a) {
		e.exports = {
			"error-light": "#f48c71",
			primary: "#3399ff",
			success: "#00cc66",
			warning: "#ff9900",
			error: "#ff4400",
			other: "#db3fd5",
			"text-dark": "#464c5b",
			"text-normal": "#657180",
			"text-light": "#9ea7b4",
			disabled: "#c3cbd6",
			border: "#d7dde4",
			divider: "#e3e8ee",
			bg: "#f5f7f9",
			white: "#fff",
			"school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
			"loop-task-green": "#75d8a6",
			"tag-brown": "#c2a366",
			"disabled-light": "#f7f7f7",
			"school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
			"success-light": "rgba(0, 204, 102, 0.1)",
			"warning-light": "rgba(255, 153, 0, 0.1)",
			"primary-light": "rgba(51, 153, 255, 0.1)",
			"safe-area-inset-bottom": "9.06667vw"
		}
	},
	d7ac: function(e, t, a) {
		"use strict";
		var n, r = a("2b0e"),
			i = a("8c4f"),
			o = (a("d3b7"), a("3217")),
			s = a("5500"),
			l = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "page-detail flex-col h-screen ios-touch-scroll relative"
				}, [0 === e.isEmpty ? a("cat-empty", {
					attrs: {
						"empty-text": e.emptyText
					}
				}) : 2 === e.isEmpty ? a("Tabs", {
					staticClass: "flex-1",
					on: {
						click: e.changeTab,
						disabled: e.disabledHandler
					},
					model: {
						value: e.active,
						callback: function(t) {
							e.active = t
						},
						expression: "active"
					}
				}, e._l(e.tabList, (function(t) {
					return a("Tab", {
						key: t.key,
						attrs: {
							title: t.title,
							disabled: t.disabled
						}
					}, [a("div", {
						staticClass: "flex-col h-screen flex-1 overflow-hidden"
					}, [a("div", {
						staticClass: "flex-1 ",
						class: 0 === e.active ?
							"overflow-y-auto" : ""
					}, [0 === e.active ? a("span", [e.tipConfig
							.notAllowTitle && e.tipConfig
							.notAllowTitle.length > 0 ? a(
								"cat-tip", {
									attrs: {
										"tip-config": e
											.tipConfig
									}
								}) : e._e()
						], 1) : e.isCpdaily ? e._e() : a(
							"CatTitle", {
								staticClass: "bg-warning tip px-20 text-center",
								staticStyle: {
									"z-index": "2"
								},
								attrs: {
									size: "3.20000vw",
									title: "请出示专属核验二维码，用于验证请假单真伪"
								}
							}), 0 === e.active || 1 === e
						.active && !e.isCpdaily ? a("div", [e
							.recordStatus && "1" !== e
							.recordStatus ? a(
								"CatStatusFlag", {
									staticClass: "no-shrink",
									attrs: {
										"is-show": e.bool,
										text: e.nowTime,
										info: e.studentInfo,
										flag: e.recordStatus
									},
									on: {
										"show-info": e
											.showInfoModal
									}
								}) : a("CatStatusShow", {
								staticClass: "no-shrink",
								attrs: {
									info: e.info,
									"is-shared": e
										.isShared,
									status: e
										.approveStatus
								}
							})
						], 1) : e._e(), a(t.is, {
							ref: t.ref,
							refInFor: !0,
							tag: "component",
							attrs: {
								flag: e.recordStatus,
								"now-time-text": e.nowTime,
								"detail-info": e.detailInfo,
								"student-info": e
									.studentInfo
							}
						})
					], 1), 0 === e.active ? a("span", {
						staticClass: "no-shrink"
					}, [a("div", {
							staticClass: "btn-area flex jc-between no-shrink"
						}, [e.isReportApproving ? a(
								"CatButton", {
									staticClass: "flex-1 btn-hairline-t btn-hairline-r",
									attrs: {
										type: "white",
										"text-color": "normal"
									},
									on: {
										click: e
											.handleReportClick
									}
								}, [e._v(" 撤回销假申请 ")]) : e
							._e(), e.isTranspond ? a(
								"CatButton", {
									staticClass: "flex-1",
									class: e.transpondType
										.class,
									attrs: {
										type: e
											.transpondType
											.type,
										"text-color": e
											.transpondType
											.textColor
									},
									on: {
										click: e.toShare
									}
								}, [e._v(" 转发 ")]) : e._e(),
							e.canWithdraw ? a("CatButton", {
								staticClass: "flex-1 btn-hairline-l btn-hairline-t",
								attrs: {
									type: "white",
									"text-color": "normal"
								},
								on: {
									click: e.action
								}
							}, [e._v(" 撤回 ")]) : e._e(), e
							.isExtend ? a("CatButton", {
								staticClass: "flex-1",
								class: e.extendClass,
								attrs: {
									type: "white",
									"text-color": "normal"
								},
								on: {
									click: e.toExtend
								}
							}, [e._v(" " + e._s(e
									.extBtnText) +
								" ")]) : e._e(), e
							.showReportButton ? a(
								"CatButton", {
									staticClass: "flex-1",
									attrs: {
										type: "primary"
									},
									on: {
										click: e.toComplete
									}
								}, [e._v(" 去销假 ")]) : e
						._e(), e.canTerminatedEarly ? a(
								"CatButton", {
									staticClass: "flex-1",
									attrs: {
										type: "primary"
									},
									on: {
										click: e
											.toFinishEarly
									}
								}, [e._v(" 提前结束 ")]) : e
							._e()
						], 1), e.isLeaveReject && !e.isShared ?
						a("CatButton", {
							staticClass: "no-shrink",
							staticStyle: {
								"z-index": "100"
							},
							on: {
								click: e.toCreate
							}
						}, [e._v(" 重新申请 ")]) : e._e(), e
						.isPending && !e.isShared ? a("div", {
							staticClass: "flex jc-between no-shrink"
						}, [e.allowWithdraw ? e._e() : a(
								"CatButton", {
									staticClass: "flex-1 hairline-r hairline-t",
									attrs: {
										type: "white",
										"text-color": "normal"
									},
									on: {
										click: e.action
									}
								}, [e._v(" 撤回 ")]), 1 === e
							.needApproval ? a("CatButton", {
								staticClass: "flex-1",
								attrs: {
									type: "primary",
									disabled: !e.canPush
								},
								on: {
									click: e.push
								}
							}, [e._v(" 催一下审批人 ")]) : e._e()
						], 1) : e._e(), a("CatSharePopup", {
							ref: "CatSharePopup",
							refInFor: !0
						}), a("Popup", {
							staticClass: "diy-extend-overlay",
							model: {
								value: e.showExtendTip,
								callback: function(t) {
									e.showExtendTip = t
								},
								expression: "showExtendTip"
							}
						}, [a("div", {
							staticClass: "extend-tip"
						}, [a("div", {
							staticClass: "tip-header"
						}, [a("p", [e._v(e
							._s(e
								.popInfo
								.title
								)
							)])]), a("div", {
							staticClass: "tip-content"
						}, [a("p", [e._v(e
							._s(e
								.popInfo
								.content
								)
							)])]), a("div", {
							staticClass: "tip-footer",
							on: {
								click: function(
									t) {
									e.showExtendTip = !
										1
								}
							}
						}, [a("p", [e._v(
							"知道了"
							)])])])])
					], 1) : e._e()])])
				})), 1) : e._e(), a("transition", {
					attrs: {
						name: "van-fade"
					}
				}, [a("CatPersonalModal", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.show,
						expression: "show"
					}],
					staticClass: "w-screen h-screen absolute pin-l pin-t",
					attrs: {
						info: e.studentInfo
					},
					on: {
						close: e.closeModal
					}
				})], 1)], 1)
			},
			c = [],
			u = (a("99af"), a("baa5"), a("fb6a"), a("ac1f"), a("5319"), a("96cf"), a("1da1")),
			d = (a("0981"), a("c064")),
			p = (a("1752"), a("46df")),
			f = (a("a01b"), a("e028")),
			h = (a("8a58"), a("e41f")),
			v = (a("e17f"), a("2241")),
			m = (a("ab51"), a("f68c")),
			b = (a("bda7"), a("5e46")),
			g = (a("da3c"), a("0b33")),
			y = a("3b03"),
			w = a("e18e"),
			x = a("45f7"),
			C = a("3a2e"),
			k = a("2730"),
			O = a("60a3"),
			T = a("794f"),
			A = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "page-detail-info"
				}, [a("CatFlowLeaveMeta", {
					staticClass: "no-shrink",
					attrs: {
						info: e.info,
						"not-out-report": e.notOutReport
					}
				}), e.haveExt ? a("span", [a("CatCell", {
					staticClass: "my-10 hairline-b hairline-t",
					attrs: {
						label: "完整请假详情"
					},
					on: {
						click: e.viewDetail
					}
				}, [a("div", {
					staticClass: "flex-1 ai-center jc-end text-right flex"
				}, [a("span", {
					staticClass: "font-success"
				}, [e._v("已通过")])]), a("div", {
					staticClass: "flex-center font-light",
					attrs: {
						slot: "right-icon"
					},
					slot: "right-icon"
				}, [a("CatIcon", {
					attrs: {
						size: "3.73333vw",
						name: "right-arrow"
					}
				})], 1)]), a("CatExtendDetail", {
					staticClass: "my-10",
					attrs: {
						my: !0,
						"show-title": !0,
						"is-click-location": !1,
						info: e.currentNode,
						"is-shared": e.isShared,
						"need-approval": e.needApproval,
						"approve-nodes": e.getApproveNodes(e.currentNode.approvers)
					}
				}), (e.currentNode.approvers || []).length > 0 ? a("div", {
					staticClass: "py-10 font-12 bg-white px-20 my-10 hairline-t hairline-b"
				}, [a("span", {
					staticClass: "font-14 font-dark"
				}, [e._v("审批流程记录")]), a("CatAuditList", {
					staticClass: "mt-10",
					attrs: {
						"need-approval": e.needApproval,
						flows: e.currentNode.approvers,
						"is-iot-report": e.info.isIotReport,
						"leave-satus": e.leaveStatusTerminal
					}
				})], 1) : e._e()], 1) : a("span", [a("CatLeaveDetail", {
					staticClass: "my-10",
					attrs: {
						my: !0,
						"show-title": !0,
						info: e.currentNode,
						"is-shared": e.isShared,
						"need-approval": e.needApproval,
						fields: e.holidayAutoDefineVos,
						"approve-nodes": e.getApproveNodes(e.currentNode.approvers)
					}
				}), e.currentNode.approvers && e.currentNode.approvers.length > 0 ? a(
				"div", {
					staticClass: "py-10 font-12 bg-white px-20 my-10 hairline-t hairline-b"
				}, [a("span", {
					staticClass: "font-14 font-dark"
				}, [e._v("审批流程记录")]), a("CatAuditList", {
					staticClass: "mt-10",
					attrs: {
						"need-approval": e.needApproval,
						flows: e.currentNode.approvers,
						"is-iot-report": e.info.isIotReport,
						"leave-satus": e.leaveStatusTerminal
					}
				})], 1) : e._e()], 1), e.isTerminatedEarly ? a("div", {
					staticClass: "py-10 font-12 bg-white px-20 mb-10 hairline-t hairline-b"
				}, [a("div", {
					staticClass: "font-dark font-14 mb-10"
				}, [e._v(" 提前结束信息 ")]), a("div", {
					staticClass: "flex mb-5 font-12 ai-center"
				}, [a("div", {
					staticClass: "font-light no-shrink row-label"
				}, [e._v(" 操作人： ")]), a("div", {
					staticClass: "font-normal flex-1"
				}, [e._v(" " + e._s(e.terminationInfo.terminationObjectName ||
					"") + " ")])]), a("div", {
					staticClass: "flex mb-5 font-12 ai-center"
				}, [a("div", {
					staticClass: "font-light no-shrink row-label"
				}, [e._v(" 操作时间： ")]), a("div", {
					staticClass: "font-normal flex-1"
				}, [e._v(" " + e._s(e.terminationInfo.terminationDate || "") +
					" ")])]), a("div", {
					staticClass: "flex mb-5 font-12 ai-start"
				}, [a("div", {
					staticClass: "font-light no-shrink row-label"
				}, [e._v(" 原因： ")]), a("div", {
					staticClass: "font-normal flex-1"
				}, [e._v(" " + e._s(e.terminationInfo.terminationReason || "") +
					" ")])])]) : e._e(), a("BusCurrentApproverCell", {
					staticClass: "hairline-t hairline-b mb-10",
					attrs: {
						"next-approve-info": e.nextApproveInfo
					}
				}), e.isComplete ? a("CatCompleteInfo", {
					staticClass: "bg-white px-20 py-10 mb-10 hairline-b hairline-t",
					attrs: {
						info: e.info,
						"report-apply": e.reportApply,
						"report-apply-flow": e.reportApplyFlow
					}
				}) : e._e()], 1)
			},
			S = [],
			j = (a("4de4"), a("4160"), a("b64b"), a("159b"), a("c25c"), a("5ca9")),
			R = (a("622e"), a("dd68")),
			I = (a("cb76"), a("889c")),
			_ = a("8d5e"),
			D = a("fa78f"),
			L = a.n(D),
			E = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return e.visible ? a("div", {
					staticClass: "bus-current-approver-cell"
				}, [a("CatCell", {
					attrs: {
						label: "当前审批人"
					},
					on: {
						click: e.viewApprovers
					}
				}, [a("div", {
					staticClass: "flex-1 ai-center jc-end text-right flex"
				}, [a("span", {
					class: [e.isOne ? "font-normal" : "font-primary"]
				}, [e._v(e._s(e.approverTEXT))])]), e.isOne ? e._e() : a("div", {
					staticClass: "flex-center font-light",
					attrs: {
						slot: "right-icon"
					},
					slot: "right-icon"
				}, [a("CatIcon", {
					attrs: {
						size: "3.73333vw",
						name: "right-arrow"
					}
				})], 1)])], 1) : e._e()
			},
			P = [],
			M = {
				components: {
					CatCell: I["a"],
					CatIcon: R["a"]
				},
				props: {
					nextApproveInfo: {
						type: Object,
						default: null
					}
				},
				computed: {
					visible: function() {
						return this.nextApproveInfo && this.nextApproveInfo.nextApproveNodeApprovers
					},
					isOne: function() {
						return this.nextApproveInfo && 1 === this.nextApproveInfo.count
					},
					approverTEXT: function() {
						return this.isOne ? this.nextApproveInfo.firstApprover : "".concat(this
							.nextApproveInfo.firstApprover, "等").concat(this.nextApproveInfo.count,
							"人（或签）")
					}
				},
				methods: {
					viewApprovers: function() {
						this.isOne || (localStorage.setItem("currentApprovers", this.nextApproveInfo
							.nextApproveNodeApprovers), Object(O["o"])({
							title: "当前审批人"
						}), this.$router.push("/viewCurrentApprovers"))
					}
				}
			},
			$ = M,
			N = a("2877"),
			q = Object(N["a"])($, E, P, !1, null, null, null),
			F = q.exports,
			B = a("d115"),
			W = a("0579"),
			U = a("0efe"),
			V = a("09d0"),
			H = a("6a6f"),
			z = {
				components: {
					CatFlowLeaveMeta: B["a"],
					CatCell: I["a"],
					CatIcon: R["a"],
					CatExtendDetail: W["a"],
					CatLeaveDetail: U["a"],
					BusCurrentApproverCell: F,
					CatCompleteInfo: V["a"],
					CatAuditList: j["a"]
				},
				props: {
					detailInfo: {
						type: Object,
						default: function() {
							return {}
						}
					}
				},
				data: function() {
					return {
						isShared: !1,
						leaveId: "",
						info: {},
						terminationInfo: {
							allowTerminate: 0,
							terminated: 0,
							terminationObjectName: "",
							terminationReason: ""
						},
						notOutReport: {
							operatorDate: null,
							operatorId: null,
							operatorName: null,
							operatorWid: null,
							rule: 0,
							setedNotOutReport: 0
						},
						leaveExtends: [],
						approvers: [],
						nextApproveInfo: null,
						reportApply: 0,
						mustOut: !1,
						reportApplyFlow: 0,
						holidayAutoDefineVos: []
					}
				},
				computed: {
					currentNode: function() {
						return this.leaveExtends.length > 0 ? this.leaveExtends[this.leaveExtends.length -
							1] : this.info
					},
					leaveStatusTerminal: function() {
						return this.currentNode.status
					},
					haveExt: function() {
						return this.leaveExtends.length > 0
					},
					isComplete: function() {
						return this.info.status === H["a"].COMPLETE || this.info.reportStatus
					},
					terminatedEarlyStatus: function() {
						return this.terminationInfo.terminated
					},
					isTerminatedEarly: function() {
						return this.terminatedEarlyStatus === H["c"].TERMINATED.YES
					},
					needApproval: function() {
						return "0" === this.$route.params.needApproval || 0 === this.$route.params
							.needApproval ? 0 : 1
					}
				},
				watch: {
					detailInfo: {
						deep: !0,
						immediate: !0,
						handler: function(e) {
							0 !== Object.keys(e).length && this.initPage(e)
						}
					}
				},
				mounted: function() {
					_["b"] && L.a.enable()
				},
				beforeDestroy: function() {
					_["b"] && L.a.disable()
				},
				methods: {
					viewDetail: function() {
						this.$router.push("/record-detail/".concat(this.leaveId, "/").concat(this
							.needApproval))
					},
					getApproveNodes: function(e) {
						return e && e.filter((function(e) {
							return e.approveNode.length > 0 && e.approveNode[0].nodeWid
						}))
					},
					initPage: function(e) {
						var t = this;
						return Object(u["a"])(regeneratorRuntime.mark((function a() {
							var n, r, i, o, s, l;
							return regeneratorRuntime.wrap((function(a) {
								while (1) switch (a.prev = a.next) {
									case 0:
										t.leaveId = t.$route.params.id, t
											.isShared = 1 === t.$route
											.params.shared, Object(y["e"])
										(), i = e.data, Object(y["b"])(), t
											.info = i.detail || {}, t
											.holidayAutoDefineVos = i
											.holidayAutoDefineVos || [], i
											.leaveType && (t.mustOut = !(
													null === i || void 0 ===
													i || null === (o = i
														.leaveType) ||
													void 0 === o || !o
													.mustOut), t
												.reportApply = !(null ===
													i || void 0 === i ||
													null === (s = i
														.leaveType) ||
													void 0 === s || !s
													.reportApply)), t
											.reportApplyFlow = null === (n =
												i.leaveType) || void 0 ===
											n ? void 0 : n.reportApplyFlow,
											t.notOutReport = (null === i ||
												void 0 === i ? void 0 : i
												.notOutReport) || {}, t
											.terminationInfo = (null ===
												i || void 0 === i ? void 0 :
												i.termination) || {}, t
											.leaveExtends = (null === i ||
												void 0 === i ? void 0 : i
												.leaveExtends) || [], t
											.nextApproveInfo = null === i ||
											void 0 === i ? void 0 : i
											.nextApproveInfo, l = [], l = l
											.concat(null === i || void 0 ===
												i || null === (r = i
												.detail) || void 0 === r ?
												void 0 : r.approvers), t
											.leaveExtends.forEach((function(
												e) {
												e.approvers.forEach(
														(function(
														e) {
															e.extend = !
																0
														})), l = l
													.concat(e
														.approvers)
											})), t.approvers = l;
									case 17:
									case "end":
										return a.stop()
								}
							}), a)
						})))()
					}
				}
			},
			G = z,
			Z = (a("b230"), Object(N["a"])(G, A, S, !1, null, null, null)),
			J = Z.exports,
			K = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "page-detail-code"
				}, [e.isCpdaily ? a("div", {
					staticClass: "flex flex-col h-screen"
				}, [a("CatTitle", {
					staticClass: "bg-warning tip px-20 text-center",
					staticStyle: {
						"z-index": "2"
					},
					attrs: {
						size: "3.20000vw",
						title: "请出示专属核验二维码，用于验证请假单真伪"
					}
				}), e.havenoCheckTimes ? a("div", {
					staticStyle: {
						"padding-top": "32.00000vw"
					}
				}, [a("cat-empty", {
					attrs: {
						"empty-text": "您的剩余核验次数为0",
						img: e.error
					}
				})], 1) : a("div", {
					staticClass: "flex-col ai-center flex-1",
					style: {
						"padding-top": "100" === e.flag ? "32.00000vw" : "",
						background: e.bgColor
					}
				}, [a("div", [a("div", {
					staticClass: "flex space-between",
					staticStyle: {
						"margin-top": "-5.33333vw"
					}
				}, e._l(e.list.slice(0, 3), (function(e, t) {
					return a("img", {
						key: t,
						staticClass: "defaultImg",
						staticStyle: {
							width: "14.66667vw",
							height: "14.66667vw"
						},
						attrs: {
							src: e.img
						}
					})
				})), 0), a("div", {
					staticClass: "flex-1 flex flex-col space-between"
				}, [a("v-dialog", {
					attrs: {
						"confirm-button-text": "知道了"
					},
					on: {
						confirm: e.getQr
					},
					model: {
						value: e.showTip,
						callback: function(t) {
							e.showTip = t
						},
						expression: "showTip"
					}
				}, [a("div", [a("div", {
					staticClass: "dialog-title"
				}, [e._v(" 核验成功 ")]), a("div", {
					staticClass: "dialog-item"
				}, [e._v(" " + e._s(e.detailInfo
						.data.studentInfo
						.userName) + "/" + e
					._s(e.detailInfo.data
						.studentInfo.userId
						) + " 核验成功 ")]), a("div", {
					staticClass: "dialog-item"
				}, [e._v(" 当前请假状态："), a(
				"span", {
					class: e.color
				}, [e._v(e._s(e
					.boldText))])])])]), a("div", {
					staticClass: " space-between",
					staticStyle: {
						display: "flex",
						width: "100%"
					}
				}, e._l(e.list.slice(0, 6), (function(e, t) {
					return a("div", {
						key: t,
						style: e.show ? "" :
							"visibility:hidden"
					}, [a("img", {
						staticClass: "defaultImg",
						staticStyle: {
							width: "14.66667vw",
							height: "14.66667vw"
						},
						attrs: {
							src: e.img
						}
					})])
				})), 0), a("div", {
					staticClass: "flex",
					staticStyle: {
						"justify-content": "center",
						"margin-top": "-5.33333vw"
					}
				}, [a("div", {
					staticClass: "flex-col space-between",
					staticStyle: {
						display: "flex"
					}
				}, e._l(e.list.slice(19, 26), (function(
					e, t) {
					return a("div", {
						key: t,
						style: e.show ?
							"" :
							"visibility:hidden"
					}, [a("img", {
						staticClass: "defaultImg",
						staticStyle: {
							width: "14.66667vw",
							height: "14.66667vw"
						},
						attrs: {
							src: e
								.img
						}
					})])
				})), 0), a("div", {
					staticClass: "flex flex-col",
					staticStyle: {
						"justify-content": "center"
					}
				}, [a("div", {
					staticClass: "flex mb-10",
					staticStyle: {
						width: "100%",
						"justify-content": "space-between"
					}
				}, [a("div"), a("div", {
					staticClass: "px-10 radius-large",
					staticStyle: {
						width: "24.00000vw",
						height: "5.33333vw",
						"background-color": "rgb(255,255,255,0.8)"
					},
					on: {
						click: e
							.handleShowModal
					}
				}, [e._v(" 个人信息 > ")])]), a("div", {
					staticClass: "flex ai-center flex-col py-10 px-20 radius-large",
					staticStyle: {
						"z-index": "2"
					},
					style: 5 === +e.flag ?
						"background:#e9963c" :
						6 === +e.flag ?
						"background:#00cc66" :
						7 === +e.flag ?
						"background:linear-gradient(rgba(255, 68, 0, 1),rgba(247, 150, 119, 1))" :
						8 === +e.flag ?
						"background: linear-gradient(#7d7d7d,#cacaca);" :
						100 === +e.flag ?
						"background: linear-gradient( #7d7d7d , #cacaca );" :
						""
				}, [a("div", {
						staticClass: "flex ai-center mt-10"
					}, [a("CatIcon", {
						attrs: {
							size: "4.80000vw",
							name: "sure2",
							color: "white"
						}
					}), a("div", {
						staticClass: "font-white font-16"
					}, [e._v(
						" 审批已通过 "
						)])], 1), a("div", {
						staticClass: "py-10 font-white",
						staticStyle: {
							"font-size": "8.53333vw",
							"font-weight": "400"
						}
					}, [e._v(" " + e._s(
							7 === +e
							.flag ?
							"销假逾期" :
							6 === +e
							.flag ?
							"正在休假中" :
							5 === +e
							.flag ?
							"即将休假" :
							8 === +e
							.flag ?
							"已完成" :
							100 === +e
							.flag ?
							"已过期" : ""
							) + " ")]), "5" ===
					e.flag || "6" === e.flag ||
					"7" === e.flag || "8" === e
					.flag ? a("div", {
						staticClass: "code-wrap bg-white p-10  radius-normal flex ai-center flex-col"
					}, [a("CatQr", {
						attrs: {
							"color-dark": "#000",
							"color-light": "#fff",
							size: 160,
							margin: 0,
							text: e
								.text
						}
					}), a("div", {
						staticClass: "font-12 text-light mt-10 text-normal",
						staticStyle: {
							"white-space": "nowrap"
						}
					}, [e._v(
						" 请使用辅导猫扫码核验请假单真伪 "
						)])], 1) : a("div", {
						staticClass: "code-wrap  p-10 radius-normal flex ai-center flex-col bg-white",
						staticStyle: {
							padding: "10.66667vw"
						}
					}, [a("img", {
						staticStyle: {
							width: "21.33333vw",
							height: "21.33333vw"
						},
						attrs: {
							src: e
								.empty
						}
					}), a("div", {
						staticClass: "mt-10 font-light font-12"
					}, [e._v(
						" 您的申请记录已经过期 "
						)])]), a("div", {
						staticClass: "py-10 font-white",
						staticStyle: {
							"font-size": "5.33333vw",
							"white-space": "nowrap"
						}
					}, [e._v(" " + e._s(e
						.nowTimeText
						.slice(5, e
							.nowTimeText
							.length)
						) + " ")]), e
					.showCheckTimes ? a("div", {
						staticClass: "font-white",
						staticStyle: {
							"font-size": "5.33333vw"
						}
					}, [e._v(" 剩余核验次数：" + e
						._s(e
							.checkTimes) +
						" ")]) : e._e()
				])]), a("div", {
					staticClass: "flex-col flex space-between"
				}, e._l(e.list.slice(6, 13), (function(
					e, t) {
					return a("div", {
						key: t,
						style: e.show ?
							"" :
							"visibility:hidden"
					}, [a("img", {
						staticClass: "defaultImg",
						staticStyle: {
							width: "14.66667vw",
							height: "14.66667vw"
						},
						attrs: {
							src: e
								.img
						}
					})])
				})), 0)]), a("div", {
					staticClass: "space-between",
					staticStyle: {
						display: "flex",
						width: "100%"
					}
				}, e._l(e.list.slice(13, 19), (function(e, t) {
					return a("div", {
						key: t,
						style: e.show ? "" :
							"visibility:hidden"
					}, [a("img", {
						staticClass: "defaultImg",
						staticStyle: {
							width: "14.66667vw",
							height: "14.66667vw"
						},
						attrs: {
							src: e.img
						}
					})])
				})), 0)], 1), a("div", {
					staticClass: "flex space-between"
				}, e._l(e.list.slice(0, 3), (function(e, t) {
					return a("img", {
						key: t,
						staticClass: "defaultImg",
						staticStyle: {
							width: "14.66667vw",
							height: "14.66667vw"
						},
						attrs: {
							src: e.img
						}
					})
				})), 0)])])], 1) : a("div", [e.isExceed ? a("cat-empty", {
					staticClass: "page-detail-code--empty",
					attrs: {
						"empty-text": "您的请假记录已过期"
					}
				}) : e.havenoCheckTimes ? a("div", {
					staticStyle: {
						"padding-top": "32.00000vw"
					}
				}, [a("cat-empty", {
					attrs: {
						"empty-text": "您的剩余核验次数为0",
						img: e.error
					}
				})], 1) : a("div", {
					staticClass: "detail-code flex-col ai-center mt-20"
				}, [a("v-dialog", {
					attrs: {
						"confirm-button-text": "知道了"
					},
					on: {
						confirm: e.getQr
					},
					model: {
						value: e.showTip,
						callback: function(t) {
							e.showTip = t
						},
						expression: "showTip"
					}
				}, [a("div", [a("div", {
					staticClass: "dialog-title"
				}, [e._v(" 核验成功 ")]), a("div", {
					staticClass: "dialog-item"
				}, [e._v(" " + e._s(e.detailInfo.data
					.studentInfo.userName) + "/" + e._s(
					e.detailInfo.data.studentInfo.userId
					) + " 核验成功 ")]), a("div", {
					staticClass: "dialog-item"
				}, [e._v(" 当前请假状态："), a("span", {
					class: e.color
				}, [e._v(e._s(e.boldText))])])])]), a("div", {
					staticClass: "flex ai-center"
				}, [a("div", {
					staticClass: "flex ai-center flex-col"
				}, [a("div", {
					staticClass: "code-wrap bg-white p-10 radius-normal"
				}, [a("CatQr", {
					attrs: {
						"color-dark": "#000",
						"color-light": "#fff",
						size: 160,
						margin: 0,
						text: e.text
					}
				})], 1), a("div", {
					staticClass: "font-12 text-light mt-10 text-normal",
					staticStyle: {
						"white-space": "nowrap"
					}
				}, [e._v(" 请使用辅导猫扫码核验请假单真伪 ")])])]), e.showCheckTimes ? a("div", {
					staticClass: "now-time-tip mt-20 bg-primary font-white px-15 font-16 font-bold"
				}, [e._v(" " + e._s(e.nowTimeText) + " "), a("br"), a("p", {
					staticClass: "times"
				}, [e._v(" 剩余核验次数：" + e._s(e.checkTimes) + " ")])]) : a("div", {
					staticClass: "now-time-tip mt-20 bg-primary font-white px-15 font-16 font-bold",
					staticStyle: {
						height: "8.53333vw !important",
						"border-radius": "4.26667vw !important",
						"padding-top": "0px !important"
					}
				}, [e._v(" " + e._s(e.nowTimeText) + " ")])], 1)], 1), a("CatPersonalModal", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.perModal,
						expression: "perModal"
					}],
					staticClass: "w-screen h-screen absolute pin-l pin-t",
					attrs: {
						info: e.studentInfo
					},
					on: {
						close: e.closeModal
					}
				})], 1)
			},
			Q = [],
			X = (a("d81d"), a("5530")),
			Y = (a("e080"), a("58be")),
			ee = a("7c94"),
			te = a("ac37"),
			ae = a("fa93"),
			ne = a.n(ae),
			re = a("3abe"),
			ie = a("eefd"),
			oe = a.n(ie),
			se = {
				flag5: {
					color: "font-warning",
					boldText: "即将休假"
				},
				flag6: {
					color: "font-success",
					boldText: "正在休假中"
				},
				flag7: {
					color: "font-error",
					boldText: "销假逾期"
				},
				flag8: {
					color: "font-grey",
					boldText: "已完成"
				},
				flag4: {
					color: "font-error",
					boldText: "已驳回"
				},
				flag10: {
					color: "font-error",
					boldText: "已驳回"
				},
				flag100: {
					bg: "flag-grey",
					boldText: "已过期",
					svgText: "审批已通过",
					isPass: !0
				}
			},
			le = {
				components: {
					CatQr: Y["a"],
					CatEmpty: d["a"],
					CatIcon: R["a"],
					CatTitle: m["a"],
					CatPersonalModal: re["a"],
					"v-dialog": v["a"].Component
				},
				props: {
					studentInfo: {
						type: Object,
						default: function() {}
					},
					nowTimeText: {
						type: String,
						default: "当前时间：20201125 05:30"
					},
					flag: {
						type: String,
						default: ""
					},
					detailInfo: {
						type: Object,
						default: function() {
							return {}
						}
					}
				},
				data: function() {
					return {
						flashTimer: null,
						background: null,
						isNotNew: !1,
						empty: oe.a,
						bgColor: null,
						twinklePoint: 0,
						moveType: 1,
						perModal: !1,
						isCpdaily: !1,
						picTimer: null,
						arr: [],
						direction: null,
						photo: null,
						list: [],
						showTip: !1,
						error: ne.a,
						id: "",
						checkTimes: "",
						timer: null
					}
				},
				computed: {
					leaveId: function() {
						return this.id
					},
					isExceed: function() {
						return 100 === +this.flag
					},
					isFinished: function() {
						return 8 === +this.flag
					},
					needApproval: function() {
						return "0" === this.$route.params.needApproval || 0 === this.$route.params
							.needApproval ? 0 : 1
					},
					text: function() {
						return "".concat(this.leaveId, "&").concat(this.needApproval)
					},
					havenoCheckTimes: function() {
						return 0 === this.checkTimes
					},
					showCheckTimes: function() {
						return this.checkTimes > 0
					},
					color: function() {
						return se["flag".concat(this.detailInfo.data.recordStatus)].color
					},
					boldText: function() {
						return se["flag".concat(this.detailInfo.data.recordStatus)].boldText
					}
				},
				mounted: function() {
					var e = this;
					return Object(u["a"])(regeneratorRuntime.mark((function t() {
						var a;
						return regeneratorRuntime.wrap((function(t) {
							while (1) switch (t.prev = t.next) {
								case 0:
									e.id = e.$route.params.id, e
										.uaIsCpadaily(), e.isExceed || (e
											.reload(), e.isCpdaily && e
											.getCurrentPhoto(), a = null,
											"WebSocket" in window ? (a =
												new WebSocket("".concat((
														"https:" ===
														window.location
														.protocol ?
														"wss://" :
														"ws://") +
													window.location
													.host,
													"/wec-counselor-leave-apps/leave/api/websocket/"
													).concat(e.id)), console
												.log("websocket连接成功")) : (
												console.log(
												"websocket连接失败"), alert(
													"当前浏览器 Not support websocket"
													)), a.onmessage =
											function(t) {
												console.log("websocket响应"),
													"1" === t.data && (e
														.showTip = !0,
														clearInterval(e
															.timer))
											}, window.onbeforeunload =
											function() {
												console.log(
														"离开页面websocket断开连接"
														), a.close()
											});
								case 3:
								case "end":
									return t.stop()
							}
						}), t)
					})))()
				},
				methods: {
					closeModal: function() {
						this.perModal = !1
					},
					handleShowModal: function() {
						this.perModal = !0
					},
					uaIsCpadaily: function() {
						this.isCpdaily = Object(T["c"])()
					},
					getCurrentPhoto: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n, r;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										for (a = 0; a < 26; a++) e.list[
										a] = {
											img: null,
											show: !1
										};
										return t.next = 3, Object(te["f"])({
											leaveId: e.leaveId,
											needApproval: e
												.needApproval
										});
									case 3:
										n = t.sent, r = n.data, e.photo = r
											.pic, e.moveType = r.moveType, e
											.direction = r.direction, e
											.twinklePoint = r.twinklePoint,
											e.background = r.background, e
											.bgColor = "#".concat(e
												.background), e.list = e
											.list.map((function(t) {
												return Object(X[
													"a"])(
													Object(X[
														"a"])
													({}, t
														), {}, {
														img: e
															.photo
													})
											})), 0 === e.moveType ? e
											.handleFixedPosition() : 1 === e
											.moveType && e
											.handleFlashPosition();
									case 13:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					handleFlashPosition: function() {
						var e = this;
						this.arr.push(this.list[1], this.list[4], this.list[7], this.list[9], this.list[11],
								this.list[14], this.list[17], this.list[20], this.list[22], this.list[24]),
							this.arr = this.arr.map((function(e) {
								return e.show = !0, e
							})), this.flashTimer = setInterval((function() {
								e.arr[e.twinklePoint].show = !e.arr[e.twinklePoint].show
							}), 1e3), this.$once("hook:beforeDestroy", (function() {
								clearInterval(e.flashTimer)
							}))
					},
					handleFixedPosition: function() {
						this.arr = [], 0 === this.direction ? (this.list = this.list.map((function(e, t) {
								return 7 !== t && 9 !== t && 11 !== t && 14 !== t && 17 !== t &&
									20 !== t && 22 !== t && 24 !== t || (e.show = !0), e
							})), this.arr = this.arr.concat(this.list.slice(0, 6))) : 1 === this.direction ?
							(this.list = this.list.map((function(e, t) {
								return 1 !== t && 4 !== t && 14 !== t && 17 !== t && 20 !== t &&
									22 !== t && 24 !== t || (e.show = !0), e
							})), this.arr = this.arr.concat(this.list.slice(5, 13), this.list.slice(18,
								19))) : 2 === this.direction ? (this.list = this.list.map((function(e, t) {
								return 1 !== t && 4 !== t && 7 !== t && 9 !== t && 11 !== t &&
									20 !== t && 22 !== t && 24 !== t || (e.show = !0), e
							})), this.arr = this.arr.concat(this.list.slice(13, 19))) : (this.list = this
								.list.map((function(e, t) {
									return 1 !== t && 4 !== t && 7 !== t && 9 !== t && 11 !== t &&
										14 !== t && 17 !== t || (e.show = !0), e
								})), this.arr = this.arr.concat(this.list.slice(0, 1), this.list.slice(19,
									26), this.list.slice(13, 14))), this.changePosition()
					},
					changePosition: function() {
						var e = this;
						this.arr[0].show = !0, this.idx = 0, this.picTimer = setInterval((function() {
							for (var t = 0; t < e.arr.length; t++) e.arr[t].show = !1;
							e.idx += 1, e.idx >= (0 === e.direction ? 6 : 1 === e.direction ?
								9 : 2 === e.direction ? 6 : 9) && (e.idx = 0);
							for (var a = 0; a < e.arr.length; a++) e.idx === a && (e.arr[a]
								.show = !0)
						}), 500), this.$once("hook:beforeDestroy", (function() {
							clearInterval(e.picTimer)
						}))
					},
					reload: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, Object(ee["a"])({
											leaveId: e.$route.params
												.id,
											needApproval: e
												.needApproval
										});
									case 2:
										if (a = t.sent, e.id = a.response
											.data.datas.qr, e.checkTimes = a
											.response.data.datas.checkTimes,
											0 !== e.checkTimes) {
											t.next = 7;
											break
										}
										return t.abrupt("return");
									case 7:
										e.timer = setInterval(Object(u["a"])
											(regeneratorRuntime.mark((
												function t() {
													var a;
													return regeneratorRuntime
														.wrap((function(
																t
																) {
																while (
																	1
																	)
																	switch (
																		t
																		.prev =
																		t
																		.next
																		) {
																		case 0:
																			return t
																				.next =
																				2,
																				Object(
																					ee[
																						"a"]
																					)
																				({
																					leaveId: e
																						.$route
																						.params
																						.id,
																					needApproval: e
																						.needApproval
																				});
																		case 2:
																			a = t
																				.sent,
																				e
																				.id =
																				a
																				.response
																				.data
																				.datas
																				.qr,
																				e
																				.checkTimes =
																				a
																				.response
																				.data
																				.datas
																				.checkTimes;
																		case 5:
																		case "end":
																			return t
																				.stop()
																	}
															}),
															t)
												}))), 15e3), e.$once(
											"hook:beforeDestroy", (
												function() {
													clearInterval(e
														.timer)
												}));
									case 9:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					getQr: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										e.reload();
									case 1:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					}
				}
			},
			ce = le,
			ue = (a("8092"), a("99c6"), Object(N["a"])(ce, K, Q, !1, null, null, null)),
			de = ue.exports,
			pe = a("1024"),
			fe = a("fa7d"),
			he = a("cc83"),
			ve = a("cdea"),
			me = a("468f"),
			be = {
				components: {
					Tab: g["a"],
					Tabs: b["a"],
					PageDetailInfo: J,
					PageDetailCode: de,
					CatStatusFlag: pe["a"],
					CatTitle: m["a"],
					CatStatusShow: he["a"],
					CatTip: ve["a"],
					Dialog: v["a"],
					Popup: h["a"],
					CatButton: f["a"],
					CatSharePopup: p["a"],
					CatEmpty: d["a"],
					CatPersonalModal: re["a"]
				},
				data: function() {
					var e = this;
					return {
						isNotNew: !1,
						isCpdaily: !1,
						bool: !1,
						active: 0,
						timer: "",
						detailInfo: {},
						nowTime: "",
						nowTimeStr: "",
						tipConfig: {},
						recordStatus: null,
						isShared: !1,
						info: {},
						leaveExtends: [],
						allowWithdraw: 0,
						canPush: !1,
						showExtendTip: !1,
						isEmpty: 1,
						emptyText: "暂无数据",
						popInfo: {
							title: "不可续假",
							content: "因学校管理员开启了该请假类型必离校，当前不可以进行续假操作，请重新申请请假"
						},
						isReport: "0",
						terminationInfo: {
							allowTerminate: 0,
							terminated: 0,
							terminationObjectName: "",
							terminationReason: ""
						},
						isAllowedExtend: !1,
						leaveTypeCode: "",
						showFinishModal: !1,
						studentInfo: {},
						show: !1,
						actions: [{
							text: "撤回并删除",
							color: "#ff4400",
							action: function() {
								v["a"].confirm({
									title: "",
									message: "确定撤回并删除吗"
								}).then(Object(u["a"])(regeneratorRuntime.mark((
							function t() {
									var a;
									return regeneratorRuntime.wrap((
										function(t) {
											while (1) switch (t
												.prev = t.next
												) {
												case 0:
													return t
														.next =
														2, e
														.actionsRequest(
															1);
												case 2:
													a = t.sent,
														"0" ===
														a
														.code &&
														(Object(x[
																"c"])
															(
																"操作成功"),
															e
															.$router
															.replace(
																"/"
																)
															);
												case 4:
												case "end":
													return t
														.stop()
											}
										}), t)
								})))).catch((function() {}))
							}
						}, {
							text: "撤回并重新编辑",
							action: function() {
								e.toReEdit()
							}
						}],
						reoprtActions: [{
							text: "撤回并删除",
							color: "#ff4400",
							action: function() {
								v["a"].confirm({
									title: "确定撤回并删除吗",
									message: " 确认撤回并删除提交的销假申请吗？撤回并删除后数据不可恢复，请谨慎操作！"
								}).then(Object(u["a"])(regeneratorRuntime.mark((
							function t() {
									var a;
									return regeneratorRuntime.wrap((
										function(t) {
											while (1) switch (t
												.prev = t.next
												) {
												case 0:
													return t
														.next =
														2, e
														.reportActionsRequest();
												case 2:
													a = t.sent,
														"0" ===
														a
														.code &&
														(Object(x[
																"c"])
															(
																"操作成功"),
															window
															.location
															.reload()
															);
												case 4:
												case "end":
													return t
														.stop()
											}
										}), t)
								})))).catch((function() {}))
							}
						}, {
							text: "撤回并重新编辑",
							action: function() {
								var t = Object(u["a"])(regeneratorRuntime.mark((function t() {
									var a, n, r;
									return regeneratorRuntime.wrap((function(
									t) {
										while (1) switch (t.prev = t
											.next) {
											case 0:
												return t.next =
													2, e
													.reportActionsRequest();
											case 2:
												a = t.sent, n =
													a.datas, r =
													a.code,
													console.log(
														n, r),
													"0" === r &&
													(Object(x[
															"c"])
														(
														"操作成功"),
														localStorage
														.setItem(
															"widthDrawData",
															JSON
															.stringify(
																n
																.reportAttach
																)
															), e
														.doReportEdit()
														);
											case 7:
											case "end":
												return t.stop()
										}
									}), t)
								})));

								function a() {
									return t.apply(this, arguments)
								}
								return a
							}()
						}],
						deviceId: "",
						appVersion: ""
					}
				},
				computed: {
					currentNodeTimeSection: function() {
						var e = {};
						if (this.leaveExtends.length > 0) {
							var t = this.leaveExtends[this.leaveExtends.length - 1];
							e = {
								startTimeStr: t.startTimeDB,
								endTimeStr: t.endTimeDB
							}
						} else e = {
							startTimeStr: this.info.startDate,
							endTimeStr: this.info.endDate
						};
						return e
					},
					isExtReject: function() {
						return this.lastExtStatus === H["a"].REJECT
					},
					tabList: function() {
						return [{
							key: "info",
							is: J,
							title: "请假信息",
							detailInfo: this.detailInfo,
							disabled: !1
						}, {
							key: "code",
							is: de,
							title: "核验二维码",
							detailInfo: this.detailInfo,
							disabled: "1" === this.recordStatus || "4" === this.recordStatus
						}]
					},
					approveStatus: function() {
						var e = this.info.status;
						return e === H["a"].COMPLETE || e === H["a"].EXCEED ? e : this.lastExtStatus || e
					},
					lastExtStatus: function() {
						return this.lastExt ? this.lastExt.status : null
					},
					lastExt: function() {
						var e = this.leaveExtends.length;
						return e > 0 ? this.leaveExtends[e - 1] : null
					},
					isComplete: function() {
						return this.info.status === H["a"].COMPLETE
					},
					isProcessing: function() {
						return this.info.status === H["a"].PROCESSING
					},
					isLeaveReject: function() {
						return this.info.status === H["a"].REJECT
					},
					isTranspond: function() {
						return (this.isComplete || this.isProcessing) && !this.isLeaveReject && !this
							.isPending && !this.isShared
					},
					isPending: function() {
						return this.info.status === H["a"].PENDING || this.lastExtStatus === H["a"].PENDING
					},
					canWithdraw: function() {
						var e = "";
						return e = this.leaveExtends.length > 0 ? this.lastExtStatus : this.info.status,
							1 === this.needApproval && e === H["a"].PROCESSING && !this.allowWithdraw
					},
					transpondType: function() {
						return this.isDestroy || this.canTerminatedEarly || this.isExtend ? {
							type: "white",
							textColor: "normal",
							class: "btn-hairline-t"
						} : this.isTranspond ? {
							type: "primary",
							textColor: "white",
							class: ""
						} : void 0
					},
					isReportApproving: function() {
						return me["a"] === this.info.reportStatus
					},
					isReportComplete: function() {
						return me["b"] === this.info.reportStatus
					},
					isExtend: function() {
						return this.isAllowedExtend && !this.isLeaveReject && !this.isPending && !this
							.isReportComplete && !this.isReportApproving && !this.isShared
					},
					extendClass: function() {
						return this.isTranspond || this.isDestroy || this.canTerminatedEarly ?
							"btn-hairline-l btn-hairline-t" : "btn-hairline-t"
					},
					extBtnText: function() {
						return this.isExtReject ? "重新申请续假" : "申请续假"
					},
					visDesBtn: function() {
						return "1" === this.isReport
					},
					isDestroy: function() {
						return this.visDesBtn && !this.isLeaveReject && !this.isPending && !this.isShared
					},
					showReportButton: function() {
						return this.visDesBtn && !this.isLeaveReject && !this.isPending && (this.info
								.reportStatus !== me["a"] || this.info.reportStatus === me["b"]) && !this
							.isShared
					},
					canTerminatedEarlyStatus: function() {
						return this.terminationInfo.allowTerminate
					},
					canTerminatedEarly: function() {
						return this.canTerminatedEarlyStatus === H["c"].ALLOW_TERMINATE.YES
					},
					addIsLeaveOrExt: function() {
						var e = this.info.id,
							t = this.leaveExtends.length;
						return e && !t ? {
							type: "leave",
							id: e
						} : this.leaveExtends[t - 1].status === H["a"].PENDING || this.leaveExtends[t -
							1].status === H["a"].PROCESSING ? {
							type: "ext",
							id: this.leaveExtends[t - 1].id
						} : {
							type: "ext",
							id: ""
						}
					},
					needApproval: function() {
						return "0" === this.$route.params.needApproval || 0 === this.$route.params
							.needApproval ? 0 : 1
					}
				},
				created: function() {
					var e = this;
					return Object(u["a"])(regeneratorRuntime.mark((function t() {
						var a, n;
						return regeneratorRuntime.wrap((function(t) {
							while (1) switch (t.prev = t.next) {
								case 0:
									return t.next = 2, Object(O["g"])();
								case 2:
									n = t.sent, e.deviceId = null === n ||
										void 0 === n || null === (a = n
											.data) || void 0 === a ?
										void 0 : a.uuid, e.appVersion =
										window.navigator.userAgent.slice(
											window.navigator.userAgent
											.lastIndexOf("/") + 1), console
										.log("设备id：", e.deviceId, "版本号：", e
											.appVersion), e.isCpdaily =
										Object(T["c"])(), e.initPage();
								case 8:
								case "end":
									return t.stop()
							}
						}), t)
					})))()
				},
				methods: {
					initPage: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n, r, i, o, s, l, c, u;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return e.leaveId = e.$route.params
											.id, e.isShared = 1 === e.$route
											.params.shared, Object(y["e"])
										(), t.next = 5, Object(te["h"])({
												id: e.leaveId,
												needApproval: e
													.needApproval,
												deviceId: e.deviceId,
												appVersion: e
													.appVersion,
												uaIsCpadaily: Object(T[
													"c"])()
											});
									case 5:
										if (i = t.sent, o = i.data, s = i
											.code, l = i.message, Object(y[
												"b"])(), "2210060000" !== s
											) {
											t.next = 14;
											break
										}
										return e.isEmpty = 0, e.emptyText =
											l, t.abrupt("return");
									case 14:
										e.isEmpty = 2, e.detailInfo = {
												data: o,
												code: s
											}, e.info = o.detail || {}, e
											.studentInfo = o.studentInfo ||
											{}, e.leaveExtends = (null ===
												o || void 0 === o ? void 0 :
												o.leaveExtends) || [], e
											.tipConfig = {
												notAllowTitle: null === o ||
													void 0 === o || null ===
													(a = o.condition) ||
													void 0 === a ? void 0 :
													a.reportTutorialTitle,
												notAllowUrl: null === o ||
													void 0 === o || null ===
													(n = o.condition) ||
													void 0 === n ? void 0 :
													n.reportTutorialUrl
											}, c = o.nowTime || new Date,
											c = Object(w["a"])(c).valueOf(),
											e.nowTimeStr = c, e.nowTime =
											"当前时间:".concat(Object(fe["b"])(
												c, "yyyy-MM-dd hh:mm:ss"
												)), e.getNowTime(c), e
											.recordStatus = o
											.recordStatus || "", e
											.allowWithdraw = null === o ||
											void 0 === o || null === (r = o
												.condition) || void 0 ===
											r ? void 0 : r.allowWithdraw, e
											.canPush = !(null !== o &&
												void 0 !== o && o.isPress),
											e.isReport = null === o ||
											void 0 === o ? void 0 : o
											.isReport, e.terminationInfo = (
												null === o || void 0 === o ?
												void 0 : o.termination) ||
											{}, e.isAllowedExtend = null ===
											o || void 0 === o ? void 0 : o
											.isAllowedExtend, o.leaveType &&
											(e.leaveTypeCode = null === o ||
												void 0 === o || null === (
													u = o.leaveType) ||
												void 0 === u ? void 0 : u
												.code);
									case 32:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					showInfoModal: function() {
						this.show = !0
					},
					closeModal: function() {
						this.show = !1
					},
					changeTab: function(e) {
						0 === e && this.initPage()
					},
					disabledHandler: function() {
						"1" === this.recordStatus ? Object(x["b"])({
							message: "当前为未审批状态，请审批完成之后再查看核验二维码",
							duration: 4e3
						}) : "4" === this.recordStatus && Object(x["b"])({
							message: "当前申请被驳回，无法查看核验二维码",
							duration: 4e3
						})
					},
					getNowTime: function(e) {
						var t = this;
						clearInterval(this.timer);
						var a = Object(w["a"])(e).valueOf();
						this.timer = setInterval((function() {
							a += 1e3, t.nowTime = "当前时间:".concat(Object(fe["b"])(a,
								"yyyy-MM-dd hh:mm:ss"))
						}), 1e3)
					},
					toShare: function() {
						var e = (location.origin + location.pathname).replace("home", "share"),
							t = "".concat(e, "?id=").concat(this.leaveId, "&needApproval=").concat(this
								.needApproval),
							a = {
								title: "分享请假信息",
								desc: "分享请假信息",
								link: t,
								imgUrl: Object(C["o"])("common-counselor-cat")
							};
						this.$refs.CatSharePopup && this.$refs.CatSharePopup[0].start(a)
					},
					handleReportClick: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, Object(k["a"])(e
											.reoprtActions);
									case 2:
										n = t.sent, null !== (a = e
												.reoprtActions[n]) &&
											void 0 !== a && a.action && e
											.reoprtActions[n].action();
									case 4:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					reportActionsRequest: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n, r;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return a = {
												leaveId: e.leaveId,
												needApproval: e.needApproval
											}, Object(y["e"])("正在处理中..."), t
											.next = 4, Object(te["E"])(a);
									case 4:
										return n = t.sent, r = n.originData,
											Object(y["b"])(), t.abrupt(
												"return", r);
									case 8:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					doReportEdit: function() {
						this.$router.push({
							name: "pageComplete",
							query: {
								widthDraw: 1
							},
							params: {
								id: this.leaveId,
								needApproval: this.needApproval
							}
						})
					},
					actionsRequest: function(e) {
						var t = this;
						return Object(u["a"])(regeneratorRuntime.mark((function a() {
							var n, r, i, o, s, l, c;
							return regeneratorRuntime.wrap((function(a) {
								while (1) switch (a.prev = a.next) {
									case 0:
										return n = t.addIsLeaveOrExt, r = n
											.type, i = n.id, o = "leave" ===
											r ? 1 : 2, s = {
												id: i,
												type: o,
												operType: e
											}, Object(y["e"])("正在处理中..."), a
											.next = 6, Object(te["m"])(s);
									case 6:
										return l = a.sent, c = l.originData,
											Object(y["b"])(), a.abrupt(
												"return", c);
									case 10:
									case "end":
										return a.stop()
								}
							}), a)
						})))()
					},
					toReEdit: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n, r, i, o, s;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										if (!e.info.outStatus && !e
											.mustOut) {
											t.next = 4;
											break
										}
										e.goToCreateAndEdit(), t.next = 23;
										break;
									case 4:
										return Object(y["e"])(), t.next = 7,
											Object(te["y"])({});
									case 7:
										if (a = t.sent, n = a.data, Object(
												y["b"])(), r = n.leaveType,
											!(r && r.length > 0)) {
											t.next = 23;
											break
										}
										i = {}, o = 0;
									case 14:
										if (!(o < r.length)) {
											t.next = 22;
											break
										}
										if (s = r[o], s.code !== e
											.leaveTypeCode) {
											t.next = 19;
											break
										}
										return i = s, t.abrupt("break", 22);
									case 19:
										o++, t.next = 14;
										break;
									case 22:
										i.mustOut ? (e.popInfo.title =
												"不可重新编辑", e.popInfo
												.content =
												"因贵校已将该请假类型必离校开启，非离校请假申请不可重新编辑",
												e.showExtendTip = !0) : e
											.goToCreateAndEdit();
									case 23:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					goToCreateAndEdit: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n, r, i;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, e.actionsRequest(
											2);
									case 2:
										if (a = t.sent, "0" === a.code) {
											t.next = 5;
											break
										}
										return t.abrupt("return");
									case 5:
										"0" === a.code && Object(x["c"])(
												"操作成功"), n = a.datas || {},
											r = n.type, i = n.id, 1 === r ?
											e.$router.replace({
												name: "create",
												query: {
													leaveId: i,
													type: "reEdit"
												}
											}) : e.$router.push({
												name: "applyExtend",
												query: {
													extendId: i,
													leaveId: e.info.id
												}
											});
									case 8:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					toComplete: function() {
						this.$router.push("/complete/".concat(this.leaveId, "/").concat(this.needApproval))
					},
					push: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n, r, i, o, s;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										if (e.canPush) {
											t.next = 2;
											break
										}
										return t.abrupt("return", !1);
									case 2:
										return a = e.lastExtStatus === H[
												"a"].PENDING, n = a ? e
											.lastExt.id : e.leaveId, r = a ?
											"1" : "0", i = {
												id: n,
												approveType: r
											}, Object(y["e"])("正在处理中..."), t
											.next = 9, Object(te["n"])(i);
									case 9:
										o = t.sent, s = o.originData,
											Object(y["b"])(), e.canPush = !
											1, "0" === s.code && (e
												.initPage(), Object(x["c"])(
													"催办成功"));
									case 14:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					toFinishEarly: function() {
						this.showFinishModal = !0, this.$router.push({
							name: "PageEarlyTermination",
							params: {
								apiMethod: te["D"],
								tipConfig: {
									title: "操作成功后，系统将发送消息，通知相关审批人"
								},
								params: {
									leaveIds: this.leaveId,
									needApproval: this.needApproval
								}
							}
						})
					},
					toExtend: function() {
						if (this.mustOut && !this.info.outStatus) return this.popInfo.title = "不可续假", this
							.popInfo.content = "因学校管理员开启了该请假类型必离校，当前不可以进行续假操作，请重新申请请假", void(this
								.showExtendTip = !0);
						this.isExtReject ? this.$router.push({
							name: "applyExtend",
							query: {
								leaveId: this.info.id,
								type: "reExtend",
								needApproval: this.needApproval
							}
						}) : this.$router.push({
							name: "applyExtend",
							query: {
								leaveId: this.info.id,
								type: "extend",
								needApproval: this.needApproval
							}
						})
					},
					action: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, Object(k["a"])(e
											.actions);
									case 2:
										n = t.sent, null !== (a = e.actions[
												n]) && void 0 !== a && a
											.action && e.actions[n]
										.action();
									case 4:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					toCreate: function() {
						this.$router.push({
							name: "create",
							query: {
								leaveId: this.info.id,
								type: "reCreate"
							}
						})
					}
				}
			},
			ge = be,
			ye = (a("4517"), Object(N["a"])(ge, l, c, !1, null, null, null)),
			we = ye.exports,
			xe = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "page-early-termination flex-col h-screen ios-touch-scroll"
				}, [a("div", {
					staticClass: "flex-1"
				}, [1 === e.needApproval ? a("CatTitle", {
					staticClass: "no-shrink bg-warning tip text-center px-20",
					attrs: {
						size: "3.20000vw",
						title: e.tipConfig.title
					}
				}) : e._e(), a("div", {
					staticClass: "py-10 px-20 bg-white mb-10 hairline-b hairline-t"
				}, [a("div", {
					staticClass: "mb-10"
				}, [e._v(" 提前结束说明 ")]), a("CatLongInput", {
					attrs: {
						rows: "3",
						label: "",
						maxlength: "100",
						placeholder: "请填写提前结束说明（必填，最多100字）",
						autosize: {
							maxHeight: 150
						}
					},
					model: {
						value: e.terminationReason,
						callback: function(t) {
							e.terminationReason = t
						},
						expression: "terminationReason"
					}
				})], 1)], 1), a("CatButton", {
					staticClass: "no-shrink",
					attrs: {
						type: "primary"
					},
					on: {
						click: e.confirmTerminateEarly
					}
				}, [e._v(" 确认提前结束 ")])], 1)
			},
			Ce = [],
			ke = (a("498a"), a("a179"), a("1029")),
			Oe = {
				name: "PageEarlyTermination",
				components: {
					CatTitle: m["a"],
					CatLongInput: ke["a"],
					CatButton: f["a"]
				},
				data: function() {
					return {
						terminationReason: ""
					}
				},
				computed: {
					apiMethod: function() {
						return this.$route.params.apiMethod
					},
					tipConfig: function() {
						return this.$route.params.tipConfig
					},
					params: function() {
						return this.$route.params.params
					},
					needApproval: function() {
						var e, t, a = null === (e = this.$route.params) || void 0 === e || null === (t = e
							.params) || void 0 === t ? void 0 : t.needApproval;
						return a = "0" === a || 0 === a ? 0 : 1, a
					}
				},
				methods: {
					confirmTerminateEarly: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n, r;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										if (a = e.terminationReason.trim(),
											0 !== a.length) {
											t.next = 4;
											break
										}
										return Object(x["b"])("请输入提前结束说明"),
											t.abrupt("return");
									case 4:
										return t.next = 6, e.apiMethod(
											Object(X["a"])(Object(X[
												"a"])({}, e
											.params), {}, {
												terminationReason: e
													.terminationReason
											}));
									case 6:
										n = t.sent, r = n.originData,
											"0" === r.code && (Object(x[
													"c"])("提前结束成功"), e
												.$router.go(-1));
									case 9:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					}
				}
			},
			Te = Oe,
			Ae = (a("5c99"), Object(N["a"])(Te, xe, Ce, !1, null, null, null)),
			Se = Ae.exports,
			je = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "page-complete flex-col flex-1 h-screen ios-touch-scroll"
				}, [a("div", {
					staticClass: "flex-1"
				}, [a("CatCellUpload", {
					ref: "catCellUpload",
					staticClass: "hairline-b",
					attrs: {
						label: "添加附件",
						count: 10,
						http: e.http,
						required: e.isReportattach,
						"download-media-url": e.downloadMediaURL,
						"sts-access-url": e.getMobileOSSAccessURL,
						"upload-policy-url": e.getUploadPolicyURL
					},
					model: {
						value: e.files,
						callback: function(t) {
							e.files = t
						},
						expression: "files"
					}
				}), a("cat-location", {
					ref: "catLocation",
					staticClass: "px-20 location my-10 bg-white py-10 hairline-t hairline-b",
					attrs: {
						address: e.submitAddress
					},
					on: {
						"on-location-success": e.getLocationData,
						"on-location-status": e.getLocationStatus
					}
				}), a("cat-cheat-observer", {
					ref: "cheatObserver"
				}), e.notInScope ? a("div", {
					staticClass: "text-center font-12",
					on: {
						click: e.viewScope
					}
				}, [e._v(" 你不在"), a("span", {
					staticClass: "font-primary"
				}, [e._v("销假范围")]), e._v("内，暂时不能销假 ")]) : e._e(), a(
					"BusNeedReportApplyModal", {
						ref: "busNeedReportApplyModal",
						attrs: {
							"report-apply-flow": e.reportApplyFlow
						},
						on: {
							"on-select-report": e.handleSelectReport
						}
					})], 1), a("CatButton", {
					staticClass: "no-shrink",
					on: {
						click: e.whenNeedReportApplyAction
					}
				}, [e._v(" 确认销假 ")])], 1)
			},
			Re = [],
			Ie = (a("56d9"), a("c58d")),
			_e = (a("e8dd"), a("b208")),
			De = (a("c174"), a("30c3")),
			Le = a("fa78"),
			Ee = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("v-dialog", {
					staticClass: "bus-need-report-apply-modal",
					attrs: {
						"show-cancel-button": "",
						"get-container": "body",
						"confirm-button-text": "提交",
						"cancel-button-text": "再检查一下",
						title: "确认提交销假申请？"
					},
					on: {
						confirm: e.handlSelectReport,
						cancel: function() {
							return e.showStatus = !1
						}
					},
					model: {
						value: e.showStatus,
						callback: function(t) {
							e.showStatus = t
						},
						expression: "showStatus"
					}
				}, [a("div", {
					staticClass: "content font-14 text-center"
				}, [e.reportApplyFlow ? a("div", [a("p", [e._v("提交销假申请后，需老师审批，批准后，")]), a("p", [
					e._v("即可完成销假。该销假审批流程与请假时")
				]), a("p", [e._v("一致。请选择第一级审批人：")])]) : a("div", [a("p", [e._v(
					"提交销假申请后，需老师审批，")]), a("p", [e._v("批准后，即可完成销假")])]), a("p", {
					staticClass: "select flex-center jc-between",
					on: {
						click: e.showSelectPick
					}
				}, [a("span", [e._v(e._s(e.selectValue.userName || "请选择"))]), a(
				"Icon", {
					attrs: {
						size: "4.26667vw",
						name: "arrow"
					}
				})], 1)])])
			},
			Pe = [],
			Me = (a("a9e3"), a("c3a6"), a("ad06")),
			$e = a("9ede"),
			Ne = {
				name: "BusNeedReportApplyModal",
				components: {
					"v-dialog": v["a"].Component,
					Icon: Me["a"]
				},
				inheritAttrs: !1,
				props: {
					reportApplyFlow: {
						default: 0,
						type: Number
					}
				},
				data: function() {
					return {
						showStatus: !1,
						selectValue: {},
						selectList: []
					}
				},
				methods: {
					show: function(e) {
						var t = e.selectList;
						this.showStatus = !0, this.selectList = t, this.selectList.length > 0 ? this
							.selectValue = this.selectList[0] : this.selectValue = {}
					},
					showSelectPick: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return a = e.selectList.map((
												function(e) {
													return e.userName
												})).filter(Boolean), t
											.next = 3, Object($e["a"])(e
												.selectIds, a, {
													title: "选择销假审批人"
												});
									case 3:
										n = t.sent, n > -1 && (e.selectIds =
											n, e.selectValue = e
											.selectList[n]);
									case 5:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					handlSelectReport: function() {
						this.selectValue.userWid ? this.$emit("on-select-report", this.selectValue) :
							Object(x["a"])("销假审批人不能为空，请选择！")
					}
				}
			},
			qe = Ne,
			Fe = (a("ca8a"), Object(N["a"])(qe, Ee, Pe, !1, null, null, null)),
			Be = Fe.exports,
			We = {
				components: {
					CatCellUpload: De["a"],
					CatLocation: _e["a"],
					CatButton: f["a"],
					CatCheatObserver: Ie["a"],
					BusNeedReportApplyModal: Be
				},
				data: function() {
					return {
						getMobileOSSAccessURL: te["j"],
						downloadMediaURL: te["e"],
						getUploadPolicyURL: te["l"],
						http: Le["a"],
						reportApply: 0,
						isReportattach: !1,
						approverWid: "",
						reportPlaces: [],
						submitAddress: "",
						locationStatus: "",
						locationData: {},
						files: [],
						notInScope: !1,
						reportApplyFlow: 0,
						leaveCode: null,
						leaveNeedApproval: 0
					}
				},
				computed: {
					hasReportPlace: function() {
						return this.reportPlaces.length > 0
					},
					disabled: function() {
						return this.notInScope || this.isReportattach && this.files.length < 4
					},
					id: function() {
						return this.$route.params.id
					},
					needApproval: function() {
						return "0" === this.$route.params.needApproval || 0 === this.$route.params
							.needApproval ? 0 : 1
					},
					widthDraw: function() {
						return 1 === +this.$route.query.widthDraw
					}
				},
				created: function() {
					this.initPage()
				},
				methods: {
					initPage: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n, r;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, Object(te["h"])({
											id: e.id,
											needApproval: e
												.needApproval,
											uaIsCpadaily: sessionStorage
												.uaIsCpadaily
										});
									case 2:
										a = t.sent, n = a.data, e
											.reportPlaces = n
											.reportPlaces || [], e
											.reportApply = n.leaveType
											.reportApply, e
											.reportApplyFlow = n.leaveType
											.reportApplyFlow, e.leaveCode =
											n.leaveType.code, e
											.leaveNeedApproval = n.leaveType
											.needApproval, e.widthDraw && (
												r = JSON.parse(localStorage
													.getItem(
														"widthDrawData")),
												r && (e.files = r.map((
													function(e) {
														return {
															attachmentUrl: e
																.url,
															type: e
																.type
														}
													})))), e
											.getLeaveAllocation(1);
									case 11:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					getLeaveAllocation: function(e) {
						var t = this;
						return Object(u["a"])(regeneratorRuntime.mark((function a() {
							var n, r;
							return regeneratorRuntime.wrap((function(a) {
								while (1) switch (a.prev = a.next) {
									case 0:
										return a.next = 2, Object(te["c"])({
											type: e
										});
									case 2:
										n = a.sent, r = n.data, t
											.isReportattach = 1 === r
											.reportattach;
									case 5:
									case "end":
										return a.stop()
								}
							}), a)
						})))()
					},
					getLocationData: function(e) {
						var t = this;
						return Object(u["a"])(regeneratorRuntime.mark((function a() {
							var n, r, i, o;
							return regeneratorRuntime.wrap((function(a) {
								while (1) switch (a.prev = a.next) {
									case 0:
										if (t.locationData = e, t
											.submitAddress = e.address ||
											"定位信息", !(t.reportPlaces
												.length < 1)) {
											a.next = 8;
											break
										}
										return a.next = 5, Object(te["h"])({
											id: t.id,
											needApproval: t
												.needApproval,
											uaIsCpadaily: sessionStorage
												.uaIsCpadaily
										});
									case 5:
										n = a.sent, r = n.data, t
											.reportPlaces = r
											.reportPlaces || [];
									case 8:
										i = Object(fe["a"])(t.reportPlaces,
												t.locationData), o = t
											.hasReportPlace ? i : 0, t
											.notInScope = 0 !== o;
									case 11:
									case "end":
										return a.stop()
								}
							}), a)
						})))()
					},
					viewScope: function() {
						Object(O["o"])({
							title: "销假范围"
						}), this.$router.push("/scope/".concat(this.id, "/").concat(this.needApproval))
					},
					getLocationStatus: function(e) {
						"fail" === e && (this.submitAddress = "定位失败"), this.locationStatus = e
					},
					whenNeedReportApplyAction: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n, r, i;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										if (!e.reportApply) {
											t.next = 19;
											break
										}
										if (!e.reportApplyFlow) {
											t.next = 12;
											break
										}
										if (e.leaveNeedApproval) {
											t.next = 5;
											break
										}
										return e.doSubmit(), t.abrupt(
											"return");
									case 5:
										return t.next = 7, Object(te["z"])({
											leaveId: e.id,
											leaveType: e.leaveCode
										});
									case 7:
										a = t.sent, n = a.data, e.$refs
											.busNeedReportApplyModal.show({
												selectList: n
													.approvers || []
											}), t.next = 17;
										break;
									case 12:
										return t.next = 14, Object(te["A"])
									({
											leaveId: e.id,
											needApproval: e
												.needApproval
										});
									case 14:
										r = t.sent, i = r.data, e.$refs
											.busNeedReportApplyModal.show({
												selectList: i || []
											});
									case 17:
										t.next = 20;
										break;
									case 19:
										e.doSubmit();
									case 20:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					beforeSubmitCheck: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n, r;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, Object(te["g"])
										({}, {
												dataKey: "datas"
											});
									case 2:
										if (a = t.sent, n = a.data, !n
											.moduleStatus) {
											t.next = 14;
											break
										}
										return t.next = 7, e.$refs
											.cheatObserver.start(n
												.interceptSwitch, n);
									case 7:
										if (r = t.sent, e.cheatType = r
											.cheatData, null === r.cheatData
											) {
											t.next = 14;
											break
										}
										return t.next = 12, Object(te["a"])
									({
											cheatType: r.cheatData,
											leaveOperateType: 2,
											leaveId: e.id,
											needApproval: e
												.needApproval,
											sendMsg: r.bool
										});
									case 12:
										if (!n.interceptSwitch || !r.bool) {
											t.next = 14;
											break
										}
										return t.abrupt("return", !1);
									case 14:
										return t.abrupt("return", !0);
									case 15:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					handleSelectReport: function(e) {
						this.approverWid = e.userWid, this.doSubmit()
					},
					doSubmit: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n, r, i, o, s, l;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										if (!(e.isReportattach && e.files
												.length < 1)) {
											t.next = 3;
											break
										}
										return Object(x["b"])(
											"需要添加附件才能完成销假"), t.abrupt(
											"return");
									case 3:
										return t.next = 5, e.$refs
											.catCellUpload.$refs.catUpload
											.getComplete();
									case 5:
										if (a = t.sent, a) {
											t.next = 9;
											break
										}
										return Object(x["b"])(
											"请等待附件上传完毕再提交销假"), t.abrupt(
											"return");
									case 9:
										if (!e.hasReportPlace || !e
											.notInScope) {
											t.next = 12;
											break
										}
										return Object(x["b"])(
											"不在销假范围中，暂时无法销假"), t.abrupt(
											"return");
									case 12:
										if ("noAuth" !== e.locationStatus) {
											t.next = 15;
											break
										}
										return Object(x["b"])(
												"请先授权移动APP平台位置信息"), t
											.abrupt("return");
									case 15:
										if (e.locationData.address) {
											t.next = 18;
											break
										}
										return Object(x["b"])(
											"销假位置信息为空，不能销假"), t.abrupt(
											"return");
									case 18:
										return Object(y["e"])("正在处理中..."), t
											.next = 21, e
											.beforeSubmitCheck();
									case 21:
										if (n = t.sent, n) {
											t.next = 25;
											break
										}
										return Object(y["b"])(), t.abrupt(
											"return");
									case 25:
										if (r = {
												url: location.origin + te[
													"p"],
												body: {
													id: e.id,
													needApproval: e
														.needApproval,
													leaveType: "".concat(e
														.leaveCode),
													reportLocation: e
														.locationData
														.address,
													approverWid: e
														.approverWid,
													reportAttach: e.files
														.map((function(e) {
															return {
																url: e
																	.attachmentUrl,
																type: 1
															}
														})),
													uaIsCpadaily: !0
												},
												headers: {
													extension: "1",
													sign: "1"
												}
											}, !Object(O["h"])(
											"sendPost")) {
											t.next = 33;
											break
										}
										return t.next = 29, Object(O["n"])(
											r);
									case 29:
										i = t.sent, e.submitAfter(i.data, !
											0), t.next = 39;
										break;
									case 33:
										return o = Object(X["a"])(Object(X[
												"a"])({}, r.body), {}, {
												uaIsCpadaily: !1,
												latitude: e.locationData
													.latitude || "",
												longitude: e
													.locationData
													.longitude || ""
											}), t.next = 36, Object(te["o"])
											(o);
									case 36:
										s = t.sent, l = s.originData, e
											.submitAfter(l);
									case 39:
										Object(y["b"])();
									case 40:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					submitAfter: function(e, t) {
						Object(y["b"])(), 0 === +e.code ? (Object(x["c"])("销假成功"), this.$EventBus.$emit(
							"refresh-list"), this.$router.go(-1)) : t && Object(x["a"])(e.message || "")
					}
				}
			},
			Ue = We,
			Ve = Object(N["a"])(Ue, je, Re, !1, null, null, null),
			He = Ve.exports,
			ze = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "page-scope flex-col h-screen relative ios-touch-scroll"
				}, [a("div", {
					staticClass: "flex-1",
					attrs: {
						id: "bMap"
					}
				}), e.loading ? e._e() : a("div", {
					staticClass: "flex-center p-5 bg-white location-icon radius-small absolute",
					on: {
						click: e.updateMyLoc
					}
				}, [a("CatIcon", {
					staticClass: "bg-white font-normal",
					attrs: {
						size: "9.60000vw",
						name: "locate"
					}
				})], 1), e.loading ? e._e() : a("div", {
					staticClass: "no-shrink"
				}, [a("div", {
						staticClass: "location-status font-normal font-14 bg-white py-10 flex-col ai-center"
					}, [a("div", {
						staticClass: "status flex-center mb-5"
					}, [a("div", {
						staticClass: "status-icon mr-5 radius-circle",
						class: e.iconStatus
					}), a("div", {
						staticClass: "status-text"
					}, [e._v(" " + e._s(e.statusText) + " "), e.inScope ? a(
						"span", {
							staticClass: "font-primary",
							on: {
								click: e.goBack
							}
						}, [e._v("进行销假 >")]) : e._e()])]), a("div", {
						staticClass: "flag flex font-14 nowrap"
					}, [a("div", [e._v("当前销假范围：")]), a("CatTitle", {
						staticClass: "font-normal flag-address",
						attrs: {
							size: "3.73333vw",
							title: e.nowScopeText
						}
					})], 1)]), e.reportPlaces.length > 0 ? a("CatButton", {
						attrs: {
							type: "primary"
						},
						on: {
							click: e.showPlacePicker
						}
					}, [e._v(" " + e._s("切换销假范围(" + e.reportPlaces.length + ")") + " ")]) : e
					._e()
				], 1)])
			},
			Ge = [],
			Ze = {
				components: {
					CatButton: f["a"],
					CatTitle: m["a"],
					CatIcon: R["a"]
				},
				data: function() {
					return {
						inScope: !1,
						selectedIdx: 0,
						reportPlaces: [],
						map: null,
						myloc: null,
						initZoom: 15,
						notInScope: !1,
						loading: !0
					}
				},
				computed: {
					statusText: function() {
						return this.inScope ? "已进入销假范围" : "你不在销假范围内"
					},
					iconStatus: function() {
						return this.inScope ? "bg-success" : "bg-error"
					},
					id: function() {
						return this.$route.params.id
					},
					needApproval: function() {
						return "0" === this.$route.params.needApproval || 0 === this.$route.params
							.needApproval ? 0 : 1
					},
					nowScopeText: function() {
						return this.reportPlaces[this.selectedIdx].address
					}
				},
				mounted: function() {
					this.initPage()
				},
				methods: {
					initPage: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, e.getPlaces();
									case 2:
										e.map = new BMap.Map("bMap"), e
											.updateMyLoc();
									case 4:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					updateMyLoc: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n, r, i;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, Object(O["f"])();
									case 2:
										a = t.sent, n = a.data, r = new BMap
											.Point(n.longitude, n.latitude),
											e.myloc = r, e.map
											.centerAndZoom(r, e.initZoom), e
											.paintMyLocation(r), e
											.reportPlaces.length > 0 && e
											.paintReportLocation(e
												.reportPlaces[0]), i =
											Object(fe["a"])(e.reportPlaces,
												r), e.inScope = 0 === i;
									case 11:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					goBack: function() {
						this.$route.go(-1)
					},
					paintCircle: function(e, t) {
						return new BMap.Circle(e, t, {
							strokeColor: "#0088ff",
							strokeWeight: .5,
							fillColor: "#E2E8F1",
							fillOpacity: .5
						})
					},
					paintMyLocation: function(e) {
						var t = new BMap.Icon(
								"https://feres.cpdaily.com/fe_components/counselor-assets/images/common-self.png", {
									width: 48,
									height: 48
								}),
							a = new BMap.Marker(e, {
								icon: t
							});
						this.map.addOverlay(a)
					},
					paintReportLocation: function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
							a = new BMap.Point(e.longitude, e.latitude);
						this.map.removeOverlay(this.repMarker), this.map.removeOverlay(this.repCircle), this
							.repMarker = new BMap.Marker(a, {
								icon: new BMap.Icon(
									"https://feres.cpdaily.com/cpdaily/counselor/position01.png",
									new BMap.Size(32, 32))
							}), this.repCircle = this.paintCircle(a, e.radius), this.map.addOverlay(this
								.repMarker), this.map.addOverlay(this.repCircle), t && this.map.panTo(a)
					},
					getPlaces: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return Object(y["e"])(), t.next = 3,
											Object(te["h"])({
												id: e.id,
												needApproval: e
													.needApproval,
												uaIsCpadaily: sessionStorage
													.uaIsCpadaily
											});
									case 3:
										a = t.sent, n = a.data, e
											.loading = !1, Object(y["b"])(),
											e.reportPlaces = n
											.reportPlaces || [];
									case 8:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					showPlacePicker: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, Object($e["a"])(e
											.selectedIdx, e
											.reportPlaces, {
												title: "切换销假范围",
												valueKey: "address"
											});
									case 2:
										a = t.sent, e.selectedIdx = a, e
											.paintReportLocation(e
												.reportPlaces[a], !0);
									case 5:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					}
				}
			},
			Je = Ze,
			Ke = (a("62c5"), Object(N["a"])(Je, ze, Ge, !1, null, null, null)),
			Qe = Ke.exports,
			Xe = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "page-apply-extend flex-col flex-1 h-screen overflow-hidden"
				}, [e.render ? a("div", {
					ref: "box",
					staticClass: "form-content  flex-1 ios-touch-scroll"
				}, [a("cat-tip", {
						attrs: {
							"tip-config": e.leaveConfig
						}
					}), a("CatCell", {
						attrs: {
							label: "续假类型"
						}
					}, [a("div", {
						staticClass: "text-trunc"
					}, [e._v(" " + e._s(e.leaveTypeName) + " ")])]), a(
						"cat-cell-date-time-picker", {
							key: "startTime",
							attrs: {
								disabled: "",
								required: "",
								label: "开始时间"
							},
							model: {
								value: e.model.startTime,
								callback: function(t) {
									e.$set(e.model, "startTime", t)
								},
								expression: "model.startTime"
							}
						}), a("cat-cell-date-time-picker", {
						attrs: {
							required: "",
							label: "结束时间"
						},
						model: {
							value: e.model.endTime,
							callback: function(t) {
								e.$set(e.model, "endTime", t)
							},
							expression: "model.endTime"
						}
					}), a("CatCell", {
						attrs: {
							label: "需要离校"
						}
					}, [e._v(" " + e._s(e.leaveText) + " ")]), e.model.outStatus ? a(
						"cat-cell-input", {
							attrs: {
								right: "",
								required: "",
								maxlength: "11",
								"class-str": "flex jc-between font-normal flex-1 ai-center",
								label: "紧急联系人",
								placeholder: "请输入手机号码(不能填写自己的)"
							},
							model: {
								value: e.model.urgencyMobile,
								callback: function(t) {
									e.$set(e.model, "urgencyMobile", t)
								},
								expression: "model.urgencyMobile"
							}
						}) : e._e(), e.showAddress ? a("cat-cell-area-picker", {
						staticClass: "mt-10 hairline-t",
						attrs: {
							"is-link": "",
							required: "",
							label: "目的地"
						},
						model: {
							value: e.model.address,
							callback: function(t) {
								e.$set(e.model, "address", t)
							},
							expression: "model.address"
						}
					}) : e._e(), e.showAddress ? a("cat-cell-long-input", {
						staticClass: "mb-10 hairline-b",
						attrs: {
							rows: "3",
							required: "",
							maxlength: "100",
							"show-word-limit": "",
							label: "详细地址",
							placeholder: "请输入目的地详细地址，如道路、门牌号、小区、楼栋号、单元室等",
							autosize: {
								maxHeight: 120
							}
						},
						model: {
							value: e.model.detailAddress,
							callback: function(t) {
								e.$set(e.model, "detailAddress", t)
							},
							expression: "model.detailAddress"
						}
					}) : e._e(), a("cat-cell-long-input", {
						class: e.showAddress ? "hairline-t-n" : "",
						attrs: {
							rows: "3",
							required: "",
							maxlength: "300",
							"show-word-limit": "",
							label: "续假原因",
							placeholder: "请输入续假原因[必填]，至少10字",
							autosize: {
								maxHeight: 120
							}
						},
						model: {
							value: e.model.leaveReason,
							callback: function(t) {
								e.$set(e.model, "leaveReason", t)
							},
							expression: "model.leaveReason"
						}
					}), e.fields && e.fields.length ? e._l(e.fields, (function(t, n) {
						return a("BusAddFields", {
							key: n,
							ref: "fields" + n,
							refInFor: !0,
							attrs: {
								item: t,
								"show-border": n + 1 === e.fields.length
							}
						})
					})) : e._e(), a("cat-cell-upload", {
						ref: "catCellUpload",
						attrs: {
							label: "添加附件",
							count: 4,
							http: e.http,
							required: e.isRequired,
							"download-media-url": e.downloadMediaURL,
							"sts-access-url": e.getMobileOSSAccessURL,
							"upload-policy-url": e.getUploadPolicyURL
						},
						model: {
							value: e.model.applyAttach,
							callback: function(t) {
								e.$set(e.model, "applyAttach", t)
							},
							expression: "model.applyAttach"
						}
					}), e.approveFlow.length > 0 && 1 === e.needApproval ? a("div", {
						staticClass: "approveFlow text-center py-10 font-14"
					}, [e._v(" 审批流程共" + e._s(e.approveFlow.length) + "步 "), a("span", {
						staticClass: "font-primary",
						on: {
							click: function() {
								return e.showFlowModal = !0
							}
						}
					}, [e._v("查看 >")])]) : e._e(), e.renderTime.startTime && e.renderTime
					.endTime && e.leaveTypeName && e.timeIsOk && 1 === e.needApproval ? a(
						"cat-cell-picker", {
							attrs: {
								"is-link": "",
								required: "",
								"name-key": "userName",
								"value-key": "userWid",
								label: "审批人",
								options: e.approvers
							},
							on: {
								"on-confirm": e.getApproverIdInfo
							},
							model: {
								value: e.model.approverWid,
								callback: function(t) {
									e.$set(e.model, "approverWid", t)
								},
								expression: "model.approverWid"
							}
						}) : e._e(), e.hasGotSender && 1 === e.needApproval ? a(
					"CatCellPeople", {
						attrs: {
							label: "抄送人",
							list: e.chooseData
						},
						on: {
							click: e.doShowChoosePeople
						}
					}) : e._e(), a("cat-location", {
						staticClass: "px-20 location py-10 bg-white",
						attrs: {
							"read-only": e.isRequestOk,
							address: e.submitAddress
						},
						on: {
							"on-location-success": e.getLocationData,
							"on-location-status": e.getLocationStatus
						}
					}), 1 === e.leaveConfig.openDisclaimers ? a("Checkbox", {
						staticClass: "bg-white px-10 py-15 hairline-t break-all",
						model: {
							value: e.agreement,
							callback: function(t) {
								e.agreement = t
							},
							expression: "agreement"
						}
					}, [e._v(" " + e._s(e.leaveConfig.disclaimers) + " ")]) : e._e()
				], 2) : e._e(), a("cat-flow-chart-modal", {
					attrs: {
						title: "审批流程",
						options: e.approveFlow
					},
					model: {
						value: e.showFlowModal,
						callback: function(t) {
							e.showFlowModal = t
						},
						expression: "showFlowModal"
					}
				}), a("cat-cheat-observer", {
					ref: "cheatObserver"
				}), e.render ? a("cat-button", {
					staticClass: "no-shrink",
					attrs: {
						disabled: e.submitDisabled
					},
					on: {
						click: e.submit
					}
				}, [e._v(" 提交续假 ")]) : e._e()], 1)
			},
			Ye = [],
			et = (a("7db0"), a("c975"), a("a15b"), a("45fc"), a("1276"), a("ddb0"), a("53ca")),
			tt = (a("c0e9"), a("2a40")),
			at = (a("3c32"), a("417e")),
			nt = (a("cbc1"), a("d7e6")),
			rt = (a("f77b"), a("be6d")),
			it = (a("0a97"), a("15ea")),
			ot = (a("2a30"), a("209c")),
			st = (a("3a99"), a("64d9")),
			lt = (a("00c5"), a("4682")),
			ct = a("2f62"),
			ut = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "busAddFields bg-white p-5 pb-10 ",
					class: {
						"hairline-b": !e.showBorder
					}
				}, [a("div", {
					staticClass: "flex-start"
				}, [e.item.tag ? a("div", {
					staticStyle: {
						color: "#ee0a24",
						width: "4.00000vw",
						"text-align": "center"
					}
				}, [e._v(" * ")]) : e._e(), a("span", {
					staticClass: "font-dark break-all ",
					class: e.item.tag ? "" : "pl-15"
				}, [e._v(e._s(e.item.title))])]), a("div", {
					staticClass: "font-light break-all  font-12 pl-15"
				}, [e._v(" " + e._s(e.item.remark) + " ")]), e.item.defineType ? e._e() : a(
					"RadioGroup", {
						staticClass: "pl-15 pr-5",
						on: {
							change: e.onChange
						},
						model: {
							value: e.item.autoDefineSubWid,
							callback: function(t) {
								e.$set(e.item, "autoDefineSubWid", t)
							},
							expression: "item.autoDefineSubWid"
						}
					}, [e._l(e.item.holidayAutoDefineSubs, (function(t, n) {
						return a("Radio", {
							key: n,
							staticClass: "mt-5 break-all",
							attrs: {
								name: t.wid
							}
						}, [e._v(" " + e._s(t.content) + " ")])
					})), e.item.other ? a("Radio", {
						staticClass: "mt-5",
						attrs: {
							name: "0"
						}
					}, [a("div", {
						staticClass: "flex-center"
					}, [a("div", {
						staticStyle: {
							width: "10.66667vw"
						}
					}, [e._v(" 其他 ")]), a("Field", {
						staticClass: "w-full border-normal",
						attrs: {
							maxlength: "25",
							placeholder: "请输入"
						},
						model: {
							value: e.item.text,
							callback: function(t) {
								e.$set(e.item, "text", t)
							},
							expression: "item.text"
						}
					})], 1)]) : e._e()], 2), e.item.defineType ? a("div", {
					staticClass: "pl-15 mt-5 pr-10"
				}, [a("Field", {
					staticClass: "border-normal",
					attrs: {
						rows: "1",
						maxlength: "600",
						type: "textarea",
						placeholder: "请输入",
						autosize: {
							maxHeight: 120
						}
					},
					model: {
						value: e.item.text,
						callback: function(t) {
							e.$set(e.item, "text", t)
						},
						expression: "item.text"
					}
				})], 1) : e._e()], 1)
			},
			dt = [],
			pt = (a("be7f"), a("565f")),
			ft = (a("a44c"), a("e27c")),
			ht = (a("4ddd"), a("9f14")),
			vt = {
				components: {
					Radio: ht["a"],
					RadioGroup: ft["a"],
					Field: pt["a"]
				},
				props: {
					item: {
						default: function() {},
						type: Object
					},
					showBorder: {
						default: !0,
						type: Boolean
					}
				},
				methods: {
					onChange: function(e) {
						this.item.other && "0" !== e && (this.item.text = "")
					}
				}
			},
			mt = vt,
			bt = (a("7387"), Object(N["a"])(mt, ut, dt, !1, null, null, null)),
			gt = bt.exports,
			yt = (a("a623"), function(e, t, a) {
				var n = e.startTime,
					r = e.endTime;
				if (!n) return Object(x["b"])("请选择开始时间"), !1;
				if (!r) return Object(x["b"])("请选择结束时间"), !1;
				if (Object(w["a"])(n).isSame(Object(w["a"])(r))) return Object(x["b"])("开始时间不能和结束时间相同"), !1;
				if (Object(w["a"])(n).isAfter(Object(w["a"])(r))) return Object(x["b"])("开始时间不能大于结束时间"), !1;
				if (a.enableLimit && (a.limitDay || a.limitHour)) {
					if (Object(w["a"])(r).diff(Object(w["a"])(n), "seconds") > 24 * a.limitDay * 60 * 60 +
						3600 * a.limitHour) {
						var i = "";
						return i = a.limitDay && a.limitHour ? "".concat(a.limitDay, "天").concat(a
							.limitHour, "小时") : a.limitDay ? "".concat(a.limitDay, "天") : "".concat(a
							.limitHour, "小时"), Object(x["b"])("请假时长不能超过".concat(i)), !1
					}
					return !0
				}
				return !t || (!(Object(w["a"])(r).diff(Object(w["a"])(n), "seconds") > 24 * t * 60 * 60) ||
					(Object(x["b"])("管理员提示：请假时长不能超过".concat(t, "天")), !1))
			}),
			wt = function(e) {
				return !e.outStatus || (e.urgencyMobile ? /^[\d-]+$/.test(e.urgencyMobile) && e.urgencyMobile
					.length > 6 && e.urgencyMobile.length < 12 || (Object(x["b"])("紧急联系人手机号码不正确"), !1) : (
						Object(x["b"])("紧急联系人手机号码不能为空"), !1))
			},
			xt = function(e) {
				var t = e.leaveReason.trim();
				return t ? t && t.length > 300 ? (Object(x["b"])("续假原因不能超过300个字"), !1) : !(t && t.length <
					10) || (Object(x["b"])("续假原因不能少于10个字"), !1) : (Object(x["b"])("续假原因不能为空"), !1)
			},
			Ct = function(e, t) {
				if (t) {
					var a = e.detailAddress && e.detailAddress.trim();
					return a ? !(a && a.length > 300) || (Object(x["b"])("详细地址不能超过300个字"), !1) : (Object(x["b"])
						("详细地址不能为空"), !1)
				}
				return !0
			},
			kt = function(e, t) {
				return !t || (!!e.address || (Object(x["b"])("请选择目的地"), !1))
			},
			Ot = [{
				key: "leaveType",
				isSelect: !0,
				required: !0,
				label: "请假类型"
			}, {
				key: "startTime",
				isSelect: !0,
				required: !0,
				label: "开始时间"
			}, {
				key: "endTime",
				isSelect: !0,
				required: !0,
				label: "结束时间"
			}, {
				key: "urgencyMobile",
				isSelect: !1,
				required: !1,
				label: "紧急联系人",
				rules: function() {
					var e = Object(u["a"])(regeneratorRuntime.mark((function e(t) {
						return regeneratorRuntime.wrap((function(e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, wt(t);
								case 2:
									return e.abrupt("return", e.sent);
								case 3:
								case "end":
									return e.stop()
							}
						}), e)
					})));

					function t(t) {
						return e.apply(this, arguments)
					}
					return t
				}()
			}, {
				key: "address",
				isSelect: !0,
				required: !1,
				label: "目的地",
				rules: function() {
					var e = Object(u["a"])(regeneratorRuntime.mark((function e(t, a) {
						return regeneratorRuntime.wrap((function(e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, kt(t, a);
								case 2:
									return e.abrupt("return", e.sent);
								case 3:
								case "end":
									return e.stop()
							}
						}), e)
					})));

					function t(t, a) {
						return e.apply(this, arguments)
					}
					return t
				}()
			}, {
				key: "detailAddress",
				isSelect: !0,
				required: !1,
				label: "详细地址",
				rules: function() {
					var e = Object(u["a"])(regeneratorRuntime.mark((function e(t, a) {
						return regeneratorRuntime.wrap((function(e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, Ct(t, a);
								case 2:
									return e.abrupt("return", e.sent);
								case 3:
								case "end":
									return e.stop()
							}
						}), e)
					})));

					function t(t, a) {
						return e.apply(this, arguments)
					}
					return t
				}()
			}, {
				key: "leaveReason",
				isSelect: !1,
				required: !1,
				label: "续假原因",
				rules: function() {
					var e = Object(u["a"])(regeneratorRuntime.mark((function e(t) {
						return regeneratorRuntime.wrap((function(e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, xt(t);
								case 2:
									return e.abrupt("return", e.sent);
								case 3:
								case "end":
									return e.stop()
							}
						}), e)
					})));

					function t(t) {
						return e.apply(this, arguments)
					}
					return t
				}()
			}, {
				key: "approverWid",
				isSelect: !0,
				required: !0,
				label: "审批人"
			}],
			Tt = function() {
				var e = Object(u["a"])(regeneratorRuntime.mark((function e(t, a, n) {
					var r, i, o, s;
					return regeneratorRuntime.wrap((function(e) {
						while (1) switch (e.prev = e.next) {
							case 0:
								r = 0, i = Ot.length;
							case 1:
								if (!(r < i)) {
									e.next = 19;
									break
								}
								if (o = Ot[r], !o.required) {
									e.next = 10;
									break
								}
								return "approverWid" === o.key && 0 === a
									.length && (o.validateResult = !0), e.next =
									7, At(t, o);
							case 7:
								o.validateResult = e.sent, e.next = 14;
								break;
							case 10:
								if (!o.rules) {
									e.next = 14;
									break
								}
								return e.next = 13, o.rules(t, n);
							case 13:
								o.validateResult = e.sent;
							case 14:
								if (o.validateResult) {
									e.next = 16;
									break
								}
								return e.abrupt("return", !1);
							case 16:
								r++, e.next = 1;
								break;
							case 19:
								return s = Ot.every((function(e) {
									return e.validateResult
								})), e.abrupt("return", s);
							case 21:
							case "end":
								return e.stop()
						}
					}), e)
				})));
				return function(t, a, n) {
					return e.apply(this, arguments)
				}
			}(),
			At = function() {
				var e = Object(u["a"])(regeneratorRuntime.mark((function e(t, a) {
					return regeneratorRuntime.wrap((function(e) {
						while (1) switch (e.prev = e.next) {
							case 0:
								if (t[a.key] || "leaveType" === a.key) {
									e.next = 5;
									break
								}
								return a.isSelect ? Object(x["b"])("请选择".concat(
									a.label)) : Object(x["b"])("".concat(a
									.label, "不能为空")), e.abrupt("return", !1);
							case 5:
								if (!(String(t.leaveType).length < 1)) {
									e.next = 8;
									break
								}
								return Object(x["b"])("请选择".concat(a.label)), e
									.abrupt("return", !1);
							case 8:
								return e.abrupt("return", !0);
							case 9:
							case "end":
								return e.stop()
						}
					}), e)
				})));
				return function(t, a) {
					return e.apply(this, arguments)
				}
			}(),
			St = a("ade3"),
			jt = {
				LEAVE: 1,
				EXTEND: 2
			},
			Rt = {
				false: "否",
				true: "离校"
			},
			It = {
				NORMAL: "1",
				SICK: "2",
				OTHER: "0"
			},
			_t = (n = {}, Object(St["a"])(n, It.NORMAL, "事假"), Object(St["a"])(n, It.SICK, "病假"), Object(St[
				"a"])(n, It.OTHER, "其它"), n),
			Dt = (It.NORMAL, _t[It.NORMAL], It.SICK, _t[It.SICK], It.OTHER, _t[It.OTHER], Object(ct["a"])(
				"choosePeople")),
			Lt = Dt.mapMutations,
			Et = !1,
			Pt = {
				components: {
					CatCell: I["a"],
					CatButton: f["a"],
					CatCellDateTimePicker: lt["a"],
					CatCellLongInput: st["a"],
					CatCellPicker: ot["a"],
					CatCellUpload: De["a"],
					CatCellInput: it["a"],
					CatCheatObserver: Ie["a"],
					CatLocation: _e["a"],
					CatFlowChartModal: rt["a"],
					CatTip: ve["a"],
					CatCellPeople: nt["a"],
					Checkbox: at["a"],
					CatCellAreaPicker: tt["a"],
					BusAddFields: gt
				},
				data: function() {
					return {
						isRequired: !1,
						getMobileOSSAccessURL: te["j"],
						downloadMediaURL: te["e"],
						getUploadPolicyURL: te["l"],
						http: Le["a"],
						render: !1,
						hasGotSender: !0,
						model: {
							leaveType: "",
							leaveName: "",
							startTime: "",
							endTime: "",
							urgencyMobile: "",
							leaveReason: "",
							applyAttach: [],
							outStatus: !1,
							address: "",
							detailAddress: ""
						},
						leaveConfig: {
							allowLeave: 0,
							limitDays: 0,
							notAllowTitle: "",
							notAllowUrl: "",
							uploadlocation: 0
						},
						isRequestOk: !1,
						approveFlow: [],
						approvers: [],
						approversInfo: {},
						timeIsOk: !1,
						showFlowModal: !1,
						notOutReport: 0,
						endDateValue: "",
						hasSelectedArr: [],
						submitAddress: "",
						locationStatus: "",
						locationData: {},
						cheatType: null,
						type: jt.EXTEND,
						leaveTypeName: "",
						chooseData: [],
						localId: null,
						localChooseArr: [],
						localModel: {},
						leaveTimeLimitInfo: {},
						agreement: !1,
						fields: [],
						holidayAutoDefineVos: []
					}
				},
				computed: {
					showAddress: function() {
						return 1 === this.leaveConfig.openDestination && this.model.outStatus
					},
					submitDisabled: function() {
						return 1 === this.leaveConfig.openDisclaimers ? this.isRequestOk || !this
							.agreement : this.isRequestOk
					},
					renderTime: function() {
						return {
							startTime: this.model.startTime,
							endTime: this.model.endTime
						}
					},
					leaveText: function() {
						return Rt[this.model.outStatus]
					},
					extendId: function() {
						return this.$route.query.extendId
					},
					extendType: function() {
						return this.$route.query.type
					},
					isPhone: function() {
						return !this.inputValidate.phoneErr && this.model.urgencyMobile
					},
					locationType: function() {
						return "success" === this.locationStatus ? 0 : "fail" === this.locationStatus ||
							"ing" === this.locationStatus ? 2 : "noAuth" === this.locationStatus ? 1 :
							void 0
					},
					sendPeopleData: {
						set: function(e) {
							this.chooseData = e
						},
						get: function() {
							return this.chooseData.length > 0 ? this.chooseData : this.hasSelectedArr
						}
					},
					needApproval: function() {
						return "0" === this.$route.query.needApproval || 0 === this.$route.query
							.needApproval ? 0 : 1
					}
				},
				watch: {
					renderTime: {
						deep: !0,
						immediate: !0,
						handler: function(e) {
							this.changeLeaveType(e)
						}
					}
				},
				activated: function() {
					this.$route.query.leaveId !== this.localId && "fromChoose" !== this.localId || Et ? (
						this.model = {
							leaveType: "",
							leaveName: "",
							startTime: "",
							endTime: "",
							urgencyMobile: "",
							leaveReason: "",
							applyAttach: [],
							outStatus: !1,
							address: "",
							detailAddress: ""
						}, this.sendPeopleData = [], this.leaveId = this.$route.query.leaveId, this
						.localChooseArr = [], this.agreement = !1, this.isRequired = !1, this.initPage(!
							1)) : (this.localChooseArr = this.chooseData, this.hasSelectedArr = this
						.localChooseArr, this.leaveId = this.$route.query.leaveId, this.model = Object(
							X["a"])({}, this.localModel))
				},
				deactivated: function() {
					this.localId = this.$route.params.id ? this.$route.params.id : 0, this.localModel = this
						.model
				},
				mounted: function() {
					var e = this;
					this.$EventBus.$on("get-choose-data", (function(t) {
						e.getChooseData(t)
					}))
				},
				beforeRouteEnter: function(e, t, a) {
					t.fullPath.indexOf("detail") > -1 ? Et = !0 : t.fullPath.indexOf("choosePeople") > -1 &&
						(Et = !1), a()
				},
				beforeRouteLeave: function(e, t, a) {
					var n = ["choosePeople", "detail"],
						r = n.some((function(t) {
							return e.fullPath.indexOf(t) > -1
						}));
					r ? a() : v["a"].confirm({
						title: "",
						message: "确定退出？"
					}).then((function(e) {
						a()
					})).catch((function() {
						a(!1)
					}))
				},
				methods: Object(X["a"])(Object(X["a"])({}, Lt(["setDataList", "setHistoryApiMethod",
					"setSearchApiMethod", "setAddHistoryApiMethod"
				])), {}, {
					getFields: function(e) {
						var t = this;
						return Object(u["a"])(regeneratorRuntime.mark((function a() {
							var n, r;
							return regeneratorRuntime.wrap((function(a) {
								while (1) switch (a.prev = a.next) {
									case 0:
										return a.next = 2, Object(
											te["v"])({
											leaveTypeWid: e
										});
									case 2:
										n = a.sent, r = n.data, t
											.fields = r, t.fields
											.length && (t.fields = t
												.fields.map((
													function(
													e) {
														var a,
															n,
															r,
															i,
															o,
															s;
														return Object(
																X[
																	"a"]
																)
															(Object(X[
																	"a"])
																({},
																	e), {}, {
																	autoDefineSubWid: null !==
																		(a = null ===
																			(n = t
																				.holidayAutoDefineVos
																				) ||
																			void 0 ===
																			n ||
																			null ===
																			(r = n
																				.find(
																					(function(
																						t
																						) {
																						return t
																							.autoDefineWid ===
																							e
																							.wid
																					})
																					)
																				) ||
																			void 0 ===
																			r ?
																			void 0 :
																			r
																			.autoDefineSubWid
																			) &&
																		void 0 !==
																		a ?
																		a :
																		"",
																	text: null !==
																		(i = null ===
																			(o = t
																				.holidayAutoDefineVos
																				) ||
																			void 0 ===
																			o ||
																			null ===
																			(s = o
																				.find(
																					(function(
																						t
																						) {
																						return t
																							.autoDefineWid ===
																							e
																							.wid
																					})
																					)
																				) ||
																			void 0 ===
																			s ?
																			void 0 :
																			s
																			.content
																			) &&
																		void 0 !==
																		i ?
																		i :
																		""
																}
																)
													})));
									case 6:
									case "end":
										return a.stop()
								}
							}), a)
						})))()
					},
					getLeaveTimeLimitInfo: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return Object(y["e"])(), t
											.next = 3, Object(te[
												"x"])({
												code: e.model
													.leaveType
											});
									case 3:
										return a = t.sent, n = a
											.data, e
											.leaveTimeLimitInfo =
											n || {}, e
											.isRequired = !!e
											.leaveTimeLimitInfo
											.enableAttach, t.next =
											9, e.getFields(n.wid);
									case 9:
										Object(y["b"])();
									case 10:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					initPage: function() {
						var e = arguments,
							t = this;
						return Object(u["a"])(regeneratorRuntime.mark((function a() {
							var n;
							return regeneratorRuntime.wrap((function(a) {
								while (1) switch (a.prev = a.next) {
									case 0:
										return n = e.length > 0 &&
											void 0 !== e[0] && e[0],
											a.next = 3, t
											.getLeaveAllocation(t
												.type);
									case 3:
										return a.next = 5, t
											.extendType && t
											.getExtendDetail(t
												.leaveId, n);
									case 5:
										return a.next = 7, t
											.getReportInfo();
									case 7:
										return a.next = 9, !t
											.extendType && t
											.getReEditData(t
												.extendId, t.type, n
												);
									case 9:
										t.getLeaveTimeLimitInfo(), t
											.render = !0;
									case 11:
									case "end":
										return a.stop()
								}
							}), a)
						})))()
					},
					getApproverIdInfo: function(e) {
						this.approversInfo = {
							approverId: e.userId,
							approverName: e.userName
						}
					},
					getChooseData: function(e) {
						this.sendPeopleData = e, this.$router.go(-1)
					},
					getLocationData: function(e) {
						this.locationData = e, this.submitAddress = e.address || "定位信息"
					},
					getLocationStatus: function(e) {
						"fail" === e && (this.submitAddress = "定位失败"), this.locationStatus = e
					},
					getLeaveAllocation: function(e) {
						var t = this;
						return Object(u["a"])(regeneratorRuntime.mark((function a() {
							var n, r;
							return regeneratorRuntime.wrap((function(a) {
								while (1) switch (a.prev = a.next) {
									case 0:
										return Object(y["e"])(), a
											.next = 3, Object(te[
												"c"])({
												type: e
											});
									case 3:
										n = a.sent, r = n.data,
											Object(y["b"])(), t
											.leaveConfig = r;
									case 7:
									case "end":
										return a.stop()
								}
							}), a)
						})))()
					},
					getExtendDetail: function(e, t) {
						var a = this;
						return Object(u["a"])(regeneratorRuntime.mark((function n() {
							var r, i, o, s, l, c, u, d, p, f, h, v, m, b;
							return regeneratorRuntime.wrap((function(n) {
								while (1) switch (n.prev = n.next) {
									case 0:
										return a.hasGotSender = !1,
											Object(y["e"])(), n
											.next = 4, Object(te[
												"h"])({
												id: e,
												uaIsCpadaily: sessionStorage
													.uaIsCpadaily
											});
									case 4:
										r = n.sent, i = r.data,
											Object(y["b"])(), a
											.holidayAutoDefineVos = [],
											o = i.detail, s = i
											.leaveExtends || [],
											l = {}, s && s.length >
											0 ? (c = s.length - 1,
												u = s[c] || {}, l =
												u.ccInfo || {}) :
											l = o.ccInfo || {}, t ||
											(a.hasSelectedArr = [],
												a.localChooseArr
												.length > 0 ? a
												.hasSelectedArr = a
												.localChooseArr : (l
													.teachers && l
													.teachers
													.length > 0 && (
														a
														.hasSelectedArr =
														a
														.hasSelectedArr
														.concat(l
															.teachers
															)), l
													.students && l
													.students
													.length > 0 && (
														a
														.hasSelectedArr =
														a
														.hasSelectedArr
														.concat(l
															.students
															)))), a
											.hasGotSender = !0, a
											.sendPeopleData = a
											.hasSelectedArr, d = a
											.getExtendReject(s), p =
											d || o, f = null, h =
											null, null === d ? (f =
												"3" === o.status ? o
												.startDate : o
												.endDate, h =
												"3" === o.status ? o
												.endDate : "") : (
												f = "3" === d
												.status ? d
												.startTimeDB : d
												.endTimeDB, h =
												"3" === d.status ? d
												.endTimeDB : ""),
											v = "reExtend" === a
											.extendType ? "" : p
											.extendReason || p
											.leaveReason, m =
											"reExtend" === a
											.extendType && p
											.applyAttach ? p
											.applyAttach : [], b = p
											.destination || "", a
											.model = Object(X["a"])(
												Object(X["a"])({}, a
													.model), {}, {
													leaveType: i
														.leaveType
														.code,
													leaveName: o
														.leaveName,
													outStatus: o
														.outStatus,
													urgencyMobile: p
														.urgencyMobile,
													startTime: f,
													endTime: h,
													leaveReason: v,
													applyAttach: m
														.map((function(
															e
															) {
															return Object(
																	X[
																		"a"]
																	)
																(Object(X[
																		"a"])
																	({},
																		e), {}, {
																		attachmentUrl: e
																			.url
																	}
																	)
														})),
													address: b
														.split("/")
														.slice(0, 3)
														.join(
														"/") || "",
													detailAddress: b
														.split("/")
														.slice(-1)
														.join("") ||
														""
												}), a
											.leaveTypeName = o
											.leaveName;
									case 25:
									case "end":
										return n.stop()
								}
							}), n)
						})))()
					},
					getReportInfo: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return Object(y["e"])(), t
											.next = 3, Object(te[
												"k"])({});
									case 3:
										a = t.sent, n = a.data,
											Object(y["b"])(), e
											.notOutReport = n
											.notOutReport;
									case 7:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					getReEditData: function(e, t, a) {
						var n = this;
						return Object(u["a"])(regeneratorRuntime.mark((function r() {
							var i, o, s, l, c;
							return regeneratorRuntime.wrap((function(r) {
								while (1) switch (r.prev = r.next) {
									case 0:
										return n.hasGotSender = !1,
											Object(y["e"])(), r
											.next = 4, Object(te[
												"w"])({
												id: e,
												type: t
											});
									case 4:
										i = r.sent, o = i.data,
											Object(y["b"])(), s = o
											.ccInfo || {}, n
											.holidayAutoDefineVos =
											o.holidayAutoDefineVos,
											a || (n
												.hasSelectedArr = [],
												n.localChooseArr
												.length > 0 ? n
												.hasSelectedArr = n
												.localChooseArr : (s
													.teachers && s
													.teachers
													.length > 0 && (
														n
														.hasSelectedArr =
														n
														.hasSelectedArr
														.concat(s
															.teachers
															)), s
													.students && s
													.students
													.length > 0 && (
														n
														.hasSelectedArr =
														n
														.hasSelectedArr
														.concat(s
															.students
															)))), n
											.hasGotSender = !0, l =
											o.applyAttach ? o
											.applyAttach : [], n
											.sendPeopleData = n
											.hasSelectedArr, c = o
											.destination || "", n
											.model = Object(X["a"])(
												Object(X["a"])({},
													o), {}, {
													applyAttach: l
														.map((function(
															e
															) {
															return Object(
																	X[
																		"a"]
																	)
																(Object(X[
																		"a"])
																	({},
																		e), {}, {
																		attachmentUrl: e
																			.url
																	}
																	)
														})),
													startTime: o
														.startTime &&
														o.startTime
														.slice(0, -
															3),
													endTime: o
														.endTime &&
														o.endTime
														.slice(0, -
															3),
													address: c
														.split("/")
														.slice(0, 3)
														.join(
														"/") || "",
													detailAddress: c
														.split("/")
														.slice(-1)
														.join("") ||
														""
												}), n
											.leaveTypeName = o
											.leaveName;
									case 16:
									case "end":
										return r.stop()
								}
							}), r)
						})))()
					},
					getExtendReject: function(e) {
						return 0 === e.length ? null : e[e.length - 1]
					},
					doShowChoosePeople: function() {
						this.setDataList(this.sendPeopleData), this.setHistoryApiMethod(te["B"]),
							this.setSearchApiMethod(te["C"]), this.setAddHistoryApiMethod(te["b"]),
							this.$router.push({
								path: "/choosePeople/".concat(this.leaveId ? this.leaveId :
									"fromChoose")
							})
					},
					changeLeaveType: function(e) {
						var t = yt(e, this.leaveConfig.limitDays, this.leaveTimeLimitInfo);
						this.model.approverWid = this.localModel.approverWid ? this.localModel
							.approverWid : "", this.localModel.approverWid = "", this.timeIsOk = t,
							this.getApproveFlowAndapprovers()
					},
					getApproveFlowAndapprovers: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n, r, i;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										if (e.approvers = e
											.approveFlow = [], e
											.approversInfo = {}, e
											.timeIsOk) {
											t.next = 4;
											break
										}
										return t.abrupt("return");
									case 4:
										return t.next = 6, Object(
											te["t"])({
											leaveType: e
												.model
												.leaveType,
											startTime: ""
												.concat(e
													.model
													.startTime,
													":00"),
											endTime: ""
												.concat(e
													.model
													.endTime,
													":00"),
											leaveId: e
												.leaveId
										});
									case 6:
										a = t.sent, n = a.data,
											r = [], i = n
											.approveFlow || [], i
											.forEach((function(e) {
												r.push({
													list: e
														.map(
															(function(
																e
																) {
																return Object(
																		X[
																			"a"]
																		)
																	(Object(X[
																			"a"])
																		({},
																			e), {}, {
																			name: e
																				.nodeName
																		}
																		)
															})
															)
												})
											})), e.approveFlow = r,
											e.approvers = n
											.approvers;
									case 13:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					submit: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n, r, i, o, s, l;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										if (null === (a = e
											.fields) || void 0 ===
											a || !a.length) {
											t.next = 10;
											break
										}
										n = function(t) {
												if (e.fields[t]
													.tag) {
													var a = e
														.fields[t],
														n = a
														.defineType,
														r = a.text,
														i = a
														.autoDefineSubWid,
														o = a.other;
													if (n && !r)
														return e
															.$nextTick(
																(function() {
																	e.$refs
																		.box
																		.scrollTop =
																		e
																		.$refs[
																			"fields"
																			.concat(
																				t
																				)
																			]
																		[
																			0]
																		.$el
																		.offsetTop
																})
																), {
																v: Object(
																		x[
																			"b"]
																		)
																	(
																		"请填写附加题")
															};
													if (!n && !r &&
														!+i) {
														e.$nextTick(
															(function() {
																e.$refs
																	.box
																	.scrollTop =
																	e
																	.$refs[
																		"fields"
																		.concat(
																			t
																			)
																		]
																	[
																		0]
																	.$el
																	.offsetTop
															}));
														var s = o ?
															"请选择或填写其他" :
															"请选择附加题";
														return {
															v: Object(
																	x[
																		"b"]
																	)
																(s)
														}
													}
												}
											}, t.t0 =
											regeneratorRuntime.keys(
												e.fields);
									case 3:
										if ((t.t1 = t.t0()).done) {
											t.next = 10;
											break
										}
										if (r = t.t1.value, i = n(
											r), "object" !== Object(
												et["a"])(i)) {
											t.next = 8;
											break
										}
										return t.abrupt("return", i
											.v);
									case 8:
										t.next = 3;
										break;
									case 10:
										return t.next = 12, e.$refs
											.catCellUpload.$refs
											.catUpload
										.getComplete();
									case 12:
										if (o = t.sent, o) {
											t.next = 16;
											break
										}
										return Object(x["b"])(
												"请等待附件上传完毕再提交续假"), t
											.abrupt("return");
									case 16:
										if (!e.isRequestOk) {
											t.next = 18;
											break
										}
										return t.abrupt("return");
									case 18:
										if (!(e.model.applyAttach
												.length < 1 && e
												.isRequired)) {
											t.next = 21;
											break
										}
										return Object(x["b"])(
											"请添加附件"), t.abrupt(
											"return");
									case 21:
										return t.next = 23, yt(e
											.renderTime, e
											.leaveConfig
											.limitDays, e
											.leaveTimeLimitInfo);
									case 23:
										if (s = t.sent, s) {
											t.next = 27;
											break
										}
										return e.$refs.box
											.scrollTop = 0, t
											.abrupt("return");
									case 27:
										return t.next = 29, Tt(e
											.model, e.approvers,
											e.showAddress);
									case 29:
										if (l = t.sent, l) {
											t.next = 32;
											break
										}
										return t.abrupt("return");
									case 32:
										e.notOutReport && !e.model
											.outStatus ? v["a"]
											.confirm({
												message: '<p style="text-align: center;">您所提交的请假申请，根据学校的要求，在假期结束前需要进行<span style="color: #ED3F14;font-weight: 700;">手动销假</span>!</p>',
												cancelButtonText: "取消",
												confirmButtonText: "确定",
												closeOnClickOverlay:
													!1
											}).then((function() {
												e.doSubmitFn()
											})) : e.doSubmitFn();
									case 33:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					doSubmitFn: function() {
						var e = this;
						v["a"].confirm({
							title: "确认提交续假？",
							message: "已确认内容无误并提交？",
							confirmButtonText: "提交",
							cancelButtonText: "再检查一下"
						}).then((function() {
							e.doSubmit()
						})).catch((function() {}))
					},
					beforeSubmitCheck: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n, r;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, Object(
											te["g"])({});
									case 2:
										if (a = t.sent, n = a.data,
											!n.moduleStatus) {
											t.next = 14;
											break
										}
										return t.next = 7, e.$refs
											.cheatObserver.start(n
												.interceptSwitch, n
												);
									case 7:
										if (r = t.sent, e
											.cheatType = r
											.cheatData, null === r
											.cheatData) {
											t.next = 14;
											break
										}
										return t.next = 12, Object(
											te["a"])({
											cheatType: r
												.cheatData,
											leaveOperateType: 1,
											leaveId: e
												.leaveId,
											sendMsg: r.bool
										});
									case 12:
										if (!n.interceptSwitch || !r
											.bool) {
											t.next = 14;
											break
										}
										return t.abrupt("return", !
											1);
									case 14:
										return t.abrupt("return", !
											0);
									case 15:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					doSubmit: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n, r, i, o, s, l, c, u, d, p, f, h, v, m;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return Object(y["e"])(
												"正在处理中..."), t
											.next = 3, e
											.beforeSubmitCheck();
									case 3:
										if (n = t.sent, n) {
											t.next = 7;
											break
										}
										return Object(y["b"])(), t
											.abrupt("return");
									case 7:
										return t.next = 9, Object(O[
											"g"])();
									case 9:
										if (r = t.sent, i = window
											.navigator.userAgent
											.slice(window.navigator
												.userAgent
												.lastIndexOf("/") +
												1), o = e.fields
											.map((function(t) {
												var a, n, r,
													i;
												return {
													leaveId: e
														.leaveId ||
														"",
													extendId: e
														.extendId ||
														"",
													leaveTypeWid: t
														.leaveTypeWid,
													autoDefineWid: t
														.wid,
													autoDefineSubWid: t
														.autoDefineSubWid ||
														"",
													content: t
														.text,
													autoDefineType:
														~~t
														.defineType,
													autoDefineSubContent: null !==
														(a = null ===
															(n = t
																.holidayAutoDefineSubs
																.find(
																	(function(
																		e
																		) {
																		return e
																			.wid ===
																			t
																			.autoDefineSubWid
																	})
																	)
																) ||
															void 0 ===
															n ?
															void 0 :
															n
															.content
															) &&
														void 0 !==
														a ?
														a :
														"",
													autoDefineContent: t
														.title,
													autoDefineException: t
														.otherException,
													autoDefineSubException: null !==
														(r = null ===
															(i = t
																.holidayAutoDefineSubs
																.find(
																	(function(
																		e
																		) {
																		return e
																			.wid ===
																			t
																			.autoDefineSubWid
																	})
																	)
																) ||
															void 0 ===
															i ?
															void 0 :
															i
															.exception
															) &&
														void 0 !==
														r &&
														r
												}
											})), s = {
												url: location
													.origin + te[
														"s"],
												body: Object(X["a"])
													(Object(X["a"])(
														Object(
															X[
																"a"]
															)(
															Object(
																X[
																	"a"]
																)
															({}, e
																.model
																),
															e
															.approversInfo
															), {}, {
															extendHolidayAutoDefineVos: o,
															startTime: ""
																.concat(
																	e
																	.model
																	.startTime,
																	":00"
																	),
															endTime: ""
																.concat(
																	e
																	.model
																	.endTime,
																	":00"
																	),
															applyAttach: e
																.model
																.applyAttach
																.map(
																	(function(
																		e
																		) {
																		return {
																			url: e
																				.attachmentUrl,
																			type: 1
																		}
																	})
																	),
															ccInfo: {
																teachers: e
																	.hasSelectedArr
																	.filter(
																		(function(
																			e
																			) {
																			return 0 ===
																				e
																				.personType
																		})
																		),
																students: e
																	.hasSelectedArr
																	.filter(
																		(function(
																			e
																			) {
																			return 1 ===
																				e
																				.personType
																		})
																		)
															},
															appVersion: i,
															deviceId: (
																	null ===
																	r ||
																	void 0 ===
																	r ||
																	null ===
																	(a = r
																		.data
																		) ||
																	void 0 ===
																	a ?
																	void 0 :
																	a
																	.uuid
																	) ||
																"",
															cheatType: e
																.cheatType,
															source: 1
														}, e
														.locationData
														), {}, {
														locationType: e
															.locationType,
														leaveId: e
															.leaveId,
														extendReason: e
															.model
															.leaveReason,
														uaIsCpadaily:
															!0,
														address: e
															.submitAddress,
														latitude: e
															.locationData
															.latitude ||
															"",
														longitude: e
															.locationData
															.longitude ||
															"",
														disclaimers: 1 ===
															e
															.leaveConfig
															.openDisclaimers ?
															e
															.leaveConfig
															.disclaimers :
															null,
														destination: e
															.showAddress &&
															e
															.model
															.address
															.length >
															0 ?
															""
															.concat(
																e
																.model
																.address,
																"/"
																)
															.concat(
																e
																.model
																.detailAddress
																) :
															""
													}),
												headers: {
													extension: "1"
												}
											}, e.isRequestOk = !0, !
											Object(O["h"])(
												"sendPost")) {
											t.next = 21;
											break
										}
										return t.next = 17, Object(
											O["n"])(s);
									case 17:
										l = t.sent, e.submitAfter(l
												.data, !0), t.next =
											30;
										break;
									case 21:
										return t.next = 23, Object(
											O["g"])();
									case 23:
										return f = t.sent, h =
											Object(X["a"])(Object(X[
												"a"])({}, s
												.body), {}, {
												appVersion: i,
												deviceId: (
														null ===
														f ||
														void 0 ===
														f ||
														null ===
														(c = f
															.data
															) ||
														void 0 ===
														c ?
														void 0 :
														c.uuid
														) || "",
												systemName: (
													null ===
													f ||
													void 0 ===
													f ||
													null ===
													(u = f
														.data
														) ||
													void 0 ===
													u ?
													void 0 :
													u
													.platform
													) || "",
												systemVersion: (
													null ===
													f ||
													void 0 ===
													f ||
													null ===
													(d = f
														.data
														) ||
													void 0 ===
													d ?
													void 0 :
													d
													.version
													) || "",
												model: (null ===
														f ||
														void 0 ===
														f ||
														null ===
														(p = f
															.data
															) ||
														void 0 ===
														p ?
														void 0 :
														p.model
														) || "",
												uaIsCpadaily: !
													1,
												latitude: e
													.locationData
													.latitude ||
													"",
												longitude: e
													.locationData
													.longitude ||
													""
											}), t.next = 27, Object(
												te["r"])(h);
									case 27:
										v = t.sent, m = v
											.originData, e
											.submitAfter(m);
									case 30:
										setTimeout((function() {
												Object(y[
														"b"])
													()
											}), 2e3), e
											.isRequestOk = !1;
									case 32:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					submitAfter: function(e, t) {
						0 === +e.code ? (Object(x["c"])("续假申请成功"), this.$EventBus.$emit(
							"refresh-list"), this.$router.replace("/detail/".concat(this
							.leaveId, "/").concat(this.needApproval))) : t && Object(x["a"])(e
							.message || "")
					}
				})
			},
			Mt = Pt,
			$t = (a("2d2b"), Object(N["a"])(Mt, Xe, Ye, !1, null, null, null)),
			Nt = $t.exports,
			qt = a("08ff"),
			Ft = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "page-current-approver h-screen ios-touch-scroll"
				}, [a("CatTitle", {
					staticClass: "bg-warning tip px-20 text-center",
					attrs: {
						size: "3.20000vw",
						title: "或签：审批人中一人批准即可"
					}
				}), a("div", {
					staticClass: "content p-20"
				}, [e._v(" " + e._s(e.approvers) + " ")])], 1)
			},
			Bt = [],
			Wt = {
				components: {
					CatTitle: m["a"]
				},
				data: function() {
					return {
						approvers: ""
					}
				},
				created: function() {
					this.approvers = localStorage.getItem("currentApprovers")
				}
			},
			Ut = Wt,
			Vt = (a("4c78"), Object(N["a"])(Ut, Ft, Bt, !1, null, null, null)),
			Ht = Vt.exports,
			zt = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "page-record-detail h-screen ios-touch-scroll"
				}, [a("CatLeaveDetail", {
					attrs: {
						"is-detail": "",
						my: !0,
						info: e.info,
						"need-approval": e.needApproval,
						fields: e.holidayAutoDefineVos,
						"approve-nodes": e.getApproveNodes(e.info.approvers)
					}
				}), (e.info.approvers || []).length > 0 ? a("div", {
					staticClass: "py-10 font-12 bg-white px-20 my-10 hairline-t hairline-b"
				}, [a("span", {
					staticClass: "font-14 font-dark"
				}, [e._v("请假流程记录")]), a("CatAuditList", {
					staticClass: "mt-10",
					attrs: {
						flows: e.info.approvers,
						"leave-satus": e.leaveSatus,
						"need-approval": e.needApproval
					}
				})], 1) : e._e(), e.extendInfos.length > 0 ? e._l(e.extendInfos, (function(t, n) {
					return a("span", {
						key: n
					}, [a("CatExtendDetail", {
						key: n,
						attrs: {
							"is-detail": "",
							my: !0,
							"is-click-location": !1,
							info: t,
							"need-approval": e.needApproval,
							"approve-nodes": e.getApproveNodes(t.approvers)
						}
					}), (t.approvers || []).length > 0 ? a("div", {
						staticClass: "py-10 font-12 bg-white px-20 my-10 hairline-t hairline-b"
					}, [a("span", {
						staticClass: "font-14 font-dark"
					}, [e._v("请假流程记录")]), a("CatAuditList", {
						staticClass: "mt-10",
						attrs: {
							flows: t.approvers,
							"leave-satus": e.leaveSatus,
							"need-approval": e.needApproval
						}
					})], 1) : e._e()], 1)
				})) : e._e(), a("div", {
					staticClass: "font-light text-center my-10 font-12"
				}, [e._v(" 没有更多了 ")])], 2)
			},
			Gt = [],
			Zt = {
				components: {
					CatExtendDetail: W["a"],
					CatLeaveDetail: U["a"],
					CatAuditList: j["a"]
				},
				data: function() {
					return {
						info: {
							status: "",
							approvers: []
						},
						extendInfos: [],
						holidayAutoDefineVos: []
					}
				},
				computed: {
					currentNode: function() {
						return this.extendInfos.length > 0 ? this.extendInfos[this.extendInfos.length - 1] :
							this.info
					},
					leaveSatus: function() {
						return this.currentNode.status
					},
					id: function() {
						return this.$route.params.id
					},
					needApproval: function() {
						return "0" === this.$route.params.needApproval || 0 === this.$route.params
							.needApproval ? 0 : 1
					}
				},
				created: function() {
					this.initPage()
				},
				methods: {
					initPage: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, Object(te["h"])({
											id: e.id,
											needApproval: e
												.needApproval,
											uaIsCpadaily: sessionStorage
												.uaIsCpadaily
										});
									case 2:
										a = t.sent, n = a.data, e.info = n
											.detail, e.extendInfos = n
											.extendInfos || n.leaveExtends,
											e.holidayAutoDefineVos = n
											.holidayAutoDefineVos;
									case 7:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					getApproveNodes: function(e) {
						return e && e.filter((function(e) {
							return e.approveNode.length > 0 && e.approveNode[0].nodeWid
						}))
					}
				}
			},
			Jt = Zt,
			Kt = Object(N["a"])(Jt, zt, Gt, !1, null, null, null),
			Qt = Kt.exports,
			Xt = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "page-create flex-col flex-1 h-screen overflow-hidden"
				}, [a("div", {
					ref: "box",
					staticClass: "form-content flex-1 ios-touch-scroll"
				}, [a("cat-tip", {
						attrs: {
							"tip-config": e.leaveConfig
						}
					}), a("bus-leave-type-picker", {
						attrs: {
							"is-link": "",
							required: "",
							label: "请假类型",
							options: e.typeList,
							"leave-time-limit-info": e.leaveTimeLimitInfo
						},
						model: {
							value: e.model.leaveType,
							callback: function(t) {
								e.$set(e.model, "leaveType", t)
							},
							expression: "model.leaveType"
						}
					}), a("cat-cell-date-time-picker", {
						key: "startTime",
						attrs: {
							required: "",
							label: "开始时间"
						},
						model: {
							value: e.model.startTime,
							callback: function(t) {
								e.$set(e.model, "startTime", t)
							},
							expression: "model.startTime"
						}
					}), a("cat-cell-date-time-picker", {
						attrs: {
							required: "",
							label: "结束时间"
						},
						model: {
							value: e.model.endTime,
							callback: function(t) {
								e.$set(e.model, "endTime", t)
							},
							expression: "model.endTime"
						}
					}), a("cat-cell-switch", {
						attrs: {
							label: "需要离校",
							disabled: e.LeaveSchoolDisabled
						},
						model: {
							value: e.model.outStatus,
							callback: function(t) {
								e.$set(e.model, "outStatus", t)
							},
							expression: "model.outStatus"
						}
					}), a("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: String(e.model.leaveType).length > 0 && e
								.LeaveSchoolDisabled,
							expression: "String(model.leaveType).length > 0 && LeaveSchoolDisabled"
						}],
						staticClass: "font-warning text-right font-12 py-10 px-20"
					}, [e._v(" 当前请假类型为必离校，不可更改是否需要离校 ")]), a("cat-cell-input", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: e.model.outStatus,
							expression: "model.outStatus"
						}],
						attrs: {
							right: "",
							required: "",
							maxlength: "11",
							"class-str": "flex jc-between font-normal flex-1 ai-center",
							label: "紧急联系人",
							placeholder: "请输入手机号码(不能填写自己的)"
						},
						model: {
							value: e.model.urgencyMobile,
							callback: function(t) {
								e.$set(e.model, "urgencyMobile", t)
							},
							expression: "model.urgencyMobile"
						}
					}), e.showAddress ? a("cat-cell-area-picker", {
						staticClass: "mt-10 hairline-t",
						attrs: {
							"is-link": "",
							required: "",
							label: "目的地"
						},
						model: {
							value: e.model.address,
							callback: function(t) {
								e.$set(e.model, "address", t)
							},
							expression: "model.address"
						}
					}) : e._e(), e.showAddress ? a("cat-cell-long-input", {
						staticClass: "mb-10 hairline-b",
						attrs: {
							rows: "3",
							required: "",
							maxlength: "100",
							"show-word-limit": "",
							label: "详细地址",
							placeholder: "请输入目的地详细地址，如道路、门牌号、小区、楼栋号、单元室等",
							autosize: {
								maxHeight: 120
							}
						},
						model: {
							value: e.model.detailAddress,
							callback: function(t) {
								e.$set(e.model, "detailAddress", t)
							},
							expression: "model.detailAddress"
						}
					}) : e._e(), a("cat-cell-long-input", {
						class: e.showAddress ? "hairline-t-n" : "",
						attrs: {
							rows: "3",
							required: "",
							maxlength: "300",
							"show-word-limit": "",
							label: "请假原因",
							placeholder: "请输入请假原因[必填]，至少10字",
							autosize: {
								maxHeight: 120
							}
						},
						model: {
							value: e.model.leaveReason,
							callback: function(t) {
								e.$set(e.model, "leaveReason", t)
							},
							expression: "model.leaveReason"
						}
					}), e.fields && e.fields.length ? e._l(e.fields, (function(t, n) {
						return a("BusAddFields", {
							key: n,
							ref: "fields" + n,
							refInFor: !0,
							attrs: {
								item: t,
								"show-border": n + 1 === e.fields.length
							}
						})
					})) : e._e(), a("cat-cell-upload", {
						ref: "catCellUpload",
						staticClass: "hairline-t-n",
						attrs: {
							label: "添加附件",
							count: 4,
							http: e.http,
							required: e.isRequired,
							"download-media-url": e.downloadMediaURL,
							"sts-access-url": e.getMobileOSSAccessURL,
							"upload-policy-url": e.getUploadPolicyURL
						},
						model: {
							value: e.model.applyAttach,
							callback: function(t) {
								e.$set(e.model, "applyAttach", t)
							},
							expression: "model.applyAttach"
						}
					}), e.approveFlow.length > 0 && 1 === e.needApproval ? a("div", {
						staticClass: "approveFlow text-center py-10 font-14"
					}, [e._v(" 审批流程共" + e._s(e.approveFlow.length) + "步 "), a("span", {
						staticClass: "font-primary",
						on: {
							click: function() {
								return e.showFlowModal = !0
							}
						}
					}, [e._v("查看 >")])]) : e._e(), e.renderTime.startTime && e.renderTime
					.endTime && String(e.model.leaveType).length > 0 && e.timeIsOk && 1 === e
					.needApproval ? a("cat-cell-picker", {
						attrs: {
							"is-link": "",
							required: "",
							"name-key": "userName",
							"value-key": "userWid",
							label: "审批人",
							options: e.approvers,
							"show-picker-before": e.showPickerBefore
						},
						on: {
							"on-confirm": e.getApproverIdInfo
						},
						model: {
							value: e.model.approverWid,
							callback: function(t) {
								e.$set(e.model, "approverWid", t)
							},
							expression: "model.approverWid"
						}
					}) : e._e(), e.hasGotSender && 1 === e.needApproval ? a("CatCellPeople", {
						attrs: {
							label: "抄送人",
							list: e.chooseData
						},
						on: {
							click: e.doShowChoosePeople
						}
					}) : e._e(), a("cat-location", {
						staticClass: "px-20 location py-10 bg-white hairline-t-n",
						attrs: {
							"read-only": e.isRequestOk,
							address: e.submitAddress
						},
						on: {
							"on-location-success": e.getLocationData,
							"on-location-status": e.getLocationStatus
						}
					}), 1 === e.leaveConfig.openDisclaimers ? a("Checkbox", {
						staticClass: "bg-white px-20 py-15 hairline-t break-all",
						model: {
							value: e.agreement,
							callback: function(t) {
								e.agreement = t
							},
							expression: "agreement"
						}
					}, [e._v(" " + e._s(e.leaveConfig.disclaimers) + " ")]) : e._e()
				], 2), a("cat-flow-chart-modal", {
					attrs: {
						title: "审批流程",
						options: e.approveFlow
					},
					model: {
						value: e.showFlowModal,
						callback: function(t) {
							e.showFlowModal = t
						},
						expression: "showFlowModal"
					}
				}), a("bus-reselect-time-modal", {
					attrs: {
						"cancel-button-text": "取消",
						"confirm-button-text": "重新选择",
						"time-limit-res-info": e.timeLimitResInfo
					},
					on: {
						confirm: e.repickTimeRange,
						cancel: function() {
							return e.showTimeModal = !1
						}
					},
					model: {
						value: e.showTimeModal,
						callback: function(t) {
							e.showTimeModal = t
						},
						expression: "showTimeModal"
					}
				}), a("cat-cheat-observer", {
					ref: "cheatObserver"
				}), a("cat-button", {
					staticClass: "no-shrink",
					attrs: {
						disabled: e.submitDisabled
					},
					on: {
						click: e.submit
					}
				}, [e._v(" 提交请假 ")])], 1)
			},
			Yt = [],
			ea = (a("c740"), a("2909")),
			ta = (a("6cff"), a("b0d5")),
			aa = a("e765"),
			na = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "bus-leave-type-picker hairline-b"
				}, [a("cat-cell-picker", e._g(e._b({
					attrs: {
						"class-str": "flex flex-1 jc-between font-normal",
						value: e.value
					}
				}, "cat-cell-picker", e.$attrs, !1), e.$listeners)), a("div", {
					staticClass: "type-description font-12 font-warning mx-20 flex-col",
					class: e.tipClass
				}, [e.canShowLeaveTimeLimitTips ? a("div", [a("div", [e._v(
					" 由于学校相关规定，该类型请假存在如下限制： ")]), e.canShowCompensatoryTips ? a(
					"div", [e._v(" • 若"), a("span", {
						staticClass: "font-error"
					}, [e._v("开始时间")]), e._v("早于提交时间，即补请只可补最近" + e._s(e._f(
							"filterZero")(e.leaveTimeLimitInfo
							.compensatoryDay, "天")) + e._s(e._f("filterZero")(e
							.leaveTimeLimitInfo.compensatoryHour, "小时")) +
						"内的假 ")]) : e._e(), e.canShowNoCompensatory ? a("div", [e
					._v(" • 若"), a("span", {
						staticClass: "font-error"
					}, [e._v("开始时间")]), e._v("早于提交时间，即不可补假 ")
				]) : e._e(), e.canShowEarlyLeave ? a("div", [e._v(" • 若"), a(
				"span", {
					staticClass: "font-error"
				}, [e._v("开始时间")]), e._v("晚于提交时间，即正常请假必须提前" + e._s(e._f(
					"filterZero")(e.leaveTimeLimitInfo
					.earlyLeaveDay, "天")) + e._s(e._f("filterZero")(e
					.leaveTimeLimitInfo.earlyLeaveHour, "小时")) + "提交 ")]) : e._e()]) : e
				._e(), e.showNoNeedApprovalTip ? a("div", [e.leaveTimeLimitInfo.limitDay ||
					e.leaveTimeLimitInfo.limitHour ? a("div", [e._v(" • 提交的请假时长不得大于" + e
						._s(e._f("filterZero")(e.leaveTimeLimitInfo.limitDay,
							"天")) + e._s(e._f("filterZero")(e.leaveTimeLimitInfo
							.limitHour, "小时")) + " ")]) : e._e(), a("div", [e._v(
						"• 该请假类型无需老师审批，提交成功后立即通过")])
				]) : e._e()])], 1)
			},
			ra = [],
			ia = {
				components: {
					CatCellPicker: ot["a"]
				},
				filters: {
					filterZero: function(e, t) {
						return +e > 0 ? "".concat(e).concat(t) : ""
					}
				},
				inheritAttrs: !1,
				props: {
					value: {
						type: [Number, String]
					},
					leaveTimeLimitInfo: {
						type: Object,
						default: function() {
							return {}
						}
					}
				},
				data: function() {
					return {}
				},
				computed: {
					canShowLeaveTimeLimitTips: function() {
						return this.value && (this.canShowCompensatory || this.canShowEarlyLeave || this
							.showNoNeedApprovalTip)
					},
					tipClass: function() {
						return this.canShowLeaveTimeLimitTips || this.showNoNeedApprovalTip ? "py-10" : ""
					},
					showNoNeedApprovalTip: function() {
						var e = "0" === this.leaveTimeLimitInfo.needApproval || 0 === this
							.leaveTimeLimitInfo.needApproval ? 0 : 1;
						return this.value && 0 === e
					},
					canShowCompensatory: function() {
						return this.leaveTimeLimitInfo.enableCompensatory
					},
					canShowNoCompensatory: function() {
						var e = this.leaveTimeLimitInfo.compensatoryDay + this.leaveTimeLimitInfo
							.compensatoryHour;
						return this.canShowCompensatory && 0 === e
					},
					canShowCompensatoryTips: function() {
						var e = this.leaveTimeLimitInfo.compensatoryDay + this.leaveTimeLimitInfo
							.compensatoryHour;
						return this.canShowCompensatory && e > 0
					},
					canShowEarlyLeave: function() {
						var e = this.leaveTimeLimitInfo.earlyLeaveDay + this.leaveTimeLimitInfo
							.earlyLeaveHour;
						return this.leaveTimeLimitInfo.enableEarlyLeave && e > 0
					}
				}
			},
			oa = ia,
			sa = Object(N["a"])(oa, na, ra, !1, null, null, null),
			la = sa.exports,
			ca = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("v-dialog", e._g(e._b({
					staticClass: "bus-reselect-time-modal",
					attrs: {
						"get-container": "body"
					},
					model: {
						value: e.show,
						callback: function(t) {
							e.show = t
						},
						expression: "show"
					}
				}, "v-dialog", e.$attrs, !1), e.$listeners), [a("div", {
					staticClass: "font-error",
					attrs: {
						slot: "title"
					},
					slot: "title"
				}, [e._v(" 请重新选择请假开始时间 ")]), a("div", {
					staticClass: "font-12 mt-10 mx-20"
				}, [a("div", {
					staticClass: "mb-10"
				}, [e._v(" 由于学校相关规定，开始时间存在如下限制： ")]), e.canShowCompenSatoryResMsg ? a(
					"div", {
						staticClass: "mb-10"
					}, [e._v(" • " + e._s(e.timeLimitResInfo.compensatoryPoint) +
					"以前不可选 ")]) : e._e(), e.canShowNoCompenSatoryResMsg ? a("div", {
					staticClass: "mb-10"
				}, [e._v(" • 不可补请假 ")]) : e._e(), e.canShowLeaveEarlyResMsg ? a("div", {
					staticClass: "mb-10"
				}, [e._v(" • " + e._s(e.timeLimitResInfo.earlyLeaveStartPoint) + "-" + e
					._s(e.timeLimitResInfo.earlyLeaveEndPoint) + "之间不可选 ")]) : e._e()])])
			},
			ua = [],
			da = {
				components: {
					"v-dialog": v["a"].Component
				},
				filters: {
					filterZero: function(e, t) {
						return +e > 0 ? "".concat(e).concat(t) : ""
					}
				},
				props: {
					value: {
						type: Boolean,
						default: !1
					},
					timeLimitResInfo: {
						type: Object,
						default: function() {
							return {}
						}
					}
				},
				computed: {
					show: {
						set: function(e) {
							this.$emit("input", e)
						},
						get: function() {
							return this.value
						}
					},
					canShowCompenSatoryResMsg: function() {
						return 1 === this.timeLimitResInfo.enableCompensatory && this.timeLimitResInfo
							.compensatoryPoint
					},
					canShowNoCompenSatoryResMsg: function() {
						return 2 === this.timeLimitResInfo.enableCompensatory
					},
					canShowLeaveEarlyResMsg: function() {
						return this.timeLimitResInfo.earlyLeaveStartPoint && this.timeLimitResInfo
							.earlyLeaveEndPoint
					}
				}
			},
			pa = da,
			fa = (a("3425"), Object(N["a"])(pa, ca, ua, !1, null, null, null)),
			ha = fa.exports,
			va = function(e, t, a) {
				var n = e.startTime,
					r = e.endTime;
				if (!n) return Object(x["b"])("请选择开始时间"), !1;
				if (!r) return Object(x["b"])("请选择结束时间"), !1;
				if (Object(w["a"])(n).isSame(Object(w["a"])(r))) return Object(x["b"])("开始时间不能和结束时间相同"), !1;
				if (Object(w["a"])(n).isAfter(Object(w["a"])(r))) return Object(x["b"])("开始时间不能大于结束时间"), !1;
				if (a.enableLimit && (a.limitDay || a.limitHour)) {
					if (Object(w["a"])(r).diff(Object(w["a"])(n), "seconds") > 24 * a.limitDay * 60 * 60 +
						3600 * a.limitHour) {
						var i = "";
						return i = a.limitDay && a.limitHour ? "".concat(a.limitDay, "天").concat(a.limitHour,
								"小时") : a.limitDay ? "".concat(a.limitDay, "天") : "".concat(a.limitHour, "小时"),
							Object(x["b"])("请假时长不能超过".concat(i)), !1
					}
					return !0
				}
				return !t || (!(Object(w["a"])(r).diff(Object(w["a"])(n), "seconds") > 24 * t * 60 * 60) || (
					Object(x["b"])("管理员提示：请假时长不能超过".concat(t, "天")), !1))
			},
			ma = function(e) {
				return !e.outStatus || (e.urgencyMobile ? /^[\d-]+$/.test(e.urgencyMobile) && e.urgencyMobile
					.length > 6 && e.urgencyMobile.length < 12 || (Object(x["b"])("紧急联系人手机号码不正确"), !1) : (
						Object(x["b"])("紧急联系人手机号码不能为空"), !1))
			},
			ba = function(e) {
				var t = e.leaveReason && e.leaveReason.trim();
				return t ? t && t.length > 300 ? (Object(x["b"])("请假原因不能超过300个字"), !1) : !(t && t.length <
					10) || (Object(x["b"])("请假原因不能少于10个字"), !1) : (Object(x["b"])("请假原因不能为空"), !1)
			},
			ga = function(e, t) {
				if (t) {
					var a = e.detailAddress && e.detailAddress.trim();
					return a ? !(a && a.length > 300) || (Object(x["b"])("详细地址不能超过300个字"), !1) : (Object(x["b"])
						("详细地址不能为空"), !1)
				}
				return !0
			},
			ya = function(e, t) {
				return !t || (!!e.address || (Object(x["b"])("请选择目的地"), !1))
			},
			wa = [{
				key: "leaveType",
				isSelect: !0,
				required: !0,
				label: "请假类型"
			}, {
				key: "startTime",
				isSelect: !0,
				required: !0,
				label: "开始时间"
			}, {
				key: "endTime",
				isSelect: !0,
				required: !0,
				label: "结束时间"
			}, {
				key: "urgencyMobile",
				isSelect: !1,
				required: !1,
				label: "紧急联系人",
				rules: function() {
					var e = Object(u["a"])(regeneratorRuntime.mark((function e(t, a) {
						return regeneratorRuntime.wrap((function(e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, ma(t);
								case 2:
									return e.abrupt("return", e.sent);
								case 3:
								case "end":
									return e.stop()
							}
						}), e)
					})));

					function t(t, a) {
						return e.apply(this, arguments)
					}
					return t
				}()
			}, {
				key: "address",
				isSelect: !0,
				required: !1,
				label: "目的地",
				rules: function() {
					var e = Object(u["a"])(regeneratorRuntime.mark((function e(t, a) {
						return regeneratorRuntime.wrap((function(e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, ya(t, a);
								case 2:
									return e.abrupt("return", e.sent);
								case 3:
								case "end":
									return e.stop()
							}
						}), e)
					})));

					function t(t, a) {
						return e.apply(this, arguments)
					}
					return t
				}()
			}, {
				key: "detailAddress",
				isSelect: !0,
				required: !1,
				label: "详细地址",
				rules: function() {
					var e = Object(u["a"])(regeneratorRuntime.mark((function e(t, a) {
						return regeneratorRuntime.wrap((function(e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, ga(t, a);
								case 2:
									return e.abrupt("return", e.sent);
								case 3:
								case "end":
									return e.stop()
							}
						}), e)
					})));

					function t(t, a) {
						return e.apply(this, arguments)
					}
					return t
				}()
			}, {
				key: "leaveReason",
				isSelect: !1,
				required: !1,
				label: "请假原因",
				rules: function() {
					var e = Object(u["a"])(regeneratorRuntime.mark((function e(t) {
						return regeneratorRuntime.wrap((function(e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, ba(t);
								case 2:
									return e.abrupt("return", e.sent);
								case 3:
								case "end":
									return e.stop()
							}
						}), e)
					})));

					function t(t) {
						return e.apply(this, arguments)
					}
					return t
				}()
			}, {
				key: "approverWid",
				isSelect: !0,
				required: !0,
				label: "审批人"
			}],
			xa = function() {
				var e = Object(u["a"])(regeneratorRuntime.mark((function e(t, a, n, r) {
					var i, o, s, l;
					return regeneratorRuntime.wrap((function(e) {
						while (1) switch (e.prev = e.next) {
							case 0:
								i = 0, o = wa.length;
							case 1:
								if (!(i < o)) {
									e.next = 19;
									break
								}
								if (s = wa[i], !s.required) {
									e.next = 10;
									break
								}
								return "approverWid" === s.key && 0 === n
									.length && (s.validateResult = !0), e.next =
									7, Ca(t, a, s);
							case 7:
								s.validateResult = e.sent, e.next = 14;
								break;
							case 10:
								if (!s.rules) {
									e.next = 14;
									break
								}
								return e.next = 13, s.rules(t, r);
							case 13:
								s.validateResult = e.sent;
							case 14:
								if (s.validateResult) {
									e.next = 16;
									break
								}
								return e.abrupt("return", !1);
							case 16:
								i++, e.next = 1;
								break;
							case 19:
								return l = wa.every((function(e) {
									return e.validateResult
								})), e.abrupt("return", l);
							case 21:
							case "end":
								return e.stop()
						}
					}), e)
				})));
				return function(t, a, n, r) {
					return e.apply(this, arguments)
				}
			}(),
			Ca = function() {
				var e = Object(u["a"])(regeneratorRuntime.mark((function e(t, a, n) {
					return regeneratorRuntime.wrap((function(e) {
						while (1) switch (e.prev = e.next) {
							case 0:
								if (0 !== a || "approverWid" !== n.key) {
									e.next = 2;
									break
								}
								return e.abrupt("return", !0);
							case 2:
								if (t[n.key] || "leaveType" === n.key) {
									e.next = 7;
									break
								}
								return n.isSelect ? Object(x["b"])("请选择".concat(
									n.label)) : Object(x["b"])("".concat(n
									.label, "不能为空")), e.abrupt("return", !1);
							case 7:
								if (!(String(t.leaveType).length < 1)) {
									e.next = 10;
									break
								}
								return Object(x["b"])("请选择".concat(n.label)), e
									.abrupt("return", !1);
							case 10:
								return e.abrupt("return", !0);
							case 11:
							case "end":
								return e.stop()
						}
					}), e)
				})));
				return function(t, a, n) {
					return e.apply(this, arguments)
				}
			}(),
			ka = Object(ct["a"])("choosePeople"),
			Oa = ka.mapMutations,
			Ta = !1,
			Aa = {
				components: {
					CatCellPicker: ot["a"],
					CatCellDateTimePicker: lt["a"],
					CatCellSwitch: ta["a"],
					CatCellLongInput: st["a"],
					CatCellUpload: De["a"],
					BusLeaveTypePicker: la,
					CatCellInput: it["a"],
					CatFlowChartModal: rt["a"],
					CatButton: f["a"],
					CatCheatObserver: Ie["a"],
					BusReselectTimeModal: ha,
					CatLocation: _e["a"],
					CatTip: ve["a"],
					CatCellPeople: nt["a"],
					Checkbox: at["a"],
					CatCellAreaPicker: tt["a"],
					BusAddFields: gt
				},
				data: function() {
					return {
						isRequired: !1,
						getMobileOSSAccessURL: te["j"],
						downloadMediaURL: te["e"],
						getUploadPolicyURL: te["l"],
						http: Le["a"],
						hasGotSender: !0,
						LeaveSchoolDisabled: !1,
						model: {
							leaveType: "",
							startTime: null,
							endTime: null,
							urgencyMobile: null,
							leaveReason: null,
							applyAttach: [],
							outStatus: !1,
							approverWid: null,
							address: "",
							detailAddress: ""
						},
						typeList: [],
						leaveConfig: {
							allowLeave: 0,
							limitDays: 0,
							notAllowTitle: "",
							notAllowUrl: "",
							uploadlocation: 0
						},
						isRequestOk: !1,
						approveFlow: [],
						approvers: [],
						approversInfo: {},
						timeIsOk: !1,
						showFlowModal: !1,
						notOutReport: 0,
						leaveTimeLimitInfo: {
							enableCompensatory: 0,
							compensatoryDay: 0,
							compensatoryHour: 0,
							enableEarlyLeave: 0,
							earlyLeaveDay: 0,
							earlyLeaveHour: 0
						},
						showTimeModal: !1,
						timeLimitResInfo: {
							enableCompensatory: 0,
							compensatoryPoint: "",
							earlyLeaveStartPoint: "",
							earlyLeaveEndPoint: ""
						},
						hasSelectedArr: [],
						submitAddress: "",
						locationStatus: "",
						locationData: {},
						cheatType: null,
						type: jt.LEAVE,
						chooseData: [],
						localId: null,
						localChooseArr: [],
						localModel: {},
						canValidateTime: !1,
						agreement: !1,
						fields: [],
						holidayAutoDefineVos: [],
						cacheFields: []
					}
				},
				computed: {
					showAddress: function() {
						return 1 === this.leaveConfig.openDestination && this.model.outStatus
					},
					submitDisabled: function() {
						return 1 === this.leaveConfig.openDisclaimers ? this.isRequestOk || !this
							.agreement : this.isRequestOk
					},
					renderTime: function() {
						return {
							startTime: this.model.startTime,
							endTime: this.model.endTime
						}
					},
					reCreate: function() {
						return "reCreate" === this.$route.query.type
					},
					reEdit: function() {
						return "reEdit" === this.$route.query.type
					},
					canShowCompenSatoryResMsg: function() {
						return 1 === this.timeLimitResInfo.enableCompensatory && this.timeLimitResInfo
							.compensatoryPoint
					},
					canShowNoCompenSatoryResMsg: function() {
						return 2 === this.timeLimitResInfo.enableCompensatory
					},
					canShowLeaveEarlyResMsg: function() {
						return this.timeLimitResInfo.earlyLeaveStartPoint && this.timeLimitResInfo
							.earlyLeaveEndPoint
					},
					locationType: function() {
						return "success" === this.locationStatus ? 0 : "fail" === this.locationStatus ||
							"ing" === this.locationStatus ? 2 : "noAuth" === this.locationStatus ? 1 :
							void 0
					},
					hasAllType: function() {
						return this.typeList.length > 0
					},
					sendPeopleData: {
						set: function(e) {
							this.chooseData = e
						},
						get: function() {
							return this.chooseData.length > 0 ? this.chooseData : this.hasSelectedArr
						}
					},
					needApproval: function() {
						return "0" === this.leaveTimeLimitInfo.needApproval || 0 === this.leaveTimeLimitInfo
							.needApproval ? 0 : 1
					}
				},
				watch: {
					renderTime: {
						deep: !0,
						handler: function(e) {
							(e.startTime || e.endTime) && this.changeLeaveType(e)
						}
					},
					"model.leaveType": {
						handler: function(e) {
							var t = this.typeList.findIndex((function(t) {
								return e === t.code
							}));
							this.initLeaveType(t)
						},
						deep: !0
					}
				},
				activated: function() {
					this.$route.query.leaveId !== this.localId && "fromChoose" !== this.localId || Ta ? (
						this.model = {
							leaveType: "",
							startTime: null,
							endTime: null,
							urgencyMobile: null,
							leaveReason: null,
							applyAttach: [],
							outStatus: !1,
							approverWid: null,
							address: "",
							detailAddress: ""
						}, this.cacheFields = [], this.sendPeopleData = [], this.leaveId = this.$route
						.query.leaveId, this.localChooseArr = [], this.hasSelectedArr = [], this
						.timeIsOk = !1, this.agreement = !1, this.localModel = {}, this.isRequired = !1,
						this.initPage(!1)) : (this.localChooseArr = this.chooseData, this
						.hasSelectedArr = this.localChooseArr, this.leaveId = this.$route.query.leaveId,
						this.model = Object(X["a"])({}, this.localModel), this.fields = Object(ea["a"])(
							this.cacheFields))
				},
				deactivated: function() {
					this.localId = this.$route.params.id ? this.$route.params.id : "init", this.localModel =
						this.model, this.cacheFields = Object(ea["a"])(this.fields)
				},
				mounted: function() {
					var e = this;
					this.$EventBus.$on("get-choose-data", (function(t) {
						e.getChooseData(t)
					}))
				},
				beforeRouteEnter: function(e, t, a) {
					"home" === t.name && a((function(e) {
						e.holidayAutoDefineVos = []
					})), t.fullPath.indexOf("detail") > -1 ? Ta = !0 : t.fullPath.indexOf(
						"choosePeople") > -1 && (Ta = !1), a()
				},
				beforeRouteLeave: function(e, t, a) {
					var n = ["choosePeople", "detail"],
						r = n.some((function(t) {
							return e.fullPath.indexOf(t) > -1
						}));
					r ? a() : v["a"].confirm({
						title: "",
						message: "确定退出？"
					}).then((function(e) {
						a()
					})).catch((function() {
						a(!1)
					}))
				},
				methods: Object(X["a"])(Object(X["a"])({}, Oa(["setDataList", "setHistoryApiMethod",
					"setSearchApiMethod", "setAddHistoryApiMethod"
				])), {}, {
					initPage: function() {
						var e = arguments,
							t = this;
						return Object(u["a"])(regeneratorRuntime.mark((function a() {
							var n;
							return regeneratorRuntime.wrap((function(a) {
								while (1) switch (a.prev = a.next) {
									case 0:
										return n = e.length > 0 &&
											void 0 !== e[0] && e[0],
											a.next = 3, t
											.getAllLeaveTypes();
									case 3:
										return a.next = 5, t
											.getReportInfo();
									case 5:
										return a.next = 7, t
											.getLeaveAllocation(t
												.type);
									case 7:
										return a.next = 9, t
											.reCreate && t
											.getReLeaveDate(t
												.leaveId, n);
									case 9:
										return a.next = 11, t
											.reEdit && t
											.getReEditData(t
												.leaveId, t.type, n
												);
									case 11:
									case "end":
										return a.stop()
								}
							}), a)
						})))()
					},
					showPickerBefore: function() {
						return !(this.approvers.length < 1) || (Object(x["b"])("暂无审批人数据"), !1)
					},
					getChooseData: function(e) {
						this.sendPeopleData = e, this.$router.go(-1)
					},
					doShowChoosePeople: function() {
						this.setDataList(this.sendPeopleData), this.setHistoryApiMethod(te["B"]),
							this.setSearchApiMethod(te["C"]), this.setAddHistoryApiMethod(te["b"]),
							this.$router.push({
								path: "/choosePeople/".concat(this.leaveId ? this.leaveId :
									"fromChoose")
							})
					},
					getApproverIdInfo: function(e) {
						this.approversInfo = {
							approverId: e.userId,
							approverName: e.userName
						}
					},
					getLocationData: function(e) {
						this.locationData = e, this.submitAddress = e.address || "定位信息"
					},
					getLocationStatus: function(e) {
						"fail" === e && (this.submitAddress = "定位失败"), this.locationStatus = e
					},
					changeLeaveType: function(e) {
						var t;
						if (this.hasAllType) {
							var a = va(e, this.leaveConfig.limitDays, this.leaveTimeLimitInfo);
							this.model.approverWid = null !== (t = this.localModel) && void 0 !==
								t && t.approverWid ? this.localModel.approverWid : "", this
								.localModel.approverWid = "", this.timeIsOk = a, this
								.getApproveFlowAndapprovers()
						}
					},
					getAllLeaveTypes: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return Object(y["e"])(), t
											.next = 3, Object(te[
												"y"])({});
									case 3:
										a = t.sent, n = a.data,
											Object(y["b"])(), e
											.typeList = (null ===
												n || void 0 === n ?
												void 0 : n.leaveType
												) || [], e
											.initLeaveType(-1);
									case 8:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					getApproveFlowAndapprovers: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n, r, i;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										if (e.approvers = e
											.approveFlow = [], e
											.approversInfo = {}, e
											.timeIsOk && 0 !==
											String(e.model
												.leaveType)
											.length && 0 !== e
											.needApproval) {
											t.next = 4;
											break
										}
										return t.abrupt("return");
									case 4:
										return t.next = 6, Object(
											te["t"])({
											leaveType: e
												.model
												.leaveType,
											startTime: ""
												.concat(e
													.model
													.startTime,
													":00"),
											endTime: ""
												.concat(e
													.model
													.endTime,
													":00"),
											leaveId: e
												.leaveId
										});
									case 6:
										a = t.sent, n = a.data,
											r = [], i = (null ===
												n || void 0 === n ?
												void 0 : n
												.approveFlow) || [],
											i.forEach((function(e) {
												r.push({
													list: e
														.map(
															(function(
																e
																) {
																return Object(
																		X[
																			"a"]
																		)
																	(Object(X[
																			"a"])
																		({},
																			e), {}, {
																			name: e
																				.nodeName
																		}
																		)
															})
															)
												})
											})), e.approveFlow = r,
											e.approvers = n
											.approvers;
									case 13:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					checkLeaveTimeRangeConfig: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, Object(
											te["x"])({
											code: e.model
												.leaveType
										});
									case 2:
										return a = t.sent, n = a
											.data, t.abrupt(
												"return", n || {});
									case 5:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					getFields: function(e) {
						var t = this;
						return Object(u["a"])(regeneratorRuntime.mark((function a() {
							var n, r, i, o, s, l;
							return regeneratorRuntime.wrap((function(a) {
								while (1) switch (a.prev = a.next) {
									case 0:
										if (null === (null === (n =
													t.localModel) ||
												void 0 === n ?
												void 0 : n.leaveType
												) && void 0 === (
												null === (r = t
													.localModel) ||
												void 0 === r ?
												void 0 : r.leaveType
												) && "" === (
												null === (i = t
													.localModel) ||
												void 0 === i ?
												void 0 : i.leaveType
												) || (null === (o =
													t.localModel) ||
												void 0 === o ?
												void 0 : o.leaveType
												) !== t.model
											.leaveType) {
											a.next = 2;
											break
										}
										return a.abrupt("return");
									case 2:
										return a.next = 4, Object(
											te["v"])({
											leaveTypeWid: e
										});
									case 4:
										s = a.sent, l = s.data, t
											.fields = l, t.fields
											.length && (t.fields = t
												.fields.map((
													function(
													e) {
														var a,
															n,
															r,
															i,
															o,
															s;
														return Object(
																X[
																	"a"]
																)
															(Object(X[
																	"a"])
																({},
																	e), {}, {
																	autoDefineSubWid: null !==
																		(a = null ===
																			(n = t
																				.holidayAutoDefineVos
																				) ||
																			void 0 ===
																			n ||
																			null ===
																			(r = n
																				.find(
																					(function(
																						t
																						) {
																						return t
																							.autoDefineWid ===
																							e
																							.wid
																					})
																					)
																				) ||
																			void 0 ===
																			r ?
																			void 0 :
																			r
																			.autoDefineSubWid
																			) &&
																		void 0 !==
																		a ?
																		a :
																		"",
																	text: null !==
																		(i = null ===
																			(o = t
																				.holidayAutoDefineVos
																				) ||
																			void 0 ===
																			o ||
																			null ===
																			(s = o
																				.find(
																					(function(
																						t
																						) {
																						return t
																							.autoDefineWid ===
																							e
																							.wid
																					})
																					)
																				) ||
																			void 0 ===
																			s ?
																			void 0 :
																			s
																			.content
																			) &&
																		void 0 !==
																		i ?
																		i :
																		""
																}
																)
													})));
									case 8:
									case "end":
										return a.stop()
								}
							}), a)
						})))()
					},
					getReLeaveDate: function(e, t) {
						var a = this;
						return Object(u["a"])(regeneratorRuntime.mark((function n() {
							var r, i, o, s, l, c, u;
							return regeneratorRuntime.wrap((function(n) {
								while (1) switch (n.prev = n.next) {
									case 0:
										return a.hasGotSender = !1,
											Object(y["e"])(), n
											.next = 4, Object(te[
												"h"])({
												id: e,
												uaIsCpadaily: sessionStorage
													.uaIsCpadaily
											});
									case 4:
										r = n.sent, i = r.data,
											Object(y["b"])(), a
											.holidayAutoDefineVos = [],
											o = i.leaveType, s = i
											.detail, l = s.ccInfo ||
											{}, t || (a
												.hasSelectedArr = [],
												a.localChooseArr
												.length > 0 ? a
												.hasSelectedArr = a
												.localChooseArr : (l
													.teachers && l
													.teachers
													.length > 0 && (
														a
														.hasSelectedArr =
														a
														.hasSelectedArr
														.concat(l
															.teachers
															)), l
													.students && l
													.students
													.length > 0 && (
														a
														.hasSelectedArr =
														a
														.hasSelectedArr
														.concat(l
															.students
															)))), a
											.sendPeopleData = a
											.hasSelectedArr, a
											.hasGotSender = !0, a
											.LeaveSchoolDisabled = !
											!s.mustOut, c = s
											.destination || "", u =
											s.applyAttach || [], a
											.model = {
												leaveType: o.code,
												outStatus: s
													.outStatus,
												leaveReason: null,
												applyAttach: u.map((
													function(
														e) {
														return Object(
																X[
																	"a"]
																)
															(Object(X[
																	"a"])
																({},
																	e), {}, {
																	attachmentUrl: e
																		.url
																}
																)
													})),
												urgencyMobile: s
													.urgencyMobile,
												startTime: s
													.startDate,
												endTime: s.endDate,
												address: c.split(
													"/").slice(
													0, 3).join(
													"/"),
												detailAddress: c
													.split("/")
													.slice(-1).join(
														"")
											};
									case 18:
									case "end":
										return n.stop()
								}
							}), n)
						})))()
					},
					getReportInfo: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return Object(y["e"])(), t
											.next = 3, Object(te[
												"k"])({});
									case 3:
										a = t.sent, n = a.data,
											Object(y["b"])(), e
											.notOutReport = n
											.notOutReport;
									case 7:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					getLeaveAllocation: function(e) {
						var t = this;
						return Object(u["a"])(regeneratorRuntime.mark((function a() {
							var n, r;
							return regeneratorRuntime.wrap((function(a) {
								while (1) switch (a.prev = a.next) {
									case 0:
										return Object(y["e"])(), a
											.next = 3, Object(te[
												"c"])({
												type: e
											});
									case 3:
										n = a.sent, r = n.data,
											Object(y["b"])(), t
											.leaveConfig = r;
									case 7:
									case "end":
										return a.stop()
								}
							}), a)
						})))()
					},
					getReEditData: function(e, t, a) {
						var n = this;
						return Object(u["a"])(regeneratorRuntime.mark((function r() {
							var i, o, s, l, c;
							return regeneratorRuntime.wrap((function(r) {
								while (1) switch (r.prev = r.next) {
									case 0:
										return n.hasGotSender = !1,
											Object(y["e"])(), r
											.next = 4, Object(te[
												"w"])({
												id: e,
												type: t
											});
									case 4:
										i = r.sent, o = i.data,
											Object(y["b"])(), n
											.holidayAutoDefineVos =
											o.holidayAutoDefineVos,
											s = o.ccInfo || {}, a ||
											(n.hasSelectedArr = [],
												n.localChooseArr
												.length > 0 ? n
												.hasSelectedArr = n
												.localChooseArr : (s
													.teachers && s
													.teachers
													.length > 0 && (
														n
														.hasSelectedArr =
														n
														.hasSelectedArr
														.concat(s
															.teachers
															)), s
													.students && s
													.students
													.length > 0 && (
														n
														.hasSelectedArr =
														n
														.hasSelectedArr
														.concat(s
															.students
															)))), n
											.hasGotSender = !0, l =
											o.applyAttach ? o
											.applyAttach : [], n
											.sendPeopleData = n
											.hasSelectedArr, c = o
											.destination || "", n
											.model = Object(X["a"])(
												Object(X["a"])({},
													o), {}, {
													leaveType: +o
														.leaveType,
													applyAttach: l
														.map((function(
															e
															) {
															return Object(
																	X[
																		"a"]
																	)
																(Object(X[
																		"a"])
																	({},
																		e), {}, {
																		attachmentUrl: e
																			.url
																	}
																	)
														})),
													startTime: o
														.startTime &&
														o.startTime
														.slice(0, -
															3),
													endTime: o
														.endTime &&
														o.endTime
														.slice(0, -
															3),
													address: c
														.split("/")
														.slice(0, 3)
														.join(
														"/") || "",
													detailAddress: c
														.split("/")
														.slice(-1)
														.join("") ||
														""
												}), n
											.LeaveSchoolDisabled = !
											!o.mustOut;
									case 16:
									case "end":
										return r.stop()
								}
							}), r)
						})))()
					},
					initLeaveType: function(e) {
						var t = this;
						return Object(u["a"])(regeneratorRuntime.mark((function a() {
							var n, r, i, o;
							return regeneratorRuntime.wrap((function(a) {
								while (1) switch (a.prev = a.next) {
									case 0:
										if (!(e > -1)) {
											a.next = 14;
											break
										}
										return (null === (null === (
														n = t
														.localModel
														) ||
													void 0 === n ?
													void 0 : n
													.leaveType) &&
												void 0 === (null ===
													(r = t
														.localModel
														) ||
													void 0 === r ?
													void 0 : r
													.leaveType) &&
												"" === (null === (
														i = t
														.localModel
														) ||
													void 0 === i ?
													void 0 : i
													.leaveType) || (
													null === (o = t
														.localModel
														) ||
													void 0 === o ?
													void 0 : o
													.leaveType) !==
												t.model.leaveType
												) && (t.model
												.approverWid = ""),
											t.model.outStatus = t
											.model.outStatus || !!t
											.typeList[e].mustOut, t
											.LeaveSchoolDisabled = !
											!t.typeList[e].mustOut,
											a.next = 6, t
											.checkLeaveTimeRangeConfig();
									case 6:
										return t
											.leaveTimeLimitInfo = a
											.sent, t.isRequired = !!
											t.leaveTimeLimitInfo
											.enableAttach, a.next =
											10, t
											.getApproveFlowAndapprovers();
									case 10:
										return a.next = 12, t
											.getFields(t.typeList[e]
												.id);
									case 12:
										a.next = 18;
										break;
									case 14:
										t.model.leaveType = "", t
											.model.outStatus = !1, t
											.LeaveSchoolDisabled = !
											0, t.fields = [];
									case 18:
									case "end":
										return a.stop()
								}
							}), a)
						})))()
					},
					doSubmit: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n, r, i, o, s, l, c, u, d, p, f, h, v, m, b;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, Object(
											te["d"])({}, {
											validator: function(
												e) {
												return e
													.code &&
													(0 ===
														+
														e
														.code ||
														2210070011 ===
														+
														e
														.code
														)
											}
										});
									case 2:
										if (l = t.sent, c = l.code,
											2210070011 !== +c) {
											t.next = 10;
											break
										}
										return t.next = 7, Object(
											aa["a"])({
											className: "changeTitle",
											title: "不可请假",
											message: '<div>当前已存在<span class="font-error">正在休假中或仍未审批完 </span>的请假记录，无法请假</div>',
											confirmButtonText: "知道了",
											showCancelButton:
												!1
										});
									case 7:
										if (u = t.sent, !u) {
											t.next = 10;
											break
										}
										return t.abrupt("return");
									case 10:
										return Object(y["e"])(
												"正在处理中..."), t
											.next = 13, e
											.beforeSubmitCheck();
									case 13:
										if (d = t.sent, d) {
											t.next = 17;
											break
										}
										return Object(y["b"])(), t
											.abrupt("return");
									case 17:
										if (!(e.sendPeopleData && e
												.sendPeopleData
												.length > 100)) {
											t.next = 20;
											break
										}
										return Object(x["b"])(
												"抄送人数不能大于100，请重新选择"
												), t.abrupt(
												"return");
									case 20:
										return t.next = 22, Object(
											O["g"])();
									case 22:
										return p = t.sent, f =
											window.navigator
											.userAgent.slice(window
												.navigator.userAgent
												.lastIndexOf("/") +
												1), h = null === (
												a = e.fields) ||
											void 0 === a ? void 0 :
											a.map((function(t) {
												var a, n, r,
													i, o;
												return {
													leaveId: (
															null ===
															(a = e
																.$route
																.query
																) ||
															void 0 ===
															a ?
															void 0 :
															a
															.leaveId
															) ||
														"",
													leaveTypeWid: t
														.leaveTypeWid,
													autoDefineWid: t
														.wid,
													autoDefineSubWid: t
														.autoDefineSubWid ||
														"",
													content: t
														.text,
													autoDefineType:
														~~t
														.defineType,
													autoDefineSubContent: null !==
														(n = null ===
															(r = t
																.holidayAutoDefineSubs
																.find(
																	(function(
																		e
																		) {
																		return e
																			.wid ===
																			t
																			.autoDefineSubWid
																	})
																	)
																) ||
															void 0 ===
															r ?
															void 0 :
															r
															.content
															) &&
														void 0 !==
														n ?
														n :
														"",
													autoDefineContent: t
														.title,
													autoDefineException: t
														.otherException,
													autoDefineSubException: null !==
														(i = null ===
															(o = t
																.holidayAutoDefineSubs
																.find(
																	(function(
																		e
																		) {
																		return e
																			.wid ===
																			t
																			.autoDefineSubWid
																	})
																	)
																) ||
															void 0 ===
															o ?
															void 0 :
															o
															.exception
															) &&
														void 0 !==
														i &&
														i
												}
											})), v = Object(X["a"])(
												Object(X["a"])(
													Object(X["a"])
													({}, e.model), e
													.approversInfo
													), {}, {
													holidayAutoDefineVos: h,
													appVersion: f,
													deviceId: (
															null ===
															p ||
															void 0 ===
															p ||
															null ===
															(n = p
																.data
																) ||
															void 0 ===
															n ?
															void 0 :
															n.uuid
															) || "",
													startTime: ""
														.concat(e
															.model
															.startTime,
															":00"),
													endTime: ""
														.concat(e
															.model
															.endTime,
															":00"),
													applyAttach: e
														.model
														.applyAttach
														.map((function(
															e
															) {
															return {
																url: e
																	.attachmentUrl,
																type: 1
															}
														})),
													ccInfo: {
														teachers: e
															.sendPeopleData
															.filter(
																(function(
																	e
																	) {
																	return 0 ===
																		e
																		.personType
																})),
														students: e
															.sendPeopleData
															.filter(
																(function(
																	e
																	) {
																	return 1 ===
																		e
																		.personType
																}))
													},
													cheatType: e
														.cheatType,
													source: 1,
													location: Object(
														X["a"])
													({
															deviceId: null ===
																p ||
																void 0 ===
																p ||
																null ===
																(r = p
																	.data
																	) ||
																void 0 ===
																r ?
																void 0 :
																r
																.uuid,
															systemName: null ===
																p ||
																void 0 ===
																p ||
																null ===
																(i = p
																	.data
																	) ||
																void 0 ===
																i ?
																void 0 :
																i
																.platform,
															systemVersion: null ===
																p ||
																void 0 ===
																p ||
																null ===
																(o = p
																	.data
																	) ||
																void 0 ===
																o ?
																void 0 :
																o
																.version,
															model: null ===
																p ||
																void 0 ===
																p ||
																null ===
																(s = p
																	.data
																	) ||
																void 0 ===
																s ?
																void 0 :
																s
																.model
														}, e
														.locationData
														),
													locationType: e
														.locationType,
													disclaimers: 1 ===
														e
														.leaveConfig
														.openDisclaimers ?
														e
														.leaveConfig
														.disclaimers :
														null,
													destination: e
														.showAddress &&
														e.model
														.address
														.length >
														0 ? ""
														.concat(e
															.model
															.address,
															"/")
														.concat(e
															.model
															.detailAddress
															) : "",
													urgencyMobile: e
														.model
														.outStatus ?
														e.model
														.urgencyMobile :
														"",
													uaIsCpadaily: sessionStorage
														.uaIsCpadaily
												}), e
											.isRequestOk = !0, t
											.next = 29, Object(te[
												"q"])(v, {
												validator: function(
													e) {
													return e
														.code &&
														(0 ===
															+
															e
															.code ||
															430000001 ===
															+
															e
															.code ||
															2210070012 ===
															+
															e
															.code
															)
												}
											});
									case 29:
										m = t.sent, b = m
											.originData, e
											.isRequestOk = !1,
											Object(y["b"])(), e
											.submitAfter(b);
									case 34:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					submitAfter: function(e) {
						var t = this;
						return Object(u["a"])(regeneratorRuntime.mark((function a() {
							var n, r;
							return regeneratorRuntime.wrap((function(a) {
								while (1) switch (a.prev = a.next) {
									case 0:
										if ("0" !== e.code) {
											a.next = 6;
											break
										}
										return Object(x["c"])(
												"请假申请成功"), n = e
											.datas || e, a.next = 5,
											t.$nextTick();
									case 5:
										t.$router.replace("/detail/"
											.concat(n, "/")
											.concat(t
												.needApproval));
									case 6:
										if ("430000001" === e
											.code && e.message && (t
												.timeLimitResInfo =
												JSON.parse(e
													.message), t
												.showTimeModal = !0
												), "2210070012" !==
											e.code) {
											a.next = 13;
											break
										}
										return a.next = 10, Object(
											aa["a"])({
											className: "changeTitle",
											title: "该时间不可请假",
											message: "<div>"
												.concat(e
													.message,
													"</div>"
													),
											confirmButtonText: "知道了",
											showCancelButton:
												!1
										});
									case 10:
										if (r = a.sent, !r) {
											a.next = 13;
											break
										}
										return a.abrupt("return");
									case 13:
									case "end":
										return a.stop()
								}
							}), a)
						})))()
					},
					beforeSubmitCheck: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n, r;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, Object(
											te["g"])({});
									case 2:
										if (a = t.sent, n = a.data,
											!n.moduleStatus) {
											t.next = 14;
											break
										}
										return t.next = 7, e.$refs
											.cheatObserver.start(n
												.interceptSwitch, n
												);
									case 7:
										if (r = t.sent, e
											.cheatType = r
											.cheatData, null === r
											.cheatData) {
											t.next = 14;
											break
										}
										if (!n.interceptSwitch || !r
											.bool) {
											t.next = 14;
											break
										}
										return t.next = 13, Object(
											te["a"])({
											cheatType: r
												.cheatData,
											leaveOperateType: 0,
											leaveId: "",
											sendMsg: r.bool
										});
									case 13:
										return t.abrupt("return", !
											1);
									case 14:
										return t.abrupt("return", !
											0);
									case 15:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					submit: function() {
						var e = this;
						return Object(u["a"])(regeneratorRuntime.mark((function t() {
							var a, n, r, i, o, s, l;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return console.log(e
											.fields), t.next = 3, e
											.$refs.catCellUpload
											.$refs.catUpload
											.getComplete();
									case 3:
										if (n = t.sent, n) {
											t.next = 7;
											break
										}
										return Object(x["b"])(
												"请等待附件上传完毕再提交请假"), t
											.abrupt("return");
									case 7:
										if (!e.isRequestOk) {
											t.next = 9;
											break
										}
										return t.abrupt("return");
									case 9:
										if (!(String(e.model
													.leaveType)
												.length < 1)) {
											t.next = 12;
											break
										}
										return Object(x["b"])(
												"请选择请假类型"), t
											.abrupt("return");
									case 12:
										if (null === (a = e
											.fields) || void 0 ===
											a || !a.length) {
											t.next = 22;
											break
										}
										r = function(t) {
												if (e.fields[t]
													.tag) {
													var a = e
														.fields[t],
														n = a
														.defineType,
														r = a.text,
														i = a
														.autoDefineSubWid,
														o = a.other;
													if (n && !r)
														return e
															.$nextTick(
																(function() {
																	e.$refs
																		.box
																		.scrollTop =
																		e
																		.$refs[
																			"fields"
																			.concat(
																				t
																				)
																			]
																		[
																			0]
																		.$el
																		.offsetTop
																})
																), {
																v: Object(
																		x[
																			"b"]
																		)
																	(
																		"请填写附加题")
															};
													if (!n && !r &&
														!+i) {
														e.$nextTick(
															(function() {
																e.$refs
																	.box
																	.scrollTop =
																	e
																	.$refs[
																		"fields"
																		.concat(
																			t
																			)
																		]
																	[
																		0]
																	.$el
																	.offsetTop
															}));
														var s = o ?
															"请选择或填写其他" :
															"请选择附加题";
														return {
															v: Object(
																	x[
																		"b"]
																	)
																(s)
														}
													}
												}
											}, t.t0 =
											regeneratorRuntime.keys(
												e.fields);
									case 15:
										if ((t.t1 = t.t0()).done) {
											t.next = 22;
											break
										}
										if (i = t.t1.value, o = r(
											i), "object" !== Object(
												et["a"])(o)) {
											t.next = 20;
											break
										}
										return t.abrupt("return", o
											.v);
									case 20:
										t.next = 15;
										break;
									case 22:
										if (!(e.model.applyAttach
												.length < 1 && e
												.isRequired)) {
											t.next = 25;
											break
										}
										return Object(x["b"])(
											"请添加附件"), t.abrupt(
											"return");
									case 25:
										return t.next = 27, va(e
											.renderTime, e
											.leaveConfig
											.limitDays, e
											.leaveTimeLimitInfo);
									case 27:
										if (s = t.sent, s) {
											t.next = 31;
											break
										}
										return e.$refs.box
											.scrollTop = 0, t
											.abrupt("return");
									case 31:
										return t.next = 33, xa(e
											.model, e
											.needApproval, e
											.approvers, e
											.showAddress);
									case 33:
										if (l = t.sent, l) {
											t.next = 36;
											break
										}
										return t.abrupt("return");
									case 36:
										e.notOutReport && !e.model
											.outStatus ? v["a"]
											.confirm({
												message: '<p style="text-align: center;">您所提交的请假申请，根据学校的要求，在假期结束前需要进行<span style="color: #ED3F14;font-weight: 700;">手动销假</span>!</p>',
												cancelButtonText: "取消",
												confirmButtonText: "确定",
												closeOnClickOverlay:
													!1
											}).then((function() {
												e.doSubmitFn()
											})) : e.doSubmitFn();
									case 37:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					doSubmitFn: function() {
						var e = this;
						v["a"].confirm({
							title: "确认提交请假？",
							message: "已确认内容无误并提交？",
							confirmButtonText: "提交",
							cancelButtonText: "再检查一下"
						}).then((function() {
							e.doSubmit()
						})).catch((function() {}))
					},
					repickTimeRange: function() {
						this.showTimeModal = !1, window.scrollTo(0, 0)
					}
				})
			},
			Sa = Aa,
			ja = (a("e008"), Object(N["a"])(Sa, Xt, Yt, !1, null, null, null)),
			Ra = ja.exports,
			Ia = {
				mode: "hash",
				base: "/wec-counselor-leave-apps/leave/",
				routes: [{
					path: "/",
					meta: {
						title: "请假",
						useSdk: !0,
						keepAlive: !0
					},
					name: "home",
					component: function() {
						return a.e("page-home").then(a.bind(null, "a2f3"))
					}
				}, {
					path: "/page-empty",
					meta: {
						title: "出错啦"
					},
					name: "empty",
					component: function() {
						return a.e("chunk-707d1e16").then(a.bind(null, "9af1"))
					}
				}, {
					path: "/create",
					meta: {
						title: "我要请假",
						useSdk: !0,
						keepAlive: !0
					},
					name: "create",
					component: Ra
				}, {
					path: "/choosePeople/:id",
					meta: {
						title: "选择抄送人",
						useSdk: !0
					},
					component: o["a"]
				}, {
					path: "/chooseSelected",
					meta: {
						title: "抄送人",
						useSdk: !0
					},
					component: s["a"]
				}, {
					path: "/detail/:id",
					redirect: "/detail/:id/1"
				}, {
					path: "/detail/:id/:needApproval",
					meta: {
						title: "请假详情",
						useSdk: !0
					},
					component: we
				}, {
					path: "/page-early-termination",
					meta: {
						title: "提前结束申请",
						useSdk: !0
					},
					name: "PageEarlyTermination",
					component: Se
				}, {
					path: "/complete/:id/:needApproval",
					name: "pageComplete",
					meta: {
						title: "销假",
						useSdk: !0
					},
					component: He
				}, {
					path: "/scope/:id/:needApproval",
					meta: {
						title: "销假范围",
						useSdk: !0
					},
					component: Qe
				}, {
					name: "applyExtend",
					path: "/applyExtend",
					meta: {
						title: "申请续假",
						useSdk: !0,
						keepAlive: !0
					},
					component: Nt
				}, {
					path: "/map/:lon/:lat/:address",
					meta: {
						title: "发起位置",
						useSdk: !0
					},
					component: qt["a"]
				}, {
					path: "/viewCurrentApprovers",
					meta: {
						title: "审批人",
						useSdk: !0
					},
					component: Ht
				}, {
					path: "/record-detail/:id/:needApproval",
					meta: {
						title: "完整请假详情",
						useSdk: !0
					},
					component: Qt
				}]
			},
			_a = a("b9e7");
		r["a"].use(i["a"]);
		var Da = new i["a"](Ia);
		Object(_a["a"])(Da, te["u"]);
		t["a"] = Da
	},
	e008: function(e, t, a) {
		"use strict";
		var n = a("66a4"),
			r = a.n(n);
		r.a
	},
	eefd: function(e, t, a) {
		e.exports = a.p + "img/empty2.4f2000e7.png"
	},
	fa93: function(e, t, a) {
		e.exports = a.p + "img/error.eb8f533d.png"
	}
});
//# sourceMappingURL=home.a80e0419.js.map
