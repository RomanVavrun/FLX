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
            console.log('You don\'t have enough money, current balance is: ' + balance);
        } else {
            console.log('You surpassed transaction limit, current limit is: ' + transactionLimit);
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
            console.log('You don\'t have enough money, current balance is ' + balance);
        } else {
            console.log('You surpassed transaction limit, current limit is: ' + transactionLimit);
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

function UserAccount(name) {
    const userData = {
        name: name,
        card: []
    };

    function addCard() {
        userData.card.push(getCardByKey);
        const maxOwnCard = 3;
        if (userData.card.length > maxOwnCard) {
            console.log('You exceeded max number of cards , you can have max ' + maxOwnCard + 'cards.');
        }
    }

    function getCardByKey(key) {
        return userCard(key);
    }
    return {
        addCard: addCard,
        getCardByKey: getCardByKey
    };
}