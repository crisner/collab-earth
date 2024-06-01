import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyNotes from "./mynotes/page";
import CollaboratedNotes from "./collaboratednotes/page";
import Link from "next/link";


export default function NotesContainer({type}: {type: string}) {
  return (
    <Tabs defaultValue={type} value={type}>
      <TabsList>
        <TabsTrigger value="mynotes"><Link href={'/notes/mynotes'}>My Notes</Link></TabsTrigger>
        <TabsTrigger value="collaborated"><Link href={'/notes/collaborated'}>Collaborated Notes</Link></TabsTrigger>
      </TabsList>
      <TabsContent value="mynotes">
        <MyNotes />
      </TabsContent>
      <TabsContent value="collaborated">
        <CollaboratedNotes />
      </TabsContent>
    </Tabs>
  );
}
