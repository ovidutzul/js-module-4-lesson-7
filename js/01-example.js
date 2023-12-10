/*
	Write the following functions:

	- createProduct(obj, callback) - accepts a product object without an id, and also callback.
		The function creates a product object by adding a unique identifier to it in property id and calls the callback passing it the created object.
	- logProduct(product) - callback accepting a product object and logging it to console
	- logTotalPrice(product) - callback receiving product object and logging the total value of the item in the console
*/

const apple = {
	name: "🍎",
	price: 30,
	quantity: 3
};

const lemon = {
	name: "🍋",
	price: 20,
	quantity: 5
};

const createProduct = (obj, callback) => {
	const product = { ...obj, id: Date.now() };
	callback(product);
};

const logProduct = (product) => {
	console.log(product);
};

const logTotalPrice = (product) => {
	console.log(product.price * product.quantity);
};

createProduct(apple, logProduct);
createProduct(lemon, logTotalPrice);