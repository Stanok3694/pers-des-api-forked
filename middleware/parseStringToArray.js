const parseStringToArray = (str) => {
    const res = str.replace(/'/g, '"');
    return JSON.parse(res);
}

module.exports = parseStringToArray;