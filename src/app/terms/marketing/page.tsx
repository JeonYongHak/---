import { MARKETING } from '@/markdown/marketing';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MarketingPage() {
  return <Markdown remarkPlugins={[remarkGfm]}>{`${MARKETING}`}</Markdown>;
}
