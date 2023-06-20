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
		total: order.total	
	};
	
	console.log(templateParams);

	emailjs.send(serviceID, templateID, templateParams, 'MKQSxiqqK7fzuds4X')
		.then((response) => {
			console.log('SEND EMAIL SUCCESS!', response.status, response.text);
		}, (err) => {
			console.log('SEND EMAIL FAILED...', err);
		});
}
export default sendEmail;