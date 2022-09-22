const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    CreatedBy: { type: String },
    CreatedDate: { type: Date, default: Date.now },
    Deleted: { type: Boolean },
    EmpFullName: { type: String },
    EstimatedCost: { type: String },
    EstimatedTime: { type: String },
    ModifiedBy: { type: String },
    ModifiedDate: { type: Date },
    ProjectDesc: { type: String },
    ProjectTitle: { type: String, required: true },
    ProjectURL: { type: String },
    Remark: { type: String },
    Status: { type: Number, required: true },
});

var entitySchema = mongoose.Schema({
    ID: { type: String }
});

entitySchema.pre('save', function (next) {
    var doc = this;
    counter.findByIdAndUpdate({ _id: 'entityId' }, { $inc: { seq: 1 } }, function (error, counter) {
        if (error) return next(error);
        doc.ID = counter.seq;
        next();
    });
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project