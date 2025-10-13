import Schedule from "@/components/Schedule";

const scheduleData = [
  { time: "09h00", title: "ABERTURA DOS PORTÕES" },
  { time: "10h00", stage: "Catwalk Room", title: "DESFILE LAB 1" },
  { time: "10h20", stage: "Catwalk Room", title: "DESFILE LAB 2" },
  { time: "10h40", stage: "Catwalk Room", title: "DESFILE LAB 3" },
  { time: "11h00", stage: "Catwalk Room", title: "DESFILE LAB 4" },
  { time: "11h20", stage: "Catwalk Room", title: "DESFILE LAB 5" },
  { time: "11h40", stage: "Catwalk Room", title: "DESFILE LAB 6" },
  {
    time: "12h00 - 15h30",
    stage: "Arena Insight",
    title: "INTERVENÇÃO ARTÍSTICA - PALCO 3",
    isBreak: true,
  },
  {
    time: "16h00",
    stage: "Catwalk Room",
    title: "DESFILE MARCA 6",
    isBreak: true,
  },
  { time: "16h30", stage: "Catwalk Room", title: "DESFILE MARCA 7" },
  { time: "17h00", stage: "Catwalk Room", title: "DESFILE MARCA 8" },
  { time: "17h30", stage: "Catwalk Room", title: "DESFILE MARCA 9" },
  { time: "18h00", stage: "Catwalk Room", title: "DESFILE MARCA 10" },
  {
    time: "18h30 - 19h30",
    stage: "Arena Insight",
    title: "INTERVENÇÃO ARTÍSTICA - PALCO 3",
    isBreak: true,
  },
  {
    time: "20h00",
    stage: "Catwalk Room",
    title: "DESFILE MARCA 11",
    isBreak: true,
  },
  { time: "20h30", stage: "Catwalk Room", title: "DESFILE MARCA 12" },
  { time: "21h00", stage: "Catwalk Room", title: "DESFILE MARCA 13" },
  { time: "21h30", stage: "Catwalk Room", title: "DESFILE MARCA 14" },
  {
    time: "23h00",
    stage: "Main Stage",
    title: "SHOW NACIONAL + ENCERRAMENTO DAY TWO",
    isBreak: true,
  },
];

export default function DayTwoPage() {
  return (
    <Schedule
      title="DIA 2"
      subtitle="Programação Completa"
      scheduleData={scheduleData}
      headerImage="/daytwo.jpg"
    />
  );
}
