import _ from 'underscore';

export default function findWord(obj, word) {
  let isFind = false;

  _.mapObject(obj, value => {

    if (_.isObject(value)) {

      _.mapObject(value, value1 => {
        if (_.isString(value1)) {

          if (value1.includes(word)) {
            isFind = true;
          }
        }
      })
    }
  });

  return isFind;
}