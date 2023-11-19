import './styles/index.scss';

const main = () => {
  const nav = document.querySelector('#main-nav');
  const list = nav.querySelector('ul');
  const burgerClone = document.querySelector('#burger-template').content.cloneNode(true);

  const button = burgerClone.querySelector('.js-main-nav__toggle');
  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'false';

    button.setAttribute('aria-expanded', isOpen);
  });

  nav.addEventListener('keyup', e => {
    if (e.code === 'Escape') {
      button.setAttribute('aria-expanded', false);
      button.focus();
    }
  });

  nav.insertBefore(burgerClone, list);
};

main();
