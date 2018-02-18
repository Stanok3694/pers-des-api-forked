const standartMessage = "You have no data in database";

const checkResults = (results, message = standartMessage) => {
    return results && results.length != 0 ? results : message;
};

module.exports = checkResults;