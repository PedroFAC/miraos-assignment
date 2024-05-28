const OrderDetails = () => {
  return (
    <div className="card">
      <div className="card-header">Order Details</div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <p>
              <strong>Status:</strong> Reviewing{" "}  
              <span className="edit-button">(Edit)</span>
            </p>
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
              <strong>Intended Date:</strong> 01/12/2022{" "}
              <span className="edit-button">(Edit)</span>
            </p>
            <p>
              <strong>Requested Time of Day:</strong> Morning{" "}
              <span className="edit-button">(Edit)</span>
            </p>
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
