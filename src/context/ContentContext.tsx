import React, { createContext, useContext, useState } from 'react';
import { JSONContent } from '@tiptap/react';
import { ContentSection } from '../types/content';
import { contentSections } from '../data/content';
import { saveContent, loadContent } from '../services/contentService';

interface ContentContextType {
  sections: ContentSection[];
  updateContent: (sectionId: string, newContent: JSONContent) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [sections, setSections] = useState<ContentSection[]>(() => {
    const saved = loadContent();
    return saved || contentSections;
  });

  const updateContent = (sectionId: string, newContent: JSONContent) => {
    setSections(prev => {
      const updated = prev.map(section => 
        section.id === sectionId 
          ? { ...section, content: newContent }
          : section
      );
      saveContent(updated); // This will trigger the content-updated event
      return updated;
    });
  };

  return (
    <ContentContext.Provider value={{ sections, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}