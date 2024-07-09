// Exemple de données de témoignages (à remplacer par les données réelles récupérées depuis le serveur)
var testimonialsData = [
    {
      message: "Contenu du témoignage 1",
      name: "Nom du Témoin 1",
      profession: "Profession du Témoin 1",
      rating: 5,
      image: "chemin/vers/image1.jpg"
    },
    {
      message: "Contenu du témoignage 2",
      name: "Nom du Témoin 2",
      profession: "Profession du Témoin 2",
      rating: 4,
      image: "chemin/vers/image2.jpg"
    }
    // Ajouter d'autres témoignages selon le même format
  ];
  
  // Fonction pour générer les étoiles en HTML
  function generateStars(rating) {
    var starsHTML = '';
    for (var i = 0; i < rating; i++) {
      starsHTML += '<i class="bi bi-star-fill"></i>';
    }
    return starsHTML;
  }
  
  // Fonction pour ajouter les témoignages à la structure HTML existante
  function addTestimonials() {
    var swiperWrapper = document.querySelector('.swiper-wrapper');
  
    testimonialsData.forEach(function(testimonial) {
      var html = `
        <div class="swiper-slide">
          <div class="testimonial-item">
            <div class="row gy-4 justify-content-center">
              <div class="col-lg-6">
                <div class="testimonial-content">
                  <p>
                    <i class="bi bi-quote quote-icon-left"></i>
                    <span>${testimonial.message}</span>
                    <i class="bi bi-quote quote-icon-right"></i>
                  </p>
                  <h3>${testimonial.name}</h3>
                  <h4>${testimonial.profession}</h4>
                  <div class="stars">
                    ${generateStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <div class="col-lg-2 text-center">
                <img src="${testimonial.image}" class="img-fluid testimonial-img" alt="Image du Témoin">
              </div>
            </div>
          </div>
        </div>
      `;
  
      swiperWrapper.innerHTML += html;
    });
  }
  
  // Appeler la fonction pour ajouter les témoignages une fois que le DOM est chargé
  document.addEventListener('DOMContentLoaded', function() {
    addTestimonials();
  });
  