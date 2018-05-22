Para maior facilidade, e organização do projeto, é necessário ter o programa Docker instalado no computador.

Passo 1: Após clonar este projeto navegue até o diretório e execute o comando docker-compose build, para que as dependências sejam instaladas no container responsável pelo projeto.
 
Passo 2: Em seguida execute o comando docker-compose up para iniciar o servidor, e quando for parar, docker-compose down.

Se o comando docker-compose up retornar erro, execute o comando docker-compose run –rm server bash e digite npm install. Ao  finalizar a instalação, precione Control + C/ Control + D, e siga o passo 1 e 2 novamente.

Existem as seguintes APIs:

/operations/sum

/operations/average

Ambas recebem requisições POST, e devem seguir o padrão de envio:

{
	“value”: [xxx]
}

O nome da chave deverá obrigatoriamene ser “value”. 

Se não existir erros no envio do valor, a API retornara o seguinte objeto:

{
    "result": yyy
}

Para realizar os teste foi utilizado o mocha, para executá-lo, instale o mocha e rode o comando npm test