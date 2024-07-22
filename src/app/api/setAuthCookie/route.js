// app/api/setAuthCookie/route.js
import { NextResponse } from 'next/server';
import { setAuthCookie } from '@/utils/setAuthCookie';

export async function POST(request) {
  const { accessToken } = await request.json();
  await setAuthCookie(accessToken);
  return NextResponse.json({ message: 'Cookie set successfully' });
}