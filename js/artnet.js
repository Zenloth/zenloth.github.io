var decimalBase1
var decimalBase0
var artnet
var dmxChans

//Decimal Base 1 Trigger
function decB1() {
  decimalBase1 = Number(document.getElementById("ARTCalc-Decimal-B1").value) ;
  doMath();
}
//ARTNET Trigger
function AN(){
  decimalBase1 = parseInt(document.getElementById("ARTCalc-ARTNet").value,16);
  doMath();
}
//Decimal Base 0 Trigger
function decB0() {
  decimalBase1 = Number(document.getElementById("ARTCalc-Decimal-B0").value) + 1;
  doMath();
}
//Decimal DMX Channel Trigger
function DMXChan() {
  decimalBase1 = Math.ceil(Number(document.getElementById("ARTCalc-DMXChannels").value) / 512);
  doMath();
}



function doMath() {
  //Calculate ARTNet
  function calculateArtNet() {
    artnet = decimalBase1.toString(16);
  }

  //Calculate Decimal universe (base0)
  function calculateDecimalB0() {
    decimalBase0 = decimalBase1 - 1;
  }
  //Calculate Max DMX Channels
  function calculateMaxDMXChannels() {
    dmxChans = decimalBase1 * 512;

  }
  function printANResults(){
    document.getElementById("ARTCalc-Decimal-B1").value = decimalBase1;
    document.getElementById("ARTCalc-ARTNet").value = artnet;
    document.getElementById("ARTCalc-Decimal-B0").value = decimalBase0;
    document.getElementById("ARTCalc-DMXChannels").value = dmxChans;
  }

  calculateArtNet();
  calculateDecimalB0();
  calculateMaxDMXChannels();
  printANResults();

};
