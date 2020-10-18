window.onload = () => {
  player()
}

function player() {
  const dots = document.querySelectorAll('.dot')
  const numbers = document.querySelectorAll('.number')
  const sLine = document.querySelector('.sLine')
  const mLine = document.querySelector('.mLine')
  const hLine = document.querySelector('.hLine')
  const date = document.querySelector('.date')

  Array.prototype.forEach.call(dots, (item, index) => {
    if (index % 5 === 0) {
      item.style.border = '2px solid #222'
    }
    item.style.transform = `rotate(${index * 6}deg) translate(-50%, -50%)`
  })

  Array.prototype.forEach.call(numbers, (item, index) => {
    item.style.transform = `rotate(${
      (index + 1) * 30
    }deg) translate(-50%, -50%)`
  })

  let s = 0
  let m = 0
  let h = 0
  let day = 1
  let month = 1

  date.innerHTML = `${month}月${day}日`

  const id = setInterval(() => {
    if (s === 60) {
      s = 0
    }
    if (m === 60) {
      m = 0
    }
    if (h === 24) {
      day++
      h = 0
      date.innerHTML = `${month}月${day}日`
      if (day === 32) {
        month++
        day = 1
      }
    }
    s = s + 1
    m = m + 1 / 60
    h = h + 1 / 3600

    sLine.style.transform = `rotate(${s * 6}deg) translateX(-50%)`
    mLine.style.transform = `rotate(${m * 6}deg) translateX(-50%)`
    hLine.style.transform = `rotate(${h * 30}deg) translateX(-50%)`
  }, 1000)
}
