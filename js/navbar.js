window.onscroll = function () {youScrollMeRightRound()};

function youScrollMeRightRound() {
  //if user scrolls more than 60px from the top
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){
    document.getElementById("topnav").style.width = "110vw";
    document.getElementById("topnav").style.height = "6vh";
    document.getElementById("topnav").style.margin = "0 -5% auto -5%";

  } else {
    document.getElementById("topnav").style.width = "80vw";
    document.getElementById("topnav").style.height = "10vh";
    document.getElementById("topnav").style.margin = "3vh auto auto auto";
  }
}
