import React, { useState, useEffect } from 'react';
import { useContent } from '../context/ContentContext';

interface Props {
  sectionId: string;
  className?: string;
}

export default function ContentDisplay({ sectionId, className = '' }: Props) {
  const { sections } = useContent();
  const [content, setContent] = useState(() => 
    sections.find(s => s.id === sectionId)?.content
  );

  // Update content when sections change or content-updated event is fired
  useEffect(() => {
    const section = sections.find(s => s.id === sectionId);
    setContent(section?.content);

    const handleContentUpdate = () => {
      const updatedSection = sections.find(s => s.id === sectionId);
      setContent(updatedSection?.content);
    };

    window.addEventListener('content-updated', handleContentUpdate);
    return () => window.removeEventListener('content-updated', handleContentUpdate);
  }, [sections, sectionId]);

  if (!content) return null;

  const renderContent = (content: any) => {
    if (!content || !Array.isArray(content.content)) return null;

    return content.content.map((node: any, index: number) => {
      if (node.type === 'paragraph') {
        return (
          <p key={index} className={className}>
            {node.content?.map((textNode: any, i: number) => (
              <span key={i}>{textNode.text}</span>
            ))}
          </p>
        );
      }
      return null;
    });
  };

  return <>{renderContent(content)}</>;
}