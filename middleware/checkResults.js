const standartMessage = "В базе данных нет информации по данному запросу!";

const checkResults = (results, message = standartMessage) => {
    return results && results.length != 0 ? results : message;
};

module.exports = checkResults;