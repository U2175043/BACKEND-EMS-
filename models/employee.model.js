const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    FirstName: { type: String, required: true },
    MiddleName: { type: String },
    LastName: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    Gender: { type: String },
    DOB: { type: Date },
    TerminateDate: { type: Date },
    Deleted: { type: Boolean },
    Photo: { type: String },
    ContactNo: { type: String },
    EmployeeCode: { type: String, required: true },
    Account: { type: Number, required: true },
    PresentAddress: { type: String },
    salary: { type: String },
    role: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role" }],
    salary: { type: mongoose.Schema.Types.ObjectId, ref: "Salary" },
    position: [{ type: mongoose.Schema.Types.ObjectId, ref: "Position" }],
    education: [{ type: mongoose.Schema.Types.ObjectId, ref: "Education" }],
    familyInfo: [{ type: mongoose.Schema.Types.ObjectId, ref: "FamilyInfo" }],
    department: [{ type: mongoose.Schema.Types.ObjectId, ref: "Department" }],
    company: [{ type: mongoose.Schema.Types.ObjectId, ref: "Company" }],
    workExperience: [
      { type: mongoose.Schema.Types.ObjectId, ref: "WorkExperience" },
    ],
    leaveApplication: [
      { type: mongoose.Schema.Types.ObjectId, ref: "LeaveApplication" },
    ],
  },
  {
    usePushEach: true,
    timestamps: true,
  }
);

var entitySchema = mongoose.Schema({
  EmployeeID: { type: String },
});

entitySchema.pre("save", function (next) {
  var doc = this;
  counter.findByIdAndUpdate(
    { _id: "entityId" },
    { $inc: { seq: 1 } },
    function (error, counter) {
      if (error) return next(error);
      doc.EmployeeID = counter.seq;
      next();
    }
  );
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
