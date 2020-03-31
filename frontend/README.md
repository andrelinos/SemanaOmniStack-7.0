# SemanaOmniStack-7.0

## Sobre
- Layout web com base na página do Instagram

- Utilizando banco de dados [MongoDB](https://www.mongodb.com/)

### Dependências usadadas
```json
"dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "axios": "^0.19.2",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.4.1",
    "socket.io-client": "^2.3.0"
  },

  "devDependencies": {
    "babel-plugin-root-import": "^6.4.1",
    "customize-cra": "^0.9.1",
    "eslint": "^6.8.0",
    "eslint-config-airbnb": "^18.1.0",
    "eslint-config-prettier": "6.10.0",
    "eslint-import-resolver-babel-plugin-root-import": "^1.1.1",
    "eslint-plugin-import": "^2.20.2",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-prettier": "3.1.2",
    "eslint-plugin-react": "^7.19.0",
    "eslint-plugin-react-hooks": "^2.5.1",
    "prettier": "1.19.1",
    "react-app-rewired": "^2.1.5"
  }
```
![alt text](https://github.com/andrelinos/SemanaOmniStack-7.0/blob/master/frontend/screenshot/instarocket.png "Semana OmniStack 7.0")


# TODO
## Visual apenas
- [x] Interface web
- [x] Campo pesquisa
- [x] Nome do usuário
- [x] Localização
- [x] Mais opções
- [x] Postar de fotos
- [x] Curtir fotos
- [x] Enviar postagem
- [x] Salvar favorito
- [x] Quem curtiu
- [x] Lista de hashtags
- [x] Comentários / quem comentou
- [x] Publicar um comentário

## Funcionalidades

## Home
Rota: http://localhost:3333/
- [x] Nome do autor
- [x] Localização
- [x] Exibir imagem
- [x] Número de curtidas
- [ ] GFM task list 3-1
- [ ] Acessar página de comentários
- [ ] Enviar publicação
- [ ] Adicionar aos favoritos
- [ ] Curtir comentários
- [ ] Publicar um comentário

### Enviar nova imagem
Rota: http://localhost:3333/new
- [x] Publicar uma nova imagem
- [x] Autor da imagem
- [x] Local da imagem (manualmente)
- [x] Descrição da imagem
- [x] Hashtags
- [x] Salvando no banco

# Como baixar e preparar para o teste

### Clonando para sua máquina
- Clone o repositório:
```bash
  $ git clone git@github.com:andrelinos/SemanaOmniStack-7.0.git
```
- Acesse a pasta backdend e frontend, e execute nas duas o comando `yarn`. Aguarde finalizar a instalação dos pacotes.

### Executando projeto
Nota: Para executar os projetos, você precisa estar dentro da pasta do projeto
- Executando o backend usando o terminal
```bash
  yarn dev
```
- Executando o frontend usando o terminal
```bash
  yarn start
```

## Rotas do insomnia
### Criar novo post
- 1. Adiocione uma nova requisição POST
- 2. Coloque a URL http://localhost:3333/posts
- 3. Em Structure selecione Multipart Form
- 4. Adicione os campos
- - image -> Adicione uma foto
- - author -> Digite o nome
- - place -> Digite o local
- - description -> Digite a descrição
- - hashtags -> Adicione hashtags (#exemplo)
- Clique em Send

### Listar Posts
- 1. Adicione uma nova requisição GET
- 2. Coloque a URL http://localhost:3333/posts
- 3. Em Structure selecione No Body
- Clique em Send

### Dando like nas postagens
- 1. Adicione uma nova requisição POST
- 2. Coloque a URL http://localhost:3333/posts/id/like
   (ex: /posts/5e82a083070c5f571f26cf96/like)

Nota: O id, se refere ao id real da postagem no banco de dados.
- 3. Em Structure selecione No Body
- Clique em Send
