## Dividida em 3 partes:

- API
- API local - Consumir dados (npx lite-server)
- Front - Exibição dos dados no Browser

### Dependencias utilizadas

- node (npm i express nodemon cors axios)
- nodemon - reload-real-time
- cors - permite o acesso do Front -> API
- axios - gerencia a resposta da nossa request
- express - ajuda a criar nossa API
- lite-serve - CRIA UM SERVIDOR LOCAL PARA TESTES
- 



### Conceitos:

- Express:
    - trabalha com rotas HTTP
    - Ajuda na padronização de API tornando-a Restful
    - https://www.youtube.com/watch?v=ghTrp1x_1As

#

### Async / Await
```js
// Eu espero ('await') a promessa do 'fetch' trazer a 'response' de dentro do ('db....').


async function getContent()
const response = await fetch('http://localhost:3265/')

// aguarda a transformação da 'response' em 'json' e joga em 'data'
            const data = await response.json();

// Obs: 'async await' trabalham sempre juntos!
```
#
### Cors
- Libera o acesso externo a API

### Axios x fetch
- Uma caixa que tem dentro o 'fetch'
- como se fosse um 'fetch' melhorado

```js
// A 'response' é a resposta do axios MAS eu tiro o { data } de dentro do response
        const { data } = await axios("https://jsonplaceholder.typicode.com/users");

        return res.json(data);  
```