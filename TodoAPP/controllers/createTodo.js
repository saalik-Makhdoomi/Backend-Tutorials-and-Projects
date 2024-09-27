// import th model:
const Todo = require("../models/Todo");

// define routr handler:

exports.createTodo = async(req,res) => {
    try {
            // extract title and description from request body:
            const {title,description} = req.body;
            // create a new Todo Obj and insert in DB:
            const response = await Todo.create({title,description});
            // send a json response with a sucess flag:
            res.status(200).json({
                sucess:true,
                data:response,
                message:'Entry Created Successfully'
            })

    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            sucess:false,
            data:"internal server error",
            message:err.message,
        })
    }
}