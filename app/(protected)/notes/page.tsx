import Grid from "@/components/ui/Grid/Grid";
import TitleLevel1 from "@/components/ui/Typography/TitleLevel1";
import { PlusIcon } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import NotesContainer from "@/components/Notes";

export default function Notes({ type = "mynotes" }: { type?: string }) {
  return (
    <>
      <div className="col-start-2 mt-10 flex items-end gap-6">
        <TitleLevel1>Notes</TitleLevel1>
      </div>
      <div className="col-end-12 mt-10 flex justify-end items-end gap-6">
        <ButtonLink
          className="rounded-full"
          size="icon"
          link="/notes/create-note"
        >
          <PlusIcon className="h-4 w-4" />
        </ButtonLink>
      </div>
      <div className="col-start-2 col-end-12 grid gap-x-2 gap-y-6">
        {<NotesContainer type={type} />}
      </div>
    </>
  );
}
