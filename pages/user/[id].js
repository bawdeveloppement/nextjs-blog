import { getAllUserIds, getUserData } from "../../lib/users";

export default function User ({ userData }) {
    return <div>
        {userData.firstname}
    </div>
}

export async function getStaticProps ({ params }) {
    const userData = await getUserData(params.id.split("-")[0]);
    return {
        props: {
            userData
        }
    }
}

export async function getStaticPaths () {
    const paths = getAllUserIds()
    return {
        paths,
        fallback : false
    }
}