### \_\_proto\_\_ 是什么

\_\_proto\_\_是一个引用类型特有的属性，他的值指向原型。

原型是什么？我的理解是，原型其实就是祖先。一个变量如果有这个属性，说明它继承于某个原型。

### prototype 是什么

prototype是一个函数（普通函数，构造函数或class）的唯一标识。他默认包含__proto__和constructor

可以用如下方式给这个函数添加其它可继承的属性和方法：


```
SuperArray.prototype = {
    getValue: function() {
        console.log('this.value', this.value)
    },
    diff: function(comparisonArray) {
        const hash = new Set(comparisonArray);
        return this.filter(elem => !hash.has(elem));
    }
}
```
constructor指向函数本身，即：

```
SuperArray.prototype.constructor === SuperArray
```
需要注意的是，prototype下的属性，引用类型是所有实例共用的，简单类型是不共用的。

### new 操作符做了什么？

```
class SuperArray extends Array {
    constructor() {
        super()
        this.config = {
            name: 'Jack',
            age: '12'
        }
    }
    getValue() {
        console.log('this.config', this.config)
    }
    diff(comparisonArray) {
        const hash = new Set(comparisonArray);
        return this.filter(elem => !hash.has(elem));
    }
}
const sArray1 = new SuperArray()
console.log('sArray1', sArray1)

// 输入结果：
sArray1 -> SuperArray:
config: {name: "Jack", age: "12"}
length: 0
__proto__: Array
```

其实new 只做了4件事：
1. let obj = {}
2. obj.\_\_proto\_\_ = SuperArray.prototype
3. SuperArray.call(obj)
4. 返回obj

### extends 做了什么？

我们回看上面的类SuperArray继承于Array，输出SuperArray.prototype看下：


```
console.log('SuperArray.prototype', SuperArray.prototype)

// 输出结果：
SuperArray.prototype -> Array:
constructor: class SuperArray
    arguments: (...)
    caller: (...)
    length: 0
    name: "SuperArray"
    prototype: Array {constructor: ƒ, getValue: ƒ, diff: ƒ}
    Symbol(Symbol.species): (...)
    __proto__: ƒ Array()
    [[FunctionLocation]]: index.html:47
    [[Scopes]]: Scopes[2]
diff: diff(comparisonArray) { const hash = new Set(comparisonArray); return this.filter(elem => {…}
getValue: ƒ getValue()
__proto__: Array(0)
```

extends做了以下事情：

1. 初始化constructor
2. 设置prototype为父类的prototype（原型继承，不能直接赋值，否则无法实现继承关系）

```
function extend(subClass, superClass) {
  var F = function() {};
  F.prototype = superClass.prototype;
  subClass.prototype = new F();

  subClass.superclass = superClass.prototype;
  if(superClass.prototype.constructor == Object.prototype.constructor) {
    superClass.prototype.constructor = superClass;
  }
}
```

3. 设置prototype的属性constructor为SuperArray。\_\_proto\_\_为Function.prototype（构造函数的原型是Function）。设置自定义属性和方法。

##### __proto__: Array(0)代表着什么？
### extends的实现

```
function extend(subClass, superClass) {
  var F = function() {};
  F.prototype = superClass.prototype;
  subClass.prototype = new F();
  subClass.prototype.constructor = subClass
  subClass.prototype.sayName = function(){
    alert(this.name);
  };
  subClass.superclass = superClass.prototype;
  if(superClass.prototype.constructor == Object.prototype.constructor) {
    superClass.prototype.constructor = superClass;
  }
}
```

### instanceof到底做了什么事？

instanceof实际上是拿变量的\_\_proto\_\_.\_\_proto\_\_....和被对比的构造函数的prototype做===（全等）比较

参考：
https://segmentfault.com/q/1010000012185778

https://juejin.im/post/58f94c9bb123db411953691b#heading-5

https://juejin.im/entry/58f62135a22b9d006c0cee45

https://juejin.im/post/5b729c24f265da280f3ad010
