// components/ArticleTags.tsx

'use client';

const tags = [
  'FRANCE',
  'REAL ESTATE',
  'ENVIRONMENT',
  'ENERGY',
  'ACCOMMODATION',
  'PURCHASING POWER',
  
];

export default function ArticleTags() {
  return (
    <div className="p-4">
    <div className="bg-gray-100 border-l-8 border-red-700 p-4">
      <h2 className="text-xl font-semibold mb-4">Related topics</h2>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-red-700 text-white text-xs font-semibold px-4 py-1 rounded-full uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
    </div>
  );
}
