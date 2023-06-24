// Fetch header.html and insert it into the #header div
fetch('header.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('header').innerHTML = html;

    // Add the "active" class to the current navigation item
    var path = window.location.pathname;
    var currentPage = path.split('/').pop();
    if(currentPage===""){
      var navitem=document.getElementById("app")
      navitem.classList.add("active")
    }else{
    var navitem=document.getElementById(currentPage)
     navitem?.classList.add("active")
     var navbar=document.getElementById("navbar");
      navbar.classList.add("nothome")
    }
    const contactbtn=document.getElementById("contactbtn");
    console.log(contactbtn)
    contactbtn.addEventListener("click",()=>{
     window.location.href="/contact.html";
    });
    
  });

// Fetch footer.html and insert it into the #footer div
fetch('footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer').innerHTML = html;
  });
