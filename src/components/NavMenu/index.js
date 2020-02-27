import React, {Component} from 'react';
import styles from './NavMenu.module.css';
import Icon from '@mdi/react';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';

class NavMenu extends Component{
  constructor (props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    }
  }

  render () {
const {isMenuOpen} = this.state;
    return(
    <div className={styles.container}>
      <nav className={styles.navContainer}>
        <div className={styles.navItem}>May</div>
        <div className={styles.currentItem}>June</div>
        <div className={styles.navItem}>Jul</div>
      </nav>
      <div className={styles.downMenu}
           style={{
        display:isMenuOpen
                ? 'block'
                : 'none'
      }}>

      </div>
    </div>
    );
  }
}

