import NoteEditor from "@/components/NoteEditor/NoteEditor";
import Grid from "@/components/ui/Grid/Grid";

export default async function CreateNote() {
  return (
    <main className="main">
      <Grid>
      <div className="col-start-2 col-end-12 min-h-screen bg-white">
        <NoteEditor />
        </div>
      </Grid>
    </main>
  );
}
