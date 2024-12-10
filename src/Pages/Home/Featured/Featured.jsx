import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-item bg-fixed text-white pt-5 my-20">
      <SectionTitle heading="Featured Items" subHeading="Check It Out" />
      <div className={`md:flex justify-center items-center pb-24 pt-8 px-36`}>
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="ml-10">
          <p>Dec 29, 2024</p>
          <p className="uppercase font-semibold">Where get i some? </p>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit odit
            dolorem corrupti maxime assumenda commodi numquam temporibus eaque
            deserunt! Architecto totam nisi, id illo ducimus perspiciatis
            exercitationem veniam ad a?
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-blue-600">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
