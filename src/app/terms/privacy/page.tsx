import privacy from '@/markdown/privacy.md';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function PrivacyPage() {
  return <Markdown remarkPlugins={[remarkGfm]}>{`${privacy}`}</Markdown>;
}
