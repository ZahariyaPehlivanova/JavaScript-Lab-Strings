function solve(input) {
    let sum = 0;
    let towns = [];
    for (let i = 0; i < input.length; i++) {
        let townInfo = input[i].split('|');
        let town = townInfo[1].trim();
        let income = Number(townInfo[2].trim());
        sum += income;
        towns.push(town);
    }
    console.log(towns.join(', '));
    console.log(sum);
}
solve(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);