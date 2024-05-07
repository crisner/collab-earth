import Grid from "@/components/ui/Grid/Grid";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TextLarge } from "@/components/ui/Typography/TextLarge";
import { TextMuted } from "@/components/ui/Typography/TextMuted";
import TitleLevel1 from "@/components/ui/Typography/TitleLevel1";

export default async function MyNotes() {
  return (
    <>
      {/* <div className="col-start-2 mt-10 flex items-end gap-6">
          <TitleLevel1>Notes</TitleLevel1>
        </div> */}
      <div className="col-start-2 col-end-12  gap-x-2 gap-y-6">
        <Card className="col-span-6">
          <CardHeader>
            <CardTitle>Collaborated Note Title</CardTitle>
            <CardDescription className="flex gap-4">
              <TextMuted>No Sightings</TextMuted>
              <Separator orientation="vertical" />
              <TextMuted>Not linked to map</TextMuted>
              <Separator orientation="vertical" />
              <TextMuted>Collaborated</TextMuted>
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <TextMuted>Created on: 24/05/24</TextMuted>

            <TextMuted>3 Comments</TextMuted>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
