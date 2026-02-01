import { NextResponse } from 'next/server';
import products from '@/src/products.json';

export async function GET() {
  return NextResponse.json(products, { status: 200 });
}
