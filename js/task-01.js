
const items = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];

const logItems = function(array) {
for (let i=0; i < array.length; i++) {
    const message = ` ${i + 1} - ${array[i]}`;

    console.log(message);
}
};

logItems(items);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);