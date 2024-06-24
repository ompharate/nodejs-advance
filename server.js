let numbers = [1,6,3,9,8,2];

const foodOrder = (type,numbers,callback) => {
    const even = numbers.map((number) => {
        if(number % 2 === 1) {
            return number;
        }
    })
    callback(even,type)
}

foodOrder(2,numbers,output);

function output(even,type) {
    console.log(even,type);
}