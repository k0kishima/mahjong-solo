import { axios } from '@/lib/axios';

export const getShanten = async (
  oneLineStringtiles: string
): Promise<number> => {
  const response = await axios.get<GetShantenResponse>(
    `/hands/${oneLineStringtiles}/shanten`
  );
  return response.data.shanten;
};

type GetShantenResponse = {
  shanten: number;
};
