import {
  Ear,
  Heart,
  Lightbulb,
  Leaf,
  MessageCircle,
  Search,
  Sparkles,
} from "lucide-react";

const principios = [
  {
    icon: Ear,
    titulo: "Escuta profunda",
    descricao:
      "Um espaço onde sua experiência é realmente ouvida, compreendida e respeitada.",
  },
  {
    icon: Heart,
    titulo: "Sem rótulos",
    descricao:
      "Você não é reduzido a um diagnóstico. Cada história é única e merece ser compreendida em sua singularidade.",
  },
  {
    icon: Search,
    titulo: "Busca de significado",
    descricao:
      "Juntos, buscamos compreender os sentidos que suas experiências assumem na sua vida.",
  },
  {
    icon: Leaf,
    titulo: "Autoconhecimento",
    descricao:
      "Um processo para ampliar a consciência sobre si mesmo, suas escolhas e sua forma de viver.",
  },
];

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="
        scroll-mt-16
        overflow-hidden
        bg-white
        dark:bg-slate-950
      "
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
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
            Sobre mim
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
            Minha trajetória na psicologia e a abordagem que guia meu trabalho
            clínico.
          </h2>

          <p
            className="
              mt-3
              text-[13px]
              leading-5
              text-slate-600
              sm:mt-5
              sm:text-lg
              sm:leading-8
              dark:text-slate-300
            "
          >
            Um trabalho baseado em escuta, acolhimento e compreensão da
            experiência de cada pessoa.
          </p>
        </header>

        {/* Apresentação */}
        <div
          className="
            grid
            items-center
            gap-8
            border-t
            border-slate-200
            py-12
            sm:gap-14
            sm:py-20
            lg:grid-cols-2
            lg:gap-20
            lg:py-24
            dark:border-slate-800
          "
        >
          {/* Foto */}
          <div className="relative mx-auto w-full max-w-[280px] sm:max-w-md lg:max-w-none">
            <div
              className="
                absolute
                -bottom-2
                -left-2
                h-full
                w-full
                rounded-2xl
                border
                border-blue-100
                sm:-bottom-5
                sm:-left-5
                sm:rounded-3xl
                dark:border-slate-800
              "
            />

            <div className="relative overflow-hidden rounded-2xl bg-slate-100 sm:rounded-3xl dark:bg-slate-900">
              <img
                src="/images/leosobre.png"
                alt="Psicólogo Leonardo Maia"
                className="
                  aspect-[4/5]
                  h-auto
                  w-full
                  object-cover
                  object-center
                "
              />
            </div>
          </div>

          {/* Texto */}
          <div>
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
              <Sparkles size={18} />
            </div>

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
              Prazer, sou Leonardo Maia.
            </h3>

            <div
              className="
                mt-4
                space-y-4
                text-[13px]
                leading-6
                text-slate-600
                sm:mt-6
                sm:space-y-5
                sm:text-lg
                sm:leading-8
                dark:text-slate-300
              "
            >
              <p>
                Sou psicólogo formado pela Universidade Paulista (UNIP), com
                especialização em Saúde Pública e Psicologia Organizacional.
                Meu trabalho é construído a partir de uma escuta ética,
                acolhedora e respeitosa com a história de cada pessoa.
              </p>

              <p>
                Atendo jovens e adultos de forma online, oferecendo um espaço
                seguro para falar sobre emoções, relacionamentos, dificuldades
                e diferentes momentos da vida.
              </p>

              <p>
                Minha prática clínica é orientada pela{" "}
                <strong className="font-semibold text-slate-800 dark:text-white">
                  psicologia fenomenológica
                </strong>
                , uma abordagem que busca compreender a experiência de cada
                pessoa a partir da maneira como ela é vivida, sem julgamentos e
                sem reduzir sua história a rótulos.
              </p>
            </div>
          </div>
        </div>

        {/* Fenomenologia */}
        <div
          className="
            border-t
            border-slate-200
            py-14
            sm:py-20
            lg:py-24
            dark:border-slate-800
          "
        >
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="
                text-[11px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-blue-600
                sm:text-sm
                dark:text-blue-400
              "
            >
              Uma abordagem centrada na experiência
            </span>

            <h3
              className="
                mt-2
                text-2xl
                font-semibold
                tracking-[-0.03em]
                text-slate-900
                sm:mt-3
                sm:text-4xl
                dark:text-white
              "
            >
              O que é Fenomenologia?
            </h3>

            <p
              className="
                mt-4
                text-[13px]
                leading-5
                text-slate-600
                sm:mt-5
                sm:text-lg
                sm:leading-8
                dark:text-slate-300
              "
            >
              A fenomenologia é uma corrente filosófica iniciada por Edmund
              Husserl e posteriormente desenvolvida por pensadores como Martin
              Heidegger. Na psicologia, essa perspectiva busca compreender a
              experiência a partir do ponto de vista de quem a vive,
              valorizando seus sentidos e significados.
            </p>
          </div>

          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-5
              sm:mt-14
              sm:grid-cols-2
              sm:gap-6
              lg:grid-cols-4
              lg:gap-7
            "
          >
            {principios.map((principio) => {
              const Icon = principio.icon;

              return (
                <article
                  key={principio.titulo}
                  className="
                    group
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-100
                    hover:bg-white
                    hover:shadow-lg
                    hover:shadow-slate-200/50
                    sm:p-6
                    dark:border-slate-800
                    dark:bg-slate-900
                    dark:hover:border-slate-700
                    dark:hover:bg-slate-900
                    dark:hover:shadow-black/20
                  "
                >
                  <div
                    className="
                      mb-5
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-white
                      text-blue-600
                      shadow-sm
                      transition-colors
                      duration-300
                      group-hover:bg-blue-600
                      group-hover:text-white
                      sm:h-11
                      sm:w-11
                      dark:bg-slate-950
                      dark:text-blue-400
                      dark:group-hover:bg-blue-600
                      dark:group-hover:text-white
                    "
                  >
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <h4
                    className="
                      text-base
                      font-semibold
                      text-slate-900
                      sm:text-lg
                      dark:text-white
                    "
                  >
                    {principio.titulo}
                  </h4>

                  <p
                    className="
                      mt-2
                      text-[13px]
                      leading-5
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    {principio.descricao}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Como funciona na prática */}
        <div
          className="
            grid
            items-center
            gap-8
            border-t
            border-slate-200
            py-14
            sm:gap-12
            sm:py-20
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-20
            lg:py-24
            dark:border-slate-800
          "
        >
          <div>
            <span
              className="
                text-[11px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-blue-600
                sm:text-sm
                dark:text-blue-400
              "
            >
              Na prática
            </span>

            <h3
              className="
                mt-2
                text-2xl
                font-semibold
                leading-tight
                tracking-[-0.03em]
                text-slate-900
                sm:mt-3
                sm:text-4xl
                dark:text-white
              "
            >
              Mais do que encontrar respostas prontas.
            </h3>

            <p
              className="
                mt-4
                text-[13px]
                leading-5
                text-slate-600
                sm:mt-5
                sm:text-lg
                sm:leading-8
                dark:text-slate-300
              "
            >
              A terapia é um espaço para olhar com mais atenção para aquilo
              que você está vivendo e construir novos sentidos para sua
              experiência.
            </p>
          </div>

          <div
            className="
              relative
              rounded-3xl
              border
              border-blue-100
              bg-blue-50/60
              p-6
              sm:p-8
              lg:p-10
              dark:border-blue-950
              dark:bg-blue-950/30
            "
          >
            <MessageCircle
              className="
                absolute
                right-6
                top-6
                text-blue-200
                sm:right-8
                sm:top-8
                dark:text-blue-900
              "
              size={28}
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-blue-600
                sm:text-xs
                dark:text-blue-400
              "
            >
              Um exemplo
            </span>

            <blockquote
              className="
                mt-4
                text-xl
                font-medium
                leading-8
                tracking-[-0.02em]
                text-slate-900
                sm:text-2xl
                sm:leading-9
                dark:text-white
              "
            >
              “Eu sinto um vazio.”
            </blockquote>

            <p
              className="
                mt-5
                text-[13px]
                leading-6
                text-slate-600
                sm:text-base
                sm:leading-7
                dark:text-slate-300
              "
            >
              Em vez de explicar rapidamente essa experiência por meio de uma
              teoria ou diagnóstico, a psicoterapia fenomenológica busca
              compreender o que esse vazio significa para aquela pessoa.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Como é esse vazio para você?",
                "Quando ele aparece?",
                "O que ele representa na sua vida?",
                "Como essa experiência impacta o seu cotidiano?",
              ].map((pergunta) => (
                <div
                  key={pergunta}
                  className="
                    flex
                    items-start
                    gap-3
                    text-[13px]
                    leading-5
                    text-slate-700
                    sm:text-sm
                    dark:text-slate-300
                  "
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <span>{pergunta}</span>
                </div>
              ))}
            </div>

            <div
              className="
                mt-7
                flex
                items-center
                gap-2
                border-t
                border-blue-100
                pt-5
                text-[11px]
                font-medium
                text-blue-700
                sm:text-sm
                dark:border-blue-900
                dark:text-blue-400
              "
            >
              <Lightbulb size={16} />
              Compreender antes de definir.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}