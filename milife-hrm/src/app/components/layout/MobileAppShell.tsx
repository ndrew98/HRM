import { BottomNav } from "./BottomNav";
import { MobileTopBar } from "./MobileTopBar";

type MobileAppShellProps = {
  children: React.ReactNode;
};

export function MobileAppShell({ children }: MobileAppShellProps) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-slate-50 shadow-xl">
        <MobileTopBar />

        <main className="flex-1 pb-4">{children}</main>

        <BottomNav />
      </div>
    </div>
  );
}
