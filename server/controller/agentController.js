exports.getCommissionReport = async (req, res) => {
    const transactions = await Transaction.find({
      agentId: req.user._id,
      status: 'completed'
    });
    
    const totalCommission = transactions.reduce(
      (sum, tx) => sum + (tx.amount * tx.commissionRate), 0
    );
  
    res.json({ transactions, totalCommission });
  };