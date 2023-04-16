export interface IFormCard {
  id: number;
  name: string;
  surname: string;
  date: string;
  country: string;
  gender: string;
  photo: string;
  consent: boolean;
}

interface IUrls {
  regular: string;
}

interface IUser {
  name: string;
}

export interface ICard {
  id: string;
  user: IUser;
  urls: IUrls;
  description: string;
  alt_description: string;
  created_at: string;
}
