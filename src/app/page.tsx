import AnalyticsChart from "./components/AnalyticsChart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-4 md:p-12 font-sans selection:bg-cyan-500/30">
      <div className="w-full max-w-6xl rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 md:p-8 backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(6,182,212,0.15)] text-slate-100">
        {/* Шапка */}
        <div className="mb-8 border-b border-slate-800 pb-4">
          <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Тестовое задание — Analytics Dashboard
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Mixed chart — отображение{" "}
            <span className="text-cyan-400 font-medium">area</span>,{" "}
            <span className="text-purple-400 font-medium">spline</span>,{" "}
            <span className="text-emerald-400 font-medium">line</span> и{" "}
            <span className="text-amber-400 font-medium">bar</span> на одном
            холсте
          </p>
        </div>

        {/* Контейнер для графика */}
        <div className="h-[500px] w-full rounded-xl bg-slate-950/50 p-4 border border-slate-900">
          <AnalyticsChart />
        </div>
      </div>
    </main>
  );
}
