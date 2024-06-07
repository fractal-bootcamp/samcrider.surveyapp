import type { ActionFunction, MetaFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import client from "~/client";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

//
// server side
//

export const loader = async () => {
  const surveys = await client.survey.findMany();
  return {surveys}
}

// handle form post
export const action: ActionFunction = async ({request}) => {
  // get form data
  const data = await request.formData()

  // update db
 await client.survey.create({
    data: {
      title: data.get("surveyName")?.toString() || "default survey name",
    }
  })

  const surveys = await client.survey.findMany();
  console.log("get new data", surveys)

  // return new data structure
  return new Response(JSON.stringify({surveys: surveys}), {
    headers: {
      "Content-Type": "application/json",
    }
  })
}

//
// client side
//

export default function Index() {

const data = useLoaderData<typeof loader>()
console.log(data)

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      {data.surveys.map((survey) => <div key={survey.id}>{survey.title}</div>)}
     <Form method="post">
      <label>Survey Name</label>
      <input type="text" name="surveyName" />
      <button type="submit">submit</button>
     </Form>
    </div>
  );
}
