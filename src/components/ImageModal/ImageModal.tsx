import Modal from 'react-modal';
import { FC } from "react";

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgb(58, 58, 58, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "",
  },
};

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
  imageUrl: string;
}

const ImageModal: FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  contentLabel,
  imageUrl,
}) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel={contentLabel}
        appElement={document.getElementById("root") as HTMLElement}
      >
        <div>
          <img src={imageUrl} alt="Image" />
        </div>
      </Modal>
    </>
  );
};

export default ImageModal;
