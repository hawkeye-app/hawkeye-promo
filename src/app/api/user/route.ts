import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

export type Body = {
  email: string;
  type: string;
};
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);

  const data: Body = {
    email: body.email,
    type: body.type,
  };

  await prisma.user.create({
    data: {
      email: data.email,
      type: data.type,
    },
  });

  return new Response("Created Successfully, Nice", {
    status: 201,
  });
}