let wins = 0,
  losses = 0,
  currNum = 0,
  goalNum

const generateBtnValue = _ => (Math.floor(Math.random() * 50) + 1)

const init = _ => {
  let randNum = (Math.floor(Math.random() * 200) + 100)
  goalNum = randNum
  currNum = 0
  gameOver = false
  $('.currNum').html(`<span class="card-title currNum">Current number: ${currNum}</span>`)
  $('.goalNum').html(`<span class="card-title">Goal number: ${goalNum}</span>`)
  $('.redBtn').attr('data-num', generateBtnValue)
  $('.ts1989Btn').attr('data-num', generateBtnValue)
  $('.loverBtn').attr('data-num', generateBtnValue)
  $('.gameOver').hide()
  $('.gameBtn').show()
}

init()

const checkScores = _ => {
  if (currNum > goalNum) {
    losses++
    $('.losses').text(`Losses: ${losses}`)
    $('.gameOver').show()
    $('.message').text('You lost! Please try again')
    $('.gameBtn').hide()
  } else if (currNum === goalNum) {
    wins++
    $('.wins').text(`Wins: ${wins}`)
    $('.gameOver').show()
    $('.message').text('You won! Play again?')
    $('.gameBtn').hide()
  }
}

$(document).on('click', '.gameBtn', ({ target }) => {
  currNum += parseInt($(target).attr('data-num'))
  $('.currNum').html(`<span class="card-title currNum">Current number: ${currNum}</span>`)
  checkScores()
})

$('.restartBtn').on('click', _ => {
  init()
})