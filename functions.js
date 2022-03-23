
function sortString(Cars) {
    return Cars.sort()
}

function sortNumbers(Num) {
    return Num.sort((a, b) => a - b)
}

module.exports = {
    sortString,
    sortNumbers
}