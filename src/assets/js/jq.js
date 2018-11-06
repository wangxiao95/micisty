function jq(dom, all) {
  if (all) {
    return new fn(document.querySelectorAll(dom));
  }
  return new fn(document.querySelector(dom));
}

function getStyle(obj, attr) {
  if(obj.currentStyle) {
    return obj.currentStyle[attr];
  }else{
    return getComputedStyle(obj, false)[attr];
  }
}

class fn {
  constructor (ele) {
    this.ele = ele;
  }
  css (obj) {
    for (let k in obj) {
      this.ele.style[k] = obj[k];
    }
    return this;
  }
  outWidth () {
    return this.ele.offsetWidth
      + parseFloat(getStyle(this.ele, 'marginLeft'))
      + parseFloat(getStyle(this.ele, 'marginRight'));
  }
  outHeight () {
    return this.ele.offsetHeight
      + parseFloat(getStyle(this.ele, 'marginTop'))
      + parseFloat(getStyle(this.ele, 'marginBottom'));
  }
}

export default jq;