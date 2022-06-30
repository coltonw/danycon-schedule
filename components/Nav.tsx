import { useState } from 'react';
import Link from 'next/link';
import { GiCardJoker, GiSherlockHolmes } from 'react-icons/gi';
import styles from '../styles/Nav.module.scss';

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className={`navbar ${styles['nav-container']}`}>
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <span className="icon-text is-align-items-center">
                <span className="icon is-large">
                  <GiCardJoker size="2em" />
                </span>
                <span className="is-size-3 has-text-weight-bold">Danycon</span>
              </span>
            </a>
          </Link>
          <div
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            onClick={() => setIsActive(!isActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <Link href="/">
              <a className="navbar-item">Schedule</a>
            </Link>
            <Link href="/hunt">
              <a className="navbar-item">
                <span className="icon">
                  <GiSherlockHolmes size="1.5em" />
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
