eslint
// Para corrigir erros e padronizar o código, principalemte com mais de 1 dev no projeto.

// Para passar e corrigir os erros.
npx eslint src --ext .ts,.tsx --fix

//Instalar o pacote de Routas.
npm i react-router-dom

//pacote de ícone do react
npm i phosphor-react

Criei um defaultTheme para usar como base no sistema
/src/@types/styled.d.ts

React Hook form
// Biblioteca para Controlled ou Uncontrolled das ações do usuário
npm i react-hoot-form
o "watch" monitora algum campo do imput ( src/pages/Home/index.tsx:20)


Biblioteca de Validação de campo do Form
npm i zod
npm i @hookform/resolvers // para integrar o zod ao hooks
src/pages/Home/index.tsx:3

// o Interval não pega os segundos de forma precisa, então pegaremos a diferença do tempo inical com o atual.
npm i date-fns

//Context API = Permite compartilhar informações entre vários complenentes ao mesmo tempo
import {createContext, useContext} from 'react'