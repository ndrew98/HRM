import { FileText, FolderOpen, Upload } from "lucide-react";

import { MobileAppShell } from "@/app/components/layout/MobileAppShell";
import { Button } from "@/components/ui/button";

export default function DocumentsPage() {
  return (
    <MobileAppShell>
      <section className="px-4 py-5">
        <p className="text-sm font-medium text-slate-500">Employee files</p>

        <h2 className="mt-1 text-2xl font-bold text-slate-950">Documents</h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Manage employee documents, HR letters, contracts, certificates, and
          policies.
        </p>
      </section>

      <section className="px-4">
        <div className="rounded-[2rem] bg-slate-950 p-5 text-white shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
            <FolderOpen className="h-6 w-6" />
          </div>

          <h3 className="mt-5 text-xl font-bold">Document center</h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Store and organize staff documents with secure access control and
            audit history.
          </p>

          <Button className="mt-5 rounded-full bg-emerald-600 text-white hover:bg-emerald-700">
            <Upload className="mr-2 h-4 w-4" />
            Upload document
          </Button>
        </div>
      </section>

      <section className="mt-5 px-4 pb-6">
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-center">
          <FileText className="mx-auto h-8 w-8 text-slate-400" />

          <p className="mt-3 text-sm font-semibold text-slate-900">
            Document module coming next
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            We’ll add document categories, uploads, previews, expiry tracking,
            and employee file history here.
          </p>
        </div>
      </section>
    </MobileAppShell>
  );
}
