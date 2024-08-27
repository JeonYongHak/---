import { http } from '@/utils/http';
import { useMutation } from '@tanstack/react-query';

type Props = {
  reservationId: string;
};

type Request = {
  type: 'open' | 'close';
};

export const useControlDoorlock = (props: Props) => {
  return useMutation({
    mutationKey: ['/meetingroom-reservations/control-doorlock', props.reservationId],
    mutationFn: (request: Request) =>
      http.post<Request, unknown>(`/meetingroom-reservations/${props.reservationId}/control`, { type: request.type }),
  });
};
