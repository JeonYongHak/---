import service from '@/markdown/service.md';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ServicePage() {
  return <Markdown remarkPlugins={[remarkGfm]}>{`${service}`}</Markdown>;
}
