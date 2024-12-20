import React, { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUtensils } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, _id, recipe, image, category, price } = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  // const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    // Image send to imgBB and get the url
    const imageFile = { image: data.image[0] };
    const res = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // send the menu data to database with img url
      const updatedMenuItem = {
        name: data.name,
        category: data.category,
        recipe: data.recipe,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
      };
      // update data send to server
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, updatedMenuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount) {
        setLoading(false);
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Menu Item Updated Successfully",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    }
  };
  return (
    <div>
      <SectionTitle heading="Update an Item" subHeading="Refresh your item" />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              defaultValue={name}
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
                  defaultValue={category}
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
                  defaultValue={price}
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
              defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-28"
              placeholder="recipe details"
            ></textarea>
          </label>
          <div className="mb-6">
            <input
              // defaultValue={image}
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

export default UpdateItem;
