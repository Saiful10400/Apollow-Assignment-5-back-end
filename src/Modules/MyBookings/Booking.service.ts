import { Tbooking } from "./Booking.interface";
import MybookingModel from "./Booking.model";

//1. create a new booking.
const createOne=async(paylod:Tbooking)=>{
    const result=await MybookingModel.create(paylod)
    return result
}

//2. get a booking.
const getAbooking=async(id:string)=>{

    const result=await MybookingModel.findById(id).populate({path:"slot",populate:{path:"room"}}).populate("user")
    return result
}


//2. get a new booking.
// const createOne=async(paylod:Tbooking)=>{
//     const result=await MybookingModel.create(paylod)
//     return result
// }











const myBookingService={createOne,getAbooking}
export default myBookingService