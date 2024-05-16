import { toast } from "react-toastify";
import { successPaymentRes } from "../api/api";

export const PaymentLaunch = (order, dispatch) => {
  console.log(order.notes.u_id);
  var options = {
    key: "rzp_test_BVclXIQdCra5rg",
    amount: "50000",
    currency: "INR",
    name: "Acme Corp",
    description: "Test Transaction",
    order_id: order.id,
    handler: function (response) {
    //   console.log("Payment successful:", response);
      successPaymentRes({
        data: order.notes.u_id,
        payment_intent: response.razorpay_payment_id,
      })
        .then((res) => {
          toast.success("🥳 Lets Start Learning");
        })
        .catch((error) => {
          console.error("Error processing payment success:", error);
        });
    },
    notes: {
      address: "Razorpay Corporate Office",
      extradata: "devPrince@3000",
    },
    theme: {
      color: "#84CC16",
    },
  };
  if (window.Razorpay) {
    var rzp = new window.Razorpay(options);
    rzp.open();
  } else {
    console.error("Razorpay script not loaded.");
  }
};
