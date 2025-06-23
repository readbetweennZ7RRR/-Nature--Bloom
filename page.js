 const pagination = document.getElementById('pagination');
  let scrollTimer;

  // شفافية أثناء السكروول
  window.addEventListener('scroll', () => {
    pagination.classList.add('hide');
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      pagination.classList.remove('hide');
    }, 500);

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
      pagination.classList.remove('hide');
    }
  });



  