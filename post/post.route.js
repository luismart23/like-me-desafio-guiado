import { Router } from "express";
import { PostController } from "./post.controller.js";

const router = Router()

// PATH: /posts
router.get('/', PostController.getPosts)
router.post('/', PostController.createPost)
router.put('/:id', PostController.updatePost)

export default router