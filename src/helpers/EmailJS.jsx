import emailjs from '@emailjs/browser';

const serviceID = 'default_service';
const templateID = 'template_d6gxsog';



const sendEmail = (order, orderId) => {

	const templateParams = {
		orderID: orderId,
		name: order.buyer.name,
		email: order.buyer.email,
		address: order.buyer.address,
		city: order.buyer.city,
		province: order.buyer.province,
		country: order.buyer.country,
		postalCode: order.buyer.postalCode,
		itemsCount: order.itemsCount,
		date: order.date,
		total: `$${order.total}`
	};

	for (let i = 0; i < order.items.length; i++) {
		const product = order.items[i];
		templateParams[`product${i + 1}`] = {
			productName: product.title,
			price: `Price: $${product.price.toFixed(2)}`,
			quantity: `Quantity: ${product.quantity}`,
			subTotal: `Subtotal: $${product.quantity * product.price.toFixed(2)}`,
			img: product.img
		};
	}

	
	emailjs.send(serviceID, templateID, templateParams, 'MKQSxiqqK7fzuds4X')
		.then((response) => {
			console.log('SEND EMAIL SUCCESS!', response.status, response.text);
		}, (err) => {
			console.log('SEND EMAIL FAILED...', err);
		});
}
export default sendEmail;