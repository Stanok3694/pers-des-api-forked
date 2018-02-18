const standartMessage = "You have no data in database";

const checkResults = (results, message = standartMessage) => {
    return results.length != 0 ? results : message;
};

module.exports = checkResults;