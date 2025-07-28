import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://www.google.com', { method: 'HEAD' });
    return new NextResponse(null, { status: response.ok ? 200 : 503 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new NextResponse(null, { status: 503 });
  }
}

export async function HEAD() {
  return GET();
}