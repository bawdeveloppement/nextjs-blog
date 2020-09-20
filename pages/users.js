import Link from "next/link"
import { useEffect, useState } from "react"
import Date from "../components/date"
import { getAllUsers } from "../lib/users"

// Here we are passing the Users in the props 
// Note: This data passing to the props is from the build time
// So if the data is updated since the last build time, your web page will not be up to date
// But we still be able to search for an update to make it's up to date
// Result ? You get in performance & and you have to drink a lot of coffee
export function getStaticProps() {
    return {
        props: {
            users: getAllUsers()
        }
    }
}

function dataIsUptodate (buildData, remoteData) {
    return true
}

export default function UserList ({ users }) {
    // This is why we should update the data
    const [usersState, setUsers] = useState(users);

    useEffect(() => {
        // here we will check for a difference between our data and the data of the api
        fetch("/api/users")
        .then(res => res.json())
        .then(value => {
            setUsers(value);
        });
    }, []);

    return <div>
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Joined</th>
                </tr>
            </thead>
            <tbody>
                {usersState.map(user => (
                    <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.joined}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <Link href="/signup">go to signup</Link>
    </div>
}