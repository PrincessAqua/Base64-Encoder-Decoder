# Base64-Encoder-Decoder
This is a encoder & decoder from text to base64
the most of the program is basically a lot of nested loops and arrays

Its encode the text this way:

-->The user input a string
-->The string is converted into an array of characters
-->The array of caracters is converted into decimal -> binary format
-->The groups of bites are separen into groups of 6 bites
-->We "encode" those 6bits groups witch a switch case that containts the caracters from 0 to 63
-->The groups of 6 bits are saved into a character array
-->The character array is converted into a strin end then output

It may cause problems with the use of special characters like ñ, é, ', etc

I dont know how to make proper designs for now so the CSS is kinda weird and only works on desktop devices or everything blows up

Thats all, it was a funny project :)
