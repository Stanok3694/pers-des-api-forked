const standartMessage = "You have no data in database";

module.exports = checkResults = (results, message = standartMessage) => {
    return results.length != 0 ? results : message;
};