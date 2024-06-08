import NoteEditor from "@/components/NoteEditor/NoteEditor";
import Grid from "@/components/ui/Grid/Grid";
import { SlashIcon } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default async function CreateNote() {
  return (
    <Grid>
    <div className="col-start-1 col-end-13">
        <div className="mx-4 my-4 z-[600]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link href="/notes">Notes</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                /
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <Link href="/notes/mynotes">My Notes</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                /
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>New Note</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="max-w-full flex justify-center">
        <div className="w-2/3 min-h-screen bg-white">
          <NoteEditor />
        </div>
        </div>
      </div>
      </Grid>
  );
}
