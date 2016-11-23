function solve([str]) {
        let regex = /[\w0-9_]+/g;
         let matches = str.match(regex);
    console.log(matches.join('|'));
}
solve(['_(Underscores) are also word characters']);