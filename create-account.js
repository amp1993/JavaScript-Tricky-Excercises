function createAccount(pin, amount = 0) {  
    let balance = amount;
    let currentPin = pin;

    return {
        checkBalance: function(inputPin) {
            if (inputPin !== currentPin) {
                return "Invalid PIN.";
            }
            return `$${balance}`;
        },
        deposit: function(inputPin, depositAmount) {
            if (inputPin !== currentPin) {
                return "Invalid PIN.";
            }
            balance += depositAmount;
            return `Succesfully deposited $${depositAmount}. Current balance: $${balance}.`;
        },
        withdraw: function(inputPin, withdrawalAmount) {
            if (inputPin !== currentPin) {
                return "Invalid PIN.";
            }
            if (withdrawalAmount > balance) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            }
            balance -= withdrawalAmount;
            return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${balance}.`;
        },
        changePin: function(oldPin, newPin) {
            if (oldPin !== currentPin) {
                return "Invalid PIN.";
            }
            currentPin = newPin;
            return "PIN successfully changed!";
        }
    };
}

module.exports = { createAccount };
