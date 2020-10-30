window.onload = () =>{
    window.onscroll = function() {
        myFunction()
    };
    var navbar = document.querySelector(".header-menu")
    var sticky = navbar.offsetTop;
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("header-menu-fixed")
      } else {
        navbar.classList.remove("header-menu-fixed");
      }
    }

}
function openNav() {
    document.querySelector("#myTopnav").style.width ="250px";
    document.getElementById("desktop").style.left="250px";
    document.querySelector("#myTopnav").style.left="0px";
  }
  function closeNav() {
      console.log("đóng")
      document.querySelector("#myTopnav").style.width = "0";
      document.querySelector("#myTopnav").style.left="-250px";
      document.getElementById("desktop").style.left= "0";
      closeMobileMenuAo()
  }
  openMobileMenuAo = () =>{
      console.log("áo nam")
      document.querySelector(".topnav-menu-ao").style.left="0px";
      document.querySelector(".mobile-menu").style.left="-250px";
  }
  closeMobileMenuAo = () => {
      console.log("đóng áo")
      document.querySelector(".mobile-menu").style.left="0px";
      document.querySelector(".topnav-menu-ao").style.left="250px";
      
  }
  openMobileMenuQuan = () =>{
      console.log("quần nam")
      document.querySelector(".topnav-menu-quan").style.left="0px";
      document.querySelector(".mobile-menu").style.left="-250px";
  }
  closeMobileMenuQuan = () => {
      console.log("đóng quần")
      document.querySelector(".mobile-menu").style.left="0px";
      document.querySelector(".topnav-menu-quan").style.left="250px";
      
  }
  openMobileMenuItem = () =>{
      console.log("quần nam")
      document.querySelector(".topnav-menu-item").style.left="0px";
      document.querySelector(".mobile-menu").style.left="-250px";
  }
  closeMobileMenuItem = () => {
      console.log("đóng quần")
      document.querySelector(".mobile-menu").style.left="0px";
      document.querySelector(".topnav-menu-item").style.left="250px";
      
  }