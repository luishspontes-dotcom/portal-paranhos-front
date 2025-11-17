
'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: (props) => (
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-50" {...props} />
          ),
          h2: (props) => (
            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-800 dark:text-slate-100" {...props} />
          ),
          h3: (props) => (
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-slate-800 dark:text-slate-100" {...props} />
          ),
          p: (props) => (
            <p className="text-lg leading-relaxed mb-4 text-slate-700 dark:text-slate-300" {...props} />
          ),
          ul: (props) => (
            <ul className="list-disc list-inside space-y-2 mb-4 text-slate-700 dark:text-slate-300" {...props} />
          ),
          ol: (props) => (
            <ol className="list-decimal list-inside space-y-2 mb-4 text-slate-700 dark:text-slate-300" {...props} />
          ),
          blockquote: (props) => (
            <blockquote className="border-l-4 border-emerald-500 pl-4 italic my-6 text-slate-600 dark:text-slate-400" {...props} />
          ),
          strong: (props) => (
            <strong className="font-bold text-emerald-600 dark:text-emerald-400" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
