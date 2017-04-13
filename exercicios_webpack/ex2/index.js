const produto = {
	nome: 'Produto A',
	preco: 333.33,
	desconto: 0.05
}

function clonar(objeto){
	return {...objeto}
}

const clone = clonar(produto);
console.log(clone);