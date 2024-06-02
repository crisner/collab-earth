import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Separator } from "@/components/ui/separator";
  import { TextLarge } from "@/components/ui/Typography/TextLarge";
  import { TextMuted } from "@/components/ui/Typography/TextMuted";

  export type NoteProps = {
    title: string;
    sightings: number;
    mappedTo: string;
    isCollaborated: boolean;
    createdOn: string;
    noOfComments: number;
  }

export default function Note ({title, sightings, mappedTo, isCollaborated, createdOn, noOfComments}: NoteProps) {
    return <Card className="col-span-6 mb-4">
          <CardHeader>
            <CardTitle className="mb-2">My Note Title</CardTitle>
            <CardDescription className="flex justify-between">
                <div className="flex gap-4">
              <TextMuted>No Sightings</TextMuted>
              <Separator orientation="vertical" />
              <TextMuted>Not linked to map</TextMuted>
              <Separator orientation="vertical" />
              <TextMuted>Collaborated</TextMuted>
                </div>
              <div className="flex gap-4">
              <TextMuted>Created on: 24/05/24</TextMuted>
            <TextMuted>3 Comments</TextMuted>
                </div>
            </CardDescription>
          </CardHeader>
        </Card>
}