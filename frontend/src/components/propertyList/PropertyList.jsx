import "./propertyList.css";
import useFetch from "../../hooks/useFetch.js";


const PropertyList = () => {
   const { data, loading, error } = useFetch(
     "/hotels/countByType"
   );
   const images=[
    "http://hotel.com.bd/wp-content/uploads/2017/07/69233653-800x600.jpg",
    "https://lh3.googleusercontent.com/p/AF1QipM7vCEm0v9YXDIi2mbC0Tf5JnWPX4DANK2oMIoq=w296-h202-n-k-rw-no-v1",
    "https://i.ytimg.com/vi/YWjSRCiaiBs/maxresdefault.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/ee/3b/a0/grand-sultan-tea-resort.jpg?w=1000&h=600&s=1",
    "https://www.mapleleafhomes.ca/sites/default/files/styles/homes_thumbnail/public/2018-01/9109_rendering.jpg?h=d3eda8cf&itok=blhikXWI",
    "https://www.novemecoresort.com/wp-content/uploads/2020/02/Wood-1.jpg"

   ]
  return (
    <div className="pList">
      {loading ? (
        "Loading please wait"
      ) :(
        <>
         {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
         </>)}
    </div>
  );
}

export default PropertyList