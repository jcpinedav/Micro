import { Request, response, Response } from 'express';
import { connect } from '../database';
import { Post } from '../interface/Post';

export async function getPosts(req: Request,res: Response) {
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM personas WHERE id >= 1');
    res.json(posts);
};

export async function createPost(req:Request, res: Response) {
    const newPost: Post = req.body;
    //console.log (newPost);
    const conn = await connect();
    await conn.query('INSERT INTO personas SET ?', [newPost]);
    return res.json({
        message: 'Usuario creado'
    });
}

export async function getPost(req: Request,res: Response): Promise<Response> {
    const id = req.params.postId;
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM personas WHERE id = ?', [id]);
    return res.json(posts[0]);
};

export async function deletePost(req:Request, res: Response) {
    const id = req.params.postId;
    const conn = await connect();
    await conn.query('DELETE FROM personas WHERE id = ?', [id]);
    return res.json({
        message: 'Usuario eliminado'
    });
}

export async function updatePost(req:Request, res: Response) {
    const id = req.params.postId;
    const updatePost: Post = req.body;
    const conn = await connect();
    await conn.query('UPDATE personas set ? WHERE id = ?', [updatePost, id]);
    return res.json({
        message: 'Usuario actualizado'
    });
}