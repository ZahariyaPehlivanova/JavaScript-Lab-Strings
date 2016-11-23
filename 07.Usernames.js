function solve(array) {
    let usernames = [];

    for(let i = 0;i < array.length;i++){
        let email = array[i].split('@');

        let name = email[0];
        let domain = email[1].split('.');
        let res = '';
        for(let i of domain){
             res+=i.substring(0,1);
        }
        name+='.'+res;
        usernames.push(name);
    }
    console.log(usernames.join(', '));
}
solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);