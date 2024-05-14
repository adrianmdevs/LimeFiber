//General Reactivity styles

 //Header styles
 document.addEventListener('DOMContentLoaded', function () {
    const openAccountButton = document.getElementById('openAccount');
    const navMenu = document.querySelector('.hidden.md\\:pb-8.md\\:flex');

    openAccountButton.addEventListener('click', function () {
        navMenu.classList.toggle('hidden');
    });
});
 //Header reactivity


//Carousels
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById('default-carousel');
    const carouselItems = carousel.querySelectorAll('[data-carousel-item]');
    const prevButton = carousel.querySelector('[data-carousel-prev]');
    const nextButton = carousel.querySelector('[data-carousel-next]');
    const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');
    const autoPlayDelay = 3000; // Delay between slides in milliseconds
    let autoPlayTimer;

    let currentIndex = 0;
    let isPaused = false;

    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides
        carouselItems.forEach(item => {
            item.classList.add('hidden');
        });

        // Show the slide at the given index
        carouselItems[index].classList.remove('hidden');
        
        // Update current index
        currentIndex = index;
        
        // Update indicators
        updateIndicators();
    }

    // Function to update the state of indicators
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.setAttribute('aria-current', 'true');
            } else {
                indicator.setAttribute('aria-current', 'false');
            }
        });
    }

    // Show the initial slide
    showSlide(currentIndex);

    // Function to advance to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    }

    // Start autoplay
    function startAutoPlay() {
        autoPlayTimer = setInterval(() => {
            if (!isPaused) {
                nextSlide();
            }
        }, autoPlayDelay);
    }

    // Stop autoplay
    function stopAutoPlay() {
        clearInterval(autoPlayTimer);
    }

    // Start autoplay when page loads
    startAutoPlay();

    // Event listener for previous button
    prevButton.addEventListener('click', function() {
        stopAutoPlay();
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentIndex);
        startAutoPlay();
    });

    // Event listener for next button
    nextButton.addEventListener('click', function() {
        stopAutoPlay();
        nextSlide();
        startAutoPlay();
    });

    // Event listener for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            stopAutoPlay();
            showSlide(index);
            startAutoPlay();
        });
    });

    // Event listeners for pause and resume
    carousel.addEventListener('mouseenter', function() {
        isPaused = true;
        stopAutoPlay();
    });

    carousel.addEventListener('mouseleave', function() {
        isPaused = false;
        startAutoPlay();
    });
});

//Mobile landing page carousel
// Get carousel items and indicators
const carouselItems = document.querySelectorAll('[hero-carousel-item]');
const carouselIndicators = document.querySelectorAll('[hero-carousel-slide-to]');

// Set initial active index
let activeIndex = 0;

// Function to set active item and indicator
function setActive(index) {
  // Hide all items
  carouselItems.forEach(item => {
    item.classList.add('hidden');
  });

  // Show the active item
  carouselItems[index].classList.remove('hidden');

  // Remove active class from all indicators
  carouselIndicators.forEach(indicator => {
    indicator.classList.remove('bg-main-color');
  });

  // Add active class to the current indicator
  carouselIndicators[index].classList.add('bg-main-color');

  // Update active index
  activeIndex = index;
}

// Set initial active item and indicator
setActive(activeIndex);

// Function to handle indicator click
function handleIndicatorClick(event) {
  // Get index from data attribute
  const index = parseInt(event.target.getAttribute('hero-carousel-slide-to'));

  // Set active item and indicator
  setActive(index);
}

// Add event listener to each indicator
carouselIndicators.forEach(indicator => {
  indicator.addEventListener('click', handleIndicatorClick);
});

 //<<<>>>>>
//Blog and News Carousel
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById('newsMobileCarousel');
    const items = carousel.querySelectorAll('[news-carousel-item]');
    const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');
    let currentIndex = 0;

    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides
        items.forEach(item => item.classList.add('hidden'));
        // Show the selected slide
        items[index].classList.remove('hidden');
        // Update current index
        currentIndex = index;
        // Update slider indicators
        updateIndicators();
    }

    // Function to update slider indicators
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('bg-gray-700');
                indicator.setAttribute('aria-current', 'true');
            } else {
                indicator.classList.remove('bg-gray-700');
                indicator.setAttribute('aria-current', 'false');
            }
        });
    }

    // Add click event listeners to slider indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            showSlide(index);
        });
    });

    // Autoplay carousel
     setInterval(function() {
        const nextIndex = (currentIndex + 1) % items.length;
        showSlide(nextIndex);
     }, 5000); // Adjust the interval as needed, in milliseconds

    // Show the initial slide (optional, if you want to start with a specific slide)
     showSlide(0);
});
//<<<>>>

//General Products and services carousel
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('[product-carousel="slide"]');
    const items = carousel.querySelectorAll('[product-carousel-item]');
    const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');
    let currentIndex = 0;
    let autoplayInterval;

    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides
        items.forEach(item => item.classList.add('hidden'));
        // Show the selected slide
        items[index].classList.remove('hidden');
        // Update current index
        currentIndex = index;
        // Update slider indicators
        updateIndicators();
    }

    // Function to update slider indicators
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('ring', 'ring-blue-500');
                indicator.setAttribute('aria-current', 'true');
            } else {
                indicator.classList.remove('ring', 'ring-blue-500');
                indicator.setAttribute('aria-current', 'false');
            }
        });
    }

    // Add click event listeners to slider indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            showSlide(index);
            clearInterval(autoplayInterval); // Stop autoplay when indicator is clicked
        });
    });

    // Autoplay carousel
    function autoplay() {
        autoplayInterval = setInterval(function() {
            const nextIndex = (currentIndex + 1) % items.length;
            showSlide(nextIndex);
        }, 5000); // Adjust the interval as needed, in milliseconds
    }

    // Start autoplay
    autoplay();

    // Pause autoplay on mouse hover (optional)
    carousel.addEventListener('mouseenter', function() {
        clearInterval(autoplayInterval);
    });

    // Resume autoplay on mouse leave (optional)
    carousel.addEventListener('mouseleave', function() {
        autoplay();
    });

    // Show the initial slide (optional, if you want to start with a specific slide)
    // showSlide(0);
});

 //Accordions
 
 const accordionButton = document.getElementById('accordionButton');
 const accordionIcon = document.getElementById('accordionIcon');
 const accordionContent = document.getElementById('accordionContent')

     accordionButton.addEventListener('click', function(){
       accordionContent.classList.toggle('hidden');
       accordionIcon.classList.toggle('rotate-90');
     });

// //Mobile sidebar
 //Close window >>
  document.addEventListener("DOMContentLoaded", function(){
    const closeButton = document.getElementById('closeButton');

    closeButton.addEventListener('click',function(){
        const window = document.querySelector('.font-Baloo.Da.2');
        window.classList.add('hidden');
    });
  });
 
  //Pagination >> BlogNewsMain
  const paginationContainer = document.getElementById('paginationContainer');
   
  const paginationLinks = paginationContainer.querySelectorAll('[data-page]');

  const handlePaginationClick = (event) =>{
    event.preventDefault();

    paginationLinks.forEach(link => {
        link.classList.remove('bg-main-color', 'text-white');
        link.classList.add('bg-white','text-gray-500');
    });

    const clickedLink = event.target.closest('[data-page]');
    clickedLink.classList.remove('bg-white','text-gray-500');
    clickedLink.classList.add('bg-main-color','text-white');
  };

  paginationLinks.forEach(link => {
    link.addEventListener('click',handlePaginationClick);
  });

//Products and services catalogue
 //Hover items
  const productImage = document.querySelector('.relative');
  const overlay = document.querySelector('.absolute');

  productImage.addEventListener('mouseover', function(){
    overlay.classList.remove('hidden');
  });

  productImage.addEventListener('mouseout', function(){
    overlay.classList.add('hidden');
  });
