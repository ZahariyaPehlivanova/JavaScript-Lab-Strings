function solve(array) {
    let pattern = "([A-Z][a-zA-Z]+) \- ([1-9][0-9]*) \- ([a-zA-Z0-9- ]+)";

    let output = [];
    for (let i = 0; i < array.length; i++) {
        let line = array[i];
        let regex = new RegExp(pattern, "g");
        let match = regex.exec(line);

        if(match){
           output.push("Name: " + match[1]);
            output.push("Position: " + match[3]);
            output.push("Salary: " + match[2]);
        }
    }
    console.log(output.join('\n'));
}
solve(['Isacc - 1000 – CEO',
'Ivan - 500 - Employee',
'Peter - 500 – Employee']
);


