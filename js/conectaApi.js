async function listaVideos() {
  //cria funcao assincrona utilizando o async
  const conexao = await fetch("http://localhost:3000/videos"); //usa o fetch para conseguir acesso ao servidor local
  const conexaoConvertida = await conexao.json(); //usa o método .json() para converter a API para json
  return conexaoConvertida;
}

export const conectaApi = {
  listaVideos,
};
