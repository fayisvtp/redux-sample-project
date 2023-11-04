import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div className="four wide column" key={id}>
        <Link to={`/ProductDetail/${id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
             <img src={image} alt={title} />
              <div className="content">
                {/* <div className = "header">{title}</div> */}
                  <div className="meta price">
                   ₹ {price} </div> 
                    <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
}

export default ProductComponent;

// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBCardTitle,
//   MDBIcon,
// } from "mdb-react-ui-kit";

// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// function ProductComponent() {
//     const products = useSelector((state) => state.allProducts.products);
//   const renderList = products.map((product) => {
//     const { id, title, image, price, category } = product;
//     return(
        
//             <MDBCard className="d-inline-flex shadow p-3 mb-5 bg-body-tertiary rounded bg-image hover-zoom m-3"  key={id} >
//               {/* <MDBIcon fab icon="apple" size="lg" className="px-3 pt-3 pb-2 " /> */}
//               <MDBCardImage className=""
//                 src={image}
//                 position="top"
//                 alt={image}
//               />
//               <MDBCardBody>
//                 <div className="text-center" >
//                   <MDBCardTitle>{title}</MDBCardTitle>
//                   <h5 className="text-muted mb-4">{category}</h5>
//                 </div>
//                 <div>
//                   <div className="d-flex justify-content-between">
                 
//                     <span>${price}</span>
//                   </div>
//                   <div className="d-flex justify-content-between">
//                     <span>Pro stand</span>
//                     <span>$999</span>
//                   </div>
//                   <div className="d-flex justify-content-between">
//                     <span>Vesa Mount Adapter</span>
//                     <span>$199</span>
//                   </div>
//                 </div>
//                 <div className="d-flex justify-content-between total font-weight-bold mt-4">
//                   <span>Total</span>
//                   <span>$7,197.00</span>
//                 </div>
//               </MDBCardBody>
//             </MDBCard>
         
//     )
//    } )
//   return (
//    <div>
// {renderList}

//    </div>
//   );
// }

// export default ProductComponent;