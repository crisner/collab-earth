import Notes from "../page";

export default function NotesLSub({ params }: { params: { type: string } }) {

  return (
    <Notes type={params.type} />
  );
}
