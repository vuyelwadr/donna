import React from 'react';
import { format } from 'date-fns';
import { History, RotateCcw } from 'lucide-react';
import { ContentVersion } from '../../../types/content';

interface Props {
  versions: ContentVersion[];
  currentVersion: string;
  onRevert: (version: ContentVersion) => void;
}

export default function VersionHistory({ versions, currentVersion, onRevert }: Props) {
  return (
    <div className="border rounded-lg bg-white">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <History className="w-5 h-5 text-gray-500" />
          <h3 className="font-medium">Version History</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {versions.map((version) => (
            <div
              key={version.id}
              className={`flex items-center justify-between p-3 rounded ${
                version.id === currentVersion ? 'bg-brand-primary/10' : 'hover:bg-gray-50'
              }`}
            >
              <div>
                <p className="text-sm font-medium">
                  {format(new Date(version.createdAt), 'MMM d, yyyy h:mm a')}
                </p>
                <p className="text-sm text-gray-500">{version.createdBy}</p>
              </div>
              {version.id !== currentVersion && (
                <button
                  onClick={() => onRevert(version)}
                  className="flex items-center gap-1 text-sm text-brand-primary hover:text-brand-primary/80"
                >
                  <RotateCcw className="w-4 h-4" />
                  Revert
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}