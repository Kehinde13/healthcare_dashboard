import React, { useEffect } from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../Shadcn/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { ChartData } from "@/lib/definition";
import { ArrowDown } from "lucide-react";
import CustomLegend from "./CustomLegend";

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


  return (
    <div className="mb-5 p-2 rounded-md bg-[#F4F0FE] min-h-max">
      <div className="flex justify-between mb-5">
        <h1 className="font-bold md:text-xl text-sm">Blood Pressure</h1>
        <div className="flex justify-between text-xs md:text-base">
          <p className="self-center">last 6 months</p>
          <ArrowDown className="h-4 w-4 self-center"/>
        </div>
      </div>

      <ChartContainer config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: -20,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} stroke="#E0E0E0" strokeWidth={2} />

          <XAxis
            dataKey="month"
            tickLine={true}
            axisLine={true}
            tickMargin={6}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickCount={5} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <ChartLegend
            layout="vertical"
            align="right"
            verticalAlign="top"
            content={<CustomLegend />}
          />
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
