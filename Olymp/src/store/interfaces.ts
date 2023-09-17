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
  currentPost: number;
  isPostsLoading: Boolean;
  page: number;
  limit: number;
  totalPages: number;
  visitedPosts: Set<IPost>;
  visitedUsers: Set<IUser>;
  users: IUser[];
}

export interface IStateRoot {
  post: IPostModuleState;
}
