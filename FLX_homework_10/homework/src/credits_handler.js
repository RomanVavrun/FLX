function userCard(index) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = index;

    function getCardOptions() {
        return console.log('Balance: ' + balance,
            + 'transactionLimit: ' + transactionLimit,
            + 'historyLogs: ' + historyLogs,
            + 'key: ' + key)
    }

    function putCredits(value) {
        balance += value;
        historyLogs.push({
            operationType: 'Received credits',
            credits: value,
            operationTime: new Date().toLocaleString('en-GB')
        });
    }

    function takeCredits(value) {
        if (value <= balance && value <= transactionLimit) {
            balance -= value;
            historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: value,
                operationTime: new Date().toLocaleString('en-GB')
            });
        } else if (value > balance) {
            console.log('You don\'t have enough money');
        } else {
            console.log('Your transaction limit is: ' + transactionLimit);
        }
    }

    function setTransactionLimit(value) {
        transactionLimit = value;
        historyLogs.push({
            operationType: 'Transaction limit change',
            credits: value,
            operationTime: new Date().toLocaleString('en-GB', { timeZone: 'UTC' })
        });
    }

    function transferCredits(value, card) {
        let tax = 0.5;
        let percentage = 100;
        if (value <= balance && value <= transactionLimit) {
            let transfer = value - value * tax / percentage;
            this.takeCredits(value);
            card.putCredits(transfer);

        } else if (value > balance) {
            console.log('You don\'t have enough money');
        } else {
            console.log('Your transaction limit is: ' + transactionLimit);
        }
    }

    return {
        getCardOptions: getCardOptions,
        putCredits: putCredits,
        takeCredits: takeCredits,
        setTransactionLimit: setTransactionLimit,
        transferCredits: transferCredits
    }
}

function UserAccount(userName) {
    let name = userName;
    let card = [];

    function addCard() {
        card.push(getCardByKey);
        let maxCard = 3;
        if (card.length > maxCard) {
            console.log('Maximum number of cards for the user is: ' + maxCard);
        }
    }

    function getCardByKey(key) {
        return userCard(key);
    }
    return {
        addCard: addCard,
        getCardByKey: getCardByKey
    }
}