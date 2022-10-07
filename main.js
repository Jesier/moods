const hours = [6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9]
const grumpyHours = []
const happyHours = []

for (const sleep of hours) {
    if (sleep < 7) {
    grumpyHours.push(sleep)
} else {
    happyHours.push(sleep)
}
}

console.log(`I was grumpy on ${grumpyHours.length} day. I was happy on ${happyHours.length} days.`)