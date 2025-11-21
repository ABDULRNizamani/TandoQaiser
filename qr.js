import qrcode from "qrcode-terminal";

const address = "http://192.168.100.27/";
qrcode.generate(address, { small: true });
console.log("Scan to open:", address);
