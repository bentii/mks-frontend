import "../Product/_Product.styles.scss";
import "./Skeleton.styles.scss";

const Skeleton = () => {
  return (
    <div className="Product skeleton-container">
      <img className="skeleton skeleton-img" />
      <div className="AllTextContainerProduct">
        <div className="TitleAndPriceContainerProduct">
          <h2 className="H2Product">
            <div className="skeleton skeleton-text"></div>
          </h2>
        </div>
        <p className="DescriptionProduct"></p>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
      </div>
      <div className="skeleton skeleton-text"></div>
    </div>
  );
};

export default Skeleton;
