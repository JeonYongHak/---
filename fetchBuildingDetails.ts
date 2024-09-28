// src/requests/buildings/fetchBuildingDetails.ts

import { ServicesConfig } from '@/types/services';
import { serverHttp } from '@/utils/http';

type Response = {
  id: string;
  name: string;
  description: string;
  buildingType: 'knowledge_industry_center';
  employeeContactList: [
    {
      name: string;
      phone_number: string;
      description: string;
    },
  ];
  buildingPicture: string[];
  address: string;
  services: ServicesConfig;
  coordinates: [number, number];
  parkingDescription: string;
  dongFloor: [
    {
      dong: string;
      floor: string[];
    },
  ];
};

export const fetchBuildingDetails = async (buildingId: string) => {
  return serverHttp<Response>(`/buildings/${buildingId}`);
  // return fetch(`http://localhost:5500/buildingInfo?buildingId=${buildingId}`).then(
  //   (res) => res.json(),
  // );
};
