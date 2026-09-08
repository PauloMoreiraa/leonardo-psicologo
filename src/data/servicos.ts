export interface Servico {
  titulo: string;
  descricao: string;
  imagem: string;
}

export const servicos: Servico[] = [
  {
    titulo: "Psicoterapia Individual",
    descricao:
      "Um espaço seguro, acolhedor e sigiloso para compreender sentimentos, pensamentos e desafios da vida. A psicoterapia pode ajudar no desenvolvimento emocional, na autoestima, nos relacionamentos e na construção de formas mais saudáveis de lidar com ansiedade, estresse e outras questões.",
    imagem: "https://images.unsplash.com/photo-1628645339131-0c39c7527856?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // Adicione novos serviços abaixo:
  // {
  //   titulo: "Nome do serviço",
  //   descricao: "Descrição do serviço.",
  //   imagem: "/images/outra-foto.jpeg",
  // },
];