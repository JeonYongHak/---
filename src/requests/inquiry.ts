import { http } from '@/utils/http';
import { useMutation } from '@tanstack/react-query';

export const useInquiryMutation = () => {
  return useMutation({
    mutationFn: ({ text }: { text: string }) => {
      return http.post('/webhook/slack', { text });
    },
    onError: () => {
      alert('문의하기에 실패하였습니다. 다시 시도해주세요.');
    },
  });
};
