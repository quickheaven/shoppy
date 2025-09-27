interface SingleProductProps {
    params: {
        productId: string;
    };
}


export default function SingleProduct({ params }: SingleProductProps) {
    return <div>Single Product Page {params.productId}</div>;
}