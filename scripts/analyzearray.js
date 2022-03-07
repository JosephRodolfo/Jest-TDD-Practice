let analyzeArray = (array) => {
  let object = {};

  object.average = array.reduce((prev, curr) => prev + curr) / array.length;

  object.min = array.reduce((prev, curr) => {
    return prev < curr ? prev : curr;
  });
  object.max = array.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
  });
  object.length = array.length;

  return object;
};

module.exports = analyzeArray;
