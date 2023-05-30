import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

export const validator = z.object({
  email: z.string().email(),
  type: z.string(),
});

export type Body = z.infer<typeof validator>;
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);

  const { email, type } = validator.parse(body);

  await prisma.user.create({
    data: {
      email: email,
      type: type,
    },
  });

  return new Response("Created Successfully", {
    status: 201,
  });
}
