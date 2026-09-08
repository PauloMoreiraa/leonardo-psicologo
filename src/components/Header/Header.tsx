import { useEffect, useState } from "react";
import {
  CalendarDays,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

const sections = [
  { id: "inicio", label: "Início" },
  { id: "servicos", label: "Serviços" },
  { id: "sobre", label: "Sobre mim" },
  { id: "faq", label: "Perguntas frequentes" },
  { id: "contato", label: "Contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const whatsappUrl =
    "https://wa.me/5511968548204?text=Olá!%20Vim%20pelo%20site%20do%20Leonardo%20Maia%20e%20gostaria%20de%20agendar%20uma%20consulta.";

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const headerOffset = 120;
      const scrollPosition = window.scrollY + headerOffset;

      let currentSection = "inicio";

      sections.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (!section) return;

        if (section.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;

    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          onClick={() => handleNavigation("inicio")}
          className="
            text-[22px]
            font-semibold
            tracking-[-0.035em]
            text-slate-900
            transition-opacity
            hover:opacity-90
            sm:text-[28px]
            dark:text-white
          "
        >
          Leonardo<span className="text-blue-600">Maia</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {sections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => handleNavigation(section.id)}
                className={`
                  group
                  relative
                  py-2
                  text-[14px]
                  font-medium
                  transition-colors
                  ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                  }
                `}
              >
                {section.label}

                <span
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    rounded-full
                    bg-blue-600
                    transition-all
                    duration-300
                    dark:bg-blue-400
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </a>
            );
          })}

          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label="Alternar modo escuro"
            className="
              flex
              h-9
              w-9
              cursor-pointer
              items-center
              justify-center
              rounded-full
              text-slate-500
              transition-all
              hover:bg-slate-100
              hover:text-blue-600
              dark:text-slate-400
              dark:hover:bg-slate-800
              dark:hover:text-blue-400
            "
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              rounded-lg
              bg-blue-600
              px-5
              py-3
              text-[14px]
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-blue-700
              hover:shadow-md
            "
          >
            <CalendarDays size={17} />
            Agendar Consulta
          </a>
        </nav>

        <div className="flex items-center gap-1.5 md:hidden">
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label="Alternar modo escuro"
            className="
              flex
              h-9
              w-9
              cursor-pointer
              items-center
              justify-center
              rounded-lg
              text-slate-600
              transition-colors
              hover:bg-slate-100
              hover:text-blue-600
              dark:text-slate-300
              dark:hover:bg-slate-800
              dark:hover:text-blue-400
            "
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="
              flex
              h-9
              w-9
              cursor-pointer
              items-center
              justify-center
              rounded-lg
              text-slate-800
              transition-colors
              hover:bg-slate-100
              dark:text-white
              dark:hover:bg-slate-800
            "
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="
            w-full
            border-t
            border-slate-200
            bg-white
            dark:border-slate-800
            dark:bg-slate-950
            md:hidden
            animate-[menuDown_0.35s_ease-out]
          "
        >
          <nav className="mx-auto flex w-full max-w-md flex-col items-center px-5 py-3">
            {sections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => handleNavigation(section.id)}
                  className={`
                    group
                    relative
                    w-full
                    py-2.5
                    text-center
                    text-sm
                    font-medium
                    transition-colors
                    ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                    }
                  `}
                >
                  {section.label}

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-1/2
                      h-[2px]
                      -translate-x-1/2
                      rounded-full
                      bg-blue-600
                      transition-all
                      duration-300
                      dark:bg-blue-400
                      ${isActive ? "w-8" : "w-0 group-hover:w-8"}
                    `}
                  />
                </a>
              );
            })}

            <div className="w-full pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-blue-600
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-blue-700
                "
              >
                <CalendarDays size={16} />
                Agendar Consulta
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}