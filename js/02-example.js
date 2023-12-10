/*
  Add methods withdraw(amount, onSuccess, onError) to the account object and deposit(amount, onSuccess, onError), 
  where the first parameter is the amount of the operation, and second and third are callbacks.

  The withdraw method raises onError if amount is greater than TRANSACTION_LIMIT or this.balance, and onSuccess otherwise.
  Deposit method raises onError if amount is greater than TRANSACTION_LIMIT or less or either zero and onSuccess otherwise.
*/


const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],
  createTransaction(amount, type) {
		const transaction = {
			id: this.transactions.length,
			type: type,
			amount: amount
		};
		return transaction;
	},
  deposit(amount, onSuccess, onError) {
		if (amount > 0) {
			const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
			this.transactions.push(transaction);
			this.balance += amount;
      onSuccess("Money deposied successfully!");
		} else {
      onError("Not enough money in you account!");
    }
	},
  withdraw(amount, onSuccess, onError) {
		if (amount > 0) {
			if (amount > this.balance) {
        onError("Not enough money!");
			} else {
				const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
				this.transactions.push(transaction);
				this.balance -= amount;
        onSuccess("Money withdrawed successfully!");
			}
		}
	},
  getBalance() {
		return this.balance;
	},
  getTransactionDetails(id) {
		for (const transaction of this.transactions) {
			if (transaction.id === id) {
				return transaction;
			}
		}
	},
  getTransactionTotal(type) {
		let total = 0;
		for (const transaction of this.transactions) {
			if (transaction.type === type) {
				total += transaction.amount;
			}
		}
		return total;
	},
};

function handleSuccess(message) {
  console.log(`✅ Success! ${message}`);
}
function handleError(message) {
  console.log(`❌ Error! ${message}`);
}

account.deposit(1000, handleSuccess, handleError);
account.withdraw(1700, handleSuccess, handleError);
account.deposit(200, handleSuccess, handleError);

console.log(account.getBalance());
console.log(account.getTransactionDetails(1));

console.log(account.getTransactionTotal(Transaction.DEPOSIT));