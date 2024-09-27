// import th model:
const Todo = require("../models/Todo");

// define routr handler:

exports.getTodo = async(req,res) => {
    try {
        //  fetch all Todo items from database   // 
        const todos = await Todo.find({});

        // response:
        res.status(200)
        .json({
            success: true,
            data: todos,
            message: "Entire Todo Data is fetched"
        });

    } catch (err) {
        console.error(err);
        res.status(500)
        .json({
            success: false,
            error: err.message,
            message: "server Error",
        })
        
        
    }
}


exports.getTodoById = async (req, res) => {
    try {
        // extarct todo items basis on ID:
        const id = req.params.id;
        const todo = await Todo.findById( {_id: id})

        // data for given id not found:
        if(!todo) {
            return res.status(404).json({
                success:false,
                message:"No Data Found with given id",
            })
        }
        // data for given Id Found:
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
        })
        

    }
     catch (err) {
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
