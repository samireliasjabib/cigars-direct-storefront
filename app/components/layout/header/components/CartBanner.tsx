import {useAsyncValue} from '@remix-run/react';
import {useOptimisticCart} from '@shopify/hydrogen';
import {CartBadge} from './CartBadge';
import {CartApiQueryFragment} from 'storefrontapi.generated';

function CartBanner() {
  const originalCart = useAsyncValue() as CartApiQueryFragment | null;
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}

export default CartBanner;
