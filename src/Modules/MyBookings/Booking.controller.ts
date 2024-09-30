import { Request, Response } from "express"
import catchAsync from "../../Utility/catchAsync"
import sendResponse from "../../Utility/sendResponse"
import myBookingService from "./Booking.service"
import httpStatus from "http-status"

const create=catchAsync(async(req:Request,res:Response)=>{

   const data=await myBookingService.createOne(req.body)
    sendResponse(res,{data,success:true,statusCode:httpStatus.OK,message:"All bookings retrieved successfully"})
})




const mybookingcontroller={create}
export default mybookingcontroller