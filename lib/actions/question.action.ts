"use server";

import { connectToDatabase } from "@/database/mongoose";

export async function createQuestion(params) {
  try {
    connectToDatabase();
  } catch (error) {}
}
