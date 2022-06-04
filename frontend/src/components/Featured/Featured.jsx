import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=dhaka,comilla,shylet"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://images.jdmagicbox.com/comp/jaipur/r6/0141px141.x141.111110175540.l3r6/catalogue/radisson-blu-hotel-tonk-road-jaipur-5-star-hotels-1mb0dpj.jpg?clr=#000066"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>dhaka</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>comilla</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://i.travelapi.com/hotels/10000000/9790000/9784600/9784580/2a61cd38_z.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>shylet</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
