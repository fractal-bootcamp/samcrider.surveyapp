import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import Home from "~/components/pages/Home";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
const getSurveys = async () => {
  const fetchedData = await fetch("http://localhost:4000/");

  console.log("hello", fetchedData);

  return fetchedData.json();
};

type Survey = {
  title: string;
  id: string;
};

export default function Index() {
  const [surveys, setSurveys] = useState<Survey[]>([]);

  useEffect(() => {
    const loadData = async () => {
      await getSurveys().then((res) => setSurveys(res.surveys));
    };

    loadData();
  }, []);

  useEffect(() => {
    console.log("rerun");
  }, [surveys]);

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.8",
        height: "100vh",
      }}
    >
      <Home surveys={surveys} />
    </div>
  );
}
