// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    } else {
        let newArr = [];
        matrix.forEach((item) => {
            if (matrix.indexOf(item) % 2 === 0) {
                newArr = newArr.concat(item);
            } else {
                newArr = newArr.concat(item.reverse());
            }
        });
        return newArr;
    }
};
