import { Request, Response } from "express";
import catchAsync from "../../Utility/catchAsync";
import sendResponse from "../../Utility/sendResponse";
import paymentservice from "./payment.service";
import myBookingService from "../MyBookings/Booking.service";
import httpStatus from "http-status";
import path from "path"
import fs from "fs"

const payWithBookingId = catchAsync(async (req: Request, res: Response) => {
  const bookingId = req.params.id;

  // checking is thsi payed or not.

  const paymentStatus = await myBookingService.getAbooking(bookingId);

  if (paymentStatus?.isPaid) {
    const data={}
    sendResponse(res, {
      data,
      success: false,
      statusCode: httpStatus.BAD_REQUEST,
      message: "You already paid for this booking.",
    });
  }

  const data = await paymentservice.paywithBookingId(bookingId);
  sendResponse(res,{data,success:true,statusCode:httpStatus.OK,message:"payment url generated."})
});

const paymentStatus = catchAsync(async (req: Request, res: Response) => {

  const bookingId=req.params.id
  const tnxId=req.query.transectonId
  console.log(tnxId,bookingId)
//  const absolutePath= path.join(__dirname,"../../View/index.html")
//  let file=fs.readFileSync(absolutePath,"utf-8")
//  file=file.replace("{{message}}",bookingId) 
//  res.send(file)
});



const paymentController = { payWithBookingId,paymentStatus };
export default paymentController;
