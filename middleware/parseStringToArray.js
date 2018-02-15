module.exports = parseStringToArray = (str) => {
    const res = str.replace(/'/g, '"');
    return JSON.parse(res);
}