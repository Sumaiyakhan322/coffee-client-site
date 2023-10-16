import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeDetails = ({ coffee,setSelectedCoffee,coffees }) => {
  const { name, quantity, supplier, taste, category, details, photo, _id } =
    coffee;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:"DELETE"
        })
          .then((res) => res.json)
          .then((data) => {
            if(data.deletedCount > 0){
                Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
            }
            const remaining=coffees.filter(cof=>cof._id !==_id)
            setSelectedCoffee(remaining)
            })
          
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Coffee pic"
          />
        </figure>
        <div className="card-body flex flex-row justify-between items-center">
          <div>
            <h2 className="card-title">Name:{name}</h2>
            <p>Quantity{quantity}</p>
            <p>Supplier{supplier}</p>
            <p>Taste{taste}</p>
          </div>
          <div className="card-actions justify-end btn-group btn-group-vertical">
            <button className="btn btn-primary ">Details</button>
            <button className="btn btn-primary "><Link to={`/update/${_id}`}>Update</Link></button>
            <button
              className="btn btn-primary"
              onClick={() => handleDelete(_id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
