let fs = require('fs');

let artmapBuf = fs.readFileSync('./hello-world.artmap')
// let artmapBuf = fs.readFileSync('./test.artmap')


// let artmapStr = 'let map =`'+artmapBuf.toString()+'`';


let artmapStr = 'let map =`';

for ( const a of artmapBuf ) {

    let b = Buffer.from([a]).toString();

    //when 5C, then add one 5C behind
    if (b === '\\') b = '\\\\';
    artmapStr += b;
}
artmapStr += '`'


// console.log(artmapStr);
fs.writeFileSync('hello-world.js', artmapStr)
