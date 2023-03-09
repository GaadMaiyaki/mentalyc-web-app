import styles from "./index.module.scss";

import { parseClassName } from "./../../utils";

import LogoSvg from "../../assets/svgs/logo";

const Header = () => {
  return (
    <section className={parseClassName(["py-3", styles.wrapper])}>
      <div className="container">
        <aside className="d-flex justify-content-center justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center">
          <span role="img" aria-label="Mentalyc logo">
            <LogoSvg />
          </span>
        </aside>
      </div>
    </section>
  );
};

export default Header;
