import { getUserAndUserPostsById } from "../repositories/Posts.js";
import { getUsersByUsername, getUserInfo, findUserById } from "../repositories/Users.js";

async function getUserById(req, res) {
    try {
        const { id } = req.params;
        if (!id || Number.isNaN(Number(id))) return res.status(401).send("invalid user id format");
        const user = await findUserById(id);
        if (user.rows.length === 0) return res.status(400).send("user not found");
        else return res.status(200).send(user.rows[0]);
    } catch (_) {
        return res.status(500).send("internal server error.");
    }
}

async function searchUsersByUsername(req, res) {
    try {
        const { username } = req.body;
        if (!username || typeof username !== "string") return res.status(401).send("invalid username format");
        const users = await getUsersByUsername(username);
        return res.status(200).send(users.rows);
    } catch (_) {
        return res.status(500).send("internal server error.");
    }
}

async function getUserMe(req, res) {
    try {
        const id = res.locals.id_user;
        
        const myInfo = await getUserInfo(id)
        
        return res.status(200).send(myInfo.rows[0]);
    } catch (_) {
        return res.status(500).send("internal server error.");
    }
}

export { getUserAndUserPosts, searchUsersByUsername, getUserMe };