document.addEventListener('DOMContentLoaded', function () {
  subscribe(PUB_SUB_EVENTS.cartUpdate, async () => {
    const featuredSections = document.querySelectorAll('.featured-products');

    for (const section of featuredSections) {
      const sectionId = feature.getAttribute('data-section-id');
      
      try {
        const response = await fetch(`/?sections=${sectionId}`);

        if (!response.ok) {
          throw new Error(`HTTP Error ${response.status}: Failed to fetch section ${sectionId}`);
        }

        const data = await response.json();
        section.innerHTML = data[sectionId];
      } catch (error) {
        console.error(`Error updating section ${sectionId}:`, error);
      }
    }
  });
});