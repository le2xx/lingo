export interface Comment {
  id: number;
  author: {
    avatarUrl: string;
    firstName: string;
    lastName: string;
  };
  comment: {
    text: string;
    time: string;
  };
}
