
<Modal isOpen={isModalOpen} onClose={closeModal}>
<div className="ModalDialog fullScreenOnMobile">
<div className="ModalTitle">File a complaint</div>
<button className="close" onClick={closeModal}></button>
<div className="ModalDialogContent">
    <div className="file-a-complaint">
    <div className="imageUploadModule">
        <div className="errorContainer">
        <div className="errorText hide">Please make sure your picture type is valid!</div>
        </div>
        <input type="file" name="file" hidden multiple className="imageInput" accept="image/*" />
        <div className="uploadButtonContainer">
        <button className="upload-complaint-button">
            <svg width="80px" height="80px" style={{ display: 'inline-block', verticalAlign: 'middle' }} fill="#E77571" viewBox="0 0 37.434 37.434">
            <path d="M32.932 8.578H27.52v-.556c0-2.484-2.016-4.5-4.5-4.5h-8.607a4.501 4.501 0 00-4.5 4.5v.556H4.5a4.5 4.5 0 00-4.5 4.5v16.334c0 2.484 2.015 4.5 4.5 4.5h28.434c2.485 0 4.5-2.016 4.5-4.5V13.078a4.503 4.503 0 00-4.502-4.5zM18.715 29.244c-4.688 0-8.5-3.812-8.5-8.5 0-4.687 3.812-8.5 8.5-8.5 4.688 0 8.5 3.812 8.5 8.5 0 4.688-3.813 8.5-8.5 8.5zm4.5-8.5c0 2.479-2.02 4.5-4.5 4.5s-4.5-2.021-4.5-4.5c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5z"></path>
            </svg>
            <span className="line1">Upload a Photo</span>
            <span className="line2">of your complaint</span>
        </button>
        </div>
    </div>
    <div className="complaint-description">
        <div className="inputContainer alternateStyle">
        <div className="input-label"><span>Description (optional)</span></div>
        <textarea name="name" required maxLength="500" rows="3" placeholder=""></textarea>
        <span className="input-error"></span>
        <span className="input-description">Ex. Quality of product is not as expected</span>
        <span className="input-extra-content"></span>
        </div>
    </div>
    <div className="action-buttons">
        <button className="btn btn-secondary" onClick={closeModal}>Cancel</button>
        <button className="btn btn-primary">Submit</button>
    </div>
    </div>

    
</div>


</div>
</Modal>




















