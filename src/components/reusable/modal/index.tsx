import React from "react";
import ReactDOM from "react-dom";

import { parseClassName } from "./../../../utils";

import CancelSvg from "./../../../assets/svgs/cancel";

import styles from "./index.module.scss";

interface IModal {
  children: React.ReactNode | React.ReactElement;
  show: boolean;
  columnLayout?: string;
  setShow: (arg: boolean) => void;
}

const Modal = ({
  show,
  columnLayout = "col-12",
  setShow,
  children,
}: IModal) => {
  const modalRef = React.useRef<HTMLDivElement>(null);

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    modalRef.current?.contains(e.target as Node) && setShow(false);
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return show
    ? ReactDOM.createPortal(
        <section
          className={parseClassName([
            "position-fixed w-100 d-flex",
            styles.wrapper,
          ])}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
          ref={modalRef}
        >
          <div className="container" tabIndex={-1}>
            <div className="row justify-content-center">
              <aside
                onClick={handleModalClick}
                className={parseClassName([
                  columnLayout ? columnLayout : "",
                  styles.container,
                ])}
              >
                <aside className="d-flex align-items-center justify-content-end pt-4">
                  <button
                    onClick={() => {
                      setShow(false);
                    }}
                    tabIndex={0}
                    aria-label="Close Modal"
                    title="close"
                  >
                    <CancelSvg />
                  </button>
                </aside>

                <aside
                  id="modalDescription"
                  className="px-2 px-lg-4 px-xl-5 px-xxl-5"
                  tabIndex={0}
                >
                  {children}
                </aside>
              </aside>
            </div>
          </div>
        </section>,
        document.body
      )
    : null;
};

export default Modal;
