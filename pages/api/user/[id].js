import { getAllUsers } from '../../../lib/users';

export default ({ query: { id }}, res) => {
    const filtered = getAllUsers().filter(u => u.id == id);
    if (filtered.length > 0) res.status(200).json(filtered[0])
    else res.status(404).json({ message: `User with id ${id} not found.` })
}