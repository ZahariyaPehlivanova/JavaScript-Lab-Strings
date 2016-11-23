function solve([str]) {

    let pattern = /\([\w ]+\)/g;
    let match = str.match(pattern);

    let result = [];
    for(let i of match.group(1)){
        console.log(i);
        let sub = i.substring(1, i.length - 1);
        result.push(sub)
    }
    console.log(result.join(', '));
}
solve(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']);