import Note from "./Note";

export default async function NoteList() {
  let notes: any[] = [1,2,3,4,5,6,7,8,9,];
  return (
    <>
      <div className="col-start-2 col-end-12  gap-x-2 gap-y-6 notes-list--container">
        {notes.map(note => <Note key={note} title='' sightings={2} mappedTo='' isCollaborated={true} createdOn='03/0/2020'noOfComments={3} />)}
      </div>
    </>
  );
}
