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
                        <p className="text-muted">Brand</p>
                        <p className="text-text font-medium">
                            {viewingWatch?.brand}
                        </p>
                    </div>

                    <div>
                        <p className="text-muted">Model</p>
                        <p className="text-text font-medium">
                            {viewingWatch?.model}
                        </p>
                    </div>

                    <div>
                        <p className="text-muted">Size</p>
                        <p className="text-text font-medium">
                            {viewingWatch?.size}
                        </p>
                    </div>

                    <div>
                        <p className="text-muted">Glass</p>
                        <p className="text-text font-medium">
                            Mineral
                        </p>
                    </div>

                    <div>
                        <p className="text-muted">Case</p>
                        <p className="text-text font-medium">
                            Stainless Steel
                        </p>
                    </div>

                    <div>
                        <p className="text-muted">Bracelet</p>
                        <p className="text-text font-medium">
                            Stainless Steel
                        </p>
                    </div>

                    <div>
                        <p className="text-muted">Movement</p>
                        <p className="text-text font-medium">
                            Quartz
                        </p>
                    </div>

                    <div>
                        <p className="text-muted">Water Resistance</p>
                        <p className="text-text font-medium">
                            50 m
                        </p>
                    </div>

                </div>

            </div>
        </>
    );
};

export default InfoGrid;