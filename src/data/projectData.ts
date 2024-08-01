import lojaZapImg from '../assets/lojaZap.png';
import webCarros from '../assets/webCarros.png';
import ecommerce from '../assets/ecommerce.png';
import devCurrency from '../assets/devCurrency.png';
import primeFlix from '../assets/prime Flix.png';

import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    imgSrc: lojaZapImg,
    name: "LojaZap",
    description: "LojaZap é um projeto de e-commerce que simula uma loja online com funcionalidades de busca e compra de produtos, desenvolvida com React, TypeScript e Tailwind CSS.",
    gitLink: "https://github.com/mathiasfuhr/projeto-Sushi",
    liveLink: "https://sushizap.vercel.app/",
  },
  {
    imgSrc: webCarros,
    name: "WebCarros",
    description: "WebCarros é uma aplicação de compra e venda de veículos, desenvolvida com TypeScript, Firebase e Zod para validação de dados. O projeto inclui funcionalidades de listagem e filtragem de carros, com autenticação e armazenamento em tempo real.",
    gitLink: "https://github.com/mathiasfuhr/webCarros",
    liveLink: "https://web-carros-theta.vercel.app/",
  },
  {
    imgSrc: ecommerce,
    name: "E-commerce",
    description: "E-commerce é um projeto de loja online com recursos para gerenciamento de produtos e um carrinho de compras. Desenvolvido com React e Tailwind CSS, o projeto permite aos usuários adicionar produtos ao carrinho e gerenciar suas escolhas, mas não inclui funcionalidades de pagamento.",
    gitLink: "https://github.com/mathiasfuhr/carrinho-ecommerce",
    liveLink: "https://carrinho-ecommerce.netlify.app",
  },
  {
    imgSrc: devCurrency,
    name: "DevCurrency",
    description: "DevCurrency é uma aplicação de conversão de criptomoedas, desenvolvida com React e TypeScript. O projeto utiliza uma API para obter as taxas de câmbio mais recentes e oferece funcionalidades básicas de conversão de valores.",
    gitLink: "https://github.com/mathiasfuhr/cripto",
    liveLink: "https://criptodevcurrency.netlify.app/",
  },
  {
    imgSrc: primeFlix,
    name: "PrimeFlix",
    description: "PrimeFlix é uma aplicação que lista filmes usando uma API e permite aos usuários salvar filmes em uma lista pessoal. Desenvolvido com React e Tailwind CSS, o projeto oferece uma interface intuitiva para explorar e gerenciar uma coleção de filmes.",
    gitLink: "https://github.com/mathiasfuhr/filmes-react-primeflix",
    liveLink: "https://primeflix-lancamentos.netlify.app/",
  },
];
