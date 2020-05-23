const _ = require('lodash');

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
    return person === 'わい' ? 'おれ' : 'わい'
  })
  overrideValue(family, newFamily);
}

const from = () => {
  // 配列を生成
  let family = ['わい', '弟', '妹', 'おとん', 'おかん', ['嫁', '義妹']];
  let newFamily = [];

  // 配列処理
  newFamily = Array.from(family);
  overrideValue(family, newFamily);
}

const spread = () => {
  // 配列を生成
  let family = ['わい', '弟', '妹', 'おとん', 'おかん', ['嫁', '義妹']];
  let newFamily = [];

  // 配列処理
  newFamily = [...family];
  overrideValue(family, newFamily);
}

const slice = () => {
  // 配列を生成
  let family = ['わい', '弟', '妹', 'おとん', 'おかん', ['嫁', '義妹']];
  let newFamily = [];

  // 配列処理
  newFamily = family.slice();
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


