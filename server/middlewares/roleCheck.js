// Enforce role access (e.g., agent-only routes)
const requireRole = (role) => (req, res, next) => {
    if (req.user.role !== role) 
      return res.status(403).json({ error: `Requires ${role} role` });
    next();
  };
  module.exports = { requireAgent: requireRole('agent') };