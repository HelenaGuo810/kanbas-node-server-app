import Database from "../Database/index.js";
import model from "./model.js";
export function findAssignmentsForCourse(courseId) {
  return model.find({ course: courseId })
}
export function createAssignment(assignment) {
  delete assignment._id;
  return model.create(assignment);
}
export function deleteAssignment(assignmentId) {
  return model.deleteOne({ _id: assignmentId });
}
export function updateAssignment(assignmentId, assignmentUpdates) {
  return model.updateOne({ _id: assignmentId }, assignmentUpdates);
}