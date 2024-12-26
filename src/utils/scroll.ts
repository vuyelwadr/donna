export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;
  
  const headerOffset = 100; // Slightly more than header height to ensure good spacing
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};