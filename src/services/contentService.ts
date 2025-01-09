import { ContentSection } from '../types/content';
import { API_URL } from '../utils/apiUrl';



export async function loadContent(): Promise<ContentSection[]> {
  try {
    const response = await fetch(`${API_URL}/content`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const sections: ContentSection[] = await response.json();
    return sections;
  } catch (error) {
    console.error('Failed to load content:', error);
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Failed to connect to the server. Please ensure the API server is running.'
    );
  }
}

export async function saveContent(sections: ContentSection[]): Promise<void> {
  try {
    const response = await fetch(`${API_URL}/content`, {
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
