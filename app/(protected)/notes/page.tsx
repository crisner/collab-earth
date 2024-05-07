import Grid from "@/components/ui/Grid/Grid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TitleLevel1 from "@/components/ui/Typography/TitleLevel1";
import MyNotes from "./mynotes/page";
import CollaboratedNotes from "./collaboratednotes/page";

export default async function Notes() {
  return (
    <main className="main">
      <Grid>
        <div className="col-start-2 mt-10 flex items-end gap-6">
          <TitleLevel1>Notes</TitleLevel1>
        </div>
        <div className="col-start-2 col-end-12 grid gap-x-2 gap-y-6">
        <Tabs defaultValue="mynotes">
          <TabsList>
            <TabsTrigger value="mynotes">My Notes</TabsTrigger>
            <TabsTrigger value="collaborated">Collaborated Notes</TabsTrigger>
          </TabsList>
          <TabsContent value="mynotes">
            <MyNotes />
          </TabsContent>
          <TabsContent value="collaborated">
            <CollaboratedNotes  />
          </TabsContent>
        </Tabs>

        </div>
      </Grid>
    </main>
  );
}
