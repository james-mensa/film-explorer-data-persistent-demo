
import { Character, GetCharactersData, ResponseData } from '@/types/apis';
import { makeApiCall } from './makeApiCall';

export class CharacterApiService {
  private readonly basePath = '/character';

  /**
   * Fetch all characters
   */
  getAll = async (): Promise<ResponseData<GetCharactersData>> => {
    return await makeApiCall<GetCharactersData>(this.basePath);
  };

  /**
   * Fetch a single character by ID
   * @param id - Character ID
   */
  getDetail = async (id: number): Promise<ResponseData<Character>> => {
    return await makeApiCall<Character>(`${this.basePath}/${id}`);
  };
}
