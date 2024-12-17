import {useAside} from '~/components/Aside';
import {useAnalytics, type CartViewPayload} from '@shopify/hydrogen';
import {CartBadgeProps} from '../types';

export function CartBadge({count}: CartBadgeProps) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();

  return (
    <a
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        } as CartViewPayload);
      }}
    >
      Cart {count === null ? <span>&nbsp;</span> : count}
    </a>
  );
}
