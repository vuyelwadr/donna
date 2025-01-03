import React, { useState } from 'react';
import { Save } from 'lucide-react';
import ContentEditor from '../../components/admin/content/ContentEditor';
import { useContent } from '../../context/ContentContext';

export default function ContentPage() {
  const { sections, updateContent } = useContent();
  const [pendingChanges, setPendingChanges] = useState<Record<string, any>>({});
  const [isSaving, setIsSaving] = useState(false);

  const handleContentChange = (sectionId: string, newContent: any) => {
    setPendingChanges(prev => ({
      ...prev,
      [sectionId]: newContent
    }));
  };

  const handleSave = () => {
    setIsSaving(true);
    Object.entries(pendingChanges).forEach(([sectionId, content]) => {
      updateContent(sectionId, content);
    });
    setPendingChanges({});
    setIsSaving(false);
  };

  const hasChanges = Object.keys(pendingChanges).length > 0;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Content Management</h1>
        <button
          onClick={handleSave}
          disabled={!hasChanges || isSaving}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-md text-white
            ${hasChanges 
              ? 'bg-brand-primary hover:bg-brand-primary/90' 
              : 'bg-gray-300 cursor-not-allowed'
            }
            transition-colors
          `}
        >
          <Save className="w-4 h-4" />
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      <div className="space-y-6">
        {sections.map(section => (
          <div key={section.id} className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">{section.name}</h2>
            <ContentEditor
              section={section}
              onChange={(newContent) => handleContentChange(section.id, newContent)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}