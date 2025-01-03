import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import EditorToolbar from './EditorToolbar';
import { ContentSection } from '../../../types/content';

interface Props {
  section: ContentSection;
  onChange: (content: any) => void;
}

export default function ContentEditor({ section, onChange }: Props) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: section.content,
    onUpdate: ({ editor }) => {
      onChange(editor.getJSON());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <EditorToolbar editor={editor} />
      <div className="p-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}