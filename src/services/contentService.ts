import { ContentSection } from '../types/content';
import contentData from '../data/content.json';

// Get base URL dynamically based on environment
const getApiUrl = () => {
  const isDev = import.meta.env.DEV;
  return isDev ? 'http://localhost:3000/api' : '/api';
};

export function loadContent(): ContentSection[] {
  return contentData.sections;
}

export async function saveContent(sections: ContentSection[]): Promise<void> {
  try {
    const response = await fetch(`${getApiUrl()}/content`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sections }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    // Force a DOM update by dispatching a custom event
    window.dispatchEvent(new Event('content-updated'));
  } catch (error) {
    console.error('Failed to save content:', error);
    throw new Error(
      error instanceof Error 
        ? error.message 
        : 'Failed to connect to the server. Please ensure the API server is running.'
    );
  }
}