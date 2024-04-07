import * as React from "react";
import "./Chartbar.scss";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { BarChart } from "@mui/x-charts/BarChart";
const highlightScope = {
  highlighted: "series",
  faded: "global",
} as const;

const series = [
  {
    label: "series 1",
    data: [
      2423, 2010, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269, 724, 1707, 1188,
      1879, 626, 1635, 2177, 516, 1793, 1598,
    ],
  },
  {
    label: "series 2",
    data: [
      2362, 2254, 1962, 1336, 586, 1069, 2194, 1629, 2173, 2031, 1757, 862,
      2446, 910, 2430, 2300, 805, 1835, 1684, 2197,
    ],
  },
].map((s) => ({ ...s, highlightScope }));
export default function BarAnimation() {
  const [seriesNb, setSeriesNb] = React.useState(2);
  const [itemNb, setItemNb] = React.useState(7);
  const [skipAnimation, setSkipAnimation] = React.useState(true);

  const handleItemNbChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue !== "number") {
      return;
    }
    setItemNb(newValue);
  };
  const handleSeriesNbChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue !== "number") {
      return;
    }
    setSeriesNb(newValue);
  };
  const colors = ['#007bff', '#00aaff'];
  return (
    <div className="barChart ps-2 w-3/6">
      <BarChart
        height={300}
        series={series
          .slice(0, seriesNb)
          .map((s) => ({ ...s, data: s.data.slice(0, itemNb) }))}
        colors={colors}
        skipAnimation={skipAnimation}
      />
      <FormControlLabel
        className="ms-1"
        checked={skipAnimation}
        control={
          <Checkbox
            onChange={(event) => setSkipAnimation(event.target.checked)}
          />
        }
        label="skipAnimation"
        labelPlacement="end"
      />
      <Typography
        className="text-slate-400 ms-3"
        id="input-item-number"
        gutterBottom
      >
        Number of items {itemNb}
      </Typography>
      <Slider
        className="text-slate-400 w-40 ms-3"
        value={itemNb}
        onChange={handleItemNbChange}
        valueLabelDisplay="auto"
        min={1}
        max={20}
        aria-labelledby="input-item-number"
      />
      <Typography
        className="text-slate-400 ms-3"
        id="input-series-number"
        gutterBottom
      >
        Number of series {seriesNb}
      </Typography>
      <Slider
        className="text-slate-400 w-40 ms-3"
        value={seriesNb}
        onChange={handleSeriesNbChange}
        valueLabelDisplay="auto"
        min={1}
        max={2}
        aria-labelledby="input-series-number"
      />
    </div>
  );
}
