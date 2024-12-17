import type {HeaderQuery, CartApiQueryFragment} from 'storefrontapi.generated';

export interface HeaderProps {
  header: HeaderQuery;
  cart: Promise<CartApiQueryFragment | null>;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
}

export type Viewport = 'desktop' | 'mobile';

export interface HeaderMenuProps {
  menu: HeaderProps['header']['menu'];
  primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
  viewport: Viewport;
  publicStoreDomain: HeaderProps['publicStoreDomain'];
}

export interface CartBadgeProps {
  count: number | null;
}

export interface HeaderCtasProps {
  isLoggedIn: Promise<boolean>;
  cart: Promise<CartApiQueryFragment | null>;
}
