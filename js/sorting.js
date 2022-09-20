(() => {
  const refs = {
    allBtn: document.querySelector('[all-btn]'),
    items: document.querySelectorAll('[item]'),
    websiteBtn: document.querySelector('[website-btn]'),
    websiteItems: document.querySelectorAll('[website]'),
    appBtn: document.querySelector('[app-btn]'),
    appItems: document.querySelectorAll('[app]'),
    designBtn: document.querySelector('[design-btn]'),
    designItems: document.querySelectorAll('[design]'),
    marketingBtn: document.querySelector('[marketing-btn]'),
    marketingItems: document.querySelectorAll('[marketing]'),
  };

  refs.allBtn.addEventListener('click', () => refs.items.forEach(e=>e.classList.remove('is-hidden')));
  
  refs.websiteBtn.addEventListener('click', () => {
    refs.items.forEach(e => e.classList.add('is-hidden'));
    refs.websiteItems.forEach(e => e.classList.remove('is-hidden'))
  });

  refs.appBtn.addEventListener('click', () => {
    refs.items.forEach(e => e.classList.add('is-hidden'));
    refs.appItems.forEach(e => e.classList.remove('is-hidden'))
  });
  
  refs.designBtn.addEventListener('click', () => {
    refs.items.forEach(e => e.classList.add('is-hidden'));
    refs.designItems.forEach(e => e.classList.remove('is-hidden'))
  });

  refs.marketingBtn.addEventListener('click', () => {
    refs.items.forEach(e => e.classList.add('is-hidden'));
    refs.marketingItems.forEach(e => e.classList.remove('is-hidden'))
  });  

})();