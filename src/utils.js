import axios from "axios";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export const API = axios.create({
  baseURL: "http://localhost:4000/backend",
  // baseURL: "https://c5b4386f-0b65-4a8b-89c3-17f072b4773c-00-n9iroqrdu3o7.kirk.replit.dev:3000/backend",
});

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
