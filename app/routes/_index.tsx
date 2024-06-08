import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import Home from "~/components/pages/Home";

// meta data
export const meta: MetaFunction = () => {
  return [{ title: "TOTAL SURVEY" }];
};

// types
type Survey = {
  title: string;
  id: string;
};

// service
const getSurveys = async () => {
  const fetchedData = await fetch("http://localhost:4000/");

  return fetchedData.json();
};

// client
export default function Index() {
  const [surveys, setSurveys] = useState<Survey[]>([]);

  useEffect(() => {
    // controller
    const loadData = async () => {
      await getSurveys().then((res) => setSurveys(res.surveys));
    };

    loadData();
  }, []);

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
