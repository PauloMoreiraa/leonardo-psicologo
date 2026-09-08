import { useState } from "react";
import { ChevronDown } from "lucide-react";

const perguntas = [
  {
    pergunta: "O que é psicoterapia?",
    resposta:
      "A psicoterapia é um processo de cuidado emocional conduzido por um psicólogo. É um espaço seguro e sigiloso para conversar sobre sentimentos, pensamentos, dificuldades e situações da vida.",
  },
  {
    pergunta: "Como funciona a primeira consulta?",
    resposta:
      "Na primeira sessão conversamos sobre sua história, o que motivou a busca por terapia e quais são suas necessidades. Esse momento ajuda a compreender melhor como posso ajudar no seu processo.",
  },
  {
    pergunta: "As consultas são online ou presenciais?",
    resposta:
      "Os atendimentos são realizados 100% online, por meio de videochamada, garantindo praticidade, privacidade e conforto para que você possa participar das sessões de qualquer lugar.",
  },
  {
    pergunta: "Quanto tempo dura uma sessão?",
    resposta:
      "Cada sessão tem duração média de 50 minutos. A frequência geralmente é semanal, mas pode variar de acordo com cada caso.",
  },
  {
    pergunta: "Psicoterapia é confidencial?",
    resposta:
      "Sim. O atendimento psicológico segue princípios éticos e todo o conteúdo das sessões é protegido pelo sigilo profissional.",
  },
];

export default function Faq() {
  const [aberta, setAberta] = useState<number | null>(0);

  const alternarPergunta = (index: number) => {
    setAberta((atual) => (atual === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="
        scroll-mt-16
        bg-slate-50
        dark:bg-slate-900
      "
    >
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <header
          className="
            mx-auto
            flex
            max-w-3xl
            flex-col
            items-center
            py-14
            text-center
            sm:py-20
            lg:py-24
          "
        >
          <span
            className="
              mb-3
              inline-flex
              items-center
              gap-2
              text-[11px]
              font-medium
              tracking-wide
              text-blue-600
              sm:mb-4
              sm:text-sm
              dark:text-blue-400
            "
          >
            <span className="h-px w-5 bg-blue-600 sm:w-7 dark:bg-blue-400" />
            Perguntas frequentes
            <span className="h-px w-5 bg-blue-600 sm:w-7 dark:bg-blue-400" />
          </span>

          <h2
            className="
              text-2xl
              font-semibold
              leading-tight
              tracking-[-0.035em]
              text-slate-900
              sm:text-4xl
              lg:text-5xl
              dark:text-white
            "
          >
            Algumas respostas antes de começarmos.
          </h2>

          <p
            className="
              mt-3
              max-w-2xl
              text-[13px]
              leading-5
              text-slate-600
              sm:mt-5
              sm:text-lg
              sm:leading-8
              dark:text-slate-300
            "
          >
            Tire suas principais dúvidas sobre psicoterapia, funcionamento das
            sessões e atendimento psicológico online.
          </p>
        </header>

        {/* Perguntas */}
        <div className="pb-14 sm:pb-20 lg:pb-24">
          <div
            className="
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              dark:border-slate-800
              dark:bg-slate-950
            "
          >
            {perguntas.map((item, index) => {
              const estaAberta = aberta === index;

              return (
                <article
                  key={item.pergunta}
                  className="
                    border-b
                    border-slate-200
                    last:border-b-0
                    dark:border-slate-800
                  "
                >
                  <button
                    type="button"
                    onClick={() => alternarPergunta(index)}
                    aria-expanded={estaAberta}
                    className="
                      flex
                      w-full
                      cursor-pointer
                      items-center
                      justify-between
                      gap-5
                      px-5
                      py-5
                      text-left
                      transition-colors
                      hover:bg-slate-50
                      sm:px-7
                      sm:py-6
                      dark:hover:bg-slate-900
                    "
                  >
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-6
                        text-slate-900
                        sm:text-base
                        dark:text-white
                      "
                    >
                      {item.pergunta}
                    </span>

                    <span
                      className={`
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          estaAberta
                            ? "bg-blue-600 text-white"
                            : "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400"
                        }
                      `}
                    >
                      <ChevronDown
                        size={17}
                        className={`
                          transition-transform
                          duration-300
                          ${estaAberta ? "rotate-180" : ""}
                        `}
                      />
                    </span>
                  </button>

                  <div
                    className={`
                      grid
                      transition-all
                      duration-300
                      ease-out
                      ${
                        estaAberta
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="
                          max-w-3xl
                          px-5
                          pb-5
                          text-[13px]
                          leading-6
                          text-slate-600
                          sm:px-7
                          sm:pb-6
                          sm:text-base
                          sm:leading-7
                          dark:text-slate-300
                        "
                      >
                        {item.resposta}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}