import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

//function to await the server action
export async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}