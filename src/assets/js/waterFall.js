import $ from './jq'

let colSumHeight = [], //记录每一列的高度
  itemWidth = '', //每一个item宽度
  colNum = '', //有几列
  minColHeight = 0,
  ele = '';

/**
* @param dom
* @param windowBorder
*/
export function init(dom, windowBorder) {
  ele = dom;
  itemWidth = $(dom).outWidth();
  colNum = ($('body').outWidth() - windowBorder) / itemWidth;
  
  for (let i = 0; i < colNum.length; i ++) {
    colSumHeight.push(0);
  }
}

export function load(min, max) {
  console.log(ele)
  minColHeight = colSumHeight[0];
  for (let i = min; i < max; i ++) {
    let $cur = $(ele, 1)[i], idx = 0;
    for (let j = 0; j < colSumHeight.lenth; j ++) {
      if (colSumHeight[j] < minColHeight) {
        minColHeight = colSumHeight[j];
        idx = j;
      }
    }
    $cur.css({
      top: minColHeight,
      left: itemWidth * idx
    })
    colSumHeight[idx] += $cur.outHeight();
  }
}