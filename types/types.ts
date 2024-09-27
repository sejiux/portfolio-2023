import { StaticImageData } from "next/image";

export type Article = {
  date: string;
  title: string;
  ReadingTime: string;
  link: string;
  categoryId: number;
  category: ItemCategory;
  createdAt: Date;
};

export type WorksData = {
  title: string;
  category: string;
  date: string;
  slug: string;
  image: StaticImageData;
}

export type Case = {
  title: string;
  category: string;
  date: string;
  company: string | null;
  role: string | null;
  construction: string | null;
  content: string | null;
  slug: string;
  siteUrl: string | null;
  images: StaticImageData[];
} | null;

export type ItemCategory = {
  id: number;
  category: string;
  createdAt: Date;
};

export type ProductCategory = {
  id: number;
  category: string;
  createdAt: Date;
};
