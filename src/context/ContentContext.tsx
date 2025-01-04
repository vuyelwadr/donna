import React, { createContext, useContext, useState, useEffect } from 'react';
import { JSONContent } from '@tiptap/react';
import { ContentSection } from '../types/content';
import { saveContent, loadContent } from '../services/contentService';
import { useToast } from './ToastContext';


interface ContentContextType {
  sections: ContentSection[];
  updateContent: (sectionId: string, newContent: JSONContent) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [sections, setSections] = useState<ContentSection[]>([]); // Initialize with an empty array
  const { showToast } = useToast();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const saved = await loadContent();
        if (saved) {
          setSections(saved);
        }
      } catch (error) {
        console.error('Failed to load content:', error);
        // Optionally handle the error, e.g., set an error state or notify the user
      }
    };

    fetchContent();
  }, []); // Empty dependency array ensures this runs once after the initial render

  const updateContent = (sectionId: string, newContent: JSONContent) => {
    setSections((prevSections) => {
      const updatedSections = prevSections.map((section) =>
        section.id === sectionId ? { ...section, content: newContent } : section
      );
      saveContent(updatedSections)
        .then(() => {
          showToast(
            'Content updated successfuly.',
            'success'
          );
        })
        .catch((error) => {
          console.error('Failed to save content:', error);
          showToast(
            'Content update unsuccessful. Please try again.',
            'error'
          );
        });
      return updatedSections;
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
