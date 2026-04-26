"use client";

import { Download, Eye, FileText } from "lucide-react";
import { toast } from "sonner";

import { DocumentStatusBadge } from "@/app/features/documents/components/DocumentStatusBadge";
import type { DocumentItem } from "@/app/features/documents/data";

import { Button } from "@/components/ui/button";

type DocumentListItemProps = {
  document: DocumentItem;
};

export function DocumentListItem({ document }: DocumentListItemProps) {
  return (
    <div className="border-b border-slate-100 bg-white px-4 py-4 last:border-b-0">
      <div className="flex gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
          <FileText className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="truncate text-sm font-bold text-slate-950">
                {document.title}
              </h3>

              <p className="mt-1 text-xs font-medium text-slate-500">
                {document.category} · {document.fileType} · {document.size}
              </p>
            </div>

            <DocumentStatusBadge status={document.status} />
          </div>

          {document.employeeName ? (
            <p className="mt-2 text-sm text-slate-600">
              Linked to{" "}
              <span className="font-semibold text-slate-800">
                {document.employeeName}
              </span>
            </p>
          ) : (
            <p className="mt-2 text-sm text-slate-600">Company-wide document</p>
          )}

          <p className="mt-1 text-xs text-slate-500">
            Uploaded by {document.uploadedBy} on {document.uploadedOn}
          </p>

          {document.expiryDate ? (
            <p className="mt-2 rounded-2xl bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">
              Expired on {document.expiryDate}
            </p>
          ) : null}

          <div className="mt-3 flex gap-2">
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="h-9 rounded-full border-slate-200 text-xs"
              onClick={() =>
                toast.info("Preview will open when file storage is connected.")
              }
            >
              <Eye className="mr-2 h-3.5 w-3.5" />
              Preview
            </Button>

            <Button
              type="button"
              size="sm"
              variant="outline"
              className="h-9 rounded-full border-slate-200 text-xs"
              onClick={() =>
                toast.info("Download will work when file storage is connected.")
              }
            >
              <Download className="mr-2 h-3.5 w-3.5" />
              Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
