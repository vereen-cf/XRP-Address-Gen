function newripple() {
  var api = new ripple.RippleAPI();
  var account = api.generateAddress();
  document.getElementById("address").value = account.address;
  document.getElementById("secret").value = account.secret;
  console.log("Ripple Address: " + account.address + "\nRipple Secret: " + account.secret);
}