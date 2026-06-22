export interface ChartPoint {
  name: string; // readable date or label
  areaValue: number;
  splineValue: number;
  lineValue: number;
  barValue: number;
}

// Пример тестовых данных — замените на свои последовательности.
export const data: ChartPoint[] = [
  {
    name: "2026-06-01",
    areaValue: 120,
    splineValue: 200,
    lineValue: 90,
    barValue: 80,
  },
  {
    name: "2026-06-02",
    areaValue: 150,
    splineValue: 180,
    lineValue: 100,
    barValue: 95,
  },
  {
    name: "2026-06-03",
    areaValue: 170,
    splineValue: 160,
    lineValue: 120,
    barValue: 110,
  },
  {
    name: "2026-06-04",
    areaValue: 200,
    splineValue: 220,
    lineValue: 130,
    barValue: 140,
  },
  {
    name: "2026-06-05",
    areaValue: 240,
    splineValue: 210,
    lineValue: 150,
    barValue: 160,
  },
  {
    name: "2026-06-06",
    areaValue: 220,
    splineValue: 230,
    lineValue: 170,
    barValue: 155,
  },
  {
    name: "2026-06-07",
    areaValue: 260,
    splineValue: 250,
    lineValue: 190,
    barValue: 180,
  },
  {
    name: "2026-06-08",
    areaValue: 300,
    splineValue: 270,
    lineValue: 210,
    barValue: 190,
  },
  {
    name: "2026-06-09",
    areaValue: 320,
    splineValue: 290,
    lineValue: 230,
    barValue: 210,
  },
  {
    name: "2026-06-10",
    areaValue: 340,
    splineValue: 310,
    lineValue: 250,
    barValue: 230,
  },
  {
    name: "2026-06-11",
    areaValue: 360,
    splineValue: 330,
    lineValue: 270,
    barValue: 240,
  },
  {
    name: "2026-06-12",
    areaValue: 380,
    splineValue: 350,
    lineValue: 290,
    barValue: 260,
  },
];

export default data;
