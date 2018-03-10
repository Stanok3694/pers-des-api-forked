const fs = require('fs');

const makeBackupFile = (data) => {
    const formattedData = JSON.stringify(data);
    const date = new Date(Date.now()).toLocaleDateString();
    
    fs.writeFile(`testData-${date}.json`, formattedData, 'utf8', err => {
        if (err) {
            console.log(err);
            throw e;
        }
        return 'testData successfully created';
    });
};

export default makeBackupFile;