
// Call to Action Functions
function callToActionEmail(){
    var getEmailBox = document.getElementById('email')
    
    if (getEmailBox.value.trim() === "") {
        console.log(`no email`);
        return null
    } else {
        event.preventDefault()
        console.log(`email entered`);
        emailCollect();
    }
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) {
      return parts.pop().split(";").shift();
    }
}

function emailCollect(){
    const csrftoken = getCookie('csrftoken');
    var userEmail = document.getElementById('cta')
    var emailAddress = document.getElementById('email')
    var emailValue = emailAddress.value
    var successMessage = document.getElementById('success-cta')


    const response = fetch('/EmailCollection/?email=' + emailValue, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
        },
       
    })

    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        
        }
        console.log(`this is the resposne status: ${response.status}`)
        
        return response.text()
    })
    .then(storageStatus => {
        console.log(`this is the strorageStatus: ${storageStatus}`)
        if (storageStatus === "Success") {

            console.log(`showing success-cta`);
            userEmail.classList = "d-none"
            userEmail.style = "display: none;";
            successMessage.style = "display: block;"; 

        } else if (storageStatus === "Error - could not subscribe user.") {
            console.log(`result from emailCollect is not true`)
        } 
    });
}

// Navbar hamburger menu 
const toggleButton = document.querySelector('.navbar-toggler');
const menu = document.querySelector('.collapse.navbar-collapse');
const nav = document.getElementById('mainNav')
let isMenuOpen = false;

toggleButton.addEventListener('click', function () {
  if (!isMenuOpen) {
    // Open the menu
    menu.style.height = '160px';
   
    nav.classList.add('white-bg');// Add the white background class
    isMenuOpen = true;
  } else {
    // Close the menu
    menu.style.height = '0';
   
    nav.classList.remove('white-bg') 
    isMenuOpen = false;
  }
});

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Adjust the scroll threshold as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

  
// Translation toggle functions
function englishLang() {
    event.preventDefault()
    console.log(`engLAng`)
    const toggleFr = document.querySelectorAll('.translate-toggle-FR')
    const toggleEn = document.querySelectorAll('.translate-toggle-EN')

    
    toggleFr.forEach((transToggle) => {
        if (transToggle.style.fontWeight !== null){
            toggleEn.forEach((transToggleEn) => {
                transToggleEn.style.fontWeight = 'bolder'
            });
            transToggle.style.fontWeight = null;
        }
    });

    
    
     
    const englishText = document.querySelectorAll('.text-ENG');
    const frenchText = document.querySelectorAll('.text-FR');
   
    frenchText.forEach((title) => {
        title.style="display: none !important;"
    });

    englishText.forEach((title) => {
        title.style="display: block;"
    });

    const englishTextCTA = document.querySelectorAll('.text-ENG-CTA');
    const frenchTextCTA = document.querySelectorAll('.text-FR-CTA');
   
    frenchTextCTA.forEach((title) => {
        title.style="display: none !important;"
    });

    englishTextCTA.forEach((title) => {
        title.style="display: flex;"
    });

    

    

  
}

function frenchLang() {
    event.preventDefault()
    console.log(`frenchLAng`)
    const toggleFr = document.querySelectorAll('.translate-toggle-FR')
    const toggleEn = document.querySelectorAll('.translate-toggle-EN')

    
  

    toggleEn.forEach((transToggle) => {
        if (transToggle.style.fontWeight !== null){
            toggleFr.forEach((transToggleEn) => {
                transToggleEn.style.fontWeight = 'bolder'
            });
            transToggle.style.fontWeight = null;
        }
    });
    
    const englishText = document.querySelectorAll('.text-ENG');
    const frenchText = document.querySelectorAll('.text-FR');
   

    englishText.forEach((title) => {
        title.style="display: none !important;"
    });

    frenchText.forEach((title) => {
        title.style="display: block;"
    });

    const englishTextCTA = document.querySelectorAll('.text-ENG-CTA');
    const frenchTextCTA = document.querySelectorAll('.text-FR-CTA');
   

    englishTextCTA.forEach((title) => {
        title.style="display: none !important;"
    });

    frenchTextCTA.forEach((title) => {
        title.style="display: flex;"
    });

   
}


