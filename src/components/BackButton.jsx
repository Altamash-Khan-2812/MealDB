const BackButton = () => {
    return (
        <button onClick={() => window.history.back()} className="bg-amber-600 px-8 py-2 text-white font-semibold text-lg rounded-full cursor-pointer transition-all duration-750 hover:shadow-lg hover:bg-amber-700 hover:-translate-y-2">Back</button>
    )
}

export default  BackButton