var totalShoppedPrice;
var shoppedItem;

$(document).on("click","#product-submit",function() {
	shoppedItem = JSON.parse(localStorage.getItem('shopped'));
	totalShoppedPrice = JSON.parse(localStorage.getItem('totalPrice'));
	
	var userInformation = {
		customerName : $("#name").val(),
		customerEmail : $("#email").val(),
		customerMobile : $("#mobNum").val(),
		customerAddress : $("#address").val()
	}

var mailTemplate = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Le marche de garlande</title></head><body><div style="background-position: top;height: auto;width: 600px;background-image: url(http://lemarchedegarlande.com/assets/img/white-background.png);background-size: contain;min-height: 500px;margin: auto;text-align: center;"><span style="background-image: url(http://lemarchedegarlande.com/assets/img/logo.png);background-size: contain;width: 80px;height: 80px;background-repeat: no-repeat;margin: auto;position: relative;margin-top: 40px;display: inline-block"></span><h4 style="text-transform: uppercase;color:#330867;font-size: 30px;margin: 10px;">Le Marche De Garlande</h4>';
mailTemplate += '<table style="width: 100%; margin: 55px auto;"><thead style="font-family: \'Montserrat\',\'Helvetica Neue\',Helvetica,Arial,sans-serif; font-weight: normal; text-transform: uppercase; font-size: 24px; color: #caad50; background: #404040; text-align: center;"><tr style="height: 30px;border: 1px solid #caad59;font-size: 10px;text-transform: initial;"><td style="border: 1px solid #caad59; width: 33%;">Nom du client</td><td style="border: 1px solid #caad59; width: 33%;">Numéro de contact client</td><td style="border: 1px solid #caad59; width: 33%;">Adresse du client</td></tr></thead><tbody style="text-align: center; font-size: 19px; color: #3d4b63; border: 1px solid #caad50;"><tr style="border: 1px solid #caad59; min-height: 30px;height: auto;font-size: 13px;"><td style="border: 1px solid #caad59;">'+userInformation.customerName+'</td><td style="border: 1px solid #caad59;">'+userInformation.customerMobile+'</td><td style="border: 1px solid #caad59;">'+userInformation.customerAddress+'</td></tr></tbody></table>';
mailTemplate += '<table style="width: 100%; margin: 55px auto;"><thead style="font-family: \'Montserrat\',\'Helvetica Neue\',Helvetica,Arial,sans-serif; font-weight: normal; text-transform: uppercase; font-size: 24px; color: #caad50; background: #3d4b63; text-align: center;"><tr style="height: 30px; border: 1px solid #caad59;font-size: 14px;"><td style="border: 1px solid #caad59; width: 33%;">Produit</td><td style="border: 1px solid #caad59; width: 33%;">Quantité</td><td style="border: 1px solid #caad59; width: 33%;">Prix ​​approximatif</td></tr></thead><tbody style="text-align: center; font-size: 19px; color: #3d4b63; border: 1px solid #caad50;">';
var tableDataContent = "";
for(var i=0; i < shoppedItem.length; i++) {
	tableDataContent += '<tr style="border: 1px solid #caad59; min-height: 30px;height: auto;font-size: 14px;"><td style="border: 1px solid #caad59;">'+shoppedItem[i].product_name+'</td><td style="border: 1px solid #caad59;">'+shoppedItem[i].quantity+'</td><td style="border: 1px solid #caad59;">'+shoppedItem[i].price+' €</td></tr>'; 	
}
mailTemplate += tableDataContent;
mailTemplate += '</tbody></table>';
mailTemplate += '<div style="text-align: right;">Prix ​​total approximatif:<div class="md-chip md-chip-raised" style="margin: 0 5px 3px 0;box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);height: 32px;line-height: 32px;display: inline-block;background: #e0e0e0;padding: 0 12px;border-radius: 32px;font-size: 13px;"><div class="md-chip-icon" style="display: block;float: left;background: #3d4b63;width: 32px;border-radius: 50%;text-align: center;color: #caad59;margin: 0 8px 0 -12px;height: 32px;line-height: 32px;position: relative;left: -10px;">€</div>'+totalShoppedPrice+'</div></div></div></body></html>';
	sendEmail(userInformation,mailTemplate);
});

function sendEmail(userInformation,mailTemplate) {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "lemarchedegarlande007@gmail.com",
	Password : "lemarche007$",
	To : userInformation.customerEmail,
	Cc : "lemarchedegarlande007@gmail.com",
	From : "lemarchedegarlande007@gmail.com",
	Subject : "Product Order",
	Body : mailTemplate,
	}).then(
		console.log("Mail has been successfully sent")
	);
}