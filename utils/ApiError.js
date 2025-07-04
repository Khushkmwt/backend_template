class ApiError extends Error{
    constructor(message = "Something Went wrong",statusCode, errors = [] ,stack = ""){
        super(message);
        this.statusCode = statusCode || 500;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors
        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
        
    }
}

export {ApiError}