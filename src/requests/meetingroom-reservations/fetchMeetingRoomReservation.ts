import { serverHttp } from '@/utils/http';

type Response = {
  _id: string;
  buildingName: string;
  floor: string;
  dong: string;
  name: string;
  deviceType: 'itsokey' | 'solity';
  startAt: string;
  endAt: string;
  checkStatus: 'approved' | 'canceled';
  supportedControlTypes: ['control' | 'password'];
};

export const fetchMeetingRoomReservation = async (reservationId: string) => {
  return await serverHttp<Response>(`/meetingroom-reservations/${reservationId}`);
};
