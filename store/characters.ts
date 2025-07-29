import { makeApiCall } from '@/apis/makeApiCall';
import { Character, GetCharactersData, PaginationInfo } from '@/types/apis';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface CharactersState {
  isLoading: boolean;
  data: Character[];
  pagination: PaginationInfo | null;
  errorMsg?: string;
}


interface CharacterInfoRecords {
  isFetchingNewCharacter: boolean;
  data: Record<number, Character>; // Cache of character details by ID
  errorMsg?: string;
}


interface CharacterStore {
  characters: CharactersState;
  characterDetails: CharacterInfoRecords;
  fetchCharacters: () => Promise<void>;
  fetchCharacterDetail: (id: number) => Promise<void>;
}

export const useCharacterStore = create<CharacterStore>()(
  persist(
    (set, get) => ({
     
      // Initial state for character list
      characters: {
        isLoading: false,
        data: [],
        pagination: null,
        errorMsg: undefined,
      },

      // Initial state for character detail cache
     
      characterDetails: {
        isFetchingNewCharacter: false,
        data: {},
        errorMsg: undefined,
      },

      /**
       * Fetches a paginated list of characters.
       * Sets loading state, handles success/error
       */
      fetchCharacters: async () => {
        set((state) => ({
          characters: {
            ...state.characters,
            isLoading: true,
            errorMsg: undefined,
          },
        }));

        const response = await makeApiCall<GetCharactersData>('/character');

        set((state) => ({
          characters: {
            ...state.characters,
            isLoading: false,
            data: response.data?.results || [],
            pagination: response.data?.info || null,
            errorMsg: response.errorMessage,
          },
        }));
      },

      /**
       * Fetches and caches details of a specific character by ID.
       * Uses local cache to prevent redundant API calls.
       */
      fetchCharacterDetail: async (id: number) => {
        const { characterDetails } = get();

        // Return early if character detail already cached
        if (characterDetails.data[id]?.id) {return;}

        set((state) => ({
          characterDetails: {
            ...state.characterDetails,
            isFetchingNewCharacter: true,
            errorMsg: undefined,
          },
        }));

        const response = await makeApiCall<Character>(`/character/${id}`);
        if (response.data) {
          // Successful fetch: cache the character detail
          set((state) => ({
            characterDetails: {
              ...state.characterDetails,
              isFetchingNewCharacter: false,
              data: {
                ...state.characterDetails.data,
                [id]: response.data,
              },
            },
          }));
        } else {
          // Error occurred: store error message
          set((state) => ({
            characterDetails: {
              ...state.characterDetails,
              isFetchingNewCharacter: false,
              errorMsg: response.errorMessage,
            },
          }));
        }
      },
    }),
    {
      name: 'character-store', 
    }
  )
);
