import React from 'react';
import "./Modal.css";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal-container" >
    <div className="modal">
        <form>
        <div className="form-group">
                <lable htmlFor="page">Page</lable>
                <input name="page" />
            </div>
            <div className="form-group">
                <lable htmlFor="description">Description</lable>
                <textarea name="description" />
            </div>
            <div className="form-group">
                <lable htmlFor="Status">Status</lable>
                <select name="Status">
                    <option value="Live">Live</option>
                    <option value="Draft">Draft</option>
                    <option value="Error">Error</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>    
    </div>
  )
}

export default Modal;
