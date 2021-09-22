document.getElementById('result').textContent = '';

const executar = () => {
	let txt = '';

	// tensor escalar
	const escalar = tf.scalar(1.5);

	// tensor unidimensional
	const tensor1d = tf.tensor1d([1, 2, 3]);

	// tensor multidimensional
	/* 
		Abaixo estamos implementando um tensor bidimensional formado por duas linhas
		e duas colunas. 
		|1 , 2|
		|3 , 4|

		Podemos escrever um tensor bidimensional da seguinte forma:
		const tensor2d = tf.tensor2d([[1,2], [3,4]]);

		Também temos um tensor tridimensional
		Podemos escrever um tensor tridimensional da seguinte forma:
		Os elementos 1,2,3,4 sendo 2 linhas 2 colunas e elementos unicos
		const tensor2d = tf.tensor3d([1,2,3,4], [2,2,1]);
	*/
	const tensor2d = tf.tensor2d([1, 2, 3, 4], [2, 2]);
	const tensor3d = tf.tensor3d([[[1], [2]], [[3], [4]]]);

	txt = `
		Tensor escalar:
		${escalar.toString()}

		Tensor Unidimensional:
		${tensor1d.toString()}

		Tensor Multidimensional:
		Duas dimensões
		${tensor2d.toString()}

		Três dimensões
		${tensor3d.toString()}
	`;

	exibir(txt);
}

const exibir = (str = '') => {
	document.getElementById('result').textContent = str;
}
