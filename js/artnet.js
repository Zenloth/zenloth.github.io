var decimalBase1
var decimalBase0
var artnet
var dmxChans




//Decimal Base 1 Trigger
function decB1() {
  //Validation
    //Put whatever shit they've typed into the variable
  decimalBase1 = document.getElementById("ARTCalc-Decimal-B1").value;
    //If what they've typed isn't a number OR <1 OR >32,768 ragequit.
    //To add - get rid of decimals.
  if (isNaN(decimalBase1) || decimalBase1 < 1 || decimalBase1 > 32768 ) {
    alert("A standard 'Universe Number' should be a whole number between 1 and 32,768 (the limit of Art-Net 3).")
    return;
  } else {
  //Do the thing of making decimal value for calculations
    decimalBase1 = Number(decimalBase1) ;
    doMath();
  }

}
//ARTNET Trigger
function AN(){
  //Validation
  //Do the thing of making Decimal value
  decimalBase1 = parseInt(document.getElementById("ARTCalc-ARTNet").value,16);
  doMath();
}
//Decimal Base 0 Trigger
function decB0() {
  //Validation
    //Put whatever shit they've typed into the variable
    decimalBase0 = document.getElementById("ARTCalc-Decimal-B0").value
    //If what they've typed isn't a number OR <0 OR >32,767 ragequit.
    //To add - get rid of decimals.
  if (isNaN(decimalBase0) || decimalBase0 < 0 || decimalBase0 > 32767 ) {
    alert("A standard 'Base 0 Universe Number' should be a whole number between 0 and 32,767 (the limit of Art-Net 3).")
    return;
  } else{
  //Do the thing of making Decimal value
  decimalBase1 = Number(decimalBase0) + 1;
  doMath();
  }
}
//Decimal DMX Channel Trigger
function DMXChan() {
  //Validation
    //Put whatever shit they've typed into the variable
    dmxChans = document.getElementById("ARTCalc-DMXChannels").value
    //If what they've typed isn't a number OR <0 OR >32,767 ragequit.
    //To add - get rid of decimals.
    if (isNaN(decimalBase0) || decimalBase0 < 0 || decimalBase0 > (32768 * 512) ) {
      alert("This calculator supports DMX Channel amounts of whole numbers between 0 and 16,777,216 (the limit of Art-Net 3).")
      return;
    } else{
  //Do the thing of making Decimal value
  decimalBase1 = Math.ceil(dmxChans.value / 512);
  doMath();
  }
}



function doMath() {
  //Calculate ARTNet
  function calculateArtNet() {
    //Convert number to hex
    artnet = decimalBase1.toString(16);
    //Get that shit uppercase
    artnet = artnet.toUpperCase();

    artnet = artnet.padStart(4,"0"); //Limit artnet var to 5 chars with leading 0s if required

    //Formatting to XX:X:X  (Artnet NET:SUBNET:UNI)
    var myRe = /(\w{2})(\w)(\w)/; //This is the regex string to "match" to
    var myArray = artnet.match(myRe); //Generate an array based on the regex rule and string
    artnet = myArray.slice(1).join(':'); //Add ':' between array items and remove item [0] which is original string
      }

  //Calculate Decimal universe (base0)
  function calculateDecimalB0() {
    decimalBase0 = decimalBase1 - 1;
  }
  //Calculate Max DMX Channels
  function calculateMaxDMXChannels() {
    dmxChans = decimalBase1 * 512;

  }
  //Output the values
  function printANResults(){
    document.getElementById("ARTCalc-Decimal-B1").value = decimalBase1;
    document.getElementById("ARTCalc-ARTNet").value = artnet;
    document.getElementById("ARTCalc-Decimal-B0").value = decimalBase0;
    document.getElementById("ARTCalc-DMXChannels").value = dmxChans;
  }
  //Run the functions
  calculateArtNet();
  calculateDecimalB0();
  calculateMaxDMXChannels();
  printANResults();

};
