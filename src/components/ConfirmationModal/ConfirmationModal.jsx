import React from "react";

function ConfirmationModal({
  book,
  handleYes,
  handleCancel,
  title,
  description,
}) {
  return (
    <>
      <input type="checkbox" id="confirm-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{description}</p>
          <div className="modal-action">
            <label
              onClick={handleCancel}
              htmlFor="confirm-modal"
              className="btn"
            >
              Cancel
            </label>
            <label
              onClick={() => handleYes(book?._id)}
              htmlFor="confirm-modal"
              className="btn btn-error btn-outline"
            >
              Yes
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmationModal;
