let number = 0
let color = 'green'

function plus() {
  if (number === 9) return
  number = number + 1
}

function minus() {
  if (number === 0) return
  number = number - 1
}

number

plus()
number

plus()
number

plus()
number

plus()
number

if (number <= 3) {
  color = 'green'
}
if (4 <= number && number <= 6) {
  color = 'yellow'
}
if (7 <= number && number <= 9) {
  color = 'red'
}

color
