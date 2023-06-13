import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

require("dotenv").config();

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, headers } = req;

  switch (method) {
    case "GET": {
      try {
        const response = await notion.databases.query({
          database_id: process.env.NOTION_DATABASE_ID || "",
        });
        return res.status(200).json(response);
      } catch (error) {
        console.error("Error querying Notion database:", error);
        res.status(500).send("Internal Server Error");
      }
      break;
    }

    default: {
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
}
