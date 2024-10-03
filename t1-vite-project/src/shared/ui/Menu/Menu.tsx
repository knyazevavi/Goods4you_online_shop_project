import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import CartIcon from "../CartIcon/CartIcon";
import { RootState } from "../../../app/store/store";
import { useTotalPrice } from "../../hooks/useTotal";

import styles from "./Menu.module.css";

interface MenuProps {
  isFooter: boolean;
}

const Menu: React.FC<MenuProps> = ({ isFooter }) => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.products);
  const userInfo = useSelector((state: RootState) => state.auth.user);
  const { calculateTotalProducts } = useTotalPrice();
  const totalProducts = calculateTotalProducts(cartItems);

  const handleNavigation = (sectionId: string) => {
    navigate("/", { state: { scrollTo: sectionId } });
  };

  return (
    <>
      <link rel="prefetch" href="/cart" />
      <link rel="prefetch" href="/catalog" />
      <nav className={styles.menu} aria-label="Main navigation">
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <a href="#catalog" onClick={() => handleNavigation("catalog")}>
              Catalog
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="#faq" onClick={() => handleNavigation("faq")}>
              FAQ
            </a>
          </li>
          {!isFooter && (
            <>
              <li className={styles.menuItem}>
                <Link to="/cart" className={styles.cartContainer}>
                  <span className={styles.cartLink}>Cart</span>
                  <CartIcon />
                  {totalProducts > 0 && (
                    <span className={styles.counter}>
                      {totalProducts > 99 ? "99+" : totalProducts}
                    </span>
                  )}
                </Link>
              </li>
              <li className={styles.menuItem}>
                <a>
                  {userInfo?.firstName} {userInfo?.lastName}
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};
export default Menu;
