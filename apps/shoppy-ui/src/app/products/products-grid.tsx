"use client"

import { Product as IProduct } from "./interfaces/product.interface"
import Grid from "@mui/material/Grid2";
import Product from "./product";
import { useEffect } from "react";
import { io, Socket } from "socket.io-client";
import revalidateProducts from "./actions/revalidate-products";
import { API_URL } from "../common/constants/api";
import getAuthentication from "../auth/actions/get-authentication";

interface ProductsGridProps {
    products: IProduct[]
}

export function ProductsGrid({ products }: ProductsGridProps) {

    useEffect(() => {
    let socket: Socket;

    const createSocket = async () => {
      socket = io(API_URL!, {
        auth: {
          Authentication: await getAuthentication(),
        },
      });

      socket.on("productUpdated", () => {
        revalidateProducts();
      });
    };

    createSocket();

    return () => {
      socket?.disconnect();
    };
  }, []);

    return (
        <Grid container spacing={3} sx={{ height: '85vh', overflow: 'scroll' }}>
        {products?.map((product) => (
            <Grid key={product.id} size={{ sm: 6, lg: 4, xs: 12 }}>
            <Product product={product} />
            </Grid>
        ))}
        </Grid>
    );
};
