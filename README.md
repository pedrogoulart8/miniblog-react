## Projeto responsivo que apresenta um blog simulando o instagram.

### Tecnologias Utilizadas:
React
JavaScript
Firebase
HTML
CSS

### Este projeto demonstra como é possível utilizar o Firebase para criar um sistema de autenticação em um projeto React. 
Os hooks utilizados permitem gerenciar os dados no Firebase de forma eficiente e intuitiva. Com esse sistema, é possível criar novos usuários, autenticá-los, permitir login e logout e criar posts.

____________________________________________

![BLOG1](https://user-images.githubusercontent.com/116767490/233647092-a2877964-bf3a-4db7-b8e0-4a20669e2f6a.png)
![BLOG2](https://user-images.githubusercontent.com/116767490/233647094-ef994070-0e82-48dd-8b08-d281435371db.png)



## 1 - CRIAÇÃO DE USUÁRIO

Primeiro criei um form onde o objetivo é armazenar os dados digitados pelo usuário dentro do firebase, e, caso tenha algum erro, mostrar este erro abaixo do botão de cadastro.

Criada um component para area de cadastro ('Register.js') e um outro component utilizando o pacote do firebase para inserir o Firebase Authentication (UseAuthentication.js), que permite o usuário se autentificar usando email e senha, conta do google e etc.

Temos a função assincrona 'createUser' que primeiro cria um novo usuário com endereço de email e senha (createUserWithEmailAndPassword). Utilizei como parametro a const 'user' que está dentro de 'Register.js'. 
Ou seja, essa função irá preencher os dados de email e senha utilizando os dados da const 'user'.

Se a criação do usuário for bem-sucedida, a função 'updateProfile' é chamada para atualizar o nome de exibição do usuário.
Em caso de erro, inserimos os erros definidos pela let 'systemErrorMessage' embaixo do botão do formulário.

Criei o useEffect para inserir 'true' dentro de 'cancelled', assim que o usuário sair dessa pagina.  Importante para garantir que a função 'createUser' não continue sendo executada.

Retornamos {auth, createUser, error, loading} para que possamos utiliza-los dentro do component 'Register.js'


## 2 - AUTENTICAÇÃO DE USUÁRIO 

Utilizado o 'createContext' para criar um novo contexto. Este novo contexto estará armazenado na const 'AuthContext'.

O component AuthProvider recebe 2 parâmetros (children, value) e será responsável por fornecer o contexto de autenticação para todos os componentes do projeto.
'children' representa os componentes filhos que serão renderizados dentro desse componente.
'value' representa o valor que será armazenado no contexto de autenticação.

Dentro da funçao useAuthValue, que poderá ser utilizada por qualquer componente filho do 'AuthProvider', retorna o valor do contexto de autenticação.

Para controlarmos se o usuário foi alterado, utilizamos o 'onAuthStateChanged' fornecido pelo firebase, isso dentro de 'App.js'.

Então sempre que 'auth' for alterado, será chamado o 'useEffect' com a função de observar o estado de autenticação do usuário e enviar um novo valor para 'user' de acordo com esse novo estado.

Depois passamos esse {user} como value para o '<AuthProvider>' que está englobando todo o meu projeto com seus components children.


## 3- LOGIN

Dentro do component 'useAuthentication' chamamos uma função assincrona de nome 'login' que recebe um objeto de dados como argumento.
Função responsável por autenticar o usuario, utilizando o e-mail e  senha do mesmo.

Acionei um bloco de try-catch para acionar a função 'SignInWithEmailAndPassword' do firebase, que tem como objetivo verificar se o e-mail e senha do usuário correspondem a dados armazenados no banco de dados.

Se a autenticação falhar, retorna para o usuário uma mensagem de erro.


## 4 - LOGOUT

Criei uma função de logout que chama o 'signOut' do firebase utilizando como parametro '(auth)'.
Em resumo, quando o usuario clica no botão de sair, os valores de 'auth' se alteram e a função useEffect é chamada, informando que o 'user' agora está como undefined e retomando todos os outros elementos de navegação antes bloqueados, como 'login' e 'cadastrar'



## 5 - CRIANDO POSTS

Criei um formulário solicitando titulo, url da imagem, texto e tags.

Para adicionar esses dados no firebase, foi criado o hook 'useInsertDocument'

Os dados fornecidos pelo usuário são armazenados no banco de dados do firebase e exibidos na Home.

Os dados do post podem ser excluidos ou modificados, para isso foi criado os hooks 'useDeleteDocument' e 'useUpdateDocument', onde utilizamos propriedades do firestore para essas ações.
