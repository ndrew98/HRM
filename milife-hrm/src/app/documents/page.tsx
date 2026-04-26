"use client";

import { useState } from "react";
import { AlertTriangle, FileCheck2, FileText, FolderOpen } from "lucide-react";

import { MobileAppShell } from "@/app/components/layout/MobileAppShell";
import { AnimatedList } from "@/app/components/shared/AnimatedList";
import { AnimatedListItem } from "@/app/components/shared/AnimatedListItem";
import { FadeIn } from "@/app/components/shared/FadeIn";

import { DocumentListItem } from "@/app/features/documents/components/DocumentListItem";
import { UploadDocumentSheet } from "@/app/features/documents/components/UploadDocumentSheet";
import {
  documentCategories,
  documents,
  type DocumentCategory,
} from "@/app/features/documents/data";

import { Button } from "@/components/ui/button";

export default function DocumentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | DocumentCategory
  >("All");

  const filteredDocuments =
    selectedCategory === "All"
      ? documents
      : documents.filter((document) => document.category === selectedCategory);

  const verifiedCount = documents.filter(
    (document) => document.status === "Verified",
  ).length;

  const pendingCount = documents.filter(
    (document) => document.status === "Pending",
  ).length;

  const expiredDocuments = documents.filter(
    (document) => document.status === "Expired",
  );

  return (
    <MobileAppShell>
      <section className="px-4 py-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-slate-500">Employee files</p>

            <h2 className="mt-1 text-2xl font-bold text-slate-950">
              Documents
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Manage employee documents, HR letters, contracts, certificates,
              and policies.
            </p>
          </div>

          <UploadDocumentSheet />
        </div>
      </section>

      <FadeIn className="px-4">
        <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-5 text-white shadow-sm">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/20 blur-2xl" />

          <div className="relative">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-300">
                  Document center
                </p>

                <p className="mt-2 text-4xl font-bold tracking-tight">
                  {documents.length}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Total HR documents tracked
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                <FolderOpen className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/10 p-3">
                <FileCheck2 className="h-4 w-4 text-emerald-300" />

                <p className="mt-2 text-xl font-bold">{verifiedCount}</p>

                <p className="mt-1 text-[11px] font-medium text-slate-400">
                  Verified
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-3">
                <FileText className="h-4 w-4 text-amber-300" />

                <p className="mt-2 text-xl font-bold">{pendingCount}</p>

                <p className="mt-1 text-[11px] font-medium text-slate-400">
                  Pending
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {expiredDocuments.length > 0 ? (
        <section className="mt-5 px-4">
          <div className="rounded-3xl border border-red-100 bg-red-50 p-4">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-red-600">
                <AlertTriangle className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-bold text-red-800">
                  Expiry attention needed
                </p>

                <p className="mt-1 text-sm leading-6 text-red-700">
                  {expiredDocuments.length} document needs renewal or
                  verification.
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="mt-5 px-4">
        <div className="mb-3">
          <h3 className="text-base font-bold text-slate-950">Categories</h3>

          <p className="text-sm text-slate-500">Filter document records</p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {documentCategories.map((category) => {
            const isSelected = selectedCategory === category;

            return (
              <Button
                key={category}
                type="button"
                size="sm"
                variant={isSelected ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  isSelected
                    ? "h-10 shrink-0 rounded-full bg-emerald-600 px-4 text-xs font-semibold text-white hover:bg-emerald-700"
                    : "h-10 shrink-0 rounded-full border-slate-200 bg-white px-4 text-xs font-semibold text-slate-600"
                }
              >
                {category}
              </Button>
            );
          })}
        </div>
      </section>

      <section className="mt-5 px-4 pb-6">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-950">
              Recent documents
            </h3>

            <p className="text-sm text-slate-500">
              Showing {filteredDocuments.length} document
              {filteredDocuments.length === 1 ? "" : "s"}
            </p>
          </div>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {selectedCategory}
          </span>
        </div>

        {filteredDocuments.length > 0 ? (
          <AnimatedList>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              {filteredDocuments.map((document) => (
                <AnimatedListItem key={document.id}>
                  <DocumentListItem document={document} />
                </AnimatedListItem>
              ))}
            </div>
          </AnimatedList>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-center">
            <p className="text-sm font-semibold text-slate-900">
              No documents found
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Try selecting another category or upload a new document.
            </p>
          </div>
        )}
      </section>
    </MobileAppShell>
  );
}
