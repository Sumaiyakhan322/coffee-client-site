import { useLoaderData } from "react-router-dom";


const Update = () => {
    const coffee=useLoaderData();
    const { name, quantity, supplier, taste, category, details, photo, _id } =
    coffee;
    const handleUpdateCoffee=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const quantity=e.target.quantity.value;
        const supplier=e.target.supplier.value;
        const taste=e.target.taste.value;
        const category=e.target.category.value;
        const details=e.target.details.value;
        const photo=e.target.photo.value;
        const newCoffee={name,quantity,supplier,taste,category,details,photo}
        console.log(newCoffee);

        //coneet with backend
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                alert('Upadted a coffee')
            }
        })

    }
    return (
      

            <div className="bg-[#F4F3F0] p-24">
      <h1 className="text-3xl text-center font-extrabold">Update coffee</h1>
      <form className="" onSubmit={handleUpdateCoffee}>
        {/* Form row name and quantity*/}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Coffee-name"
                className="input input-bordered w-full"
                name="name" defaultValue={name}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text ">Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                placeholder="Coffee-quantity"
                className="input input-bordered w-full"
                name="quantity" defaultValue={quantity}
              />
            </label>
          </div>
        </div>
        {/* supplier and taste */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Supplier-name"
                className="input input-bordered w-full"
                name="supplier" defaultValue={supplier}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text ">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Taste"
                className="input input-bordered w-full"
                name="taste" defaultValue={taste}
              />
            </label>
          </div>
        </div>
        {/* Category and details */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Category-name"
                className="input input-bordered w-full"
                name="category" defaultValue={category}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text ">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Coffee-quantity"
                className="input input-bordered w-full"
                name="details" defaultValue={details}
              />
            </label>
          </div>
        </div>
        {/* Photo url */}
        <div className="">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo-URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Photo-url"
                className="input input-bordered w-full"
                name="photo" defaultValue={photo}
              />
            </label>
          </div>
          
        </div>
        <input type="submit" value="Add coffee" className="btn btn-block my-10 bg-slate-700 text-white"/>
      </form>
    </div>
  );
};


     



export default Update;