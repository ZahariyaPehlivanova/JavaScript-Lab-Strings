function solve([input]) {
    let pattern = /([^(),;\.\s]+)/g;
    let result = input.match(pattern);
    console.log(result.join('\n'));
}
solve(['let sum = 4 * 4,b = "wow";']);