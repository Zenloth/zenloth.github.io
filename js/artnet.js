var decimalBase1
var decimalBase0
var artnet
var dmxChans

//Decimal Base 1 Trigger
function decB1() {
  doMath();
}
//ARTNET Trigger
function AN(){
  doMath();
}
//Decimal Base 0 Trigger
function decB0() {
  decimalBase1 = document.getElementByID("ARTCalc-Decimal-B0").value + 1;
  doMath();
}
//Decimal DMX Channel Trigger
function DMXChan() {
  decimalBase1 = ceil(document.getElementByID("ARTCalc-DMXChannels").value / 512);
  doMath();
}



function doMath() {
  //Calculate ARTNet
  function calculateArtNet() {
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
    document.getElementByID("ARTCalc-Decimal-B1").value = decimalBase1;
    document.getElementByID("ARTCalc-Decimal-B0").value = decimalBase0;
    document.getElementByID("ARTCalc-DMXChannels").value = dmxChans;
  }
};
