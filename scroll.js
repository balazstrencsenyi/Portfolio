export function whenScrolled() {

document.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('h1');
  const scrolled = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrolled > 0) {
    header.classList.add('scroll');
    h1.classList.add('scrollh1');
  } else {
    header.classList.remove('scroll');
    h1.classList.remove('scrollh1');
  }
});

}