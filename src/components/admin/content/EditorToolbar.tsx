import React from 'react';
import { Editor } from '@tiptap/react';
import { 
  Bold, Italic, List, ListOrdered, 
  AlignLeft, AlignCenter, AlignRight,
  Heading1, Heading2, Quote, Undo, Redo 
} from 'lucide-react';

interface Props {
  editor: Editor;
}

export default function EditorToolbar({ editor }: Props) {
  const ToolbarButton = ({ onClick, isActive = false, children }: any) => (
    <button
      onClick={onClick}
      className={`p-2 hover:bg-gray-100 rounded ${isActive ? 'bg-gray-100' : ''}`}
    >
      {children}
    </button>
  );

  return (
    <div className="border-b p-2 flex flex-wrap gap-1">
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive('bold')}
      >
        <Bold className="w-5 h-5" />
      </ToolbarButton>
      
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive('italic')}
      >
        <Italic className="w-5 h-5" />
      </ToolbarButton>

      <div className="w-px h-6 bg-gray-200 mx-1" />

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        isActive={editor.isActive('heading', { level: 1 })}
      >
        <Heading1 className="w-5 h-5" />
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        isActive={editor.isActive('heading', { level: 2 })}
      >
        <Heading2 className="w-5 h-5" />
      </ToolbarButton>

      <div className="w-px h-6 bg-gray-200 mx-1" />

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive('bulletList')}
      >
        <List className="w-5 h-5" />
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive('orderedList')}
      >
        <ListOrdered className="w-5 h-5" />
      </ToolbarButton>

      <div className="w-px h-6 bg-gray-200 mx-1" />

      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        isActive={editor.isActive({ textAlign: 'left' })}
      >
        <AlignLeft className="w-5 h-5" />
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        isActive={editor.isActive({ textAlign: 'center' })}
      >
        <AlignCenter className="w-5 h-5" />
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        isActive={editor.isActive({ textAlign: 'right' })}
      >
        <AlignRight className="w-5 h-5" />
      </ToolbarButton>

      <div className="w-px h-6 bg-gray-200 mx-1" />

      <ToolbarButton onClick={() => editor.chain().focus().undo().run()}>
        <Undo className="w-5 h-5" />
      </ToolbarButton>

      <ToolbarButton onClick={() => editor.chain().focus().redo().run()}>
        <Redo className="w-5 h-5" />
      </ToolbarButton>
    </div>
  );
}