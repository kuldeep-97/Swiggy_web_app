import { Outlet } from "react-router";
import { RestHeader } from "./RestHeader";


export function SecondaryHome(){

     return(
        <>
        <RestHeader></RestHeader>
        <Outlet></Outlet>
        </>
     )
}