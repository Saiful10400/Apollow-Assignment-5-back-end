import { Tbooking } from "./Booking.interface";
import MybookingModel from "./Booking.model";

//1. create a new booking.
const createOne=async(paylod:Tbooking)=>{
    const result=await MybookingModel.create(paylod)
    return result
}


//2. get a new booking.
// const createOne=async(paylod:Tbooking)=>{
//     const result=await MybookingModel.create(paylod)
//     return result
// }











const myBookingService={createOne}
export default myBookingService