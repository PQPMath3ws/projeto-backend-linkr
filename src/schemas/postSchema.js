import joi from "joi";

export const postSchema = joi.object({
    url: joi.string().uri().required(),
    description: joi.string().min(0).max(150)
    
});

export const commentSchema = joi.object({
    comment: joi.string().required()
});