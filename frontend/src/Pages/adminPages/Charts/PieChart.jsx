import { PieChart, pieArcClasses } from "@mui/x-charts/PieChart";

const data = [
  { id: 0, value: 10, label: "Daily" },
  { id: 1, value: 15, label: "Weekly" },
  { id: 2, value: 20, label: "Monthly" },
];

export default function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30 },
        },
      ]}
      sx={{
        [`& .${pieArcClasses.faded}`]: {
          fill: "gray",
        },
      }}
      height={200}
    />
  );
}
