// src/app/[buildingId]/_view/MenuAllData.tsx

import {
  IconInfo,
  IconMap,
  IconPhone,
  IconDocument,
  IconCompliants,
  IconPaper,
  IconReservation,
  IconMeal,
  IconFeedback,
  IconParkingLot,
  IconSurvey,
  IconNotification,
} from './IconMenu';

const MenuAllData = [
  { name: '시설안내', href: '/시설안내', icon: IconInfo },
  { name: '찾아오시는길', href: '/찾아오시는길', icon: IconMap },
  { name: '비상연락망', href: '/비상연락망', icon: IconPhone },
  { name: '건물소식', href: '/건물소식', icon: IconNotification },
  { name: '건물자료실', href: '/건물자료실', icon: IconDocument },
  { name: '고지서조회', href: '/고지서조회', icon: IconPaper },
  { name: '시설예약', href: '/시설예약', icon: IconReservation },
  { name: '불편접수', href: '/불편접수', icon: IconCompliants },
  { name: '온도피드백', href: '/온도피드백', icon: IconFeedback },
  { name: '정기주차신청', href: '/정기주차신청', icon: IconParkingLot },
  { name: '구내식당', href: '/구내식당', icon: IconMeal },
  { name: '설문', href: '/설문', icon: IconSurvey },
];

export default MenuAllData;
