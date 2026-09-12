const InfoGrid = ({ viewingWatch, className }) => {
    return (
        <>
            <div className={`p-4 flex flex-col ${className}`}>

                {/* Identity */}
                <div className="mb-6">
                    <p className="text-sm text-muted">
                        {viewingWatch?.brand}
                    </p>

                    <h2 className="text-3xl font-semibold text-heading">
                        {viewingWatch?.model}
                    </h2>

                    <p className="text-2xl font-medium text-text mt-2">
                        ₹{viewingWatch?.price}
                    </p>
                </div>


                {/* Specifications */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">

                    <div>
                        <p className="text-muted">Model</p>
                        <p className="text-text font-medium">
                            {viewingWatch?.model}
                        </p>
                    </div>

                    <div>
                        <p className="text-muted truncate">Dail Color</p>
                        <p className="text-text font-medium truncate">
                            {viewingWatch?.dialColor
                                ?.replace(/^\{|\}$/g, "")
                                .split(",")
                                .join(", ")}
                        </p>
                    </div>

                    <div>
                        <p className="text-muted truncate">Size</p>
                        <p className="text-text font-medium truncate">
                            {viewingWatch?.size}
                        </p>
                    </div>

                    <div>
                        <p className="text-muted truncate">Glass</p>
                        <p className="text-text font-medium truncate">
                            {viewingWatch?.glass}
                        </p>
                    </div>

                    <div>
                        <p className="text-muted truncate">Case</p>
                        <p className="text-text font-medium truncate">
                            {viewingWatch?.case}
                        </p>
                    </div>

                    <div>
                        <p className="text-muted truncate">Bracelet</p>
                        <p className="text-text font-medium truncate">
                            {viewingWatch?.bracelet}
                        </p>
                    </div>

                    <div>
                        <p className="text-muted truncate">Movement</p>
                        <p className="text-text font-medium truncate">
                            {viewingWatch?.movement}
                        </p>
                    </div>

                    <div>
                        <p className="text-muted truncate">Water Resistance</p>
                        <p className="text-text font-medium truncate`">
                            {viewingWatch?.waterResistance}
                        </p>
                    </div>

                </div>

            </div>
        </>
    );
};

export default InfoGrid;