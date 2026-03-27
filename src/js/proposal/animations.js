export const initScrollAnimations = () => {
  const proposalList = document.querySelector('.proposal .features-list');

  if (!proposalList) return;

  const observerOptions = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  observer.observe(proposalList);
};
