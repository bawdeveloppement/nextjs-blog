import { getAllUsers } from '../../lib/users';

export default (req, res) => {
    res.status(200).json(getAllUsers());
}