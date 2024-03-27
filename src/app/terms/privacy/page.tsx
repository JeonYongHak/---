import { PRIVACY } from '@/markdown/privacy';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function PrivacyPage() {
  return <Markdown remarkPlugins={[remarkGfm]}>{`${PRIVACY}`}</Markdown>;
}
