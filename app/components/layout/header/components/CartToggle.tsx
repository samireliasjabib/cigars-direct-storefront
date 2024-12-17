import {Suspense} from 'react';
import {HeaderProps} from '../types';
import {Await} from '@remix-run/react';
import {CartBadge} from './CartBadge';
import CartBanner from './CartBanner';

function CartToggle({cart}: Pick<HeaderProps, 'cart'>) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

export default CartToggle;
