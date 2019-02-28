/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    preferences.forEach(function (item, i) {

        let first_loves = preferences[i];

        let second_loves = preferences[first_loves-1];

        let third_loves = preferences[second_loves-1];

        if (third_loves === (i+1)) count++;

    });
    return Math.trunc(count/3);
};
