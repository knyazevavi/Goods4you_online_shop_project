import React from "react";
import { Link, useNavigate } from "react-router-dom";

import CartIcon from "../Content/CartIcon";

import styles from "./Content.module.css";
import { useCart } from "../../hooks/useCart";

interface MenuProps {
  isFooter: boolean;
}

const Menu: React.FC<MenuProps> = ({ isFooter }) => {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const handleNavigation = (sectionId: string) => {
    navigate("/", { state: { scrollTo: sectionId } });
  };

  return (
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
                {/* {cartItems.length > 0 && (
                  <span className={styles.counter}>
                    {cartItems.length
                      ? cartItems.length > 99
                        ? "99+"
                        : cartItems.length
                      : "99+"}
                  </span>
                )} */}
                <span className={styles.counter}>99+</span>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <a>Johnson Smith</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
export default Menu;
