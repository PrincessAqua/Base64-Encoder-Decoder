
//Convert the string to an array of characters
export function encodedStringToArray(string)
{
    return [...string]; 

}

//Convert the array of characters into an array of 6bits groups
export function charArrayToSixBiteArray(charArray)
{
    let sixBiteArray = [];

    for(let index = 0; index < charArray.length; index++)
    {
        sixBiteArray.push(decodeSwitchCases(charArray[index]));
    }

    

    return sixBiteArray;
}

//Convert an array of 6bits groups into a single string
export function sixBiteArrayToString(sixBiteArray)
{
    let binaryString = sixBiteArray.join("");
    return binaryString;
}

//Convert the binary string into an array of individual integers
export function stringToBiteArray(binaryString)
{
    let binaryArray = [...binaryString];
    return binaryArray;
}

//Conver the binaryArray into groups of integer 8bits inside on a mayor array
export function eightBiteGroups(binaryArray)
{
    let mayorArray = [];

    for(let index = 0; index < binaryArray.length; index+= 8)
    {
        let eightBitArray = [];
        for(let j = 0; j<8; j++)
        {
            eightBitArray.push(binaryArray[j+index]);
        }
        mayorArray.push(eightBitArray);
    }

    return mayorArray;
}

//This function delete the empty indexes from our mayor array
//those empty indexes correspond to the null terminator from the encode text
export function deleteNullBites(mayorArray,charArray)
{

    for(let index = 0; index < charArray.length; index++)
    {
        if(charArray[index] == '=')
        {
            mayorArray.pop();
        }
    }
}

//Group the individual 8 independent bit sets array into an actually group of 8bits array
export function eightBitGroup(mayorArray)
{
    let newArray = [];

    for(let index = 0; index < mayorArray.length; index++)
    {
        let arrayOf8Bits = mayorArray[index].join("");
        newArray.push(arrayOf8Bits);
    }

    return newArray;
}

//Convert the group's of 8 bits into decimal representation
export function toDecimalArray(eightBitArray)
{
    let decimalArray = [];
    
    for(let index = 0; index<eightBitArray.length; index++)
    {
        let decimal = parseInt(eightBitArray[index],2);
        decimalArray.push(decimal);
    }

    return decimalArray;
}

//Convert the decimal array into an array of characters
export function toCharArray(decimalArray)
{
    let charArray = [];

    for(let index = 0; index < decimalArray.length; index++)
    {
        let char = String.fromCharCode(decimalArray[index]);
        charArray.push(char);
    }

    return charArray;
}


export function decodeSwitchCases(char)
{
    let x = '000000';

    switch(char)
    {
        case 'A': x = '000000'; break;
        case 'B': x = '000001'; break;
        case 'C': x = '000010'; break;
        case 'D': x = '000011'; break;
        case 'E': x = '000100'; break;
        case 'F': x = '000101'; break;
        case 'G': x = '000110'; break;
        case 'H': x = '000111'; break;
        case 'I': x = '001000'; break;
        case 'J': x = '001001'; break;
        case 'K': x = '001010'; break;
        case 'L': x = '001011'; break;
        case 'M': x = '001100'; break;
        case 'N': x = '001101'; break;
        case 'O': x = '001110'; break;
        case 'P': x = '001111'; break;
        case 'Q': x = '010000'; break;
        case 'R': x = '010001'; break;
        case 'S': x = '010010'; break;
        case 'T': x = '010011'; break;
        case 'U': x = '010100'; break;
        case 'V': x = '010101'; break;
        case 'W': x = '010110'; break;
        case 'X': x = '010111'; break;
        case 'Y': x = '011000'; break;
        case 'Z': x = '011001'; break;
        case 'a': x = '011010'; break;
        case 'b': x = '011011'; break;
        case 'c': x = '011100'; break;
        case 'd': x = '011101'; break;
        case 'e': x = '011110'; break;
        case 'f': x = '011111'; break;
        case 'g': x = '100000'; break;
        case 'h': x = '100001'; break;
        case 'i': x = '100010'; break;
        case 'j': x = '100011'; break;
        case 'k': x = '100100'; break;
        case 'l': x = '100101'; break;
        case 'm': x = '100110'; break;
        case 'n': x = '100111'; break;
        case 'o': x = '101000'; break;
        case 'p': x = '101001'; break;
        case 'q': x = '101010'; break;
        case 'r': x = '101011'; break;
        case 's': x = '101100'; break;
        case 't': x = '101101'; break;
        case 'u': x = '101110'; break;
        case 'v': x = '101111'; break;
        case 'w': x = '110000'; break;
        case 'x': x = '110001'; break;
        case 'y': x = '110010'; break;
        case 'z': x = '110011'; break;
        case '0': x = '110100'; break; 
        case '1': x = '110101'; break;
        case '2': x = '110110'; break;
        case '3': x = '110111'; break;
        case '4': x = '111000'; break;
        case '5': x = '111001'; break;
        case '6': x = '111010'; break;
        case '7': x = '111011'; break;
        case '8': x = '111100'; break;
        case '9': x = '111101'; break; 
        case '+': x = '111110'; break;
        case '/': x = '111111'; break;
        default: x = '000000'; break;
    }
    return x;
}

