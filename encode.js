
//Convert a string into a character's array
//Example:
// string "Hello World" ->
// charArray = ['H','e','l','l','o',' ','w','o','r','l','d']
 export function stringToCharArray(string)
{
    return [...string]; //This process is automatic
}

//Conver a character's array into an array of their decimal representation
//Example:
//charArray = ['H','e','l','l','o'] ->
// decimalArray = [72,101,108,108,111]
export function charArrayToDecArray(charactersArray)
{
    let decimalArray = [];

    for( let index = 0; index < charactersArray.length; index++)
    {
        let decimalChar = charactersArray[index].charCodeAt(0);
        decimalArray.push(decimalChar);
    }

    return decimalArray;
}

//Convert a decimal array into an array of their bynary representation
//Example:
//decimalArray = [72,101,108,108,111] ->
//binaryArray = [1001000,1100101,1101100,1101100,1101111]
export function decArrayToBiteArray(decimalArray)
{
    let binaryArray = [];

    for(let index = 0; index < decimalArray.length; index++)
    {
        if (decimalArray[index] <= 63)
        {
            let decimalInBytes = (0 + '0' + decimalArray[index].toString(2).substr(-8));
            binaryArray.push(decimalInBytes);
        }
        else
        {
            let decimalInBytes = ( 0 + decimalArray[index].toString(2).substr(-8));
            binaryArray.push(decimalInBytes);
        }
        
    }
    
    return binaryArray;
}

//Convert a binary array into a string
//Example
//binaryArray = [1001000,1100101,1101100,1101100,1101111] ->
// string = "10010001100101110110011011001101111"
export function biteArrayToString(binaryArray)
{
    let binaryToString = binaryArray.join(""); 
    return binaryToString;
}

//This funcion converts a binary string into sets of 24 bits that save into an a mayor array
//(if the number of characters isn't divisible by 24 the rest of elements will be 0)
//Example:
//string = "10010001100101110110011011001101111" -> MultidimensionalArray(2) Array1: (24)['1','0','0','1','0','0','0','1','1','0','0','1','0','1','1','1','0','1','1','0','0','1','1','0']
//                                                                           Array2: (24)['1','1','0','0','1','1','0','1','1','1','1','0','0','0','0','0','0','0','0','0','0','0','0','0']
//

export function stringToMultiArray(binaryString)
{
    let biteArray = stringToCharArray(binaryString); 

    let finalArray = []
    let arrayCounter = 0;

    for(let index = 0; index<(Math.ceil(biteArray.length / 24)); index++)
    {
        let temporalArray = []; // array of 24 bits
        for( let j = 0; j < 24; j++)
        {
            if(biteArray[j+arrayCounter] == undefined)
            {
                temporalArray.push('0');
            }
            else
            {
                temporalArray.push(biteArray[j+arrayCounter]);
            }
        }
        finalArray.push(temporalArray);
        arrayCounter += 24;
    }
    return finalArray;
}

//Convert the arrays of binary characters of the multidimesional array into real bite numbers 
//Example:
//MultidimensionalArray(2) Array1: (24)['1','0','0','1','0','0','0','1','1','0','0','1','0','1','1','1','0','1','1','0','0','1','1','0']
//                         Array2: (24)['1','1','0','0','1','1','0','1','1','1','1','0','0','0','0','0','0','0','0','0','0','0','0','0']
// To: ->
//MultidimensionalArray(2) Array1: (24)[1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0]
//                         Array2: (24)[1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0]
export function multiArayToDecArray(multidimensionalArray)
{
    let decMultiArray = [];
    for(let index = 0; index < multidimensionalArray.length; index++)
    {
        let decimalArray = [];
        for(let j = 0; j < 24; j++)
        {
            let bite = multidimensionalArray[index][j];

            if (bite == 1)
            {
                decimalArray.push(1);
            }
            else
            {
                decimalArray.push(0);
            }
        }  
        decMultiArray.push(decimalArray);
    }

    return decMultiArray;
}

//Convert the arrays of 24 bites into 4 groups of 6 bites
//Example:
//MultidimensionalArray(2) Array1: (24)[1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0]
//                         Array2: (24)[1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0]
// To: ->
// MultidimensionalArray(2) Array1(4) Array(6)[0,1,0,0,1,0]
//                                    Array(6)[0,0,0,1,1,0]
//                                    Array(6)[0,1,0,1,0,1]
//                                    Array(6)[1,0,1,1,0,0]
//
//                          Array2(4) Array(6)[0,1,1,0,1,1]
//                                    Array(6)[0,0,0,1,1,0]
//                                    Array(6)[1,1,1,1,0,0]
//                                    Array(6)[0,0,0,0,0,0]
//
export function arraysOfSixBites(decMultiArray)
{
    let arrayLevel1 = [];

    for(let index = 0; index < decMultiArray.length; index++)
    {   
        let arrayLevel2 = [];
        let arrayLevel3Counter = 0;

        for( let j = 0; j < 24; j+=6)
        {
            let arrayLevel3 = [];
            for(let k = 0; k < 6; k++)
            {
                arrayLevel3.push(decMultiArray[index][k + arrayLevel3Counter]);
            }
            arrayLevel3Counter += 6;
            arrayLevel2.push(arrayLevel3);
        }
        arrayLevel1.push(arrayLevel2);
    }

    return arrayLevel1;
}

//Convert the arrays of six individual bites into groups of actually 6 bites
//Example:
// MultidimensionalArray(2) Array1(4) Array(6)[0,1,0,0,1,0]
//                                    Array(6)[0,0,0,1,1,0]
//                                    Array(6)[0,1,0,1,0,1]
//                                    Array(6)[1,0,1,1,0,0]
//
//                          Array2(4) Array(6)[0,1,1,0,1,1]
//                                    Array(6)[0,0,0,1,1,0]
//                                    Array(6)[1,1,1,1,0,0]
//                                    Array(6)[0,0,0,0,0,0]
// To: ->
// MultidimensionalArray(2) Array1(4)['010010','000110','010101','101100']   
//                          Array2(4)['011011','000110','111100','000000']              
export function groupsOfSixBites(arraysOfSixBites)
{
    let arrayLevel1 = [];

    for(let index = 0; index < arraysOfSixBites.length; index++)
    {
        let arrayLevel2 = [];
        for(let j = 0; j < 4; j++)
        {
            let aioSixBitesArray = arraysOfSixBites[index][j].join("");
            arrayLevel2.push(aioSixBitesArray);
        }
        arrayLevel1.push(arrayLevel2);
    }

    return arrayLevel1;

}

//This is where the encode happends, and here we will return
//an array of characters that conforms the encoded original text
export function bitesToCharArray(decimalArray)
{
    let charArray = [];

        for(let index = 0; index < decimalArray.length; index++)
        {
            for(let j = 0; j<4; j++)
            {
                let myChar = encodeSwitchCases(decimalArray[index][j])
                charArray.push(myChar);
            }
        }
      return charArray;
}

//Here we apply the null terminators if have
export function applyNullTerminators(charArray,userTextSize)
{
    let userTextSizeBites = userTextSize * 8;       
    
    let hasNullTermiantor = userTextSizeBites / 6; 
    let roundedNull = Math.round(hasNullTermiantor); 
        
        if(roundedNull < hasNullTermiantor)
        {
            //Null in length -2
            charArray[charArray.length-1] = '=';
            charArray[charArray.length-2] = '=';
        }
        else
        {
            charArray[charArray.length-1] = '=';
        }

}

//This assigns the respective character for the 6 binary digit in base64
export function encodeSwitchCases(string)
{
    let x = '=';

    switch(string)
    {
        case '000000': x = 'A'; break;
        case '000001': x = 'B'; break;
        case '000010': x = 'C'; break;
        case '000011': x = 'D'; break;
        case '000100': x = 'E'; break;
        case '000101': x = 'F'; break;
        case '000110': x = 'G'; break;
        case '000111': x = 'H'; break;
        case '001000': x = 'I'; break;
        case '001001': x = 'J'; break;
        case '001010': x = 'K'; break;
        case '001011': x = 'L'; break;
        case '001100': x = 'M'; break;
        case '001101': x = 'N'; break;
        case '001110': x = 'O'; break;
        case '001111': x = 'P'; break;
        case '010000': x = 'Q'; break;
        case '010001': x = 'R'; break;
        case '010010': x = 'S'; break;
        case '010011': x = 'T'; break;
        case '010100': x = 'U'; break;
        case '010101': x = 'V'; break;
        case '010110': x = 'W'; break;
        case '010111': x = 'X'; break;
        case '011000': x = 'Y'; break;
        case '011001': x = 'Z'; break;
        case '011010': x = 'a'; break;
        case '011011': x = 'b'; break;
        case '011100': x = 'c'; break;
        case '011101': x = 'd'; break;
        case '011110': x = 'e'; break;
        case '011111': x = 'f'; break;
        case '100000': x = 'g'; break;
        case '100001': x = 'h'; break;
        case '100010': x = 'i'; break;
        case '100011': x = 'j'; break;
        case '100100': x = 'k'; break;
        case '100101': x = 'l'; break;
        case '100110': x = 'm'; break;
        case '100111': x = 'n'; break;
        case '101000': x = 'o'; break;
        case '101001': x = 'p'; break;
        case '101010': x = 'q'; break;
        case '101011': x = 'r'; break;
        case '101100': x = 's'; break;
        case '101101': x = 't'; break;
        case '101110': x = 'u'; break;
        case '101111': x = 'v'; break;
        case '110000': x = 'w'; break;
        case '110001': x = 'x'; break;
        case '110010': x = 'y'; break;
        case '110011': x = 'z'; break;
        case '110100': x = '0'; break;
        case '110101': x = '1'; break;
        case '110110': x = '2'; break;
        case '110111': x = '3'; break;
        case '111000': x = '4'; break;
        case '111001': x = '5'; break;
        case '111010': x = '6'; break;
        case '111011': x = '7'; break;
        case '111100': x = '8'; break;
        case '111101': x = '9'; break;
        case '111110': x = '+'; break;
        case '111111': x = '/'; break;
        default: x = '?'; break;
    }
    return x;
}


