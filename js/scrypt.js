

  const tabItem = document.querySelectorAll('.tabs__btn-item');
  const tabContent = document.querySelectorAll('.tabs__content-item');

  tabItem.forEach(function (element) {
    element.addEventListener('click', open);
  })

  function open(event) {
    const tabTarget = event.currentTarget;
    const button = tabTarget.dataset.button;  /*-------переменная считывает дата атрибут data-button у tabTarget и засовывает ее в const button--*/

    tabItem.forEach(function(item) {
      item.classList.remove('tabs__btn-item--active');   /*---пробежимся по элементам и убираем синий цвет с неактивного---------*/
    });

    tabTarget.classList.add('tabs__btn-item--active');   /*---добавляем синий цвет на куда кликнули---------*/

    tabContent.forEach(function(item) {
      item.classList.remove('tabs__content-item--active') /*---убираем класс ...--active везде---*/
    }); 

    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
  }

  const menuBtn = document.querySelector('.menu__btn');
  const menu = document.querySelector('.menu__list');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');
  })


  const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });