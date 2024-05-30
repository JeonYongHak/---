export interface BaseResponse<Type> {
  data: Type;
  message: string;
  total_num?: number;
  total_page_num?: number;
}
