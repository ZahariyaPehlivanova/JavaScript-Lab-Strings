function solve(array) {
    let products = [];
    let sum = 0;
    for(let i = 0;i < array.length;i+=2){
        let product = array[i];
        let money = Number(array[i+1])

        products.push(product);
        sum+=money;
    }
    console.log(`You purchased ${products.join(', ')} for a total sum of ${sum}`)
}
solve(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);