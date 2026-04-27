"use client";

import { useState } from "react";

import { BottomNav } from "./BottomNav";
import { DesktopSidebar } from "../../../components/layout/DesktopSidebar";
import { DesktopTopBar } from "../../../components/layout/DesktopTopBar";
import { MobileTopBar } from "./MobileTopBar";

type MobileAppShellProps = {
  children: React.ReactNode;
};

const SIDEBAR_STORAGE_KEY = "milife-hrm-sidebar-collapsed";

function getInitialSidebarState() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.localStorage.getItem(SIDEBAR_STORAGE_KEY) === "true";
}

export function MobileAppShell({ children }: MobileAppShellProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(
    getInitialSidebarState,
  );

  function handleToggleSidebar() {
    setIsSidebarCollapsed((currentValue) => {
      const nextValue = !currentValue;

      window.localStorage.setItem(SIDEBAR_STORAGE_KEY, String(nextValue));

      return nextValue;
    });
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 lg:h-screen lg:overflow-hidden">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-slate-50 shadow-xl lg:h-screen lg:max-w-none lg:flex-row lg:bg-slate-100 lg:shadow-none">
        <DesktopSidebar
          isCollapsed={isSidebarCollapsed}
          onToggle={handleToggleSidebar}
        />

        <div className="flex min-h-screen min-w-0 flex-1 flex-col lg:h-screen">
          <MobileTopBar />

          <DesktopTopBar />

          <main className="min-w-0 flex-1 pb-4 lg:overflow-y-auto lg:px-6 lg:py-6">
            <div className="mx-auto w-full min-w-0 lg:max-w-7xl">
              {children}
            </div>
          </main>

          <BottomNav />
        </div>
      </div>
    </div>
  );
}
