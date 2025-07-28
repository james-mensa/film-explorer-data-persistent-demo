type Status = 'Alive' | 'Dead' | 'unknown';

type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';

interface LocationInfo {
  name: string;
  url: string;
}

interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: LocationInfo;
  location: LocationInfo;
  image: string; 
  episode: string[]; 
  url: string; 
  created: string; 
}


interface PaginationInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface GetCharactersData {
  info: PaginationInfo;
  results: Character[];
}

interface ResponseData<T>{
    data:T,
    status:number,
    statusMessage:string
    errorMessage?:string
}


export type{

Status,
Gender,
LocationInfo,
Character,
PaginationInfo,
GetCharactersData,
ResponseData

}