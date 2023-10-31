import mongoose from 'mongoose';
import moongose from 'mongoose'
const UserSchema = moongose.Schema(
    {
        name:{
            type: String,
            require : [true, "Please enter a user name"],
        },
        lastname:{
            type: String,
            require : [true, "Please enter a user lastname"],
        },
        email:{
            type: String,
            require : [true, "Please enter a user email"],
        },
        age:{
            type: Number,
            require : true,
            default: 18,
        },
        nickname:{
            type: String,
            require: false,
            default: 'crack',
        }
    },
    {
        timestamps:true,
    }
);

const User = mongoose.model('User', UserSchema);
export default User;