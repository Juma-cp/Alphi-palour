const Service = require('../models/Service');

exports.getAll = async (req, res, next) => {
  try { const services = await Service.find(); res.json(services); }
  catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try { const newService = new Service(req.body); await newService.save(); res.status(201).json(newService); }
  catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try { const updated = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true }); res.json(updated); }
  catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try { await Service.findByIdAndDelete(req.params.id); res.json({ msg: 'Deleted' }); }
  catch (err) { next(err); }
};
