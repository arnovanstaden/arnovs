const useScrollToElement = (): {
  scrollToElement: (id: string) => void;
} => {
  const scrollToElement = (id: string) => {
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        // Get element position relative to viewport
        const elementPosition = targetElement.getBoundingClientRect().top;
        // Get current scroll position
        const offsetPosition = elementPosition + window.pageYOffset;
        // Account for header height (approximately 100px based on padding)
        const headerOffset = 100;
        const finalPosition = offsetPosition - headerOffset;

        // Use window.scrollTo for more reliable scrolling with offset
        window.scrollTo({
          top: finalPosition,
          behavior: 'smooth',
        });
      }
    });
  };

  return { scrollToElement };
};

export default useScrollToElement;
