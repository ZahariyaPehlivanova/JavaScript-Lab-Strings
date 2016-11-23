function solve(array) {
    let str = array[0];
    let words = array.slice(1);

    for (let current of words) {
        let replaced = '-'.repeat(current.length);
        while (str.indexOf(current) > -1){
            str = str.replace(current,replaced);
        }
    }
    console.log(str);
}
solve(['roses are red, violets are blue', ', violets are', 'red']);