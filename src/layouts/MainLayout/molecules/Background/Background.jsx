import { useState } from "react";

// import { PLUS_STYLES_BY_INDEX } from "../../../../utils/constants/layoutBg";
import bgText from '../../../../assets/images/bg_illustration.webp';
import bg from '../../../../assets/lottie/bg.gif';
import bgDummy from '../../../../assets/lottie/bgDummy.jpg';

import plusIcon from '../../../../assets/icons/plus.svg';

// import SvgIcon from "../../../../base";

import styles from "./Background.module.scss";

export const Background = () => {
  const [isBgLoaded, setIsBgLoaded] = useState(false);

  // const renderPlusIcons = () => {
  //   return Array(4)
  //     .fill(true)
  //     .map((_, index) => (
  //       <SvgIcon
  //         key={`plus-${index}`}
  //         type="plus"
  //         className={styles.plus}
  //         style={PLUS_STYLES_BY_INDEX[index]}
  //       />
  //     ));
  // };

  return (
    <div className={styles.container}>
          <img src={plusIcon} className={styles.plus} style={{ top: '20px', left: '20px' }}>
          </img>
          <img src={plusIcon} className={styles.plus} style={{ top: '20px', right: '20px' }}>
          </img>
          <img src={plusIcon} className={styles.plus} style={{ bottom: '20px', left: '20px' }}>
          </img>
          <img src={plusIcon} className={styles.plus} style={{ bottom: '20px', right: '20px' }}>
          </img>

      <img src={isBgLoaded ? bg : bgDummy} alt="background" className={styles.animation} onLoad={() => setIsBgLoaded(true)} />

      <div className={styles.blur} />

      <img
        src={bgText}
        alt="belletriq"
        className={styles.bgIllustration}
      />

      {/* {renderPlusIcons()} */}
    </div>
  );
};