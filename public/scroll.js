!(function (t, e) {
	"object" == typeof exports && "object" == typeof module
		? (module.exports = e(
				require("React"),
				require("ReactSpring"),
				require("PropTypes")
		  ))
		: "function" == typeof define && define.amd
		? define(["React", "ReactSpring", "PropTypes"], e)
		: "object" == typeof exports    
		? (exports.ReactSkroll = e(
				require("React"),
				require("ReactSpring"),
				require("PropTypes")
		  ))
		: (t.ReactSkroll = e(t.React, t.ReactSpring, t.PropTypes))
})(window, function (t, e, n) {
	return (function (t) {
		var e = {}
		function n(o) {
			if (e[o]) return e[o].exports
			var r = (e[o] = { i: o, l: !1, exports: {} })
			return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
		}
		return (
			(n.m = t),
			(n.c = e),
			(n.d = function (t, e, o) {
				n.o(t, e) ||
					Object.defineProperty(t, e, { enumerable: !0, get: o })
			}),
			(n.r = function (t) {
				"undefined" != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(t, Symbol.toStringTag, {
						value: "Module",
					}),
					Object.defineProperty(t, "__esModule", { value: !0 })
			}),
			(n.t = function (t, e) {
				if ((1 & e && (t = n(t)), 8 & e)) return t
				if (4 & e && "object" == typeof t && t && t.__esModule) return t
				var o = Object.create(null)
				if (
					(n.r(o),
					Object.defineProperty(o, "default", {
						enumerable: !0,
						value: t,
					}),
					2 & e && "string" != typeof t)
				)
					for (var r in t)
						n.d(
							o,
							r,
							function (e) {
								return t[e]
							}.bind(null, r)
						)
				return o
			}),
			(n.n = function (t) {
				var e =
					t && t.__esModule
						? function () {
								return t.default
						  }
						: function () {
								return t
						  }
				return n.d(e, "a", e), e
			}),
			(n.o = function (t, e) {
				return Object.prototype.hasOwnProperty.call(t, e)
			}),
			(n.p = ""),
			n((n.s = 12))
		)
	})([
		function (t, e, n) {
			var o = n(9),
				r = n(21)
			t.exports = { throttle: o, debounce: r }
		},
		function (e, n) {
			e.exports = t
		},
		function (t, e, n) {
			"use strict"
			e.a = {
				position: 0,
				positionRatio: 0,
				start: 0,
				end: 0,
				viewHeight: 0,
				scrollHeight: 0,
				ready: !1,
				onStart: !0,
				onMiddle: !1,
				onEnd: !1,
				children: [],
				originalPosition: null,
				changedPosition: null,
				timeStamp: null,
				scrolling: !1,
				wheeling: !1,
				touching: !1,
				moving: !1,
				resting: !0,
				touches: [],
				deltaY: 0,
			}
		},
		function (t, e, n) {
			"use strict"
			function o(t) {
				var e = t.scrollTop,
					n = t.scrollHeight,
					o = t.offsetHeight,
					r = (t.children, o),
					i = n - r,
					c = e <= 0,
					l = e >= i,
					s = !c && !l
				return {
					position: e,
					positionRatio: e / i,
					positionRelativeRatio: Math.abs(0 - e / o),
					start: 0,
					end: i,
					viewHeight: r,
					scrollHeight: n,
					onStart: c,
					onMiddle: s,
					onEnd: l,
				}
			}
			n.d(e, "a", function () {
				return o
			})
		},
		function (t, e, n) {
			"use strict"
			function o(t) {
				for (
					var e = t.children, n = t.scrollTop, o = [], r = 0, i = 0;
					i < e.length;
					i++
				) {
					var c = e[i],
						l = c.offsetHeight,
						s = (c.attributes, l),
						a = r + s,
						u = r - n,
						f = u / l,
						h = f <= -1 ? 1 : f >= 1 ? 1 : Math.abs(f % 1),
						d = f <= 0.5 && f >= -0.5,
						p = u === n,
						v = d
					o.push({
						position: u,
						positionRatio: f,
						positionRatioRemainer: h,
						start: r,
						end: a,
						viewHeight: s,
						onView: d,
						active: v,
						onFrame: p,
					}),
						(r += l)
				}
				return { children: o }
			}
			n.d(e, "a", function () {
				return o
			})
		},
		function (t, n) {
			t.exports = e
		},
		function (t, e, n) {
			"use strict"
			n.d(e, "a", function () {
				return x
			})
			var o = n(1),
				r = n.n(o),
				i = n(5),
				c = (n(14), n(10)),
				l = n.n(c),
				s = n(0),
				a = n(11),
				u = n(2),
				f = n(3),
				h = n(4)
			function d(t, e) {
				if (null == t) return {}
				var n,
					o,
					r = (function (t, e) {
						if (null == t) return {}
						var n,
							o,
							r = {},
							i = Object.keys(t)
						for (o = 0; o < i.length; o++)
							(n = i[o]), e.indexOf(n) >= 0 || (r[n] = t[n])
						return r
					})(t, e)
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(t)
					for (o = 0; o < i.length; o++)
						(n = i[o]),
							e.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									t,
									n
								) &&
									(r[n] = t[n]))
				}
				return r
			}
			function p() {
				return (p =
					Object.assign ||
					function (t) {
						for (var e = 1; e < arguments.length; e++) {
							var n = arguments[e]
							for (var o in n)
								Object.prototype.hasOwnProperty.call(n, o) &&
									(t[o] = n[o])
						}
						return t
					}).apply(this, arguments)
			}
			function v(t) {
				return (v =
					"function" == typeof Symbol &&
					"symbol" == typeof Symbol.iterator
						? function (t) {
								return typeof t
						  }
						: function (t) {
								return t &&
									"function" == typeof Symbol &&
									t.constructor === Symbol &&
									t !== Symbol.prototype
									? "symbol"
									: typeof t
						  })(t)
			}
			function b(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {},
						o = Object.keys(n)
					"function" == typeof Object.getOwnPropertySymbols &&
						(o = o.concat(
							Object.getOwnPropertySymbols(n).filter(function (
								t
							) {
								return Object.getOwnPropertyDescriptor(n, t)
									.enumerable
							})
						)),
						o.forEach(function (e) {
							E(t, e, n[e])
						})
				}
				return t
			}
			function y(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}
			function g(t, e) {
				for (var n = 0; n < e.length; n++) {
					var o = e[n]
					;(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						"value" in o && (o.writable = !0),
						Object.defineProperty(t, o.key, o)
				}
			}
			function S(t, e, n) {
				return e && g(t.prototype, e), n && g(t, n), t
			}
			function m(t, e) {
				return !e || ("object" !== v(e) && "function" != typeof e)
					? T(t)
					: e
			}
			function _(t) {
				return (_ = Object.setPrototypeOf
					? Object.getPrototypeOf
					: function (t) {
							return t.__proto__ || Object.getPrototypeOf(t)
					  })(t)
			}
			function O(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError(
						"Super expression must either be null or a function"
					)
				;(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, writable: !0, configurable: !0 },
				})),
					e && w(t, e)
			}
			function w(t, e) {
				return (w =
					Object.setPrototypeOf ||
					function (t, e) {
						return (t.__proto__ = e), t
					})(t, e)
			}
			function T(t) {
				if (void 0 === t)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					)
				return t
			}
			function E(t, e, n) {
				return (
					e in t
						? Object.defineProperty(t, e, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (t[e] = n),
					t
				)
			}
			var j = i.Globals.defaultElement,
				x = (function (t) {
					function e(t) {
						var n
						return (
							y(this, e),
							E(
								T(T((n = m(this, _(e).call(this, t))))),
								"createRef",
								function (t) {
									;(n.target = t),
										(n.resizeObserver = new a.a(function (
											t,
											e
										) {
											n.state.ready
												? n.handleResize()
												: n.setStateScroll({
														ready: !0,
												  })
										})),
										n.resizeObserver.observe(n.target),
										n.props.scrollRef(n.connection)
								}
							),
							E(T(T(n)), "deleteRef", function () {
								n.target &&
									n.resizeObserver.disconnect(n.target),
									n.setStateScroll({ ready: !1 })
							}),
							E(T(T(n)), "setStateScroll", function (t) {
								var e = n.props.onScrollChange,
									o = b(
										{},
										n.state.scroll,
										Object(f.a)(n.target),
										Object(h.a)(n.target),
										t
									)
								n.setState({ scroll: o }), e && e(o)
							}),
							E(T(T(n)), "setStateScrollStart", function (t) {
								var e = n.state.scroll.position
								n.setStateScroll(
									b(
										{
											originalPosition: e,
											timeStamp: Date.now(),
										},
										t
									)
								)
							}),
							E(T(T(n)), "setStateScrollMove", function (t) {
								n.setStateScroll(
									b({ moving: !0, resting: !1 }, t)
								)
							}),
							E(T(T(n)), "setStateScrollRest", function (t) {
								n.setStateScroll(
									b({ moving: !1, resting: !0 }, t)
								)
							}),
							E(T(T(n)), "setStateScrollEnd", function (t) {
								n.setStateScroll(
									b(
										{
											originalPosition: null,
											changedPosition: null,
											timeStamp: null,
										},
										t
									)
								)
							}),
							E(T(T(n)), "findChildOnView", function () {
								return n.state.scroll.children.find(function (
									t
								) {
									return t.onView
								})
							}),
							E(T(T(n)), "findChildIndexOnView", function () {
								return n.state.scroll.children.findIndex(
									function (t) {
										return t.onView
									}
								)
							}),
							E(T(T(n)), "scrollToPosition", function (t) {
								n.controller.update({
									scroll: t,
									onFrame: function (t) {
										var e = t.scroll
										return (n.target.scrollTop = e)
									},
								}),
									console.log(n.target)
							}),
							E(T(T(n)), "scrollToByIndex", function (t) {
								var e = n.state.scroll.children
								n.scrollToPosition(e[t].start)
							}),
							E(T(T(n)), "scrollToTop", function () {
								var t = n.state.scroll.start
								n.scrollToPosition(t)
							}),
							E(T(T(n)), "scrollToBottom", function () {
								var t = n.state.scroll.end
								n.scrollToPosition(t)
							}),
							E(T(T(n)), "previousOfIndex", function () {
								var t =
									arguments.length > 0 &&
									void 0 !== arguments[0]
										? arguments[0]
										: n.findChildIndexOnView()
								return (
									arguments.length > 1 &&
									void 0 !== arguments[1]
										? arguments[1]
										: n.state.scroll.children
								)[t > 0 ? t - 1 : t]
							}),
							E(T(T(n)), "nextOfIndex", function () {
								var t =
										arguments.length > 0 &&
										void 0 !== arguments[0]
											? arguments[0]
											: n.findChildIndexOnView(),
									e =
										arguments.length > 1 &&
										void 0 !== arguments[1]
											? arguments[1]
											: n.state.scroll.children
								return e[t < e.length - 1 ? t + 1 : t]
							}),
							E(T(T(n)), "scrollToPrev", function () {
								var t = n.previousOfIndex().start
								n.scrollToPosition(t)
							}),
							E(T(T(n)), "scrollToNext", function () {
								var t = n.nextOfIndex().start
								n.scrollToPosition(t)
							}),
							E(T(T(n)), "scrollToElement", function (t, e) {
								var o = t.scrollTop
								n.scrollToPosition(o)
							}),
							E(T(T(n)), "scrollToActive", function () {
								var t = n.findChildOnView().start
								n.scrollToPosition(t)
							}),
							E(T(T(n)), "handleScroll", function () {
								n.handleScrollStart(),
									n.handleScrollMove(),
									n.handleScrollEnd()
							}),
							E(T(T(n)), "handleScrollStart", function () {
								n.setStateScrollMove()
							}),
							E(T(T(n)), "handleScrollMove", function () {
								n.setStateScroll()
							}),
							E(T(T(n)), "handleScrollEnd", function () {
								n.setStateScrollRest()
							}),
							E(T(T(n)), "handleResize", function () {
								n.handleResizeStart(),
									n.handleResizeMove(),
									n.handleResizeEnd()
							}),
							E(T(T(n)), "handleResizeStart", function () {
								n.setStateScrollMove()
							}),
							E(T(T(n)), "handleResizeMove", function () {
								n.handleScroll()
							}),
							E(T(T(n)), "handleResizeEnd", function () {
								n.props.autoFrame && n.scrollToActive()
							}),
							E(T(T(n)), "handleWheel", function (t) {
								n.props.autoScroll && t.preventDefault(),
									n.handleWheelStart(t),
									n.handleWheelMove(t),
									n.handleWheelEnd(t)
							}),
							E(T(T(n)), "handleWheelStart", function (t) {
								var e = n.props.autoScroll,
									o = n.state.scroll.changedPosition
								if (
									(n.setStateScrollStart({
										wheeling: !0,
										changedPosition: e ? o : null,
									}),
									e)
								) {
									var r = t.deltaY > 0
									t.deltaY < 0 && n.scrollToPrevDebounced(),
										r && n.scrollToNextDebounced()
								}
							}),
							E(T(T(n)), "handleWheelMove", function (t) {
								if (n.props.autoScroll) {
									var e = n.state.deltaY,
										o = t.deltaY
									if (Math.abs(o) > Math.abs(e)) {
										var r = o > 0
										o < 0 && n.scrollToPrevDebounced(),
											r && n.scrollToNextDebounced()
									}
								}
								n.setState({ deltaY: t.deltaY })
							}),
							E(T(T(n)), "handleWheelEnd", function (t) {
								var e = n.state.scroll.autoFrame
								n.setStateScrollEnd({
									wheeling: !1,
									deltaY: null,
								}),
									e && n.scrollToActive()
							}),
							E(T(T(n)), "handleTouchStart", function (t) {
								n.setStateScrollStart({
									touching: !0,
									touches: t.touches,
								})
							}),
							E(T(T(n)), "handleTouchMove", function (t) {
								var e = n.state.scroll,
									o = e.touches,
									r =
										e.originalPosition -
										(t.changedTouches[0].clientY -
											o[0].clientY)
								n.scrollToPosition(r)
							}),
							E(T(T(n)), "handleTouchEnd", function (t) {
								var e = n.state.scroll,
									o = e.timeStamp,
									r = e.touches
								if (Date.now() - o < 200) {
									var i =
										t.changedTouches[0].clientY <
										r[0].clientY
									t.changedTouches[0].clientY >
										r[0].clientY && n.scrollToPrev(),
										i && n.scrollToNext()
								} else n.scrollToActive()
								n.setStateScroll({ touching: !1 })
							}),
							(n.state = { scroll: u.a }),
							(n.handleScrollStart = Object(s.debounce)(
								500,
								!0,
								n.handleScrollStart
							)),
							(n.handleResizeMove = Object(s.throttle)(
								50,
								n.handleResizeMove
							)),
							(n.handleScrollEnd = Object(s.debounce)(
								500,
								n.handleScrollEnd
							)),
							(n.handleWheelStart = Object(s.debounce)(
								100,
								!0,
								n.handleWheelStart
							)),
							(n.handleWheelEnd = Object(s.debounce)(
								100,
								n.handleWheelEnd
							)),
							(n.handleResizeStart = Object(s.debounce)(
								250,
								!0,
								n.handleResizeStart
							)),
							(n.handleResizeEnd = Object(s.debounce)(
								250,
								n.handleResizeEnd
							)),
							(n.scrollToPrevDebounced = Object(s.debounce)(
								250,
								!0,
								n.scrollToPrev
							)),
							(n.scrollToNextDebounced = Object(s.debounce)(
								250,
								!0,
								n.scrollToNext
							)),
							(n.controller = new i.Controller({ scroll: 0 })),
							n
						)
					}
					return (
						O(e, o["Component"]),
						S(e, [
							{
								key: "componentWillUnmount",
								value: function () {
									this.deleteRef()
								},
							},
							{
								key: "render",
								value: function () {
									var t = this.props,
										e = t.children,
										n =
											(t.autoFrame,
											t.autoScroll,
											t.ScrollerNavigation),
										o = this.connection
									return r.a.createElement(
										R,
										null,
										r.a.createElement(n, { scroll: o }),
										r.a.createElement(
											M,
											{
												scrollRef: this.createRef,
												scroll: this.state.scroll,
												onScroll: this.handleScroll,
												onWheel: this.handleWheel,
												onTouchStart:
													this.handleTouchStart,
												onTouchMove:
													this.handleTouchMove,
												onTouchEnd: this.handleTouchEnd,
											},
											l()(e) ? e(o) : e
										)
									)
								},
							},
							{
								key: "connection",
								get: function () {
									return b({}, this.state.scroll, {
										target: this.target,
										autoFrame: this.props.autoFrame,
										autoScroll: this.props.autoScroll,
										scrollToPosition: this.scrollToPosition,
										scrollToByIndex: this.scrollToByIndex,
										scrollToTop: this.scrollToTop,
										scrollToBottom: this.scrollToBottom,
										scrollToPrev: this.scrollToPrev,
										scrollToNext: this.scrollToNext,
										scrollToElement: this.scrollToElement,
										scrollToActive: this.scrollToActive,
									})
								},
							},
						]),
						e
					)
				})()
			E(x, "defaultProps", {
				autoFrame: !1,
				autoScroll: !1,
				ScrollerNavigation: function () {
					return null
				},
			})
			var P = { height: "100%", width: "100%" },
				R = (function (t) {
					function e() {
						return y(this, e), m(this, _(e).apply(this, arguments))
					}
					return (
						O(e, o["PureComponent"]),
						S(e, [
							{
								key: "render",
								value: function () {
									return r.a.createElement(
										j,
										p({ style: P }, this.props)
									)
								},
							},
						]),
						e
					)
				})(),
				M = (function (t) {
					function e() {
						return y(this, e), m(this, _(e).apply(this, arguments))
					}
					return (
						O(e, o["PureComponent"]),
						S(e, [
							{
								key: "render",
								value: function () {
									var t = this.props,
										e = t.scroll,
										n = t.scrollRef,
										o = (t.autoFrame, t.autoScroll),
										i = d(t, [
											"scroll",
											"scrollRef",
											"autoFrame",
											"autoScroll",
										]),
										c = {
											height: "100%",
											width: "100%",
											overflowY:
												o || e.touching
													? "hidden"
													: "auto",
										}
									return r.a.createElement(
										j,
										p({ ref: n, style: c }, i)
									)
								},
							},
						]),
						e
					)
				})()
		},
		function (t, e, n) {
			var o = n(16).Symbol
			t.exports = o
		},
		function (t, e) {
			var n
			n = (function () {
				return this
			})()
			try {
				n = n || new Function("return this")()
			} catch (t) {
				"object" == typeof window && (n = window)
			}
			t.exports = n
		},
		function (t, e) {
			t.exports = function (t, e, n, o) {
				var r,
					i = 0
				return (
					"boolean" != typeof e && ((o = n), (n = e), (e = void 0)),
					function () {
						var c = this,
							l = Number(new Date()) - i,
							s = arguments
						function a() {
							;(i = Number(new Date())), n.apply(c, s)
						}
						o && !r && a(),
							r && clearTimeout(r),
							void 0 === o && l > t
								? a()
								: !0 !== e &&
								  (r = setTimeout(
										o
											? function () {
													r = void 0
											  }
											: a,
										void 0 === o ? t - l : t
								  ))
					}
				)
			}
		},
		function (t, e, n) {
			var o = n(15),
				r = n(20),
				i = "[object AsyncFunction]",
				c = "[object Function]",
				l = "[object GeneratorFunction]",
				s = "[object Proxy]"
			t.exports = function (t) {
				if (!r(t)) return !1
				var e = o(t)
				return e == c || e == l || e == i || e == s
			}
		},
		function (t, e, n) {
			"use strict"
			;(function (t) {
				var n = (function () {
						if ("undefined" != typeof Map) return Map
						function t(t, e) {
							var n = -1
							return (
								t.some(function (t, o) {
									return t[0] === e && ((n = o), !0)
								}),
								n
							)
						}
						return (function () {
							function e() {
								this.__entries__ = []
							}
							return (
								Object.defineProperty(e.prototype, "size", {
									get: function () {
										return this.__entries__.length
									},
									enumerable: !0,
									configurable: !0,
								}),
								(e.prototype.get = function (e) {
									var n = t(this.__entries__, e),
										o = this.__entries__[n]
									return o && o[1]
								}),
								(e.prototype.set = function (e, n) {
									var o = t(this.__entries__, e)
									~o
										? (this.__entries__[o][1] = n)
										: this.__entries__.push([e, n])
								}),
								(e.prototype.delete = function (e) {
									var n = this.__entries__,
										o = t(n, e)
									~o && n.splice(o, 1)
								}),
								(e.prototype.has = function (e) {
									return !!~t(this.__entries__, e)
								}),
								(e.prototype.clear = function () {
									this.__entries__.splice(0)
								}),
								(e.prototype.forEach = function (t, e) {
									void 0 === e && (e = null)
									for (
										var n = 0, o = this.__entries__;
										n < o.length;
										n++
									) {
										var r = o[n]
										t.call(e, r[1], r[0])
									}
								}),
								e
							)
						})()
					})(),
					o =
						"undefined" != typeof window &&
						"undefined" != typeof document &&
						window.document === document,
					r =
						void 0 !== t && t.Math === Math
							? t
							: "undefined" != typeof self && self.Math === Math
							? self
							: "undefined" != typeof window &&
							  window.Math === Math
							? window
							: Function("return this")(),
					i =
						"function" == typeof requestAnimationFrame
							? requestAnimationFrame.bind(r)
							: function (t) {
									return setTimeout(function () {
										return t(Date.now())
									}, 1e3 / 60)
							  },
					c = 2
				var l = 20,
					s = [
						"top",
						"right",
						"bottom",
						"left",
						"width",
						"height",
						"size",
						"weight",
					],
					a = "undefined" != typeof MutationObserver,
					u = (function () {
						function t() {
							;(this.connected_ = !1),
								(this.mutationEventsAdded_ = !1),
								(this.mutationsObserver_ = null),
								(this.observers_ = []),
								(this.onTransitionEnd_ =
									this.onTransitionEnd_.bind(this)),
								(this.refresh = (function (t, e) {
									var n = !1,
										o = !1,
										r = 0
									function l() {
										n && ((n = !1), t()), o && a()
									}
									function s() {
										i(l)
									}
									function a() {
										var t = Date.now()
										if (n) {
											if (t - r < c) return
											o = !0
										} else
											(n = !0), (o = !1), setTimeout(s, e)
										r = t
									}
									return a
								})(this.refresh.bind(this), l))
						}
						return (
							(t.prototype.addObserver = function (t) {
								~this.observers_.indexOf(t) ||
									this.observers_.push(t),
									this.connected_ || this.connect_()
							}),
							(t.prototype.removeObserver = function (t) {
								var e = this.observers_,
									n = e.indexOf(t)
								~n && e.splice(n, 1),
									!e.length &&
										this.connected_ &&
										this.disconnect_()
							}),
							(t.prototype.refresh = function () {
								this.updateObservers_() && this.refresh()
							}),
							(t.prototype.updateObservers_ = function () {
								var t = this.observers_.filter(function (t) {
									return t.gatherActive(), t.hasActive()
								})
								return (
									t.forEach(function (t) {
										return t.broadcastActive()
									}),
									t.length > 0
								)
							}),
							(t.prototype.connect_ = function () {
								o &&
									!this.connected_ &&
									(document.addEventListener(
										"transitionend",
										this.onTransitionEnd_
									),
									window.addEventListener(
										"resize",
										this.refresh
									),
									a
										? ((this.mutationsObserver_ =
												new MutationObserver(
													this.refresh
												)),
										  this.mutationsObserver_.observe(
												document,
												{
													attributes: !0,
													childList: !0,
													characterData: !0,
													subtree: !0,
												}
										  ))
										: (document.addEventListener(
												"DOMSubtreeModified",
												this.refresh
										  ),
										  (this.mutationEventsAdded_ = !0)),
									(this.connected_ = !0))
							}),
							(t.prototype.disconnect_ = function () {
								o &&
									this.connected_ &&
									(document.removeEventListener(
										"transitionend",
										this.onTransitionEnd_
									),
									window.removeEventListener(
										"resize",
										this.refresh
									),
									this.mutationsObserver_ &&
										this.mutationsObserver_.disconnect(),
									this.mutationEventsAdded_ &&
										document.removeEventListener(
											"DOMSubtreeModified",
											this.refresh
										),
									(this.mutationsObserver_ = null),
									(this.mutationEventsAdded_ = !1),
									(this.connected_ = !1))
							}),
							(t.prototype.onTransitionEnd_ = function (t) {
								var e = t.propertyName,
									n = void 0 === e ? "" : e
								s.some(function (t) {
									return !!~n.indexOf(t)
								}) && this.refresh()
							}),
							(t.getInstance = function () {
								return (
									this.instance_ ||
										(this.instance_ = new t()),
									this.instance_
								)
							}),
							(t.instance_ = null),
							t
						)
					})(),
					f = function (t, e) {
						for (var n = 0, o = Object.keys(e); n < o.length; n++) {
							var r = o[n]
							Object.defineProperty(t, r, {
								value: e[r],
								enumerable: !1,
								writable: !1,
								configurable: !0,
							})
						}
						return t
					},
					h = function (t) {
						return (
							(t &&
								t.ownerDocument &&
								t.ownerDocument.defaultView) ||
							r
						)
					},
					d = S(0, 0, 0, 0)
				function p(t) {
					return parseFloat(t) || 0
				}
				function v(t) {
					for (var e = [], n = 1; n < arguments.length; n++)
						e[n - 1] = arguments[n]
					return e.reduce(function (e, n) {
						return e + p(t["border-" + n + "-width"])
					}, 0)
				}
				function b(t) {
					var e = t.clientWidth,
						n = t.clientHeight
					if (!e && !n) return d
					var o = h(t).getComputedStyle(t),
						r = (function (t) {
							for (
								var e = {},
									n = 0,
									o = ["top", "right", "bottom", "left"];
								n < o.length;
								n++
							) {
								var r = o[n],
									i = t["padding-" + r]
								e[r] = p(i)
							}
							return e
						})(o),
						i = r.left + r.right,
						c = r.top + r.bottom,
						l = p(o.width),
						s = p(o.height)
					if (
						("border-box" === o.boxSizing &&
							(Math.round(l + i) !== e &&
								(l -= v(o, "left", "right") + i),
							Math.round(s + c) !== n &&
								(s -= v(o, "top", "bottom") + c)),
						!(function (t) {
							return t === h(t).document.documentElement
						})(t))
					) {
						var a = Math.round(l + i) - e,
							u = Math.round(s + c) - n
						1 !== Math.abs(a) && (l -= a),
							1 !== Math.abs(u) && (s -= u)
					}
					return S(r.left, r.top, l, s)
				}
				var y =
					"undefined" != typeof SVGGraphicsElement
						? function (t) {
								return t instanceof h(t).SVGGraphicsElement
						  }
						: function (t) {
								return (
									t instanceof h(t).SVGElement &&
									"function" == typeof t.getBBox
								)
						  }
				function g(t) {
					return o
						? y(t)
							? (function (t) {
									var e = t.getBBox()
									return S(0, 0, e.width, e.height)
							  })(t)
							: b(t)
						: d
				}
				function S(t, e, n, o) {
					return { x: t, y: e, width: n, height: o }
				}
				var m = (function () {
						function t(t) {
							;(this.broadcastWidth = 0),
								(this.broadcastHeight = 0),
								(this.contentRect_ = S(0, 0, 0, 0)),
								(this.target = t)
						}
						return (
							(t.prototype.isActive = function () {
								var t = g(this.target)
								return (
									(this.contentRect_ = t),
									t.width !== this.broadcastWidth ||
										t.height !== this.broadcastHeight
								)
							}),
							(t.prototype.broadcastRect = function () {
								var t = this.contentRect_
								return (
									(this.broadcastWidth = t.width),
									(this.broadcastHeight = t.height),
									t
								)
							}),
							t
						)
					})(),
					_ = (function () {
						return function (t, e) {
							var n,
								o,
								r,
								i,
								c,
								l,
								s,
								a =
									((o = (n = e).x),
									(r = n.y),
									(i = n.width),
									(c = n.height),
									(l =
										"undefined" != typeof DOMRectReadOnly
											? DOMRectReadOnly
											: Object),
									(s = Object.create(l.prototype)),
									f(s, {
										x: o,
										y: r,
										width: i,
										height: c,
										top: r,
										right: o + i,
										bottom: c + r,
										left: o,
									}),
									s)
							f(this, { target: t, contentRect: a })
						}
					})(),
					O = (function () {
						function t(t, e, o) {
							if (
								((this.activeObservations_ = []),
								(this.observations_ = new n()),
								"function" != typeof t)
							)
								throw new TypeError(
									"The callback provided as parameter 1 is not a function."
								)
							;(this.callback_ = t),
								(this.controller_ = e),
								(this.callbackCtx_ = o)
						}
						return (
							(t.prototype.observe = function (t) {
								if (!arguments.length)
									throw new TypeError(
										"1 argument required, but only 0 present."
									)
								if (
									"undefined" != typeof Element &&
									Element instanceof Object
								) {
									if (!(t instanceof h(t).Element))
										throw new TypeError(
											'parameter 1 is not of type "Element".'
										)
									var e = this.observations_
									e.has(t) ||
										(e.set(t, new m(t)),
										this.controller_.addObserver(this),
										this.controller_.refresh())
								}
							}),
							(t.prototype.unobserve = function (t) {
								if (!arguments.length)
									throw new TypeError(
										"1 argument required, but only 0 present."
									)
								if (
									"undefined" != typeof Element &&
									Element instanceof Object
								) {
									if (!(t instanceof h(t).Element))
										throw new TypeError(
											'parameter 1 is not of type "Element".'
										)
									var e = this.observations_
									e.has(t) &&
										(e.delete(t),
										e.size ||
											this.controller_.removeObserver(
												this
											))
								}
							}),
							(t.prototype.disconnect = function () {
								this.clearActive(),
									this.observations_.clear(),
									this.controller_.removeObserver(this)
							}),
							(t.prototype.gatherActive = function () {
								var t = this
								this.clearActive(),
									this.observations_.forEach(function (e) {
										e.isActive() &&
											t.activeObservations_.push(e)
									})
							}),
							(t.prototype.broadcastActive = function () {
								if (this.hasActive()) {
									var t = this.callbackCtx_,
										e = this.activeObservations_.map(
											function (t) {
												return new _(
													t.target,
													t.broadcastRect()
												)
											}
										)
									this.callback_.call(t, e, t),
										this.clearActive()
								}
							}),
							(t.prototype.clearActive = function () {
								this.activeObservations_.splice(0)
							}),
							(t.prototype.hasActive = function () {
								return this.activeObservations_.length > 0
							}),
							t
						)
					})(),
					w = "undefined" != typeof WeakMap ? new WeakMap() : new n(),
					T = (function () {
						return function t(e) {
							if (!(this instanceof t))
								throw new TypeError(
									"Cannot call a class as a function."
								)
							if (!arguments.length)
								throw new TypeError(
									"1 argument required, but only 0 present."
								)
							var n = u.getInstance(),
								o = new O(e, n, this)
							w.set(this, o)
						}
					})()
				;["observe", "unobserve", "disconnect"].forEach(function (t) {
					T.prototype[t] = function () {
						var e
						return (e = w.get(this))[t].apply(e, arguments)
					}
				})
				var E = void 0 !== r.ResizeObserver ? r.ResizeObserver : T
				e.a = E
			}).call(this, n(8))
		},
		function (t, e, n) {
			"use strict"
			n.r(e),
				function (t) {
					var o = n(6)
					n.d(e, "Scroller", function () {
						return o.a
					})
					var r = n(2)
					n.d(e, "scrollInitalState", function () {
						return r.a
					})
					var i = n(3)
					n.d(e, "nodeToScrollState", function () {
						return i.a
					})
					var c = n(4)
					n.d(e, "nodeChildrenToScrollState", function () {
						return c.a
					}),
						(e.default = t.exports)
				}.call(this, n(13)(t))
		},
		function (t, e) {
			t.exports = function (t) {
				if (!t.webpackPolyfill) {
					var e = Object.create(t)
					e.children || (e.children = []),
						Object.defineProperty(e, "loaded", {
							enumerable: !0,
							get: function () {
								return e.l
							},
						}),
						Object.defineProperty(e, "id", {
							enumerable: !0,
							get: function () {
								return e.i
							},
						}),
						Object.defineProperty(e, "exports", { enumerable: !0 }),
						(e.webpackPolyfill = 1)
				}
				return e
			}
		},
		function (t, e) {
			t.exports = n
		},
		function (t, e, n) {
			var o = n(7),
				r = n(18),
				i = n(19),
				c = "[object Null]",
				l = "[object Undefined]",
				s = o ? o.toStringTag : void 0
			t.exports = function (t) {
				return null == t
					? void 0 === t
						? l
						: c
					: s && s in Object(t)
					? r(t)
					: i(t)
			}
		},
		function (t, e, n) {
			var o = n(17),
				r =
					"object" == typeof self &&
					self &&
					self.Object === Object &&
					self,
				i = o || r || Function("return this")()
			t.exports = i
		},
		function (t, e, n) {
			;(function (e) {
				var n = "object" == typeof e && e && e.Object === Object && e
				t.exports = n
			}).call(this, n(8))
		},
		function (t, e, n) {
			var o = n(7),
				r = Object.prototype,
				i = r.hasOwnProperty,
				c = r.toString,
				l = o ? o.toStringTag : void 0
			t.exports = function (t) {
				var e = i.call(t, l),
					n = t[l]
				try {
					t[l] = void 0
					var o = !0
				} catch (t) {}
				var r = c.call(t)
				return o && (e ? (t[l] = n) : delete t[l]), r
			}
		},
		function (t, e) {
			var n = Object.prototype.toString
			t.exports = function (t) {
				return n.call(t)
			}
		},
		function (t, e) {
			t.exports = function (t) {
				var e = typeof t
				return null != t && ("object" == e || "function" == e)
			}
		},
		function (t, e, n) {
			var o = n(9)
			t.exports = function (t, e, n) {
				return void 0 === n ? o(t, e, !1) : o(t, n, !1 !== e)
			}
		},
	])
})
