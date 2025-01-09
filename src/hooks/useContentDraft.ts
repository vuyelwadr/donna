import { useState, useCallback } from 'react';
import { JSONContent } from '@tiptap/react';
import { ContentSection } from '../types/content';

export function useContentDraft(initialContent: ContentSection[]) {
  const [draftContent, setDraftContent] = useState<Record<string, JSONContent>>({});
  const [isDirty, setIsDirty] = useState(false);

  const updateDraft = useCallback((sectionId: string, content: JSONContent) => {
    setDraftContent(prev => ({
      ...prev,
      [sectionId]: content
    }));
    setIsDirty(true);
  }, []);

  const clearDraft = useCallback(() => {
    setDraftContent({});
    setIsDirty(false);
  }, []);

  const getDraft = useCallback((sectionId: string) => {
    return draftContent[sectionId];
  }, [draftContent]);

  return {
    draftContent,
    isDirty,
    updateDraft,
    clearDraft,
    getDraft
  };
}
