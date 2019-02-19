function userCard (index) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = index;
    let operationTime = new Date().toLocaleString('en-GB');
    
    function getCardOptions() {
        return console.log('Balance: ' + balance + '\n',
        + 'transactionLimit: ' + transactionLimit + '\n',
        + 'historyLogs: ' + historyLogs + '\n',
        + 'key: ' + key + '\n')
    }

    function putCredits(sum) {
        balance += sum;
        historyLogs.push({
            operationType: 'Received credits',
            credits: sum,
            operationTime: new Date().toLocaleString('en-GB')
        });
    }

}