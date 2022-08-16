import * as encode from "./encode.js";
import * as decode from "./decode.js";


var userInput = document.getElementById("userTextArea");


var encodeButton = document.getElementById("encodeButton");
var decodeButton = document.getElementById("decodeButton");
var copyButton = document.getElementById("copyButton");


function encodeText()
{
    let userText = userInput.value;                           
    
    let userCharArray = encode.stringToCharArray(userText);                       
    let userTextSize = userCharArray.length;                  

    let userDecimalArray = encode.charArrayToDecArray(userCharArray);     
    let biteArray = encode.decArrayToBiteArray(userDecimalArray);            
    let binaryString = encode.biteArrayToString(biteArray);                        
    let arraysOf24Elements = encode.stringToMultiArray(binaryString);              
    let decMultiArray = encode.multiArayToDecArray(arraysOf24Elements);
    let arraysOf6Bites = encode.arraysOfSixBites(decMultiArray);
    let sixBitesGroups = encode.groupsOfSixBites(arraysOf6Bites);
    let finalCharArray = encode.bitesToCharArray(sixBitesGroups);

    if(!((userTextSize * 8) % 6 == 0))
    {
        encode.applyNullTerminators(finalCharArray,userTextSize)
    }

    let encodedString = finalCharArray.join("");

    document.getElementById("globalTextArea").innerHTML = encodedString;
}

function decodeText()
{
    let encodedText = userInput.value;

    let userCharArray = decode.encodedStringToArray(encodedText);
    let sixBiteArray = decode.charArrayToSixBiteArray(userCharArray);
    let binaryString = decode.sixBiteArrayToString(sixBiteArray);
    let binaryStringArray = decode.stringToBiteArray(binaryString);
    let mayorArray = decode.eightBiteGroups(binaryStringArray);
    decode.deleteNullBites(mayorArray,userCharArray);
    let eightBitArray = decode.eightBitGroup(mayorArray);
    let decimalArray = decode.toDecimalArray(eightBitArray);
    let newCharArray = decode.toCharArray(decimalArray);

    let decodedString = newCharArray.join("");
    document.getElementById("globalTextArea").innerHTML = decodedString;
  
}

function copyText()
{
  let input = document.getElementById("globalTextArea");
  input.select();
  document.execCommand("copy");
}

encodeButton.onclick = encodeText;
decodeButton.onclick = decodeText;
copyButton.onclick = copyText;
