import { createReducer } from "@/utils";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useReducer,
  useState,
} from "react";
const editMap = {
  edit_status: "editStatus",
  edit_intended_date: "editIntendedDate",
  edit_time_of_day: "editTimeOfDay",
};
const reducer = createReducer(editMap);

const OrderDetails = () => {
  const [status, setStatus] = useState("Reviewing");
  const [timeOfDay, setTimeOfDay] = useState("Morning");
  const [intendedDate, setIntendedDate] = useState("01/12/2022");
  const [{ editStatus, editIntendedDate, editTimeOfDay }, dispatch] =
    useReducer(reducer, {
      editStatus: false,
      editIntendedDate: false,
      editTimeOfDay: false,
    });
  const handleChange = (
    event: ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >,
    callback: Dispatch<SetStateAction<string>>
  ) => {
    callback(event.target.value);
  };
  return (
    <div className="card">
      <div className="card-header">Order Details</div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <p>
              <strong>Status:</strong>{" "}
              {!editStatus && (
                <>
                  {status}
                  <span
                    onClick={() => dispatch("edit_status")}
                    className="edit-button"
                  >
                    (Edit)
                  </span>
                </>
              )}
            </p>
            {editStatus && (
              <div className="row">
                <div className="col-sm-5">
                  <input
                    value={status}
                    type="text"
                    className="form-control"
                    onChange={(e) => handleChange(e, setStatus)}
                  />
                </div>
                <div className="col-sm">
                  <button
                    onClick={() => {
                      dispatch("edit_status");
                    }}
                    disabled={status === ""}
                    className="btn primary-action"
                  >
                    OK
                  </button>
                </div>
              </div>
            )}

            <p>
              <strong>Member:</strong> ryan.bruns
            </p>
            <p>
              <strong>Date of Birth:</strong> 01/01/1980
            </p>
            <p>
              <strong>Request Address:</strong> 98 St Marks Pl, New York, NY
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <strong>Received:</strong> 01/11/2022
            </p>
            <p>
              <strong>Intended Date:</strong>
              {!editIntendedDate && (
                <>
                  {" "}
                  {intendedDate}
                  <span
                    onClick={() => dispatch("edit_intended_date")}
                    className="edit-button"
                  >
                    (Edit)
                  </span>
                </>
              )}
            </p>
            {editIntendedDate && (
              <div className="row">
                <div className="col-sm-5">
                  <input
                    value={intendedDate}
                    type="date"
                    className="form-control"
                    onChange={(e) => handleChange(e, setIntendedDate)}
                  />
                </div>
                <div className="col-sm">
                  <button
                    onClick={() => {
                      const formattedDate = intendedDate
                        .split("-")
                        .reverse()
                        .join("/");
                      setIntendedDate(formattedDate);
                      dispatch("edit_intended_date");
                    }}
                    disabled={intendedDate === ""}
                    className="btn primary-action"
                  >
                    OK
                  </button>
                </div>
              </div>
            )}

            <p>
              <strong>Requested Time of Day:</strong>
              {!editTimeOfDay && (
                <>
                  {" "}
                  {timeOfDay}
                  <span
                    onClick={() => dispatch("edit_time_of_day")}
                    className="edit-button"
                  >
                    (Edit)
                  </span>
                </>
              )}
            </p>
            {editTimeOfDay && (
              <div className="row">
                <div className="col-sm-5">
                  <select
                    onChange={(e) => handleChange(e, setTimeOfDay)}
                    className="form-control"
                    name="cars"
                    value={timeOfDay}
                    id="cars"
                  >
                    <option value="Morning">Morning</option>
                    <option value="Day">Day</option>
                    <option value="Evening">Evening</option>
                    <option value="Night">Night</option>
                  </select>
                </div>
                <div className="col-sm">
                  <button
                    onClick={() => dispatch("edit_time_of_day")}
                    disabled={intendedDate === ""}
                    className="btn primary-action"
                  >
                    OK
                  </button>
                </div>
              </div>
            )}
            <p>
              <strong>Assigned Agent:</strong> Ryan Bruns
            </p>
            <p>
              <strong>Time Zone:</strong> EDT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
