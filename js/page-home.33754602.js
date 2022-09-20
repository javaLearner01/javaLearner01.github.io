(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["page-home"], {
		3614: function(t, e, a) {
			t.exports = {
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
		"3cf1": function(t, e, a) {
			t.exports = {
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
		9540: function(t, e, a) {
			"use strict";
			var i = a("3cf1"),
				r = a.n(i);
			r.a
		},
		a2f3: function(t, e, a) {
			"use strict";
			a.r(e), a.d(e, "default", (function() {
				return ft
			}));
			var i = function() {
					var t = this,
						e = t.$createElement,
						a = t._self._c || e;
					return a("div", {
						staticClass: "page-home bg-white flex-col h-screen overflow-hidden ios-touch-scroll"
					}, [a("Tabs", {
						staticClass: "flex-1",
						on: {
							click: t.changeTab
						},
						model: {
							value: t.active,
							callback: function(e) {
								t.active = e
							},
							expression: "active"
						}
					}, t._l(t.tabsList, (function(e) {
						return a("Tab", {
							key: e.key,
							attrs: {
								title: e.title
							}
						}, [a("BusRecordList", {
							key: e.key,
							ref: e.ref,
							refInFor: !0,
							staticClass: "overflow-y-auto",
							attrs: {
								"tab-type": e.key,
								params: e.params,
								"api-method": e.apiMethod,
								"tip-config": e.tipConfig,
								"error-text": e.errorText,
								"empty-text": e.errorText,
								"need-approval": e.needApproval
							},
							on: {
								"item-click": t.toDetail
							}
						})], 1)
					})), 1), a("cat-button", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: !t.loading,
							expression: "!loading"
						}],
						staticClass: "no-shrink",
						attrs: {
							type: t.allowLeave ? "disabled" : "primary"
						},
						on: {
							click: t.toCreate
						}
					}, [t._v(" 我要请假 ")])], 1)
				},
				r = [],
				n = (a("96cf"), a("1da1")),
				s = (a("bda7"), a("5e46")),
				o = (a("da3c"), a("0b33")),
				l = (a("a01b"), a("e028")),
				c = a("45f7"),
				u = a("3b03"),
				d = a("794f"),
				h = a("e765"),
				f = function() {
					var t = this,
						e = t.$createElement,
						a = t._self._c || e;
					return a("div", {
						ref: "scrollDom",
						staticClass: "bus-record-list flex-col flex-1 h-full"
					}, [a("div", {
						directives: [{
							name: "scroll",
							rawName: "v-scroll:bottom.10",
							value: t.loadMore,
							expression: "loadMore",
							arg: "bottom",
							modifiers: {
								10: !0
							}
						}],
						staticClass: "flex-1",
						class: {
							"flex-col": 0 === t.totalSize
						}
					}, [a("cat-tip", {
						attrs: {
							"tip-config": t.tipConfig
						}
					}), a("cat-list", t._g(t._b({
						ref: "list",
						staticClass: "flex-1",
						class: {
							"empty-height": t.totalSize > 0
						},
						attrs: {
							"immediate-check": "",
							"show-global-loading-when-first-request": "",
							"data-hook": t.dataHook
						},
						on: {
							"on-total": t.getTotal
						},
						scopedSlots: t._u([{
							key: "default",
							fn: function(e) {
								var i = e.item,
									r = e.index;
								return [a("bus-home-item", {
									key: r,
									staticClass: "p-20 no-shrink hairline-b",
									attrs: {
										"item-data": i
									},
									on: {
										click: function(
											e
											) {
											return t
												.toDetail(
													i
													)
										}
									}
								})]
							}
						}])
					}, "cat-list", t.$attrs, !1), t.$listeners))], 1)])
				},
				p = [],
				m = (a("a9e3"), a("b406"), a("0981"), a("99af"), a("2909")),
				g = a("ade3"),
				b = a("5530"),
				v = (a("ac1e"), a("543e")),
				x = (a("68ef"), a("e3b3"), a("c0c2"), a("d282")),
				y = a("02de"),
				w = a("a8c1"),
				T = a("5fbe"),
				k = Object(x["a"])("list"),
				E = k[0],
				S = k[1],
				C = k[2],
				O = E({
					mixins: [Object(T["a"])((function(t) {
						this.scroller || (this.scroller = Object(w["d"])(this.$el)), t(
							this.scroller, "scroll", this.check)
					}))],
					model: {
						prop: "loading"
					},
					props: {
						error: Boolean,
						loading: Boolean,
						finished: Boolean,
						errorText: String,
						loadingText: String,
						finishedText: String,
						immediateCheck: {
							type: Boolean,
							default: !0
						},
						offset: {
							type: [Number, String],
							default: 300
						},
						direction: {
							type: String,
							default: "down"
						}
					},
					data: function() {
						return {
							innerLoading: this.loading
						}
					},
					updated: function() {
						this.innerLoading = this.loading
					},
					mounted: function() {
						this.immediateCheck && this.check()
					},
					watch: {
						loading: "check",
						finished: "check"
					},
					methods: {
						check: function() {
							var t = this;
							this.$nextTick((function() {
								if (!(t.innerLoading || t.finished || t.error)) {
									var e, a = t.$el,
										i = t.scroller,
										r = t.offset,
										n = t.direction;
									e = i.getBoundingClientRect ? i
										.getBoundingClientRect() : {
											top: 0,
											bottom: i.innerHeight
										};
									var s = e.bottom - e.top;
									if (!s || Object(y["a"])(a)) return !1;
									var o = !1,
										l = t.$refs.placeholder.getBoundingClientRect();
									o = "up" === n ? e.top - l.top <= r : l.bottom - e
										.bottom <= r, o && (t.innerLoading = !0, t
											.$emit("input", !0), t.$emit("load"))
								}
							}))
						},
						clickErrorText: function() {
							this.$emit("update:error", !1), this.check()
						},
						genLoading: function() {
							var t = this.$createElement;
							if (this.innerLoading && !this.finished) return t("div", {
								class: S("loading"),
								key: "loading"
							}, [this.slots("loading") || t(v["a"], {
								attrs: {
									size: "16"
								}
							}, [this.loadingText || C("loading")])])
						},
						genFinishedText: function() {
							var t = this.$createElement;
							if (this.finished) {
								var e = this.slots("finished") || this.finishedText;
								if (e) return t("div", {
									class: S("finished-text")
								}, [e])
							}
						},
						genErrorText: function() {
							var t = this.$createElement;
							if (this.error) {
								var e = this.slots("error") || this.errorText;
								if (e) return t("div", {
									on: {
										click: this.clickErrorText
									},
									class: S("error-text")
								}, [e])
							}
						}
					},
					render: function() {
						var t = arguments[0],
							e = t("div", {
								ref: "placeholder",
								class: S("placeholder")
							});
						return t("div", {
							class: S(),
							attrs: {
								role: "feed",
								"aria-busy": this.innerLoading
							}
						}, ["down" === this.direction ? this.slots() : e, this.genLoading(),
							this.genFinishedText(), this.genErrorText(), "up" === this
							.direction ? this.slots() : e
						])
					}
				}),
				_ = a("fa78"),
				D = a("c064"),
				j = a("b2c6"),
				$ = {
					name: "CatList",
					components: {
						List: O,
						Loading: v["a"],
						CatEmpty: D["a"]
					},
					inheritAttrs: !1,
					props: {
						needToDisplayBottomText: {
							type: Boolean,
							default: !0
						},
						needToDisplayEmpty: {
							type: Boolean,
							default: !0
						},
						manual: {
							type: Boolean,
							default: !0
						},
						emptyImg: {
							type: String,
							default: ""
						},
						emptyText: String,
						height: {
							type: [String, Number]
						},
						data: {
							type: Array,
							default: function() {
								return []
							}
						},
						adaptiveHeight: {
							type: Boolean,
							default: !1
						},
						apiMethod: Function,
						finishedText: {
							type: String,
							default: "没有更多了"
						},
						immediateCheck: {
							type: Boolean,
							default: !0
						},
						loadingText: {
							type: String,
							default: "加载中..."
						},
						tipText: {
							type: String,
							default: "上拉加载更多"
						},
						errorText: {
							type: String,
							default: "请求失败，点击重新加载"
						},
						offset: {
							type: Number,
							default: 100
						},
						url: String,
						params: {
							type: Object,
							default: function() {
								return {}
							}
						},
						dataHook: {
							type: Function,
							default: function(t) {
								return t
							}
						},
						pageSize: {
							type: Number,
							default: 20
						},
						autoReloadWhenParamsChanged: Boolean,
						dataKey: {
							type: String,
							default: "datas"
						},
						pageNumberKey: {
							type: String,
							default: "pageNumber"
						},
						pageDataKey: {
							type: String,
							default: "rows"
						},
						pageTotalKey: {
							type: String,
							default: "totalSize"
						},
						pageSizeKey: {
							type: String,
							default: "pageSize"
						}
					},
					data: function() {
						return {
							list: [],
							hasRequested: !1,
							pageNumber: 1,
							hasMore: !1,
							loading: !1,
							error: !1
						}
					},
					computed: {
						showEmpty: function() {
							return !this.hasList && this.hasRequested
						},
						hasList: function() {
							return !!this.list.length
						},
						showSpinner: function() {
							return this.hasList && this.loading && this.hasMore && !this.showError && !
								this.showFinished
						},
						showTip: function() {
							return this.hasList && this.hasMore && !this.showSpinner && !this.showError
						},
						showError: function() {
							return this.hasList && this.error
						},
						showFinished: function() {
							return this.hasList && !this.hasMore
						},
						bottomText: function() {
							switch (!0) {
								case this.showFinished:
									return this.finishedText;
								case this.showError:
									return this.errorText;
								case this.showSpinner:
									return this.loadingText;
								case this.showTip:
									return this.manual ? "点击加载更多" : this.tipText
							}
						},
						styles: function() {
							var t = {};
							return this.adaptiveHeight && (t.flex = 1), this.height && (t.height =
								isNaN(this.height) ? this.height : "".concat(this.height, "px")), (
								this.adaptiveHeight || this.height) && (t.overflowY = "auto"), t
						},
						remoteMethod: function() {
							var t = this;
							return this.apiMethod ? this.apiMethod : this.url ? function() {
								for (var e = arguments.length, a = new Array(e), i = 0; i < e; i++)
									a[i] = arguments[i];
								return _["a"].post.apply(_["a"], [t.url].concat(a))
							} : void 0
						}
					},
					watch: {
						params: function() {
							this.autoReloadWhenParamsChanged && this.reload()
						},
						list: function() {
							this.$emit("on-list-change", this.list)
						},
						data: {
							immediate: !0,
							handler: function() {
								Object(j["d"])(this.dataHook) ? this.list = this.dataHook(this.data) :
									this.list = this.data
							}
						}
					},
					mounted: function() {
						var t = this;
						return Object(n["a"])(regeneratorRuntime.mark((function e() {
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, t
									.$nextTick();
									case 2:
										t.immediateCheck && t.reload();
									case 3:
									case "end":
										return e.stop()
								}
							}), e)
						})))()
					},
					methods: {
						handleClickBottomText: function() {
							switch (!0) {
								case this.showError:
									this.error = !1, this.refresh();
									break;
								case this.showTip && this.manual:
									this.next(!0);
									break
							}
						},
						reload: function() {
							return this.pageNumber = 1, this.$emit("on-reload"), this.load(!0)
						},
						next: function(t) {
							var e = this;
							return Object(n["a"])(regeneratorRuntime.mark((function a() {
								return regeneratorRuntime.wrap((function(a) {
									while (1) switch (a.prev = a.next) {
										case 0:
											if (t || !e.manual) {
												a.next = 2;
												break
											}
											return a.abrupt("return");
										case 2:
											if (!e.loading && !e
												.error) {
												a.next = 4;
												break
											}
											return a.abrupt("return");
										case 4:
											if (!e.hasMore) {
												a.next = 9;
												break
											}
											return e.pageNumber += 1, a
												.next = 8, e.load(!1);
										case 8:
											e.$emit("on-next");
										case 9:
										case "end":
											return a.stop()
									}
								}), a)
							})))()
						},
						refresh: function() {
							var t = this;
							return Object(n["a"])(regeneratorRuntime.mark((function e() {
								var a, i, r, n, s, o, l;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return i = t.pageNumber * t
												.pageSize, Object(u[
													"e"])(), t
												.loading = !0, e.next =
												5, t.remoteMethod(
													Object(b["a"])((
															a = {},
															Object(g[
																"a"])(a,
																t
																.pageNumberKey,
																1),
															Object(g[
																"a"])(a,
																"pageSize",
																i), a),
														t.params));
										case 5:
											r = e.sent, n = r.ok, s = r
												.pageTotal, o = r
												.pageData, l = r
												.hasMore, Object(u["b"])
												(), t.loading = !1, n ?
												(t.list = t.dataHook(o),
													t.hasMore = l) : t
												.error = !0, t.$emit(
													"on-total", s), t
												.$emit("on-has-more",
												l), t.$emit(
													"on-has-data", t
													.hasList);
										case 16:
										case "end":
											return e.stop()
									}
								}), e)
							})))()
						},
						load: function() {
							var t = arguments,
								e = this;
							return Object(n["a"])(regeneratorRuntime.mark((function a() {
								var i, r, n, s, o, l, c, d, h;
								return regeneratorRuntime.wrap((function(a) {
									while (1) switch (a.prev = a.next) {
										case 0:
											if (r = !(t.length > 0 &&
													void 0 !== t[0]) ||
												t[0], t.length > 1 &&
												void 0 !== t[1] && t[1],
												e.remoteMethod) {
												a.next = 4;
												break
											}
											return a.abrupt("return");
										case 4:
											return e.loading = !0, r &&
												Object(u["e"])(), a
												.next = 8, e
												.remoteMethod(Object(b[
													"a"])((i = {},
														Object(g[
															"a"])(i,
															e
															.pageNumberKey,
															e
															.pageNumber
															),
														Object(g[
															"a"])(i,
															"pageSize",
															e
															.pageSize
															), i), e
													.params), {
													dataKey: e
														.dataKey,
													pageNumberKey: e
														.pageNumberKey,
													pageDataKey: e
														.pageDataKey,
													pageTotalKey: e
														.pageTotalKey,
													pageSizeKey: e
														.pageSizeKey
												});
										case 8:
											n = a.sent, s = n
												.originData, o = n
												.pageData, l = n.ok, c =
												n.hasMore, d = n
												.pageTotal, e
												.hasRequested = !0, r &&
												Object(u["b"])(), e
												.loading = !1, l ? (r ?
													e.list = e.dataHook(
														o) : (h = e
														.list).push
													.apply(h, Object(m[
														"a"])(e
														.dataHook(o)
														)), e.hasMore =
													c) : e.error = !0, e
												.$emit("on-origin-data",
													s), e.$emit(
													"on-total", d), e
												.$emit("on-has-more",
												c), e.$emit(
													"on-has-data", e
													.hasList);
										case 22:
										case "end":
											return a.stop()
									}
								}), a)
							})))()
						}
					}
				};

			function L(t, e, a, i, r, n, s, o, l, c) {
				"boolean" !== typeof s && (l = o, o = s, s = !1);
				var u, d = "function" === typeof a ? a.options : a;
				if (t && t.render && (d.render = t.render, d.staticRenderFns = t.staticRenderFns, d
						._compiled = !0, r && (d.functional = !0)), i && (d._scopeId = i), n ? (u =
						function(t) {
							t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent
								.$vnode && this.parent.$vnode.ssrContext, t || "undefined" ===
								typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), e && e.call(this,
									l(t)), t && t._registeredComponents && t._registeredComponents.add(n)
						}, d._ssrRegister = u) : e && (u = s ? function(t) {
						e.call(this, c(t, this.$root.$options.shadowRoot))
					} : function(t) {
						e.call(this, o(t))
					}), u)
					if (d.functional) {
						var h = d.render;
						d.render = function(t, e) {
							return u.call(e), h(t, e)
						}
					} else {
						var f = d.beforeCreate;
						d.beforeCreate = f ? [].concat(f, u) : [u]
					} return a
			}
			var N = $,
				R = function() {
					var t = this,
						e = t.$createElement,
						a = t._self._c || e;
					return a("List", {
						staticClass: "cat-list pb-10 flex-col",
						class: {
							manual: t.manual, "show-tip": t.showTip
						},
						style: t.styles,
						attrs: {
							"immediate-check": !1,
							offset: t.offset
						},
						on: {
							load: t.next
						}
					}, [t._t("top"), t._l(t.list, (function(e, a) {
						return t._t("default", null, null, {
							item: e,
							index: a,
							last: a === t.list.length - 1,
							first: 0 === a
						})
					})), t.showEmpty && t.needToDisplayEmpty ? a("cat-empty", {
						staticClass: "flex-1",
						attrs: {
							img: t.emptyImg,
							"empty-text": t.emptyText
						}
					}) : t._e(), !t.showEmpty && t.bottomText && t.needToDisplayBottomText ? a(
						"div", {
							staticClass: "flex-center bottom no-shrink loadmore-btn",
							on: {
								click: t.handleClickBottomText
							}
						}, [t.showSpinner ? a("loading", {
							attrs: {
								slot: "loading",
								size: "4.80000vw",
								type: "spinner"
							},
							slot: "loading"
						}) : t._e(), a("span", {
							staticClass: "font-12 inline-block ml-5",
							class: t.showError ? "font-primary" : "font-light"
						}, [t._v(t._s(t.bottomText))])], 1) : t._e(), t._t("bottom")], 2)
				},
				A = [];
			R._withStripped = !0;
			var M = void 0,
				B = void 0,
				P = void 0,
				K = !1,
				z = L({
					render: R,
					staticRenderFns: A
				}, M, N, B, K, P, !1, void 0, void 0, void 0);
			z.install = function(t) {
				t.component(z.name, z)
			};
			var I, F, H, q = z,
				U = function() {
					var t = this,
						e = t.$createElement,
						a = t._self._c || e;
					return a("div", {
						staticClass: "bus-home-item flex-col",
						on: {
							click: function(e) {
								return t.$emit("click")
							}
						}
					}, [a("div", {
							staticClass: "flex jc-between mb-10 ai-center"
						}, [a("span", {
							staticClass: "flex-1 text-trunc font-dark font-14"
						}, [t._v("我的 " + t._s(t.itemData.leaveType) + "申请")]), a("span", {
							staticClass: "no-shrink text-trunc font-light font-12"
						}, [t._v(t._s(t.itemData.createTime))])]), a("div", {
							staticClass: "font-light font-12 mb-10"
						}, [t._v(" 请假时间：" + t._s(t.duration) + " ")]), "8" === t.itemData
						.actStatus ? a("div", {
							staticClass: "font-light font-12 mb-10"
						}, [t._v(" 实际休假时间："), a("span", {
							class: {
								"font-warning": "1" === t.itemData.isEarlyEnd
							}
						}, [t._v(t._s(t.actEndTime))])]) : t._e(), a("div", {
							staticClass: "status font-12",
							class: t.statusCls
						}, [t.showExtra ? a("span", [t._v("需要离校 女生")]) : t._e(), t.visExt ? a(
							"span", {
								staticClass: "font-warning"
							}, [t._v("续假 ")]) : t._e(), t.itemData.showPush ? a("span", {
							staticClass: "leave-extend"
						}, [t._v(t._s(t.itemData.showPush))]) : t._e(), t.visStatusName ? a(
							"span", {
								class: t.statusCls
							}, [t._v(t._s(t.statusName))]) : t._e()])
					])
				},
				G = [],
				J = {
					UNKNOWN: "0",
					MALE: "1",
					FEMALE: "2"
				},
				X = (I = {}, Object(g["a"])(I, J.UNKNOWN, "未知"), Object(g["a"])(I, J.MALE, "男生"), Object(g[
					"a"])(I, J.FEMALE, "女生"), F = {}, Object(g["a"])(F, J.MALE, "male"), Object(g["a"])(
					F, J.FEMALE, "women"), {
					PENDING: "1",
					PROCESSING: "2",
					REJECT: "3",
					COMPLETE: "4",
					READY: "5",
					HOLIDAY: "6",
					EXCEED: "7",
					AUTO_PASS: "9",
					AUTO_REJECT: "10"
				}),
				Y = (H = {}, Object(g["a"])(H, X.PENDING, {
					name: "待审批",
					requestStatus: "申请提交成功",
					cls: "font-primary",
					approveStatus: "待审批"
				}), Object(g["a"])(H, X.PROCESSING, {
					name: "审批通过",
					requestStatus: "审批已通过",
					cls: "font-success",
					approveStatus: "批准"
				}), Object(g["a"])(H, X.REJECT, {
					name: "已驳回",
					requestStatus: "审批已驳回",
					cls: "font-error",
					approveStatus: "驳回"
				}), Object(g["a"])(H, X.COMPLETE, {
					name: "已完成",
					requestStatus: "审批已通过",
					cls: "font-light",
					approveStatus: "批准"
				}), Object(g["a"])(H, X.READY, {
					name: "即将休假",
					requestStatus: "即将休假",
					cls: "font-warning",
					approveStatus: "即将休假"
				}), Object(g["a"])(H, X.HOLIDAY, {
					name: "正在休假中",
					requestStatus: "正在休假中",
					cls: "font-success",
					approveStatus: "正在休假中"
				}), Object(g["a"])(H, X.EXCEED, {
					name: "销假逾期",
					requestStatus: "销假逾期",
					cls: "font-error",
					approveStatus: "销假逾期"
				}), Object(g["a"])(H, X.AUTO_PASS, {
					name: "审批通过",
					requestStatus: "审批已通过",
					cls: "font-success",
					approveStatus: "批准"
				}), Object(g["a"])(H, X.AUTO_REJECT, {
					name: "逾期自动驳回",
					requestStatus: "审批已驳回",
					cls: "font-error",
					approveStatus: "驳回"
				}), H),
				W = function(t) {
					return Y[t] && Y[t].name || ""
				},
				V = function(t) {
					return Y[t] && Y[t].cls || ""
				},
				Q = {
					TODOS: "1",
					PROCESSING: "2",
					DONE: "3"
				},
				Z = (Q.TODOS, Q.PROCESSING, Q.DONE, {
					props: {
						itemData: {
							type: Object,
							default: function() {
								return {}
							}
						}
					},
					computed: {
						duration: function() {
							var t = this.itemData,
								e = t.startTime,
								a = t.endTime,
								i = t.leaveTime;
							return "".concat(e, " 至 ").concat(a, "（共").concat(i, "）")
						},
						actEndTime: function() {
							var t = this.itemData,
								e = t.startTime,
								a = t.actEndTime,
								i = t.actEndTimeDesc;
							return "" === i ? "0天  休假未开始已提前结束或提前销假" : "".concat(e, " ~ ").concat(a,
								"（共").concat(i, "）")
						},
						showExtra: function() {
							var t = this.itemData,
								e = t.outStatus,
								a = t.gender;
							return e && a === J.FEMALE
						},
						statusCls: function() {
							var t = V(this.itemData.status);
							return this.itemData.approveDelay ? "status-over" : t
						},
						visExt: function() {
							return "1" === this.itemData.isExtend && "1" === this.auditType && this
								.itemData.status !== X.COMPLETE && this.itemData.status !== X.EXCEED
						},
						statusName: function() {
							var t, e = W(this.itemData.status),
								a = null !== (t = this.itemData) && void 0 !== t && t.approveDelay ?
								e += "（逾期）" : "";
							return "".concat(e).concat(a)
						},
						visStatusName: function() {
							return this.visExt ? "1" === this.itemData.status : !this.itemData
								.showPush
						}
					}
				}),
				tt = Z,
				et = a("2877"),
				at = Object(et["a"])(tt, U, G, !1, null, null, null),
				it = at.exports,
				rt = a("cdea"),
				nt = {
					components: {
						BusHomeItem: it,
						CatList: q,
						CatTip: rt["a"]
					},
					inheritAttrs: !1,
					props: {
						tabType: {
							type: String,
							default: "leave-record"
						},
						tipConfig: {
							type: Object,
							default: function() {
								return {}
							}
						},
						needApproval: {
							type: Number,
							default: 1
						}
					},
					data: function() {
						return {
							totalSize: null,
							scrollTop: null,
							scrollDom: null
						}
					},
					methods: {
						loadMore: function() {
							this.$refs.list && this.$refs.list.next()
						},
						getTotal: function(t) {
							this.totalSize = t || 0, this.$emit("on-total", this.totalSize, this
								.tabType)
						},
						toDetail: function(t) {
							this.$emit("item-click", this.tabType, t)
						},
						dataHook: function(t) {
							return t || []
						}
					}
				},
				st = nt,
				ot = (a("e83e"), Object(et["a"])(st, f, p, !1, null, null, null)),
				lt = ot.exports,
				ct = a("ac37"),
				ut = {
					components: {
						CatButton: l["a"],
						Tab: o["a"],
						Tabs: s["a"],
						BusRecordList: lt
					},
					data: function() {
						return {
							getLeaveList: ct["i"],
							params: {},
							errorText: "暂无请假记录",
							finishedText: "没有更多了",
							allowLeave: !1,
							whyParams: {},
							totalSize: null,
							loading: !0,
							active: null,
							localActive: null,
							scrollTop: null,
							scrollDom: null
						}
					},
					computed: {
						tabsList: function() {
							return [{
								title: "请假记录",
								key: "leave-record",
								ref: "leaveRecord",
								tipConfig: this.whyParams,
								apiMethod: ct["i"],
								needApproval: 1,
								params: {
									needApproval: 1
								},
								errorText: "暂无请假记录",
								finishedText: "没有更多了"
							}, {
								title: "无需审批记录",
								key: "no-approval",
								ref: "noApproval",
								tipConfig: this.whyParams,
								apiMethod: ct["i"],
								needApproval: 0,
								params: {
									needApproval: 0
								},
								errorText: "暂无请假记录",
								finishedText: "没有更多了"
							}]
						},
						uaIsCpadaily: function() {
							return Object(d["c"])()
						}
					},
					activated: function() {
						this.initPage(), this.changeTab(this.localActive || 0), sessionStorage
							.uaIsCpadaily = this.uaIsCpadaily
					},
					deactivated: function() {
						this.localActive = this.active
					},
					mounted: function() {
						var t = this;
						this.$EventBus.$on("refresh-list", (function() {
							t.initPage(), t.changeTab(t.localActive || 0)
						}))
					},
					methods: {
						changeTab: function(t) {
							var e = this;
							return Object(n["a"])(regeneratorRuntime.mark((function a() {
								var i, r, n, s, o, l, c, u, d, h, f, p, m, g;
								return regeneratorRuntime.wrap((function(a) {
									while (1) switch (a.prev = a.next) {
										case 0:
											return l = e.tabsList[t]
												.ref, null === (i = e
													.$refs) ||
												void 0 === i || null ===
												(r = i[l]) || void 0 ===
												r || null === (n = r[
												0]) || void 0 === n ||
												null === (s = n
												.$refs) || void 0 ===
												s || null === (o = s
													.list) || void 0 ===
												o || o.reload(), a
												.next = 4, e
											.$nextTick();
										case 4:
											e.scrollDom =
												"leaveRecord" === l ?
												null === (c = e
												.$refs) || void 0 ===
												c || null === (u = c
													.leaveRecord) ||
												void 0 === u || null ===
												(d = u[0]) || void 0 ===
												d || null === (h = d
													.$refs) ||
												void 0 === h ? void 0 :
												h.scrollDom : null === (
													f = e.$refs) ||
												void 0 === f || null ===
												(p = f.noApproval) ||
												void 0 === p || null ===
												(m = p[0]) || void 0 ===
												m || null === (g = m
													.$refs) ||
												void 0 === g ? void 0 :
												g.scrollDom, e.scrollDom
												.addEventListener(
													"scroll", e
													.handleScroll);
										case 6:
										case "end":
											return a.stop()
									}
								}), a)
							})))()
						},
						handleScroll: function() {
							this.scrollTop = this.scrollDom && this.scrollDom.scrollTop
						},
						initPage: function() {
							var t = this;
							return Object(n["a"])(regeneratorRuntime.mark((function e() {
								var a, i;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return Object(u["e"])(), e
												.next = 3, Object(ct[
													"c"])({
													type: 1
												});
										case 3:
											a = e.sent, i = a.data, t
												.loading = !1, Object(u[
													"b"])(), t
												.allowLeave = 1 === +(
													null === i ||
													void 0 === i ?
													void 0 : i
													.allowLeave), t
												.whyParams = i || {};
										case 9:
										case "end":
											return e.stop()
									}
								}), e)
							})))()
						},
						toDetail: function(t, e) {
							"leave-record" === t ? this.$router.push("/detail/".concat(e.id, "/1")) :
								this.$router.push("/detail/".concat(e.id, "/0"))
						},
						toCreate: function() {
							var t = this;
							return Object(n["a"])(regeneratorRuntime.mark((function e() {
								var a, i, r, n;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, Object(
												ct["d"])({}, {
												validator: function(
													t) {
													return t
														.code &&
														(0 ===
															+
															t
															.code ||
															2210070011 ===
															+
															t
															.code ||
															2210070013 ===
															+
															t
															.code
															)
												}
											});
										case 2:
											if (a = e.sent, i = a.code,
												2210070011 !== +i) {
												e.next = 12;
												break
											}
											return e.next = 7, Object(h[
												"a"])({
												className: "changeTitle",
												title: "不可请假",
												message: '<div>当前已存在<span class="font-error">正在休假中或仍未审批完 </span>的请假记录，无法请假</div>',
												confirmButtonText: "知道了",
												showCancelButton:
													!1
											});
										case 7:
											if (r = e.sent, !r) {
												e.next = 10;
												break
											}
											return e.abrupt("return");
										case 10:
											e.next = 24;
											break;
										case 12:
											if (2210070013 !== +i) {
												e.next = 20;
												break
											}
											return e.next = 15, Object(
												h["a"])({
												className: "changeTitle",
												title: "不可请假",
												message: "<div>您在请假黑名单中，无法请假，如有疑问，请联系分管您的老师。</div>",
												confirmButtonText: "知道了",
												showCancelButton:
													!1
											});
										case 15:
											if (n = e.sent, !n) {
												e.next = 18;
												break
											}
											return e.abrupt("return");
										case 18:
											e.next = 24;
											break;
										case 20:
											if (0 !== +i) {
												e.next = 24;
												break
											}
											if (!t.allowLeave) {
												e.next = 24;
												break
											}
											return Object(c["b"])(
													"你有假期还未完成，不能重复请假"),
												e.abrupt("return");
										case 24:
											t.$router.push("/create");
										case 25:
										case "end":
											return e.stop()
									}
								}), e)
							})))()
						}
					}
				},
				dt = ut,
				ht = (a("9540"), Object(et["a"])(dt, i, r, !1, null, null, null)),
				ft = ht.exports
		},
		b406: function(t, e, a) {
			t.exports = {
				"error-light": "#f48c71",
				primary: "#39f",
				success: "#0c6",
				warning: "#f90",
				error: "#f40",
				other: "#db3fd5",
				"text-dark": "#464c5b",
				"text-normal": "#657180",
				"text-light": "#9ea7b4",
				disabled: "#c3cbd6",
				border: "#d7dde4",
				divider: "#e3e8ee",
				bg: "#f5f7f9",
				white: "#fff",
				"school-task-pink": "linear-gradient(-54.6563228deg,#ff615e,#ff615e 0,#ff9895 99%,#ff9895)",
				"loop-task-green": "#75d8a6",
				"tag-brown": "#c2a366",
				"disabled-light": "#f7f7f7",
				"school-task-primary": "linear-gradient(134deg,#61affe,#61affe 2%,#2872f9 100%,#2872f9 0)",
				"success-light": "rgba(0,204,102,.1)",
				"warning-light": "rgba(255,153,0,.1)",
				"primary-light": "rgba(51,153,255,.1)",
				"safe-area-inset-bottom": "9.06667vw"
			}
		},
		c0c2: function(t, e, a) {},
		e83e: function(t, e, a) {
			"use strict";
			var i = a("3614"),
				r = a.n(i);
			r.a
		}
	}
]);
//# sourceMappingURL=page-home.33754602.js.map
