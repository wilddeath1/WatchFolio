

const ViewerHeader = ({viewingWatch, setIsViewing}) => {
    return (
        <>
            <div className="flex items-center justify-between px-2 pb-3">
                <button
                    className="rounded-full px-3 py-1.5 bg-secondary text-text hover:bg-secondary-hover cursor-pointer font-semibold"
                    onClick={() => setIsViewing(false)}
                >
                    ← Back
                </button>

                <h1 className="text-xl font-semibold text-heading">
                    {viewingWatch?.brand}
                </h1>
            </div>
        </>
    );
};

export default ViewerHeader;