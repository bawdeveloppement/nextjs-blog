import Link from "next/link";
import { useState } from "react";

export default function Signup () {
    function handleClick () {
        fetch("http://localhost:3000/api/user/signup", {
            method: "POST",
            body: JSON.stringify({
                username: "new user",
                lastname: "unknow",
                firstname: "unknow"
            })
        }).then(res => res.json()).then(value => console.log(value)).catch(err => console.error(err));
    }
    return <div>
        <form onSubmit={(e) => e.preventDefault()}>
            <button onClick={handleClick}>Signup</button>
        </form>
        <Link href="/users">go to users</Link>
    </div>
}