module.exports = function(array, filterString) {
    array = array.filter(item => {
        return item.name.includes(filterString);
    });
    return array
}