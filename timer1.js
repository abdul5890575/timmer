let args = process.argv;
let slicedargs = args.slice(2,args.lenght);

if(slicedargs.length === 0){
    console.log('no arguments provided')
}

for(let i = 0; i < slicedargs.length; i++) {
    time = slicedargs[i] *1000
    if( slicedargs[i] < 0){
        console.log('cant put negative time')
        break
    } else if(isNaN(slicedargs[i]) === true){
        console.log('time must be in numbers')
        break
    }
    setTimeout(() => {
        console.log(slicedargs[i])
        process.stdout.write('\x07');
    }, time);
}