
import Schedule from "@/components/Schedule";

const scheduleData = [
  { time: "09h00", title: "CREDENCIAMENTO E RECEPÇÃO" },
  { time: "10h30", title: "ABERTURA E BOAS-VINDAS" },
  {
    time: "11h30",
    stage: "Main Stage",
    title: "PALESTRA INSPIRACIONAL",
    subtitle: "MODA, BRANDING E IMPACTO SOCIAL",
  },
  {
    time: "12h00",
    stage: "Main Stage",
    title: "PALESTRA DE ESTILISTA CONCEITUADO",
    subtitle: "SUSTENTABILIDADE E INOVAÇÃO",
  },
  {
    time: "12h30",
    stage: "Main Stage",
    title: "PALESTRA CONTEÚDO",
    subtitle: "BRANDING E POSICIONamento DE MARCA",
  },
  {
    time: "13h30",
    stage: "Main Stage",
    title: "PALESTRA DE ESTILISTA CONCEITUADO",
    subtitle: "MODA CONSCIENTE",
  },
  {
    time: "14h00",
    stage: "Main Stage",
    title: "PALESTRA CONTEÚDO",
    subtitle: "NEGÓCIOS E ESTRATÉGIAS DE MERCADO",
  },
  {
    time: "14h30",
    stage: "Main Stage",
    title: "PALESTRA DE ESTILISTA CONCEITUADO",
    subtitle: "TENDÊNCIAS E MODA SUSTENTÁVEL",
  },
  {
    time: "15h30",
    stage: "Main Stage",
    title: "MESA REDONDA",
    subtitle: "MODA, SUSTENTABILIDADE E IMPACTO SOCIAL",
  },
  {
    time: "16h00",
    stage: "Main Stage",
    title: "PALESTRA CONTEÚDO",
    subtitle: "MARKETING, VENDAS E EXPERIÊNCIA DO CLIENTE",
  },
  {
    time: "16h30",
    stage: "Main Stage",
    title: "PALESTRA DE ESTILISTA CONCEITUADO",
    subtitle: "MODA, INOVAÇÃO E RESPONSABILIDADE",
  },
  { time: "17h00", stage: "Main Stage", title: "ENCERRAMENTO E REFLEXÃO DO DIA" },
  {
    time: "17h30 - 18h30",
    stage: "Arena Insight",
    title: "INTERVENÇÃO ARTÍSTICA - PALCO 3",
    isBreak: true,
  },
  {
    time: "19h00",
    stage: "Catwalk Room",
    title: "ABERTURA OFICIAL DO RSMM",
    isBreak: true,
  },
  { time: "20h30", stage: "Catwalk Room", title: "DESFILE MARCA 1" },
  { time: "21h00", stage: "Catwalk Room", title: "DESFILE MARCA 2" },
  { time: "21h30", stage: "Catwalk Room", title: "DESFILE MARCA 3" },
  { time: "22h00", stage: "Catwalk Room", title: "DESFILE MARCA 4" },
  { time: "22h30", stage: "Catwalk Room", title: "DESFILE MARCA 5" },
  { time: "23h00", title: "ENCERAMENTO DAY ONE" },
];

export default function DayOnePage() {
  return (
    <Schedule
      title="DIA 1"
      subtitle="Programação Completa"
      scheduleData={scheduleData}
      headerImage="/dayone.jpg"
    />
  );
}
