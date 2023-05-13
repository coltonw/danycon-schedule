import { NextResponse } from 'next/server';
import { participateAction } from '../../../lib/api';

export async function POST(request: Request) {
  const { username, action, game } = await request.json();
  const data = await participateAction(username, action, game);

  return NextResponse.json(data);
}
