import { Heart } from "lucide-react";
import { servicos } from "../../data/servicos";

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="
        scroll-mt-16
        bg-slate-50
        dark:bg-slate-900
      "
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <header
          className="
            mx-auto
            flex
            max-w-2xl
            flex-col
            items-center
            justify-center
            py-14
            text-center
            sm:min-h-[42vh]
            sm:py-20
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
            Serviços
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
            Cuidado psicológico para diferentes momentos da vida.
          </h2>

          <p
            className="
              mt-3
              max-w-xl
              text-[13px]
              leading-5
              text-slate-600
              sm:mt-5
              sm:text-lg
              sm:leading-8
              dark:text-slate-300
            "
          >
            Conheça os atendimentos que ofereço para seu bem-estar emocional,
            sempre com escuta qualificada, acolhimento e respeito à sua
            individualidade.
          </p>
        </header>

        {/* Serviços */}
        <div className="pb-14 sm:pb-24 lg:pb-28">
          {servicos.map((servico, index) => (
            <article
              key={servico.titulo}
              className="
                grid
                items-center
                gap-6
                border-t
                border-slate-200
                py-12
                sm:min-h-[70vh]
                sm:gap-14
                sm:py-20
                lg:min-h-[78vh]
                lg:grid-cols-2
                lg:gap-20
                lg:py-24
                dark:border-slate-800
              "
            >
              {/* Imagem */}
              <div
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  sm:rounded-3xl
                  ${
                    index % 2 === 1
                      ? "lg:order-2"
                      : "lg:order-1"
                  }
                `}
              >
                <div
                  className="
                    aspect-[16/10]
                    overflow-hidden
                    rounded-2xl
                    bg-slate-200
                    sm:aspect-[4/3]
                    sm:rounded-3xl
                    dark:bg-slate-800
                  "
                >
                  <img
                    src={servico.imagem}
                    alt={`${servico.titulo} com o psicólogo Leonardo Maia`}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />
                </div>
              </div>

              {/* Conteúdo */}
              <div
                className={`
                  flex
                  flex-col
                  justify-center
                  ${
                    index % 2 === 1
                      ? "lg:order-1"
                      : "lg:order-2"
                  }
                `}
              >
                <div
                  className="
                    mb-4
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                    sm:mb-6
                    sm:h-12
                    sm:w-12
                    sm:rounded-2xl
                    dark:bg-blue-950
                    dark:text-blue-400
                  "
                >
                  <Heart size={17} className="sm:hidden" strokeWidth={1.8} />
                  <Heart
                    size={22}
                    className="hidden sm:block"
                    strokeWidth={1.8}
                  />
                </div>

                <span
                  className="
                    mb-2
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-blue-600
                    sm:mb-3
                    sm:text-sm
                    dark:text-blue-400
                  "
                >
                  Atendimento psicológico
                </span>

                <h3
                  className="
                    text-2xl
                    font-semibold
                    leading-tight
                    tracking-[-0.03em]
                    text-slate-900
                    sm:text-4xl
                    dark:text-white
                  "
                >
                  {servico.titulo}
                </h3>

                <p
                  className="
                    mt-4
                    max-w-xl
                    text-[13px]
                    leading-5
                    text-slate-600
                    sm:mt-6
                    sm:text-lg
                    sm:leading-8
                    dark:text-slate-300
                  "
                >
                  {servico.descricao}
                </p>

                <div
                  className="
                    mt-5
                    h-px
                    w-10
                    bg-blue-600
                    sm:mt-8
                    sm:w-16
                    dark:bg-blue-400
                  "
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}