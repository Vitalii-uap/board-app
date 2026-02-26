export type Ad = {
  _id: string;
  title: string;
  description: string;
  category: string;
  images: string[];
  user: { username: string; phone: string };
  createdAt: string;
};
