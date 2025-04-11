const navBar = document.getElementById("navbar");
const menuIcon = document.getElementById("menu-icon");
const navItem = document.getElementById("nav-item");


// function to add projects on the projectDiv dynamically
const projectDiv = document.getElementById("projectDiv")
const projects = [
  {
    name: "Priyarawsupplies.in",
    image:  "images/priya-enterprises.png",
    desc: "Ecommerce Web store",
    tech: ["WordPress","Woocommerce"],
    link: "https://priyarawsupplies.in/",
  },
  {
    name: "Soosoapy.in",
    image: "images/sosoapy.png",
    desc: "Ecommerce Web store",
    tech: ["WordPress","Woocommerce"],
    link: "https://soosoapy.in/",
  },
  {
    name: "Absorbentcotton.org",
    image: "images/inm.png",
    desc: "Company's Portfolio",
    tech: ["WordPress","Elementor"],
    link: "https://absorbentcotton.org/",
  },
  {
    name: "React Chat App",
    image: "images/react-chat-app.png",
    desc: "Frontend Project",
    tech: ["React","JavaScript","CSS"],
    link: "https://react-chat-app-0vk7.onrender.com/",
    code: "https://github.com/sahilsonvane/react-chat-app",
  },
  {
    name: "Food Delivery App",
    image: "images/mern-food-del-app.png",
    desc: "MERN Stack Project",
    tech: ["MERN","Javascript","CSS","HTML"],
    link: "https://food-delivery-app-zkmf.onrender.com/",
    code: "https://github.com/sahilsonvane/food-delivery-app",
  },
  {
    name: "React Blog App",
    image: "images/react-blog-app.png",
    desc: "Frontend Project",
    tech: ["React","JavaScript","Tailwindcss",],
    link: "https://react-blog-app-4vrc.onrender.com/",
    code: "https://github.com/sahilsonvane/react-blog-app",
  },
  {
    name: "30+ Js Projects",
    image: "images/mini-js-project.png",
    desc: "JavaScript Projects",
    tech: ["JavaScript","CSS","HTML"],
    link: "https://sahilsonvane.github.io/30-plus-mini-js-projects/",
    code: "https://github.com/sahilsonvane/30-plus-mini-js-projects",
  },
  {
    name: "Cv Maker",
    image: "images/cvmaker.png",
    desc: "A Cv builder Tool",
    tech: ["PHP","MySQL","Javascript"],
    link: "https://github.com/sahilsonvane/php-cv-maker-app",
    code: "https://github.com/sahilsonvane/php-cv-maker-app",
  },
  {
    name: "Projects of FCC",
    image: "images/fcc-projects.png",
    desc: "Responsive Web Designs",
    tech: ["JavaScript","CSS","HTML"],
    link: "https://sahilsonvane.github.io/projects-for-fcc/",
    code: "https://github.com/sahilsonvane/projects-for-fcc",
  },

]
projects.map((item,index)=>{
  projectDiv.innerHTML += `<div key=${index} class="relative s-shadow  rounded-md lg:rounded-xl fade-up">
          <img class="object-cover rounded-md lg:rounded-xl" src=${item.image} />
          <div class="foreground-overlay">
            <h2 class="text-primary text-base md:text-2xl my-1 md:my-2 font-bold">${item.name}</h2>
            <p class="text-txt-color text-sm md:text-base">${item.desc}</p>
            <div class="flex justify-center flex-wrap gap-1 my-1">
              ${item.tech.map((item) => `<span class="badge">${item}</span>`).join(" ")}
            </div>
            <div class="my-1 md:my-2 flex justify-center gap-2 w-full items-center">
            <a
              class="text-white text-xs md:text-sm bg-primary rounded my-1 px-1.5 md:px-3 py-1"
              href=${item.link}
              target="_blank"
            >
              View
            </a>
            ${item.code ? `<a
                class="text-white text-xs md:text-sm bg-primary rounded my-1 px-1.5 md:px-3 py-1"
                href="${item.code}"
                target="_blank "
              >
                Code</a
              >` : ""}
              </div>
          </div>
        </div>`
})

// function to add certificates on the container
const certificateDiv = document.getElementById("certificates")
const certificates = [
  {
    url: "images/fcc-certificate.png",
    name: "Responsive Web Desing"
  },
  {
    url: "images/fcc-js-certificate.png",
    name: "Javascript Algorithms and Data Structures"
  },
  {
    url: "images/fcc-frontend-certificate.png",
    name: "Frontend Development Libraries"
  },
  {
    url: "images/hackerrank-react-certificate.png",
    name: "Hackerrank React Accomplishment"
  },
  {
    url: "images/js-certificate.png",
    name: "Javascript Essential Program"
  },
  {
    url: "images/react-certificate.png",
    name: "React Certification Program"
  },
]


certificates.map((item,index)=> (
  certificateDiv.innerHTML += ` <div key=${index} class="h-32 md:h-52  lg:h-64 relative fade-up rounded-md lg:rounded-xl certificate-container s-shadow">
          <img
            class="w-full h-full object-cover object-center rounded-md lg:rounded-xl"
            src=${item.url}
            alt=${item.name+" image"}
          />
          <div class="foreground-overlay">
            <i class="popup-trigger fa fa-eye text-xl lg:text-3xl text-primary"></i>
            <p class="text-sm text-center lg:text-lg text-txt-color">${item.name}</p>
          </div>
        </div>`
))


document.addEventListener("scroll", () => {
  if (scrollY > 0) {
    navBar.classList.add("scroll");
  } else {
    navBar.classList.remove("scroll");
  }
});

menuIcon.addEventListener("change", (e) => {
  if (e.currentTarget.checked) {
    navItem.classList.add("nav-height");
  } else {
    navItem.classList.remove("nav-height");
  }
});

// function to toggle dark mode
const switchBtn = document.getElementById("switch-btn");

if (localStorage.getItem("theme-mode") == null) {
  localStorage.setItem("theme-mode", "light");
}

let localData = localStorage.getItem("theme-mode");

if (localData == "dark") {
  document.documentElement.classList.add("dark");
  switchBtn.checked = true;
} else if (localData == "light") {
  document.documentElement.classList.remove("dark");
  switchBtn.checked = false;
}

switchBtn.addEventListener("change", (e) => {
  if (e.currentTarget.checked) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme-mode", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme-mode", "light");
  }
});

// function for contact form

const clientName = document.getElementById("client-name");
const clientEmail = document.getElementById("client-email");
const clientMessage = document.getElementById("client-message");
const submit = document.getElementById("submit");
const form = document.getElementById("form");
const success = document.getElementById("success");
const error = document.getElementById("error");

function sendEmail() {
  const emailBody =
    " Name: " +
    clientName.value +
    " <br/> Email : " +
    clientEmail.value +
    " <br/> Message For Me : " +
    clientMessage.value;

  Email.send({
    SecureToken: "65c47473-c2aa-47e9-920f-c05aface3eef",
    To: "usershree20@gmail.com",
    From: "usershree20@gmail.com",
    Subject: "Message From Portfolio",
    Body: emailBody,
  }).then((message) => {
    if (message == "OK") {
      success.classList.remove("hidden");
      setTimeout(function () {
        success.classList.add("hidden");
      }, 6000);
    } else {
      error.classList.remove("hidden");
      error.innerText = message;
      setTimeout(function () {
        error.classList.add("hidden");
      }, 5000);
    }
  });
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (clientName.value == "" || clientEmail.value == "") {
    error.classList.remove("hidden");
    setTimeout(function () {
      error.classList.add("hidden");
    }, 5000);
  } else {
    sendEmail();
  }

  form.reset();
});



// function to enabel fade up animation ----

// function isElementInViewport(el) {
//   var rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// // Function to handle scroll and resize events
// function handleScrollResize() {
//   var elements = document.querySelectorAll('.fade-up');
//   elements.forEach(function (element) {
//     if (isElementInViewport(element)) {
//       element.classList.add('fade-up-visible');
//     }
//   });
// }

// // Listen for scroll and resize events
// window.addEventListener('scroll', handleScrollResize);
// window.addEventListener('resize', handleScrollResize);

// // Initial check in case elements are already visible on page load
// document.addEventListener('DOMContentLoaded', handleScrollResize);


document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the fade-up-visible class to trigger the fade-up animation
        entry.target.classList.add('fade-up-visible');

        // Check if the entry has a progress bar and animate it
        const progressBar = entry.target.querySelector('[id^="progress-"]');
        if (progressBar) {
          // Add the specific progress class (like progress-60) to animate the width
          const progressClass = progressBar.id;
          progressBar.classList.add(progressClass);
        }

        // Stop observing the entry after animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observe each .fade-up element
  document.querySelectorAll('.fade-up').forEach(element => {
    observer.observe(element);
  });
});




function animateCounter(element, start, end, duration) {
  let startTimestamp = null;

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.textContent = Math.floor(progress * (end - start) + start) + '%';
    
    // Synchronize the width of the progress bar with the counter
    const progressBar = document.getElementById(`progress-${end}`);
    if (progressBar) {
      progressBar.style.width = progress * end + '%';
    }

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  document.querySelectorAll('.fade-up').forEach((element) => {
    if (isElementInViewport(element) && !element.classList.contains('animated')) {
      element.classList.add('fade-up-visible', 'animated');
      
      const progressElement = element.querySelector('.progress-percentage');
      if (progressElement) {
        const endValue = parseInt(progressElement.getAttribute('data-percentage'));
        animateCounter(progressElement, 0, endValue, 2000);
      }
    }
  });
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Initial check in case elements are already visible on page load
handleScroll();

// Get all elements with the class 'popup-trigger'
const popupTriggers = document.querySelectorAll('.popup-trigger');

// Get the popup elements
const imagePopup = document.getElementById('image-popup');
const popupImage = document.getElementById('popup-image');
const closePopupButton = document.getElementById('close-popup');

// Add event listeners to each trigger
popupTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Get the corresponding image source
        const imgSrc = this.closest('.certificate-container').querySelector('img').src;
        
        // Set the popup image source to the clicked image source
        popupImage.src = imgSrc;
        
        // Show the popup
        imagePopup.classList.add('active');
    });
});

// Close the popup when the close button is clicked
closePopupButton.addEventListener('click', function() {
    imagePopup.classList.remove('active');
});

// Optional: Close the popup when clicking outside the image
imagePopup.addEventListener('click', function(event) {
    if (event.target === imagePopup) {
        imagePopup.classList.remove('active');
    }
});

