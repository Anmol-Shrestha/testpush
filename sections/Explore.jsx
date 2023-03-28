'use client';

import { motion } from 'framer-motion';
import { exploreWorlds } from '../constants';
import styles from '../styles';

const Explore = () => (
  <section>
    <div className="explore">

      {exploreWorlds.map(({ id, imgUrl, title }) => (
        <motion.div key={id}>
          <img src={`${imgUrl}`} alt={`World ${id}`} />
          <h1 className={styles.heroHeading}>{title}</h1>
        </motion.div>
      ))}

    </div>
  </section>
);

export default Explore;
