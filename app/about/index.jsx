import React from 'react';

import { motion } from 'framer-motion';
import styles from '../../styles';
import { fadeIn, staggerContainer, textContainer } from '../../utils/motion';

export const About = () => (
  <motion.section className="bg-primary-black"
    variants={staggerContainer}
    initial="hidden"
    animate="show"
  >

    <div className={styles.xPaddings}>
      <motion.h1 className={styles.heroHeading}
        variants={fadeIn('right', 'spring', 0.2, 0.5)}
      >

        About Page

      </motion.h1>
    </div>

    <motion.div className={`${styles.topPaddings} flex justify-between`}
      variants={textContainer}
    >
      <p>THIS IS ABOUT PAGE <br className="lg:hidden" /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente fuga omnis, tenetur cum assumenda autem officia explicabo. Quis dolor accusamus culpa doloremque reiciendis, nam necessitatibus sunt facere, nostrum ex impedit.</p>

      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vel possimus ea repellendus veritatis voluptas. Exercitationem aspernatur et rerum quo temporibus ut laudantium consequuntur optio magnam tenetur, adipisci quasi id.
      </h3>
    </motion.div>

  </motion.section>
);

