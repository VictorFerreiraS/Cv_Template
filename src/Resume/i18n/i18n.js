// npm i i18next react-i18next i18next-browser-languagedetector
import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    debug: true,
    fallbaackLng: "ptBR",
    resources: {
      ptBR: {
        translation: {
          desenvolvedor: "Desenvolvedor",
          dadPes: "DADOS PESSOAIS",
          anos: "anos",
          forExp: "FORMAÇÃO E EXPERIÊNCIA",
          curCie: "Cursando Ciência da Computação",
          desFac: "Descomplica Faculdade",
          estPro: "Estudando programacão desde 2020",
          focFro: "Foco em Front-end e Backend",
          dominio: "DOMÍNIO",
          poo: "POO",
          idiomas: "IDIOMAS",
          ingles: "Inglês:",
          falAvc: "FALA: Avançado",
          leiEsc: "Leitura e Escrita: Avançadas",
          comFlu: "Compreensão: Fluente",
          certificados: "CERTIFICADOS",
          destaques: "Destaques:",
          conInt: "CONHECIMENTOS E INTERESSES:",
          projetos: "PROJETOS",
        },
      },
      enUS: {
        translation: {
          desenvolvedor: "Developer",
          dadPes: "PERSONAL INFO",
          anos: "years",
          forExp: "EXPERIENCE AND EDUCATION",
          curCie: "Currently doing Computer Science",
          desFac: "Descomplica University",
          estPro: "Studying programming since 2020",
          focFro: "Focused in Front-end and Backend",
          dominio: "DOMAINS",
          poo: "OOP",
          idiomas: "LANGUAGES",
          ingles: "English:",
          falAvc: "Pronunciation: Advanced",
          leiEsc: "Read and Write: Advanced",
          comFlu: "Understanding: Fluent",
          certificados: "CERTIFICATES",
          destaques: "Highlights:",
          conInt: "KNOWLEDGE AND INTERESTS:",
          projetos: "PROJECTS",
        },
      },
    },
  });
