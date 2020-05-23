// https://stackoverflow.com/questions/7486085/copy-array-by-value
// https://medium.com/javascript-in-plain-english/how-to-deep-copy-objects-and-arrays-in-javascript-7c911359b089

const _ = require('lodash');
const clone = require('rfdc');

const overrideValue = (ori, clone) => {
  clone[0] = 'ぼく';
  clone[5][0] = 'ぼく嫁';
  console.log(ori);
  console.log(clone);
}

const copy = () => {
  // 配列を生成
  let family = ['わい', '弟', '妹', 'おとん', 'おかん', ['嫁', '義妹']];
  let newFamily = [];

  newFamily = family;
  overrideValue(family, newFamily);
}

const map = () => {
  // 配列を生成
  let family = ['わい', '弟', '妹', 'おとん', 'おかん', ['嫁', '義妹']];
  let newFamily = [];

  newFamily = family.map((person) => {
    return person === 'わい' ? 'おれ' : person
  })
  overrideValue(family, newFamily);
}

const from = () => {
  // fromの特製。配列風を処理できる

  // fromの使い方
  let arr = Array.from({length:50},(_,i) => i + 1);
  console.log(arr);

  // 配列風
  const arr0 = {
    0: 'value1',
    1: 'value2',
    2: 'value3',
    length: 2,
  };
  arr = Array.from(arr0);
  console.log(arr);

  // 配列風
  const obj = {
    value1: 'value1',
    value2: 'value2',
    value3: 'value3',
    length: 3,
  };
  arr = Array.from(obj);
  console.log(arr);
  
  // 配列を生成
  let family = ['わい', '弟', '妹', 'おとん', 'おかん', ['嫁', '義妹']];
  let newFamily = [];

  // 配列処理
  newFamily = Array.from(family);
  overrideValue(family, newFamily);
}

const slice = () => {
  let arr = ['わい', '弟', '妹', 'おとん', 'おかん', ['嫁', '義妹']];
  let newArr = arr.slice(2,4);
  console.log(arr);
  console.log(newArr);
  
  // 配列を生成
  let family = ['わい', '弟', '妹', 'おとん', 'おかん', ['嫁', '義妹']];
  let newFamily = [];

  // 配列処理
  newFamily = family.slice();
  overrideValue(family, newFamily);
}

const spread = () => {
  function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  console.log(sum(...numbers));
  console.log(sum(numbers));

  // 配列を生成
  let family = ['わい', '弟', '妹', 'おとん', 'おかん', ['嫁', '義妹']];
  let newFamily = [];

  // 配列処理
  newFamily = [...family];
  overrideValue(family, newFamily);
}

const jsonStringify = () => {
  // 配列を生成
  let family = ['わい', '弟', '妹', 'おとん', 'おかん', ['嫁', '義妹']];
  let newFamily = [];

  // 配列処理
  newFamily = JSON.parse(JSON.stringify(family));
  overrideValue(family, newFamily);
}

const _cloneDeep = () => {
  // 配列を生成
  let family = ['わい', '弟', '妹', 'おとん', 'おかん', ['嫁', '義妹']];
  let newFamily = [];

  // 配列処理
  newFamily = _.cloneDeep(family);
  overrideValue(family, newFamily);
}

const rfdcClone = () => {
  // 配列を生成
  let family = ['わい', '弟', '妹', 'おとん', 'おかん', ['嫁', '義妹']];
  let newFamily = [];

  // 配列処理
  newFamily = clone(family);
  overrideValue(family, newFamily);
}

console.log('Start: copy');
copy();
console.log('End: copy');

console.log('Start: map');
map();
console.log('End: map');

console.log('Start: from');
from();
console.log('End: from');

console.log('Start: spread');
spread();
console.log('End: spread');

console.log('Start: slice');
slice();
console.log('End: slice');

console.log('Start: json stringify');
jsonStringify();
console.log('End: json stringify');

console.log('Start: lodash clone deep');
_cloneDeep();
console.log('End: lodash clone deep');

// console.log('Start: rfdc clone deep');
// rfdcClone();
// console.log('End: rfdc clone deep');
