function sendMessage() {
  var name = document.getElementById("MessageName").value;
  var number = document.getElementById("MessageNumber").value;
  var whatsappUrl = `https://wa.me/77005009598?text=Здравствуйте!,%0a*· Ф.И.О:* ${encodeURIComponent(name)}!; %0a*· Телефон:* ${encodeURIComponent(number)}`;
  window.open(whatsappUrl, '_blank');
}