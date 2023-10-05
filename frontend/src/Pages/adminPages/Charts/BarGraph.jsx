import { Chart } from "react-google-charts";

export const data = [
  ["City", "2023 popularity", "2024 popularity"],
  ["Kathmandu, ktm", 8175000, 8008000],
  ["Pokhara, pkr", 3792000, 3694000],
  ["Butwal, but", 2695000, 2896000],
  ["Jhapa, jha", 2099000, 1953000],
  ["International, In", 1526000, 1517000],
];

export const options = {
  title: "Popularity in 2022",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Popularity",
    minValue: 0,
  },
  vAxis: {
    title: "Places",
  },
};

export default function BarGraph() {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="206px"
      data={data}
      options={options}
    />
  );
}
