var decimalBase1
var decimalBase0
var artnet
var dmxChans
function decB1() { //Decimal Base 1 Trigger
  decimalBase1 = document.getElementById("ARTCalc-Decimal-B1").value; //Put whatever shit they've typed into the variable
  if (isNaN(decimalBase1) || decimalBase1 < 1 || decimalBase1 > 32768 ) { //If what they've typed isn't a number OR <1 OR >32,768 ragequit.  To add - get rid of decimals.
    alert("A standard 'Universe Number' should be a whole number between 1 and 32,768 (the limit of Art-Net 3).")
    return;
  } else {
    decimalBase1 = Number(decimalBase1); //Do the thing of making decimal value for calculations
    doMath();
  }
}
function AN(){ //ARTNET Trigger
  //Validation to add
  decimalBase1 = parseInt(document.getElementById("ARTCalc-ARTNet").value,16); //Do the thing of making Decimal value
  doMath();
}
function decB0() { //Decimal Base 0 Trigger
  decimalBase0 = document.getElementById("ARTCalc-Decimal-B0").value //Put whatever shit they've typed into the variable
  if (isNaN(decimalBase0) || decimalBase0 < 0 || decimalBase0 > 32767 ) { //If what they've typed isn't a number OR <0 OR >32,767 ragequit.  To add - get rid of decimals.
    alert("A standard 'Base 0 Universe Number' should be a whole number between 0 and 32,767 (the limit of Art-Net 3).")
    return;
  } else{
  decimalBase1 = Number(decimalBase0) + 1; //Do the thing of making Decimal value
  doMath();
  }
}
function DMXChan() { //Decimal DMX Channel Trigger
    dmxChans = document.getElementById("ARTCalc-DMXChannels").value //Put whatever shit they've typed into the variable.
    if (isNaN(decimalBase0) || decimalBase0 < 0 || decimalBase0 > (32768 * 512) ) { //If what they've typed isn't a number OR <1 OR >32,768 * 512 (theoretical channel limit), ragequit.  To add - get rid of decimals.
      alert("This calculator supports DMX Channel amounts of whole numbers between 0 and 16,777,216 (the limit of Art-Net 3).")
      return;
    } else{
  decimalBase1 = Math.ceil(dmxChans.value / 512); //Do the thing of making Decimal value
  doMath();
  }
}
function doMath() {
  function calculateArtNet() { //Calculate ARTNet
    artnet = decimalBase1.toString(16); //Convert number to hex
    artnet = artnet.toUpperCase(); //Get that shit uppercase
    artnet = artnet.padStart(4,"0"); //Limit artnet var to 5 chars with leading 0s if required
    /**
     * Formatting to XX:X:X  (Artnet NET:SUBNET:UNI)
     */
    var myRe = /(\w{2})(\w)(\w)/; //This is the regex string to "match" to
    var myArray = artnet.match(myRe); //Generate an array based on the regex rule and string
    artnet = myArray.slice(1).join(':'); //Add ':' between array items and remove item [0] which is original string
      }
  function calculateDecimalB0() { //Calculate Decimal universe (base0)
    decimalBase0 = decimalBase1 - 1;
  }
  function calculateMaxDMXChannels() { //Calculate Max DMX Channels
    dmxChans = decimalBase1 * 512;
  }
  function printANResults(){ //Output the values
    document.getElementById("ARTCalc-Decimal-B1").value = decimalBase1;
    document.getElementById("ARTCalc-ARTNet").value = artnet;
    document.getElementById("ARTCalc-Decimal-B0").value = decimalBase0;
    document.getElementById("ARTCalc-DMXChannels").value = dmxChans;
  }
  /**
   * Run the calculations
   */
  calculateArtNet();
  calculateDecimalB0();
  calculateMaxDMXChannels();
  printANResults();
};
