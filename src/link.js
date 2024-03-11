import React from "react";
import "./link.css";
import {Link,Outlet} from "react-router-dom";

function Layout() {
    return(
        <>
        <div className="module1">
        <li><Link to = "/home"><i class="fa-solid fa-house"></i> home </Link></li>
        <li><Link to = "/product"> <i class="fa-solid fa-cart-shopping"></i> product</Link></li>
        <li><Link to = "/help"> <i class="fa-solid fa-handshake-angle"></i> help</Link></li>
        </div>

        <Outlet/>
        </>
    )
}
export {Layout}