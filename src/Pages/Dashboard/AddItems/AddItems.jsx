import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  // const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    // Image send to imgBB and get the url
    // const imageFile = { image: data.image[0] };
    // const res = await axiosPublic.post(image_hosting_api, imageFile, {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // });
    // console.log(res.data);
    const formData = new FormData();
    setLoading(true);
    formData.append("image", data.image[0]);
    const imageRes = await fetch(image_hosting_api, {
      method: "post",
      body: formData,
    });
    const result = await imageRes.json();
    if (result.success) {
      // send the menu data to database with img url
      const menuItem = {
        name: data.name,
        category: data.category,
        recipe: data.recipe,
        price: parseFloat(data.price),
        image: result.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        setLoading(false);
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Menu Item Added Successfully",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    }
  };
  return (
    <div>
      <SectionTitle heading="Add Recipe" subHeading="What's New?" />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="recipe name"
              className="input input-bordered w-full"
            />
          </label>
          <div className="flex gap-6">
            <div className="w-1/2">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Category*</span>
                </div>
                <select
                  defaultValue="default"
                  {...register("category", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option value="default" disabled>
                    Category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </label>
            </div>
            <div className="w-1/2">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Price*</span>
                </div>
                <input
                  {...register("price", { required: true })}
                  type="number"
                  placeholder="recipe name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <label className="form-control my-6">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-28"
              placeholder="recipe details"
            ></textarea>
          </label>
          <div className="mb-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn btn-warning">
            {loading ? (
              <span className="loading loading-spinner loading-lg"></span>
            ) : (
              <span className="flex items-center">
                Add Item <FaUtensils className="ml-2" />
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
