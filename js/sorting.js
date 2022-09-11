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

  refs.allBtn.addEventListener('click', showAll);
  refs.websiteBtn.addEventListener('click', showWebsite);
  refs.appBtn.addEventListener('click', showApp);
  refs.designBtn.addEventListener('click', showDesign);
  refs.marketingBtn.addEventListener('click', showMarketing);

  function showAll() {
    for (i = 0; i < refs.items.length; i++){
       refs.items[i].classList.remove('is-hidden');
    }
  }

  function hideAll() {
    for (i = 0; i < refs.items.length; i++){
       refs.items[i].classList.add('is-hidden');
    }
  }

  function showWebsite(){
    hideAll();
    for (i = 0; i < refs.websiteItems.length; i++){
       refs.websiteItems[i].classList.remove('is-hidden');
    }
  }

  function showApp(){
    hideAll();
    for (i = 0; i < refs.appItems.length; i++){
       refs.appItems[i].classList.remove('is-hidden');
    }
  }

  function showDesign(){
    hideAll();
    for (i = 0; i < refs.designItems.length; i++){
       refs.designItems[i].classList.remove('is-hidden');
    }
  }

  function showMarketing(){
    hideAll();
    for (i = 0; i < refs.marketingItems.length; i++){
       refs.marketingItems[i].classList.remove('is-hidden');
    }
  }

})();