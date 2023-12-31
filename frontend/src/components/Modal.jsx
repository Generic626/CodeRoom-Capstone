const Modal = (props) => {
  return (
    <dialog
      id="my_modal_1"
      className="w-[60%] h-[50%] p-8 rounded-lg bg-[#333333] "
    >
      <div className="modal-box flex flex-col h-full">
        <div className="w-full flex justify-between">
          {/* Modal Title */}
          <h3 className="font-bold text-md text-white">{props.modalTitle}</h3>
          {/* Modal Action */}
          <div>
            <form method="dialog">
              <button className="outline-0 text-white">X</button>
            </form>
          </div>
        </div>
        {/* Modal Content */}
        {props.children}
      </div>
    </dialog>
  );
};

export default Modal;
