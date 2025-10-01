import { Injectable, BadRequestException } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CheckoutService {
  constructor(
    private readonly stripe: Stripe,
    private readonly productService: ProductsService,
    private readonly configService: ConfigService,
  ) {}

  async createSession(productId: number) {
    const product = await this.productService.getProduct(productId);

    // ensure price is a number and convert to integer cents
    const priceNumber = Number(product.price);
    if (Number.isNaN(priceNumber)) {
      throw new BadRequestException('Invalid product price');
    }
    const unitAmount = Math.round(priceNumber * 100);

    // assert configs are strings
    const successUrl =
      this.configService.getOrThrow<string>('STRIPE_SUCCESS_URL');
    const cancelUrl =
      this.configService.getOrThrow<string>('STRIPE_CANCEL_URL');

    // metadata values must be strings
    return this.stripe.checkout.sessions.create({
      metadata: {
        productId: String(productId),
      },
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: unitAmount,
            product_data: {
              name: product.name,
              description: product.description ?? undefined,
            },
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
    });
  }
}
