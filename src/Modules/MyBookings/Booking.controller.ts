import { Request, Response } from "express"
import catchAsync from "../../Utility/catchAsync"
import sendResponse from "../../Utility/sendResponse"
import myBookingService from "./Booking.service"
import httpStatus from "http-status"

//1. create one
const create=catchAsync(async(req:Request,res:Response)=>{

   const data=await myBookingService.createOne(req.body)
    sendResponse(res,{data,success:true,statusCode:httpStatus.OK,message:"All bookings retrieved successfully"})
})

//2. get one by id
const getOne=catchAsync(async(req:Request,res:Response)=>{

   const data=await myBookingService.getAbooking(req.params.id)
    sendResponse(res,{data,success:true,statusCode:httpStatus.OK,message:"a bookings retrieved successfully"})
})




const mybookingcontroller={create,getOne}
export default mybookingcontroller