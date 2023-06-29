//function Button() {
//    const name = 'Inicio'
//    return (
//        <>
//            <button>
//                <h1 className="bg-teal-200 px-3 py-4 text-white">{name}</h1>
//            </button>
//        </>
//        )
//}

const Button = (props) => {

    const { name } = props;
    return (
        <>
        <button className="bg-emerald-300 px-3 py-3 text-white">{name}</button>
        </>
    )
}

export default Button;