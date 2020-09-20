import { createUser, getAllUsers } from "../../../lib/users"

export default function (req, res) {
    if (req.method === 'POST') {
        const data = JSON.parse(req.body);
        createUser(data);
        res.status(200).json({ message: "Nice", ...getAllUsers() });
    } else {
        res.status(405).json({ message: `The following ${req.method} isn't supported on this route` });
    }
}