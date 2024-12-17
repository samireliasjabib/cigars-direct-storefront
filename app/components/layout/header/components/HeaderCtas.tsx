import {Suspense} from 'react';
import {Await, NavLink} from '@remix-run/react';
import {HeaderCtasProps} from '../types';
import {activeLinkStyle} from '../utils';
import SearchToggle from './SearchToggle';
import HeaderMenuMobileToggle from './HeaderMenuToggle';
import CartToggle from './CartToggle';

function HeaderCtas({isLoggedIn, cart}: HeaderCtasProps) {
  return (
    <nav role="navigation">
      <HeaderMenuMobileToggle />
      <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
        <Suspense fallback="Sign in">
          <Await resolve={isLoggedIn} errorElement="Sign in">
            {(isLoggedIn) => (isLoggedIn ? 'Account' : 'Sign in')}
          </Await>
        </Suspense>
      </NavLink>
      <SearchToggle />
      <CartToggle cart={cart} />
    </nav>
  );
}

export default HeaderCtas;
