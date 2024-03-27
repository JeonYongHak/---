import { SERVICE } from '@/markdown/service';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ServicePage() {
  return <Markdown remarkPlugins={[remarkGfm]}>{`${SERVICE}`}</Markdown>;
}
