import Breadcrumbs from "@/components/NoteEditor/Breadcrumbs";
import NoteEditor from "@/components/NoteEditor/NoteEditor";
import NoteSettings from "@/components/NoteEditor/Settings";
import Grid from "@/components/ui/Grid/Grid";



export default async function CreateNote() {
  return (
    <Grid>
    <div className="col-start-1 col-end-13">
        <div className="notes-header mx-4 my-4 z-[600] flex justify-between">
          <Breadcrumbs />
          <NoteSettings />
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
