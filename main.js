document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector('.grid-body');
  const gridModal = document.querySelector('.grid-modal-window');

  // --- Загрузка карточек ---
  fetch('cards.json')
    .then(res => res.json())
    .then(data => {
      data.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.className = 'grid-card';
        cardEl.innerHTML = `
          <div class="grid-img"><img src="${card.image}" alt="${card.title}"></div>
          <div class="grid-content">
              <div class="grid-title">${card.title}</div>
              <div class="grid-sub-title">${card.subtitle}</div>
              <div class="grid-price">${card.price}</div>
              <button class="grid-btn content-btn">Заказать</button>
          </div>
        `;
        container.appendChild(cardEl);

        // Клик на карточку открывает модалку
        cardEl.addEventListener('click', () => {
          gridModal.innerHTML = `
            <div class="grid-modal-body">
              <div class="content-btn grid-modal-close">X</div>
              <h2 class="grid-modal-title grid-title">${card.title}</h2>
              <p class="grid-modal-description"><b>Описание:</b> ${card.subtitle}</p>
              <p class="composition"><b>Состав:</b> ${card.composition}</p>
              <p class="kpbzu"><b>Калории:</b> ${card.kpbzu}</p>
              <button class="grid-modal-btn content-btn">Добавить в корзину</button>  
              <div class="grid-modal-image"><img src="${card.image}" alt="cake"></div>
            </div>
          `;
          gridModal.classList.remove('hidden');

          // Повесить обработчик на кнопку закрытия **после создания**
          const gridModalCloseBtn = gridModal.querySelector('.grid-modal-close');
          gridModalCloseBtn.addEventListener('click', () => {
            gridModal.classList.add('hidden');
            gridModal.innerHTML = '';
          });
        });
      });
    })
    .catch(err => console.error('Ошибка загрузки карточек:', err));

  // --- Модалка меню ---
  const menuModal = document.querySelector('.nav-modal');
  const menuBtn = document.querySelector('.nav-menu-icon');

  if (menuBtn && menuModal) {
    menuBtn.addEventListener('click', () => {
    menuModal.innerHTML = `
               <div class="nav-modal-body">
                        <div class="location info-setting nav-modal-info">
                            <img src="img/location.svg" alt="location icon">
                            <div class="main-location">г. Санкт Петербург, <br> ул. Куйбышева 31</div>
                        </div>
                        <div class="phone info-setting nav-modal-info">
                                <img src="img/phone.svg" alt="phone icon">
                            <div class="main-phone">8 (812) 844-95-49<br>Ежедневно с 9:00 до 20:00</div>
                        </div>
                    </div>`
      menuModal.classList.toggle('hidden');
    });
  }

  // --- Загрузка отзывов и инициализация Swiper ---
  const swiperWrapper = document.querySelector(".swiper-wrapper");

  fetch("review.json")
    .then(response => response.json())
    .then(reviews => {
      reviews.forEach(review => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        slide.innerHTML = `
          <div class="review-card">
            <div class="review-text-content">
              <div class="quotes"><img src="img/quotes.svg" alt="quotes"></div>
              <div class="review-title">${review.title}</div>
              <div class="review-description">${review.description}</div>
              <div class="review-more"><a href="#">Читать отзыв полностью</a></div>
            </div>
            <div class="review-image-content">
              <div class="review-image"><img src="${review.image}" alt="client"></div>
              <p class="review-name">${review.name}</p>
              <p class="review-city">${review.city}</p>
            </div>
          </div>
        `;
        swiperWrapper.appendChild(slide);
      });

      new Swiper('.swiper', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 200, 
        navigation: {
          nextEl: '.swiper-btn-next',
          prevEl: '.swiper-btn-prev',
        },
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
      });
    })
    .catch(err => console.error("Ошибка загрузки отзывов:", err));

});
