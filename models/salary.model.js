const mongoose = require('mongoose')

const salarySchema = new mongoose.Schema({
  BasicSalary: { type: String, required: true },
  BankName: { type: String },
  AccountNo: { type: String },
  AccountHolderName: { type: String },
  TaxDeduction: { type: String }
});

var entitySchema = mongoose.Schema({
  SalaryID: { type: String }
});

entitySchema.pre('save', function (next) {
  var doc = this;
  counter.findByIdAndUpdate({ _id: 'entityId' }, { $inc: { seq: 1 } }, function (error, counter) {
    if (error) return next(error);
    doc.SalaryID = counter.seq;
    next();
  });
});


const Salary = mongoose.model("Salary", salarySchema);
module.exports = Salary