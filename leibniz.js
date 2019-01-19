// https://www.youtube.com/watch?v=HrRMnzANHHs
// https://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80
// Technique: (1/1 - 1/3 + 1/5 - 1/7 + 1/9 - 1/11 + 1/13) * 4

let total = 0
const iterations = 1 * 1000 * 1000 * 1000 * 1000

for (let i = 0; i < iterations; i++) {
  const fraction = 1 / (i * 2 + 1)
  if (i % 2 === 0) {
    total += fraction
  } else {
    total -= fraction
  }
}

console.log(total * 4)