import axios from "axios";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export const API = axios.create({
  baseURL: "https://bamboo-backend.vercel.app/backend",

});

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
