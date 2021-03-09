let args = process.argv;
let slicedargs = args.slice(2,args.lenght);
console.log(slicedargs)

for(let i = 0; i < slicedargs.length; i++) {
    time = slicedargs[i] *1000
    setTimeout(() => {
        console.log(slicedargs[i])
        process.stdout.write('\x07');
    }, time);
}