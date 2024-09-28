// src/requests/board/fetchNotice.ts

import { BaseResponse } from '@/types/response';

type Response = {
  id: number;
  category: string;
  important: boolean;
  title: string;
  writer: string;
  content: string;
  createdAt: string;
  schedule: { from: string; to: string } | null;
  images: string[] | null;
  files: string[] | null;
};

export const fetchNotice = async (noticeId: string) => {
  const res = await fetch(`http://localhost:5001/posts/${noticeId}`, { method: 'GET', cache: 'no-store' });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  const jsonResponse = await res.json();

  const response: BaseResponse<Response> = {
    data: jsonResponse,
    message: 'message',
  };

  return response;
};
