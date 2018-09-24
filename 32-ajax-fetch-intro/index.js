function sleep(n) {
  let i = 0
  while(i < (12 ** 8) * n) {
    i++
  }
}

console.log('Starting the sleep function')
sleep(10)
console.log('Wow that sleep function took forever to run. 1 Star 🌟')
