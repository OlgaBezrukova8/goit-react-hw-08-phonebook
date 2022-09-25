import { ThreeDots } from 'react-loader-spinner';
import style from '../Loader/Loader.module.css';

export const Loader = () => {
  return (
    <div className={style.loader}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#0d6efd"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
