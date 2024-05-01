import { options } from "@/app/api/auth/[...nextauth]/options";
import ProfileForm from "@/components/ProfileForm";
import Grid from "@/components/ui/Grid/Grid";
import { TextLarge } from "@/components/ui/Typography/TextLarge";
import { TextMuted } from "@/components/ui/Typography/TextMuted";
import TitleLevel1 from "@/components/ui/Typography/TitleLevel1";
import { getServerSession } from "next-auth/next";

export default async function Profile() {
  const session = await getServerSession(options);
  return (
    <main className='main'>
        <Grid>
        <div className="col-start-2 mt-10 flex items-end gap-6">
        <TitleLevel1>Profile</TitleLevel1>{session?.user?.role && <TextMuted>
            {session?.user?.role}
            </TextMuted>}
        </div>
        <div className="col-start-2 col-end-12 gap-8 flex">
        <TextMuted>0 Sightings</TextMuted>
        <TextMuted>0 Notes Owned</TextMuted>
        <TextMuted>0 Collaborated</TextMuted>
        </div>
        <div className="col-start-2 col-end-12 mt-16 grid gap-x-2 gap-y-6">
        <TextMuted className='w-32 col-start-1 flex items-center'>Username</TextMuted>
        <TextLarge className="col-start-2 col-end-12 flex items-center">{session?.user?.username}</TextLarge>
        <TextMuted className='w-32 col-start-1 flex items-center'>Email</TextMuted>
        <TextLarge className="col-start-2 col-end-12 flex items-center">{session?.user?.email}</TextLarge>
        </div>
        <ProfileForm />
        </Grid>
    </main>
  );
}