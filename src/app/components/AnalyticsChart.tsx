"use client";

import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { data as chartData } from "../data";

export default function AnalyticsChart() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-[#071026] to-[#04040a] p-6 rounded-2xl shadow-2xl">
        <h2 className="text-zinc-200 mb-4 text-lg font-semibold">
          Аналитика — mixed chart
        </h2>
        <div style={{ width: "100%", height: 420 }}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={chartData}>
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00F5D4" stopOpacity={0.9} />
                  <stop offset="60%" stopColor="#00B4FF" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#00B4FF" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                axisLine={{ stroke: "rgba(255,255,255,0.06)" }}
              />
              <YAxis
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                axisLine={false}
              />

              <Tooltip
                contentStyle={{
                  background: "rgba(2,6,23,0.85)",
                  border: "1px solid rgba(255,255,255,0.04)",
                  color: "#e6eef8",
                }}
                itemStyle={{ color: "#e6eef8" }}
                labelStyle={{ color: "#9fb4d9" }}
                cursor={{
                  stroke: "rgba(255,255,255,0.06)",
                  strokeDasharray: "3 3",
                }}
                shared
              />

              <Legend
                wrapperStyle={{ color: "#9fb4d9", paddingTop: 8 }}
                iconType="circle"
              />

              {/* Area (gradient) */}
              <Area
                type="monotone"
                dataKey="areaValue"
                stroke="#00F5D4"
                strokeWidth={2}
                fill="url(#areaGradient)"
                dot={false}
              />

              {/* Spline (smooth line) */}
              <Line
                type="monotone"
                dataKey="splineValue"
                stroke="#FF3CAC"
                strokeWidth={3}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />

              {/* Linear (straight) */}
              <Line
                type="linear"
                dataKey="lineValue"
                stroke="#7CFFB2"
                strokeWidth={2}
                dot={false}
                strokeDasharray="3 0"
              />

              {/* Bar */}
              <Bar
                dataKey="barValue"
                barSize={18}
                fill="#FFD166"
                radius={[6, 6, 0, 0]}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
