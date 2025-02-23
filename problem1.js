var sum_to_n_a = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

var sum_to_n_b = (function (n) {
  let memo = {};
  return (n) => {
    if (n == 0) return 0;
    if (n in memo) return memo[n];
    memo[n] = n + sum_to_n_a(n - 1);
    return memo[n];
  };
})();

var sum_to_n_c = function (n) {
  return (n * (n + 1)) >> 1;
};

console.log(sum_to_n_a(500)); //125250
console.log(sum_to_n_b(5000)); //12502500
console.log(sum_to_n_c(500)); //125250
