function InputText({label}){
    return (
        <div className="form-element flex flex-col">
            <label>{label}</label>
            <input type="text" className="outline-1 border-black border-2 text-xl" />
        </div>
    )
}

export {InputText}