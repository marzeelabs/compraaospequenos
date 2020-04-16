function smoothScroll(event, id) {
  event.preventDefault();

  const survivalSection = document.getElementById(id);

  survivalSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default smoothScroll;
