// import { it } from 'date-fns/locale';
import { Link } from 'react-router-dom';
import './searchItem.css'

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="search" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}</span>
        <span className="siTexi">Free Airport texi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancel">Free cancellation </span>
        <span className="siCancelSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}

        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        
        </div>
      </div>
    </div>
  );
}

export default SearchItem