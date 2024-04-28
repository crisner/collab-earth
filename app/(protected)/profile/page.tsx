import Grid from "@/components/ui/Grid/Grid";
import TitleLevel1 from "@/components/ui/Typography/TitleLevel1";
import TitleLevel2 from "@/components/ui/Typography/TitleLevel2";

export default function Profile() {
  return (
    <main className='main'>
        <Grid>
        <div className="col-start-2 mt-10">
        <TitleLevel1>Profile</TitleLevel1>
        </div>
        <div className="col-start-2 mt-5">
        <TitleLevel2>Name</TitleLevel2>
        </div>
        </Grid>
    </main>
  );
}