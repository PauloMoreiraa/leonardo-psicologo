import { ArrowRight, CalendarDays } from "lucide-react";

export default function Home() {
  const whatsappUrl =
    "https://wa.me/5511968548204?text=Olá!%20Vim%20pelo%20site%20do%20Leonardo%20Maia%20e%20gostaria%20de%20agendar%20uma%20consulta.";

  return (
    <main className="relative overflow-hidden bg-white dark:bg-slate-950">
      <section
        id="inicio"
        className="
          mx-auto
          flex
          min-h-[calc(100svh-4rem)]
          w-full
          max-w-7xl
          items-center
          px-5
          pt-20
          pb-5
          sm:px-6
          sm:pt-24
          sm:pb-8
          lg:min-h-screen
          lg:px-8
          lg:py-20
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-5
            sm:gap-10
            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* Conteúdo */}
          <div className="max-w-xl">
            {/* Especialidade */}
            <div className="mb-2 flex items-center gap-2.5 sm:mb-5 sm:gap-3">
              <span className="h-px w-5 bg-blue-600 sm:w-8" />

              <span className="text-[11px] font-medium tracking-wide text-blue-600 sm:text-sm">
                Psicólogo clínico
              </span>
            </div>

            {/* Título */}
            <h1
              className="
                text-3xl
                font-semibold
                leading-tight
                tracking-[-0.035em]
                text-slate-900
                sm:text-5xl
                lg:text-6xl
                dark:text-white
              "
            >
              Leonardo Maia
            </h1>

            {/* CRP */}
            <p
              className="
                mt-1
                text-[11px]
                font-medium
                tracking-wide
                text-slate-500
                sm:mt-4
                sm:text-sm
                dark:text-slate-400
              "
            >
              CRP 06/198672
            </p>

            {/* Descrição */}
            <p
              className="
                mt-3
                max-w-lg
                text-[13px]
                leading-5
                text-slate-600
                sm:mt-6
                sm:text-lg
                sm:leading-8
                dark:text-slate-300
              "
            >
              Atendimento psicológico online, com escuta qualificada e
              acolhimento, em um espaço ético e seguro para compreender
              desafios emocionais, fortalecer sua saúde mental e desenvolver
              novas formas de lidar com as situações da vida.
            </p>

            {/* Botões */}
            <div
              className="
                mt-4
                flex
                flex-col
                gap-2
                sm:mt-8
                sm:flex-row
                sm:gap-3
              "
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  cursor-pointer
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-blue-600
                  px-5
                  py-2.5
                  text-xs
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-blue-700
                  hover:shadow-lg
                  sm:px-6
                  sm:py-3.5
                  sm:text-sm
                "
              >
                <CalendarDays size={16} />

                Agendar Consulta
              </a>

              <a
                href="#sobre"
                className="
                  flex
                  cursor-pointer
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-slate-200
                  px-5
                  py-2.5
                  text-xs
                  font-medium
                  text-slate-700
                  transition-all
                  duration-300
                  hover:border-blue-200
                  hover:text-blue-600
                  sm:px-6
                  sm:py-3.5
                  sm:text-sm
                  dark:border-slate-700
                  dark:text-slate-200
                  dark:hover:border-blue-800
                  dark:hover:text-blue-400
                "
              >
                Conheça meu trabalho

                <ArrowRight size={15} />
              </a>
            </div>

            {/* Atendimento */}
            <div
              className="
                mt-3
                flex
                items-center
                gap-2.5
                text-[11px]
                text-slate-500
                sm:mt-8
                sm:gap-3
                sm:text-sm
                dark:text-slate-400
              "
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 sm:h-2 sm:w-2" />

              Atendimento psicológico online
            </div>
          </div>

          {/* Foto */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="
                relative
                w-full
                max-w-[190px]
                sm:max-w-xs
                lg:max-w-md
              "
            >
              {/* Elemento decorativo */}
              <div
                className="
                  absolute
                  -right-2
                  -top-2
                  h-full
                  w-full
                  rounded-3xl
                  border
                  border-blue-100
                  sm:-right-4
                  sm:-top-4
                  lg:-right-5
                  lg:-top-5
                  dark:border-slate-800
                "
              />

              {/* Foto */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  bg-slate-100
                  dark:bg-slate-900
                "
              >
                <img
                  src="/images/leo.png"
                  alt="Leonardo Maia, psicólogo clínico"
                  className="
                    h-[230px]
                    w-full
                    object-cover
                    object-center
                    sm:h-[360px]
                    lg:h-[520px]
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}