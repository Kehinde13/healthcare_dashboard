import React, { useEffect } from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../Shadcn/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { ChartData } from "@/lib/definition";
import { ArrowDown } from "lucide-react";

const LineGraph = ({ chartData }: { chartData: ChartData[] }) => {
  const chartConfig = {
    Systolic: {
      label: "Systolic",
      color: "#2563eb",
    },
    Diastolic: {
      label: "Diastolic",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  useEffect(() => {
    console.log(chartData);
  }, [chartData]);

  return (
    <div className="mb-5 p-2 rounded-md bg-[#F4F0FE]">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">Blood Pressure</h1>
        <div className="flex justify-between">
          <p>last 6 months</p>
          <ArrowDown />
        </div>
      </div>

      <ChartContainer config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />

          <XAxis
            dataKey="month"
            tickLine={true}
            axisLine={true}
            tickMargin={12}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line
            dataKey="systolic"
            type="monotone"
            stroke="#E66FD2"
            strokeWidth={2}
            dot={{
              fill: "#E66FD2",
            }}
            activeDot={{
              r: 6,
            }}
          />
          <Line
            dataKey="diastolic"
            type="monotone"
            stroke="#8C6FE6"
            strokeWidth={2}
            dot={{
              fill: "#8C6FE6",
            }}
            activeDot={{
              r: 6,
            }}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
};

export default LineGraph;
