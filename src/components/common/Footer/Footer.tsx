import React from 'react';

import s from './Footer.module.css';

function Footer() {
  return (
    <div className={s.root}>
      <footer className={s.footer}>
        © {new Date().getFullYear()} Nnnn. All Rights Reserved.
      </footer>
    </div>
  );
}
export default Footer;
