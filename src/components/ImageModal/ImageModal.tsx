import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ImageModal({
    isOpen, onAfterOpen, onRequestClose, style, contentLabel, imageUrl}) {
    return <> 
    <Modal 
    isOpen={isOpen} 
    onAfterOpen={onAfterOpen} 
    onRequestClose={onRequestClose}
    style={style}
    contentLabel={contentLabel}>
         <div>
        <img src={imageUrl} alt="Image" />
      </div>
    </Modal>
    </>
}