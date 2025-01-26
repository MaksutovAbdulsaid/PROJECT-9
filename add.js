const cards = document.querySelector('.premier__inner')
const image = [
  'film.png',
  'film2.png',
  'film3.png',
  'film4.png',
  'film5.png',
  'film6.png',
  'film7.png',
  'film8.png',
  'film9.png',
  'film10.png',
  'film11.png',
  'film12.png',
]
fetch('https://678aa006dd587da7ac2ae311.mockapi.io/Premiere')
  .then((response) => response.json())
  .then((response) => {
    createCard(response, image, cards)
  })
const catn = [
  'mult.png',
  'mult2.png',
  'mult3.png',
  'mult4.png',
  'mult5.png',
  'mult6.png',
  'mult7.png',
  'mult8.png',
  'mult9.png',
  'mult10.png',
  'mult11.png',
  'mult12.png',
]
const mult = document.querySelector('.mult__inner')
fetch('https://678aa006dd587da7ac2ae311.mockapi.io/Cartoons')
  .then((response) => response.json())
  .then((response) => {
    createCard(response, catn, mult)
  })

const pht = [
  'top.png',
  'top2.png',
  'top3.png',
  'top4.png',
  'top5.png',
  'top6.png',
  'top7.png',
  'top8.png',
  'top9.png',
  'top10.png',
  'top11.png',
  'top12.png',
  'top13.png',
  'top14.png',
  'top15.png',
  'top16.png',
  'top17.png',
  'top18.png',
  'top19.png',
  'top20.png',
  'top21.png',
  'top22.png',
  'top23.png',
  'top24.png',
]
const addButton = document.querySelector('#addButton')
const film = document.querySelector('.top__inner')
fetch('https://6790c4eaaf8442fd7377a17b.mockapi.io/card')
  .then((response) => response.json())
  .then((response) => {
    createCard(response, pht, film)
  })
addButton.addEventListener('click', () => {
  const photoUrl = document.querySelector('input[name="url"]').value.trim()
  const title = document.querySelector('input[name="info"]').value.trim()
  const date = document.querySelector('input[name="date"]').value.trim()

  const newCard = `
    <div class="premier__card">
                    <img src="${photoUrl}" alt="" class="film__logo">
                    <div class="film__info">
                        <p class="film__title">${title}</p>
                        <div class="film__subtitle">
                            <div class="film__link">
                                <img src="./IMG/reles.png" alt="">
                                <p class="num">${date}</p>
                            </div>
                            <div class="film__link">
                                <img src="./IMG/views.png" alt="">
                                <p class="num">12345</p>
                            </div>
                        </div>
                    </div>
                </div>`

  film.insertAdjacentHTML('beforeend', newCard)
})

function createCard(response, image, cards) {
  response.map((item, i) => {
    cards.insertAdjacentHTML(
      'beforeend',
      `<div class="premier__card">
                    <img src="./IMG/${image[i]}" alt="" class="film__logo">
                    <div class="film__info">
                        <p class="film__title">${item.title}</p>
                        <div class="film__subtitle">
                            <div class="film__link">
                                <img src="./IMG/reles.png" alt="">
                                <p class="num">${item.release}</p>
                            </div>
                            <div class="film__link">
                                <img src="./IMG/views.png" alt="">
                                <p class="num">${item.views}</p>
                            </div>
                        </div>
                    </div>
                </div>`
    )
  })
}
