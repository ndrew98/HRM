"use client";

import { Upload } from "lucide-react";
import { toast } from "sonner";

import { documentCategories } from "@/app/features/documents/data";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function UploadDocumentSheet() {
  const uploadCategories = documentCategories.filter(
    (category) => category !== "All",
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="h-11 rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700">
          <Upload className="mr-2 h-4 w-4" />
          Upload
        </Button>
      </SheetTrigger>

      <SheetContent side="bottom" className="rounded-t-3xl">
        <SheetHeader>
          <SheetTitle>Upload document</SheetTitle>

          <SheetDescription>
            Add an employee, leave, performance, policy, or HR document.
          </SheetDescription>
        </SheetHeader>

        <form
          className="mt-6 space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            toast.success("Document upload drafted successfully.");
          }}
        >
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">
              Document title
            </label>

            <Input
              placeholder="Example: Appointment Letter"
              className="h-11 rounded-2xl"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">
              Category
            </label>

            <Select>
              <SelectTrigger className="h-11 rounded-2xl">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>

              <SelectContent>
                {uploadCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">
              Linked employee
            </label>

            <Input
              placeholder="Search employee name"
              className="h-11 rounded-2xl"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">File</label>

            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-5 text-center">
              <Upload className="mx-auto h-8 w-8 text-slate-400" />

              <p className="mt-3 text-sm font-semibold text-slate-800">
                Tap to choose a file
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                PDF, JPG, PNG, or DOCX. Maximum size will be controlled by the
                backend.
              </p>

              <Input type="file" className="mt-4 rounded-2xl bg-white" />
            </div>
          </div>

          <Button
            type="submit"
            className="h-11 w-full rounded-full bg-emerald-600 font-semibold text-white hover:bg-emerald-700"
          >
            Save document
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}
