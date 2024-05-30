import { http } from '@/utils/http';
import { useQuery } from '@tanstack/react-query';

export const useMeetingRoomPasswordQuery = (reservationId: string, enabled: boolean) => {
  return useQuery({
    queryKey: [`/meetingroom-reservations/${reservationId}/password`],
    queryFn: () => http.get<string>(`/meetingroom-reservations/${reservationId}/password`),
    enabled,
  });
};
