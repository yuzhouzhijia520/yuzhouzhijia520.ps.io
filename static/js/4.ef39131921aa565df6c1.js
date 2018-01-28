webpackJsonp([4],{

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(634)

var Component = __webpack_require__(197)(
  /* script */
  __webpack_require__(542),
  /* template */
  __webpack_require__(611),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_js_Star__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_js_Moon__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_js_Meteor__ = __webpack_require__(638);





/* harmony default export */ __webpack_exports__["default"] = ({
				data: function data() {
								return {
												ruleForm: {
																username: '',
																password: ''
												},
												rules: {
																username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
																password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
												}
								};
				},
				methods: {
								submitForm: function submitForm(formName) {
												var self = this;
												self.$refs[formName].validate(function (valid) {
																if (valid) {
																				localStorage.setItem('ms_username', self.ruleForm.username);
																				self.$router.push('/readme');
																} else {
																				console.log('error submit!!');
																				return false;
																}
												});
								}
				},
				mounted: function mounted() {
								var canvas = document.getElementById('canvas'),
								    ctx = canvas.getContext('2d'),
								    width = window.innerWidth,
								    height = window.innerHeight,
								    moon = new __WEBPACK_IMPORTED_MODULE_1__static_js_Moon__["a" /* default */](ctx, width, height),
								    stars = new __WEBPACK_IMPORTED_MODULE_0__static_js_Star__["a" /* default */](ctx, width, height, 200),
								    meteors = [],
								    count = 0;

								canvas.width = width;
								canvas.height = height;

								var meteorGenerator = function meteorGenerator() {
												var x = Math.random() * width + 800;
												meteors.push(new __WEBPACK_IMPORTED_MODULE_2__static_js_Meteor__["a" /* default */](ctx, x, height));

												setTimeout(function () {
																meteorGenerator();
												}, Math.random() * 2000);
								};

								var frame = function frame() {
												count++;
												count % 10 == 0 && stars.blink();
												moon.draw();
												stars.draw();

												meteors.forEach(function (meteor, index, arr) {
																if (meteor.flow()) {
																				meteor.draw();
																} else {
																				arr.splice(index, 1);
																}
												});
												requestAnimationFrame(frame);
								};
								meteorGenerator();
								frame();
				}
});

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(87)(undefined);
// imports


// module
exports.push([module.i, "#menu{height:100%;overflow:hidden;position:relative}.login-wrap{width:100%}.ms-title{width:100%;margin-top:-230px;text-align:center;font-size:30px}.ms-login,.ms-title{position:absolute;top:50%}.ms-login{left:50%;width:300px;height:160px;margin:-150px 0 0 -190px;padding:40px;border-radius:5px;background:#fff;opacity:.88}.login-btn{text-align:center}.login-btn button{width:100%;height:36px;background-image:linear-gradient(270deg,#1ed02c,#435bff)}", ""]);

// exports


/***/ }),

/***/ 611:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login-wrap",
    attrs: {
      "id": "menu"
    }
  }, [_c('canvas', {
    staticClass: "canvas",
    attrs: {
      "id": "canvas"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ms-title"
  }, [_vm._v("个人前端系统")]), _vm._v(" "), _c('div', {
    staticClass: "ms-login"
  }, [_c('el-form', {
    ref: "ruleForm",
    staticClass: "demo-ruleForm",
    attrs: {
      "model": _vm.ruleForm,
      "rules": _vm.rules,
      "label-width": "0px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "prop": "username"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "username"
    },
    model: {
      value: (_vm.ruleForm.username),
      callback: function($$v) {
        _vm.$set(_vm.ruleForm, "username", $$v)
      },
      expression: "ruleForm.username"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "password"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "password",
      "placeholder": "password"
    },
    nativeOn: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
        _vm.submitForm('ruleForm')
      }
    },
    model: {
      value: (_vm.ruleForm.password),
      callback: function($$v) {
        _vm.$set(_vm.ruleForm, "password", $$v)
      },
      expression: "ruleForm.password"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "login-btn"
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitForm('ruleForm')
      }
    }
  }, [_vm._v("LOGIN")])], 1), _vm._v(" "), _c('p', {
    staticStyle: {
      "font-size": "12px",
      "line-height": "30px",
      "color": "#999"
    }
  }, [_vm._v("温馨提示: 随意输入即可，未做校验！")])], 1)], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(570);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(196)("046db4d3", content, true);

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Meteor {
    constructor(ctx, x, h) {
        this.ctx = ctx
        this.x = x
        this.y = 0
        this.h = h
        this.vx = -(4 + Math.random() * 4)
        this.vy = -this.vx
        this.len = Math.random() * 300 + 500
    }

    flow() {
        //判定流星出界
        if (this.x < -this.len || this.y > this.h + this.len) {
            return false
        }
        this.x += this.vx
        this.y += this.vy
        return true
    }

    draw() {
        let ctx = this.ctx,
            //径向渐变，从流星头尾圆心，半径越大，透明度越高
            gra = ctx.createRadialGradient(
                this.x, this.y, 0, this.x, this.y, this.len)

        const PI = Math.PI
        gra.addColorStop(0, 'rgba(255,255,255,1)')
        gra.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.save()
        ctx.fillStyle = gra
        ctx.beginPath()
        //流星头，二分之一圆
        ctx.arc(this.x, this.y, 1, PI / 4, 5 * PI / 4)
        //绘制流星尾，三角形
        ctx.lineTo(this.x + this.len, this.y - this.len)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Meteor;



/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Moon {
	constructor(ctx, width, height) {
		this.ctx = ctx
		this.width = width
		this.height = height
	}

	draw() {
		let ctx = this.ctx,
			gradient = ctx.createRadialGradient(100, 100, 60, 200, 200, 600)
			//月亮
			// gradient.addColorStop(0, 'rgba(255,255,255,0.5)')
			// gradient.addColorStop(0.01, 'rgb(70,70,80)')
			// gradient.addColorStop(0.2, 'rgb(40,40,50)')
			gradient.addColorStop(0.4, 'rgb(20,20,30)')
			gradient.addColorStop(1, 'rgb(0,0,10)')
			ctx.save()
			ctx.fillStyle = gradient
			ctx.fillRect(0, 0, this.width, this.height)
			ctx.restore()
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Moon;


/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Stars {
	constructor(ctx, width, height, amount) {
		this.ctx = ctx
		this.width = width
		this.height = height
		this.stars = this.getStars(amount)
	}

	//返回一堆的小星星
	getStars(amount) {
		let stars = []
		while(amount--) {
			// console.log(amount)
			// 创建一个星星的坐标及大小数据描述JSON对象，添加到stars数组
			stars.push({
				x: Math.random()*this.width,
				y: Math.random()*this.height,
				r: Math.random()+0.2
			})
		}
		return stars
	}

	//画满天星
	draw() {
		let ctx = this.ctx
		ctx.save()   //保存canvas当前绘制，一般新绘制前调用
		ctx.fillStyle = 'white'
		//star 是从stars里的一颗star 这里是function的参数
		this.stars.forEach(star => {
			ctx.beginPath()  //开始绘制
			ctx.arc(star.x, star.y, star.r, 0, 2*Math.PI)  //画椭圆
			ctx.fill()  //填充色
		})
		ctx.restore() //再次保存
	}

	//星星没隔10帧闪一下
	blink() {
		//map方法 找到合适的星星放进新数组 匹配
		this.stars = this.stars.map(star => {
			let sign = Math.random()>0.5 ? 1 : -1
			star.r += sign * 0.2
			if (star.r < 0) {
				star.r = -star.r
			} else if (star.r > 1){
				star.r -= 0.2
			// console.log(star.r)

			}
			return star
		})
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Stars;


/***/ })

});