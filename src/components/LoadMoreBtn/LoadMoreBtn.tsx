import React, { FC } from "react";
import css from "./LoadMoreBtn.module.css";
interface LoadMoreBtnProps {
  onClick: () => void;
}
const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.wrapper}>
      <button className={css.btn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
