// import $ from './jquery'

let colSumHeight = [], //记录每一列的高度
  itemWidth = '', //每一个item宽度
  colNum = '', //有几列
  minColHeight = 0,
  ele = '',
  border = '';

/**
* @param dom
* @param windowBorder
*/
export function init(dom, windowBorder) {
  ele = dom;
  border = windowBorder;
  itemWidth = $(dom).outerWidth(true);
  colNum = parseInt(($(window).outerWidth(true) - windowBorder) / itemWidth);
  
  for (let i = 0; i < colNum; i ++) {
    colSumHeight.push(0);
  }
  load(0, 9);
}

export function load(min, max) {
  
  for (let i = min; i <= max; i ++) {
    minColHeight = colSumHeight[0];
    let $cur = $(ele + ':eq('+ i +')'), idx = 0;
    // debugger
    for (let j = 0; j < colSumHeight.length; j ++) {
      if (colSumHeight[j] <= minColHeight) {
        minColHeight = colSumHeight[j];
        idx = j;
      }
    }
    // console.log(idx);
    $cur.css({
      top: minColHeight,
      left: itemWidth * idx
    })
    colSumHeight[idx] += $cur.outerHeight(true);
    // debugger
  }
}

$(window).on("resize", function(){
  init(ele, border);
})
