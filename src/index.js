// You should implement your task here.

module.exports = function towelSort(matrix) {
    let newArr = [];
    console.log(matrix[1]);
    matrix.map((item) => {
        console.log(matrix.indexOf(item));
        if (matrix.indexOf(item) % 2 === 0) {
            newArr = newArr.concat(item);
        } else {
            newArr = newArr.concat(item.reverse());
        }

        console.log(newArr);
    });
    return newArr;
};
