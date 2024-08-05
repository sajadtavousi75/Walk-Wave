import { NextResponse } from 'next/server';
import removeAuthCookie from '@/utils/removeAuthCookie';

export async function POST(request) {
  removeAuthCookie()
  return NextResponse.json({ message: 'Cookie removed successfully' });
}