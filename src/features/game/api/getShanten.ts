import { axios } from '@/lib/axios';

export const getShanten = (oneLineStringtiles: string): Promise<number> => {
  return axios.get(`/hands/${oneLineStringtiles}/shanten`);
};
