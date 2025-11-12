function Fallback({ children }) {
    return (
        <div className="text-5xl text-blue-200 font-bold animate-pulse">
            {children}
        </div>
    );
}

export default Fallback;