"use client";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import {
  BlockNoteView
} from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

export default function NoteEditor() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "heading",
        content: "Start with a heading!",
      },
      {
        type: "paragraph",
        content: "Type '/' to see commands...",
      },
      {
        type: "paragraph",
      },
      {
        type: "paragraph",
      },
      {
        type: "paragraph",
      },
    ],
  });

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} theme='light' />;
}
