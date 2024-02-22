import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const diffInMilliseconds = now.getTime() - createdAt.getTime();
  const seconds = Math.floor(diffInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(weeks / 4.345); // Approximate average weeks in a month
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  } else if (months > 0) {
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else if (weeks > 0) {
    return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
  } else if (days > 0) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (hours > 0) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else {
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  }
};

export const formatAndDivideNumber = (number: number): string => {
  let result: string;
  let divisor: number;

  if (number >= 1e6) {
    result = (number / 1e6).toFixed(2);
    divisor = 1e6;
  } else if (number >= 1e3) {
    result = (number / 1e3).toFixed(2);
    divisor = 1e3;
  } else {
    result = number.toString();
    divisor = 1;
  }

  // Remove trailing zeros and dot if necessary
  result = result.replace(/\.?0*$/, "");

  if (divisor !== 1) {
    result += divisor === 1e6 ? "M" : "K";
  }

  return result;
};
