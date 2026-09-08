import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Monitor,
} from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const whatsappUrl =
  "https://wa.me/5511968548204?text=Olá!%20Vim%20pelo%20site%20do%20Leonardo%20Maia%20e%20gostaria%20de%20agendar%20uma%20consulta.";

const emailUrl = "mailto:leonardo.santosmaiac@gmail.com";

const linkedinUrl =
  "https://www.linkedin.com/in/leonardo-maia-3b2011184/";

const instagramUrl =
  "https://www.instagram.com/leonardomaia.psi/";

export default function Contato() {
  return (
    <section
      id="contato"
      className="scroll-mt-16 bg-slate-50 dark:bg-slate-900"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-10 py-14 sm:gap-12 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-24">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 text-[11px] font-medium tracking-wide text-blue-600 sm:mb-4 sm:text-sm dark:text-blue-400">
              <span className="h-px w-6 bg-blue-600 dark:bg-blue-400" />
              Contato
            </span>

            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              Vamos conversar?
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:mt-6 sm:text-base sm:leading-7 dark:text-slate-300">
              Se você está pensando em iniciar um processo de
              psicoterapia ou gostaria de saber mais sobre os
              atendimentos, entre em contato.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 dark:text-slate-300">
              Escolha a forma de contato que for mais conveniente
              para você.
            </p>

            <div className="mt-7 space-y-4 sm:mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[82px] w-full items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50 sm:p-5 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-900 dark:hover:shadow-black/20"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                    <FaWhatsapp size={22} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 sm:text-[11px] dark:text-slate-500">
                      WhatsApp
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-900 sm:text-base dark:text-white">
                      (11) 96854-8204
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={19}
                  className="ml-3 shrink-0 text-slate-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600 dark:text-slate-500 dark:group-hover:text-blue-400"
                />
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[82px] w-full items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50 sm:p-5 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-900 dark:hover:shadow-black/20"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                    <FaInstagram size={22} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 sm:text-[11px] dark:text-slate-500">
                      Instagram
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-900 sm:text-base dark:text-white">
                      @leonardomaia.psi
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={19}
                  className="ml-3 shrink-0 text-slate-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600 dark:text-slate-500 dark:group-hover:text-blue-400"
                />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[82px] w-full items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50 sm:p-5 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-900 dark:hover:shadow-black/20"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                    <FaLinkedinIn size={20} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 sm:text-[11px] dark:text-slate-500">
                      LinkedIn
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-900 sm:text-base dark:text-white">
                      Leonardo Maia
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={19}
                  className="ml-3 shrink-0 text-slate-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600 dark:text-slate-500 dark:group-hover:text-blue-400"
                />
              </a>

              <a
                href={emailUrl}
                className="group flex min-h-[82px] w-full items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50 sm:p-5 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-900 dark:hover:shadow-black/20"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                    <Mail size={21} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 sm:text-[11px] dark:text-slate-500">
                      E-mail
                    </p>

                    <p className="mt-1 whitespace-nowrap text-xs font-semibold text-slate-900 sm:text-sm dark:text-white">
                      leonardo.santosmaiac@gmail.com
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={19}
                  className="ml-3 shrink-0 text-slate-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600 dark:text-slate-500 dark:group-hover:text-blue-400"
                />
              </a>
            </div>
          </div>

          <div className="relative h-full">
            <div className="absolute -right-2 -top-2 h-full w-full rounded-3xl border border-blue-100 sm:-right-3 sm:-top-3 dark:border-slate-800" />

            <div className="relative flex h-full flex-col justify-center rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-9 lg:p-10 dark:border-slate-800 dark:bg-slate-950 dark:shadow-black/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                <MessageCircle size={22} />
              </div>

              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.025em] text-slate-900 sm:text-3xl dark:text-white">
                Entre em contato
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 dark:text-slate-300">
                O primeiro contato pode ser feito pelo WhatsApp. Você
                pode tirar suas dúvidas, conhecer melhor o funcionamento
                das sessões e verificar a disponibilidade para
                atendimento.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg sm:py-4"
              >
                <FaWhatsapp size={20} />
                Falar pelo WhatsApp
                <ArrowUpRight size={17} />
              </a>

              <div className="mt-7 border-t border-slate-200 pt-6 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                    <Monitor size={19} />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Modalidade
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                      Atendimento psicológico online
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />

                  <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                    Atendimento com acolhimento, ética e sigilo profissional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}