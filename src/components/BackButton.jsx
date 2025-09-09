import { useNavigate } from "react-router-dom"

const BackButton = () => {

    const navigate = useNavigate()
    return (
        <button onClick={() => navigate(-1)} className="bg-amber-600 px-8 py-3 text-white font-semibold text-xl rounded-full cursor-pointer transition-all duration-750 hover:shadow-lg hover:bg-amber-700 hover:-translate-y-2">Back</button>
    )
}

export default  BackButton