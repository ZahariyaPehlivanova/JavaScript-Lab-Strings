function solve(input){
    let text = input[0];
    let pattern = /[-+]?[0-9]+\.?([0-9]+)?/g;
    let result = text.match(pattern);

    for(let a of result){
        let offset = Number(text.indexOf(a) * a);
        text.indexOf(a);
        console.log(offset);
       // console.log(a);
    }
}
solve(['Moar t3xt w1th 99 numbers in 17. C00l numb3rs 411 4rr0und.']);