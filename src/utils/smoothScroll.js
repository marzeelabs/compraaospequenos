function smoothScroll(event, id) {
  const survivalSection = document.getElementById(id);

  if (!survivalSection) {
    return;
  }

  event.preventDefault();

  survivalSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default smoothScroll;
