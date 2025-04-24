import dbConnect from '@/app/lib/mongodb';
import Product from '@/app/models/Product';
import { NextRequest, NextResponse } from 'next/server';

await dbConnect();

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');
    if(id){
        const product = await Product.findById(id);
        return NextResponse.json(product);
    } else {
        const products = await Product.find({});
        return NextResponse.json( products );
    }
}

export async function POST(req: NextRequest) {
    const newItems = await req.json();
    const newProducts = await Product.insertMany(newItems)
    return NextResponse.json({ newProducts });
}

export async function PUT(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');
    const update = await req.json();
    const updatedProduct = await Product.updateOne({_id: id}, update);
    return NextResponse.json({ updatedProduct });
}

export async function DELETE(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');
    const deletedProduct = await Product.deleteOne({_id: id});
    return NextResponse.json({ deletedProduct });
}