import { iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';
import { initAccordions } from './utils/init-accordion';
import { initPhoneMask } from './utils/phone-mask';

// ---------------------------------
const button = document.querySelector('#btnForMoreText');
const moreText = document.querySelector('#moreText');

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  iosVhFix();
  initPhoneMask();
  initAccordions();

  button.addEventListener('click', function () {
    moreText.classList.toggle('visually-hidden');
    if (moreText.classList.contains('visually-hidden')) {
      button.innerHTML = 'Подробнее';
    } else {
      button.innerHTML = 'Скрыть';
    }
  });

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
