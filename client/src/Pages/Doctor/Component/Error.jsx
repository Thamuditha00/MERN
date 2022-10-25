import ReactDOM from 'react-dom/client';
export function Error(){

    function CloseError(){
        const error = ReactDOM.createRoot(document.getElementById("error"));
        error.render(<></>)
    }

    return (
        <>
        <div className="error-message">
            <span className="error-text"><strong>Error! </strong>Invlaid patient ID</span>
            <a onClick={CloseError} className="close">x</a>
        </div>
        </>
    )
}