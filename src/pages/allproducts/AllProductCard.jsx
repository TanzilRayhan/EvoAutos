
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const AllProductCard = ({ product,  products, setProducts }) => {

    const { _id, name, brandName, type, price, rating, image, description } = product;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://evo-autos-server-pu39k5ogs-tanzilrayhans-projects.vercel.app/products/${_id}`, {
                    method: "DELETE"
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!!!",
                                text: "Product deleted successfully!!!",
                                icon: "success",
                                confirmButtonText: "Ok"
                            })
                            
                            const remaining = products.filter(prod => prod._id !== _id);
                            setProducts(remaining);
                        }
                    });
            }
        })
    }

    return (
        <div>
            <div className="card card-side flex flex-col lg:flex-row  bg-slate-300 shadow-xl">
                <figure className="lg:w-1/2 px-5"><img src={image} /></figure>
                <div className="flex flex-col lg:flex-row justify-center py-10 items-center ml-10 max-w-xl">
                    <div>
                        <h2 className="card-title text-3xl font-bold">{name}</h2>
                        <div className="flex pt-2 gap-2">
                            <div className="badge badge-secondary font-extrabold">{brandName}</div>
                            <div className="badge badge-primary">{type}</div>
                        </div>

                        <div className="flex py-2 gap-2">
                            <div className="badge badge-secondary badge-outline font-extrabold">Price: {price}</div>
                            <div className="badge badge-primary badge-outline font-bold">Ratings: {rating}</div>
                        </div>

                        <p className="mr-20 font-semibold text-lg">{description}</p>
                    </div>


                    <div className="card-actions px-4 justify-end">
                        <div className="btn-group lg:btn-group-vertical pt-5 lg:space-y-3">
                            <button className="btn  btn-info ">VIEW</button>
                            <Link to={`/updateProducts/${_id}`}>
                                <button className="btn btn-neutral w-full rounded-none">EDIT</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn btn-error ">DELETE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProductCard;