const makeList = () => {
    const numbers = new Set();
    const list = [];
    while( list.length < 10000 ) {
        const random = Math.floor(Math.random() * 10000) + 1;
        if( !numbers.has(random) ) {
            list.push(random);
            numbers.add(random);
        }
    }
    return list;
};
const finalList = makeList();
console.log(finalList.join(', '));