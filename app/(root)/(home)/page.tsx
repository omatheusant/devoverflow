import QuestionCard from "@/components/cards/question-card";
import HomeFilters from "@/components/home/home-filters";
import Filter from "@/components/shared/filter";
import NoResult from "@/components/shared/no-result";
import LocalSearchbar from "@/components/shared/search/local-search";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";

import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "Cascading Deletes in SQLAlchemy",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "john-doe.jpg",
    },
    upvotes: 10,
    views: 100000000,
    answers: [{}, {}], // Array of objects with random values
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "How to center a div?",
    tags: [{ _id: "1", name: "css" }],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "john-doe.jpg",
    },
    upvotes: 10,
    views: 100,
    answers: [{}, {}], // Array of objects with random values
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          placeholder="Search a question"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          otherClasses="flex-1"
          route="/"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="m-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! Ask a Question and kickstart the discurssion, our query could be the next big thing others learn from. Get involved!"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
