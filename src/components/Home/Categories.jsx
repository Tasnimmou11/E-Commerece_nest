import React from "react";
import { Link } from "react-router";

const Categories = () => {
return (
    <section className="pt-14 pb-11">
    <div className="container">
        <div className="flex gap-7 items-end">
        <h2 className="section_heading">Featured Categories</h2>
        <ul className="flex text-base font-light text-primary gap-7">
            <li>
            <Link className="hover:text-brand">Cake & Milk</Link>
            </li>
            <li>
            <Link className="hover:text-brand">Coffes & Teas</Link>
            </li>
            <li>
            <Link className="hover:text-brand">Pet Foods</Link>
            </li>
            <li>
            <Link className="hover:text-brand">Vegetables</Link>
            </li>
        </ul>
        </div>
    </div>
    </section>
);
};

export default Categories;
