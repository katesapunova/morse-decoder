const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
function decode(expr) {
    let splits = expr.split('');

    let size = 10; 
    let subarray = []; 
    for (let i = 0; i <Math.ceil(splits.length/size); i++){
        subarray[i] = splits.slice((i*size), (i*size) + size);
    }

    for (let i = 0; i <subarray.length; i++){
        subarray[i] = subarray[i].join('');
    }
    

    for (let i = 0; i <subarray.length; i++){
        subarray[i] = subarray[i].replaceAll('00', '');
        subarray[i] = subarray[i].replaceAll('10', '.');
        subarray[i] = subarray[i].replaceAll('11', '-');
        subarray[i] = subarray[i].replaceAll('**********', ' ');
    }
    
    for (let i = 0; i <subarray.length; i++){
        for (const [key, value] of Object.entries(MORSE_TABLE)) {
            if (subarray[i]===key) {subarray[i]=value;}
          }
    }


        subarray =subarray.join('');
    
return subarray;
}




module.exports = {
    decode
}