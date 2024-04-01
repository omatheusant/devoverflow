"use server";

import { connectToDatabase } from "@/database/mongoose";
import { GetAllTagsParams, GetTopInteractedTagsParams } from "./shared";
import User from "@/database/models/user.model";
import Tag from "@/database/models/tag.model";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();

    const { userId, limit = 3 } = params;

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");

    // Find interactions for the user and group gy tags

    return [
      { _id: "1", name: "tag" },
      { _id: "2", name: "tag2" },
      { _id: "3", name: "tag" },
    ];
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllTags(params: GetAllTagsParams) {
  try {
    connectToDatabase();

    const tags = await Tag.find({});

    return { tags };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
