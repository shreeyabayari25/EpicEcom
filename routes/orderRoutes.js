import express from 'express';
import Order from '../models/orderModel.js'; // Ensure this path is correct

const router = express.Router();

// Return request endpoint
router.post('/return/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.returnStatus = 'requested';
      await order.save();
      res.status(200).json({ message: 'Return request processed' });
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;
