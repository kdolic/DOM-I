const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


/*********************   TOP    ************************** */

// Update the navbar content
const headerNav = document.querySelectorAll('nav a');
headerNav[0].textContent = siteContent["nav"]["nav-item-1"];
headerNav[1].textContent = siteContent["nav"]["nav-item-2"];
headerNav[2].textContent = siteContent["nav"]["nav-item-3"];
headerNav[3].textContent = siteContent["nav"]["nav-item-4"];
headerNav[4].textContent = siteContent["nav"]["nav-item-5"];
headerNav[5].textContent = siteContent["nav"]["nav-item-6"];
// Update navlinks to green color
const navGreen = document.querySelectorAll('nav a');
navGreen[0].style.color = "green";
navGreen[1].style.color = "green";
navGreen[2].style.color = "green";
navGreen[3].style.color = "green";
navGreen[4].style.color = "green";
navGreen[5].style.color = "green";
// Create new element for nav node
const navLink1 = document.createElement('a');
const navLink2 = document.createElement('a');
// Create new text for nav node
navLink1.textContent = 'Home';
navLink2.textContent = 'Location';
// Update nav by append/prepend new nodes
document.querySelector('nav').prepend(navLink1);
document.querySelector('nav').appendChild(navLink2);
// Update color to green
navLink1.style.color = "green";
navLink2.style.color = "green";


// Update h1
const heading = document.querySelector("h1");
heading.textContent = siteContent["cta"]["h1"];
// Update button
const btn = document.querySelector("button");
btn.textContent = siteContent["cta"]["button"];
// Update header image 
const headerImg = document.getElementById("cta-img");
headerImg.src = siteContent["cta"]["img-src"];



