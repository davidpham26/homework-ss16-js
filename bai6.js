let monney = prompt("Nhập tiền Đô:");
let usd = parseFloat(monney);
let usdToVnd = usd * 25000;
document.write(`${usd} USD = ${usdToVnd.toLocaleString()} VND<br>`);
document.write(`${vnd} VND = ${(vnd / 25000).toFixed(2)} USD`);