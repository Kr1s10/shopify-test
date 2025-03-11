document.addEventListener('cart:change', function(event) {
  console.log('ajax:success')
  
});
// if (event.target.matches('[action="/cart/add"]')) {
  //   const sections = document.querySelectorAll('.featured-product[data-section-id]');
  //   console.log(sections)
  //   // fetch('/?sections=products-section-handle')
  //   //   .then(response => response.json())
  //   //   .then(data => {
  //   //     const productsSection = document.querySelector('[data-section-id="products-section-handle"]');
  //   //     if (productsSection) {
  //   //       productsSection.innerHTML = data['products-section-handle'];
  //   //     }
  //   //   });
  // }
