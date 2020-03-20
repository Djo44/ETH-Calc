fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD')
	.then(res => res.json())
	.then(res => (x = res))
	.then(res => console.log(x))
	.then(res => (document.getElementById('paragraf').innerHTML = '$' + x.USD))
	.then(res => (document.getElementById('eth').innerHTML = ethPoziv(x.USD).toFixed(5)));

const ethPoziv = arg1 => {
	let cena = prompt('unestite Amount in $ minus fees');
	return cena / arg1 + 0.005;
};

function copyText() {
	document.getElementById('eth').select();
	document.execCommand('copy');
}
