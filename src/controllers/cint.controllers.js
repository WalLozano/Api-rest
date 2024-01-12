import { pool } from "../db.js";

export const getCint = async (req, res) => {
    try {
    const [rows] = await pool.query("SELECT * FROM jumper");
    res.json(rows);
    } catch (error) {
    return res.status(500).json({
        message: "Oops something goes wrong",
    });
    }
};

export const postCint = async (req, res) => {
    try {
    const { hostname, jump, jumptime } = req.body;
    const [rows] = await pool.query(
        "INSERT INTO jumper (hostname, jump, jumptime) VALUES (?, ?, ?)",
        [hostname, jump, jumptime]
    );
    res.send({
        hostname,
        jump,
        jumptime,
    });
    } catch (error) {
    return res.status(500).json({
        message: "Oops something goes wrong",
    });
    } 
}; 
