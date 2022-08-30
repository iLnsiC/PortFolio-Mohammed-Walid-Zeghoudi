const items = document.querySelectorAll('.progress div');
const pourcentage = ['80%', '35%', '75%', '30%', '15%', '45%']
var i = 0;

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      console.log(isInViewport(item));
      item.style.width = pourcentage[i];
      item.classList.add('show');
      i++;
    }
  });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
