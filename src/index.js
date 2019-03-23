module.exports = function getZerosCount(number, base) {
  // your implementation

  var k = base;
  var i = 2;
  var mass = [];
  while (i <= k) {
    if (k % i == 0) {
      //console.log(i);
      mass.push(i);
      k = k / i;
    }
    else {
      i++;
    }
  }

  var object = {};
  var first = [];
  first[0] = mass[0];
  var n_first = [];
  for (var i = 0; i < mass.length; ++i) {
    n_first[i] = 0;
  }
  var j;
  j = 0;

  for (var i = 0; i < mass.length; ++i) {
    if (first[j] == mass[i]) {
      n_first[j]++;
    }
    else {
      j++;
      first[j] = mass[i];
      n_first[j]++;
    }

  }
  for (var i = 0; i < mass.length; ++i) {
    if (n_first[i] == 0) {
      n_first.pop();
    }
  }
  for (j = 0; j < first.length; ++j) {
    object[first[j]] = n_first[j];
  }

  var number_for_calc;
  number_for_calc = number;
  var max_pow = {};
  var mass_max_pow = []
  for (var i = 0; i < first.length; ++i) {
    mass_max_pow[i] = 1;
  }
  for (var i = 0; i < first.length; ++i) {
    while ((number_for_calc / first[i]) > 1) {
      number_for_calc = number_for_calc / first[i];
      ++mass_max_pow[i];
    }
    number_for_calc = number;
  }
  for (var i = 0; i < first.length; ++i) {
    max_pow[[first[i]]] = mass_max_pow[i] - 1;
  }

  var result = [];
  for (var i = 0; i < first.length; ++i) {
    result[i] = 0;
  }
  console.log(result)
  var k = 0;
  for (var i = 0; i < first.length; ++i) {
    for (j = 1; j <= max_pow[[first[i]]]; ++j) {
      console.log(max_pow[[first[i]]]);
      result[i] = parseInt(number / Math.pow(first[i], j)) + result[i];
    }
  }
  for (var i = 0; i < first.length; ++i) {
    result[i] = parseInt(result[i] / object[first[i]]);
  }
  var min;
  min = result[0]
  for (var i = 1; i < first.length; ++i) {
    if (result[i] < min)
      min = result[i]
  }

  return min;

}
