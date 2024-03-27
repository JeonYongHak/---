import marketing from '@/markdown/marketing.md';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MarketingPage() {
  return <Markdown remarkPlugins={[remarkGfm]}>{`${marketing}`}</Markdown>;
}
