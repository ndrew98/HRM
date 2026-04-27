import { Bell, Search, UserRound } from "lucide-react";

export function DesktopTopBar() {
  return (
    <header className="hidden border-b border-slate-200 bg-white px-6 py-4 lg:block">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">Welcome back</p>

          <h2 className="text-xl font-bold text-slate-950">
            miLife HR workspace
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-80 items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3">
            <Search className="h-5 w-5 text-slate-400" />

            <input
              type="search"
              placeholder="Search employees, documents, approvals..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>

          <button
            type="button"
            className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm"
            aria-label="Open notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-emerald-500" />
          </button>

          <button
            type="button"
            className="flex h-11 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 text-slate-700 shadow-sm"
          >
            <UserRound className="h-5 w-5" />

            <span className="text-sm font-semibold">Admin</span>
          </button>
        </div>
      </div>
    </header>
  );
}
