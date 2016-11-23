function solve(input) {
    let pattern = /[0-9]{2}-[A-Z][a-z]{2}-[0-9]{4}/g;
    let dates = [];
    for(let currentSentence of input) {
        let match;
        while(match = pattern.exec(currentSentence)) {
            dates.push(match[0]);
        }
    }
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    for(let i of dates){
        let date = new Date(i);
        console.log(i + ` (Day: ${date.getDate()}, Month: ${monthNames[date.getMonth()]}, Year: ${date.getFullYear()})`);
    }
}
solve(['1-Jan-1999 is a valid date.',
    'So is 01-July-2000.',
    ' Ivo, 28-Sep-2016.'
    ]);