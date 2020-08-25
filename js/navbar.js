window.onscroll = function () {youScrollMeRightRound()};

function youScrollMeRightRound() {
  //if user scrolls more than 60px from the top
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){
    document.getElementById("topnav").style.width = "103vw";
    document.getElementById("topnav").style.height = "5vh";
    document.getElementById("topnav-container").style.height = "5vh";
    document.getElementById("topnav-container").style.minHeight = "5vh";
    document.getElementById("topnav").style.marginTop = "0";

  } else {
    document.getElementById("topnav").style.width = "80vw";
    document.getElementById("topnav").style.height = "10vh";
    document.getElementById("topnav-container").style.height = "13vh";
    document.getElementById("topnav-container").style.minHeight = "70px";
    document.getElementById("topnav").style.marginTop = "3vh";
  }
}
