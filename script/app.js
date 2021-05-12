const btn = document.getElementById('checkbox')
const header = document.querySelector('.header');
const cards = document.querySelector('.card-section')
const facebook = document.querySelector('.card-facbook')
const twitter = document.querySelector('.card-twitter')
const insta = document.querySelector('.card-insta')
const youtupe = document.querySelector('.card-youtupe')
const overviewCards = document.querySelectorAll('.dark')
const overview = document.querySelector('.overview')

console.log(overview)


btn.addEventListener('change', () => {
  header.classList.toggle('header-dark-mode')
  facebook.classList.toggle('card-dark-mode')
  twitter.classList.toggle('card-dark-mode')
  insta.classList.toggle('card-dark-mode')
  youtupe.classList.toggle('card-dark-mode')
  cards.classList.toggle('card-dark-mode-bg')
  overviewCards.forEach((card) => {
    card.classList.toggle('overview-dark-mode-cards')
  })
  overview.classList.toggle('overview-dark-mode')
})