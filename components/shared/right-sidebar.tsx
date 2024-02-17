import { topQuestions, topTags } from "@/constants";
import { randomUUID } from "crypto";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./render-tag";

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-lg:hidden">
      <div className="flex w-full flex-col gap-[30px]">
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        {topQuestions.map((item, index) => (
          <Link
            key={index + randomUUID()}
            href={`/questions/ ${item._id}`}
            className="flex-between cursor-pointer items-center gap-7"
          >
            <p className="body-medium text-dark500_light700">{item.title}</p>
            <Image
              src="/assets/icons/chevron-right.svg"
              width={20}
              height={20}
              alt="arrow left"
              className="invert-colors"
            />
          </Link>
        ))}
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {topTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
