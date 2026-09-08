import {
  ArrowUpRight,
  Mail,
} from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const whatsappUrl =
  "https://wa.me/5511968548204?text=Olá!%20Vim%20pelo%20site%20do%20Leonardo%20Maia%20e%20gostaria%20de%20agendar%20uma%20consulta.";

const emailUrl = "mailto:leonardo.santosmaiac@gmail.com";

const instagramUrl =
  "https://www.instagram.com/leonardomaia.psi/";

const linkedinUrl =
  "https://www.linkedin.com/in/leonardo-maia-3b2011184/";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre mim", href: "#sobre" },
  { label: "Perguntas frequentes", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:gap-16 lg:py-20">
          {/* Marca */}
          <div className="max-w-md">
            <a
              href="#inicio"
              className="inline-block text-2xl font-semibold tracking-[-0.035em] text-slate-900 transition-opacity hover:opacity-80 sm:text-3xl dark:text-white"
            >
              Leonardo<span className="text-blue-600">Maia</span>
            </a>

            <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
              Psicólogo clínico
            </p>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-400">
              Atendimento psicológico online, com escuta qualificada,
              acolhimento e respeito à singularidade de cada pessoa.
            </p>

            {/* Redes sociais */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-200
                  text-slate-500
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-blue-200
                  hover:bg-blue-50
                  hover:text-blue-600
                  dark:border-slate-800
                  dark:text-slate-400
                  dark:hover:border-blue-900
                  dark:hover:bg-blue-950
                  dark:hover:text-blue-400
                "
              >
                <FaInstagram size={18} />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-200
                  text-slate-500
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-blue-200
                  hover:bg-blue-50
                  hover:text-blue-600
                  dark:border-slate-800
                  dark:text-slate-400
                  dark:hover:border-blue-900
                  dark:hover:bg-blue-950
                  dark:hover:text-blue-400
                "
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-200
                  text-slate-500
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-blue-200
                  hover:bg-blue-50
                  hover:text-blue-600
                  dark:border-slate-800
                  dark:text-slate-400
                  dark:hover:border-blue-900
                  dark:hover:bg-blue-950
                  dark:hover:text-blue-400
                "
              >
                <FaWhatsapp size={18} />
              </a>

              <a
                href={emailUrl}
                aria-label="E-mail"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-200
                  text-slate-500
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-blue-200
                  hover:bg-blue-50
                  hover:text-blue-600
                  dark:border-slate-800
                  dark:text-slate-400
                  dark:hover:border-blue-900
                  dark:hover:bg-blue-950
                  dark:hover:text-blue-400
                "
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">
              Navegação
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-1.5
                    text-sm
                    text-slate-600
                    transition-colors
                    hover:text-blue-600
                    dark:text-slate-400
                    dark:hover:text-blue-400
                  "
                >
                  {link.label}

                  <ArrowUpRight
                    size={13}
                    className="
                      opacity-0
                      transition-all
                      duration-200
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:opacity-100
                    "
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* Atendimento */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">
              Atendimento
            </h3>

            <div className="mt-5 space-y-5">
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  Atendimento online
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Sessões por videochamada, com praticidade,
                  privacidade e conforto.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  CRP 06/198672
                </p>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Psicólogo clínico
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-blue-600
                  transition-colors
                  hover:text-blue-700
                  dark:text-blue-400
                  dark:hover:text-blue-300
                "
              >
                Agendar consulta

                <ArrowUpRight
                  size={15}
                  className="
                    transition-transform
                    duration-200
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="flex flex-col gap-4 border-t border-slate-200 py-6 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} Leonardo Maia. Todos os direitos
            reservados.
          </p>

          <p className="text-xs text-slate-400 dark:text-slate-500">
            Atendimento com ética, acolhimento e sigilo profissional.
          </p>
        </div>
      </div>
    </footer>
  );
}