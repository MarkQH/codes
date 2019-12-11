// 输入一个值,返回其数据类型
export const type = para => {
  return Object.prototype.toString.call(para).match(/\[([^]*)\]/)[1].split(" ")[1]
};
// 冒泡排序-升序
export const bubbleAsSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
// 冒泡排序-降序
export const bubbleDeSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
// 阶乘
export const factorial = num => {
  let count = 1;
  for (let i = 1; i <= num; i++) {
    count *= i;
  }
  return count;
}
// 两个数之间累乘
export const multBetride = (x, y) => {
  let count;
  if (x < y) {
    count = x;
    for (let i = x + 1; i <= y; i++) {
      count *= i;
    }
    return count;
  } else {
    count = y;
    for (let i = y + 1; i <= x; i++) {
      count *= i;
    }
    return count;
  }
}
// 累加
export const cumsum = () => {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
  }
  return sum;
}
// 计时器(计算代码块(函数)执行时间)
export const computeTime = code => {
  let startTime = new Date().getTime();
  code();
  let endTime = new Date().getTime();
  let time = endTime - startTime;
  return time;
}
// 有参 computeTime(f)
export const computeTime = f => {
  let startTime = new Date().getTime();
  let p = [];
  for (let i = 1; i < arguments.length; i++) {
    p.push(arguments[i])
  }
  f.apply(null, p)
  let endTime = new Date().getTime();
  let Time = endTime - startTime;
  return Time;
}
// 数组去重
export const arrDemp = arr => {
  let newArr = [];
  let m = {};
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    if (m[n]) {

    } else {
      newArr.push(arr[i]);
      m[n] = true;
    }
  }
  return newArr;
}

let arr = [1,2,3,5,4,5,4,3,6]
let arrDemp = new Set(arr)  //arrDemp是一个对象
let newArr = [...arrDemp]   //把arrDemp转化成数组

// 统计数组中各个元素出现的次数
export const staArrNum = arr => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let m = arr[i];
    if (obj.hasOwnProperty(m)) {
      obj[m] += 1;
    } else {
      obj[m] = 1;
    }
  }
  return obj;
}
// 在数组中找指定的元素,返回下标
export const arrFinNum = function (arr,num) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (num == arr[i]) {
      index = i;
      break;
    }
  }
  return index;
}
// 删除数组中的元素
export const delArrNum = (arr,val) => {
  let index = arrFinNum(arr, val) //调用了前面自行添加的arrFinNum方法
  if (index != -1) {
    return arr.splice(index, 1);
  }
}
// 时间戳转化成YMD格式
export const dateFormat = (timestamp, formats) => {
  // formats格式包括
  // 1. Y-m-d
  // 2. Y-m-d H:i:s
  // 3. Y年m月d日
  // 4. Y年m月d日 H时i分
  formats = formats || 'Y-m-d';
  let zero = function (value) {
    if (value < 10) {
      return '0' + value;
    }
    return value;
  };
  let myDate = timestamp ? new Date(timestamp) : new Date();
  let year = myDate.getFullYear();
  let month = zero(myDate.getMonth() + 1);
  let day = zero(myDate.getDate());
  let hour = zero(myDate.getHours());
  let minite = zero(myDate.getMinutes());
  let second = zero(myDate.getSeconds());

  return formats.replace(/Y|m|d|H|i|s/ig, function (matches) {
    return ({
      Y: year,
      m: month,
      d: day,
      H: hour,
      i: minite,
      s: second
    })[matches];
  });
};
//数字超过9显示省略号 
export const num_filter = val =>{
  val = val?val-0:0;
  if (val > 9 ) {
    return "…"
  }else{
    return val;
  }
}
// 数字超过99显示99+
export const ninenum_filter = val =>{
  val = val?val-0:0;
  if (val > 99 ) {
    return "99+"
  }else{
    return val;
  }
}
// 年
export const dateY = time =>{
  let newDate = new Date(time);
  let {y}={y:newDate.getFullYear()};
  return `${y}`;
}
// 年月
export const dateYM = time => {
  let newDate = new Date(time);
  let { y, m, d } = { y: newDate.getFullYear(), m: newDate.getMonth() + 1, d: newDate.getDate() };
  return `${y}-${m}`;
}
// 年月日时分秒
export const dateTime = time => {
  let newDate = new Date(time);
  let { y, M, d, h, m, s } = { y: newDate.getFullYear(), M: newDate.getMonth() + 1, d: newDate.getDate(), h: newDate.getHours(), m: newDate.getMinutes(), s: newDate.getSeconds() };
  return `${y}-${M}-${d}  ${h}:${m}:${s}`;
}
// 银行卡号分割
export const bank_filter = val =>{
  val += '';
  val = val.replace(/(\s)/g,'').replace(/(\d{4})/g,'$1 ').replace(/\s*$/,'');
  return val;
}
// 计算时间N之前
export const time_filter = time => {
  time -= 0;
  let difTime = new Date().getTime() - time;
  let { h, m } = { h: parseInt(difTime / (3600 * 1000)), m: parseInt(difTime / (60 * 1000)) };
  let msg = "";
  if (h < 1) {
    msg = `${m}分钟前`;
  } else if (h >= 1 && h <= 24) {
    msg = `${h}小时前`;
  } else if (h > 24) {
    h = parseInt(h / 24)
    msg = `${h}天前`;
  }
  return msg;
}
// 二分查找
export const binarySearch = (arr, key) => {
  let high = arr.length - 1,
    low = 0;
  while (low <= high) {
    let m = Math.floor((high + low) / 2);
    if (arr[m] == key) {
      return m;
    }
    if (key > arr[m]) {
      low = m + 1;
    } else {
      high = m - 1;
    }
  }
  return false;
}
// 获取上周本周下周时间
export const getDate = n => {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let day = now.getDay();
  if (day !== 0) {
    n = n + (day - 1);
  } else {
    n = n + day;
  }
  if (day) {
    if (month > 1) {
      month = month;
    } else {
      year = year - 1;
      month = 12;
    }
  }
  now.setDate(now.getDate() - n);
  year = now.getFullYear();
  month = now.getMonth() + 1;
  date = now.getDate();
  let s =
    year +
    "-" +
    (month < 10 ? "0" + month : month) +
    "-" +
    (date < 10 ? "0" + date : date);
  return s;
}

/***参数都是以周一为基准的***/
//上周的开始时间
// console.log(getDate(7));
//上周的结束时间
// console.log(getDate(1));
//本周的开始时间
// console.log(getDate(0));
//本周的结束时间
// console.log(getDate(-6));
//下周的开始时间
// console.log(getDate(-7));
//下周结束时间
// console.log(getDate(-13));

// 获取当前时间(年月日)
export const getNowDate = () => {
  let nowdate = new Date();
  let y = nowdate.getFullYear();
  let m = nowdate.getMonth() + 1;
  let d = nowdate.getDate();
  return y + "-" + m + "-" + d;
}
// 当前的时间(年月日时分秒)
export const getDateTime = () => {
  let date = new Date();
  year = date.getFullYear();
  month = date.getMonth() + 1;
  day = date.getDate();
  hour = date.getHours() + 1;
  minute = date.getMinutes();
  second = date.getSeconds();
  month = checkTime(month);
  day = checkTime(day);
  hour = checkTime(hour);
  minute = checkTime(minute);
  second = checkTime(second);
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  return "" + year + "年" + month + "月" + day + "日" + hour + "时" + minute + "分" + second + "秒"
}
// 函数防抖 (只执行最后一次点击)
export const Debounce = (fn, t) => {
  let delay = t || 500;
  let timer;
  return function () {
      let args = arguments;
      if(timer){
          clearTimeout(timer);
      }
      timer = setTimeout(() => {
          timer = null;
          fn.apply(this, args);
      }, delay);
  }
};
// 函数节流
export const Throttle = (fn, t) => {
  let last;
  let timer;
  let interval = t || 500;
  return function () {
      let args = arguments;
      let now = +new Date();
      if (last && now - last < interval) {
          clearTimeout(timer);
          timer = setTimeout(() => {
              last = now;
              fn.apply(this, args);
          }, interval);
      } else {
          last = now;
          fn.apply(this, args);
      }
  }
};
// 深拷贝
export const deepClone = source => {
  const targetObj = source.constructor === Array ? [] : {}; // 判断复制的目标是数组还是对象
  for (let keys in source) { // 遍历目标
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') { // 如果值是对象，就递归一下
        targetObj[keys] = source[keys].constructor === Array ? [] : {};
        targetObj[keys] = deepClone(source[keys]);
      } else { // 如果不是，就直接赋值
        targetObj[keys] = source[keys];
      }
    }
  }
  return targetObj;
}

let str1 = {
  arr: [1, 2, 3],
  obj: {
    key: 'value'
  },
  fn: function () {
    return 1;
  }
};
// 获取视口尺寸
export const getViewportOffset = () => {
  if (window.innerWidth) {
      return {
          w: window.innerWidth,
          h: window.innerHeight
      }
  } else {
      // ie8及其以下
      if (document.compatMode === "BackCompat") {
          // 怪异模式
          return {
              w: document.body.clientWidth,
              h: document.body.clientHeight
          }
      } else {
          // 标准模式
          return {
              w: document.documentElement.clientWidth,
              h: document.documentElement.clientHeight
          }
      }
  }
};




