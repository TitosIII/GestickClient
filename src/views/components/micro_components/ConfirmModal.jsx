export default function ConfirmModal({title, message, modal, action, option }) {
  const defaultAction = () => {
    if (action) {
      action();
    }
    modal.current.style.display = "none";
  };

  return (
    <div className="modal" ref={modal}>
      <div className="modal-content">
        <div className="modal-head">
          <h3 className="modal__title">{title}</h3>
        </div>
        <div className="modal-body">
            <p className="modal-paragraph">{message}</p>
        </div>
        <div className="modal-footer">
          {option ? (
            <button
              className="close-btn"
              onClick={() => {
                modal.current.style.display = "none";
              }}
            >
              Cancelar
            </button>
          ) : null}
          <button className="btn" onClick={defaultAction}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
