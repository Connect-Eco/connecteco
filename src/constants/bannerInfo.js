function gerarIdUnico() {
  return "id-" + Math.random().toString(36).substr(2, 9);
}

const bannerInfo = [
  {
    title: "Encontre pontos de reciclagem perto de você!",
    description: "Para um futuro sustentável. Veja onde reciclar!",
    id: gerarIdUnico(),
    src: "/BannerOne.png",
    alt: "Peneus para reciclar",
    width: 607,
    height: 811,
    className: "banner__image_object-contain",
  },
  {
    title: "Junte-se a Nós por um Planeta Sustentável.",
    description: "Fique por dentro de todas as novidades e informações sobre reciclagem e sustentabilidade.",
    id: gerarIdUnico(),
    src: "/BannerOne.png",
    alt: "Peneus para reciclar",
    width: 607,
    height: 811,
    className: "banner__image_object-contain",
  },
  {
    title: "Faça parte de um futuro mais verde.",
    description: "Preencha o formulário abaixo e tenha seu ponto de coleta em destaque.",
    id: gerarIdUnico(),
    src: "/id 4.jpg",
    alt: "Peneus para reciclar",
    width: 607,
    height: 811,
    className: "banner__image_object-contain",
  },
  {
    title: "Prefira empresas ligadas a ideias sustentáveis!",
    description: "A gente pode te ajudar nisso!",
    id: gerarIdUnico(),
    src: "/id 2.jpg",
    alt: "Peneus para reciclar",
    width: 607,
    height: 811,
    className: "banner__image_object-contain",
  },
  {
    title: "Você sabe o que são os 5R’s?",
    description: "Repensar, Recusar, Reduzir, Reutilizar e Reciclar.",
    id: gerarIdUnico(),
    src: "/id 3.jpg",
    alt: "Peneus para reciclar",
    width: 607,
    height: 811,
    className: "banner__image_object-contain",
  },
];

export default bannerInfo;
