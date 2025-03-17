import { users } from "../route";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const user = users.find((x) => x?.id === +id);
  if (user) {
    return Response.json(user);
  }
  return Response.json(
    { error: "No user with the given ID exists" },
    { status: 404 }
  );
}
