import type { sortBy } from './types';

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
  user?: IUser;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IPostModuleState {
  posts: IPost[];
  currentPost: IPost;
  isPostsLoading: Boolean;
  page: number;
  limit: number;
  totalPages: number;
  visitedPosts: IPost[];
  visitedUsers: IUser[];
  users: IUser[];
  userIds: number[];
  sortOptions: ISortOption[];
  selectedSort: sortBy;
}

export interface IStateRoot {
  post: IPostModuleState;
}

export interface ISortOption {
  value: sortBy;
  name: string;
}
