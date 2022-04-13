import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    orderItems: [
      {
        slug: { type: String, required: true },
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true,
        },

      },
      
    ],
    shippingAddress: {
      fullName: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalcode: { type: String, required: true },
      brn: { type: String, required: true },
      vat: { type: String, required: true },
    },   
    
    paymentMethod: { type: String, required: true },
    paymentResults: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },
    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    vatPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },    
    isPaid: { type: Boolean, default: false},
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    DeliveredAt: { type: Date },


  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);
export default Order;
