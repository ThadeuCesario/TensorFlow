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
		const tensor3d = tf.tensor3d([1,2,3,4], [2,2,1]);

		No tensor de quatro dimensões também podemos escrever da seguinte forma:
		const tensor4d = tf.tensor4d([1,2,3,4], [1, 2, 2, 1])

		No tensor de cinco dimensões também podemos escrever da seguinte forma:
		const tensor5d = tf.tensor5d([1,2,3,4], [1, 1, 2, 2, 1])

		No tensor de seis dimensões também podemos escrever da seguinte forma:
		const tensor6d = tf.tensor6d([1,2,3,4], [1, 1, 1, 2, 2, 1])
	*/
	const tensor2d = tf.tensor2d([1, 2, 3, 4], [2, 2]);
	const tensor3d = tf.tensor3d([[[1], [2]], [[3], [4]]]);
	const tensor4d = tf.tensor4d([[[[1], [2]], [[3], [4]]]]);
	const tensor5d = tf.tensor5d([[[[[1], [2]], [[3], [4]]]]]);
	const tensor6d = tf.tensor6d([[[[[[1], [2]], [[3], [4]]]]]]);

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

		Quatro dimensões
		${tensor4d.toString()}

		Cinco dimensões
		${tensor5d.toString()}

		Seis dimensões
		${tensor6d.toString()}
	`;

	exibir(txt);
}

const exibir = (str = '') => {
	document.getElementById('result').textContent = str;
}
