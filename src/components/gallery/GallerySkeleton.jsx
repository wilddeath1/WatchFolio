const GallerySkeleton = () => {
    return (
        <>
            <div className="h-66 xl:h-96  rounded-2xl p-3 flex items-center flex-col shadow-sm bg-card">

                <div className="relative group h-5/8 w-full">

                    {/* Product image */}
                    <span
                        className="absolute inset-0 h-full w-full bg-secondary rounded-2xl animate-pulse "
                    > </span>

                </div>

                <div className="w-full flex flex-col justify-between p-1 animate-pulse">

                    <div className="flex gap-1 flex-col">
                        <p className="mt-2 bg-secondary w-2/5 h-5"></p>
                        <p className="mb-2 bg-secondary w-7/10 h-5"></p>

                    </div>

                    <div className="flex">

                        <div className="flex gap-1 flex-col w-1/2">
                            <span className=" bg-secondary w-1/5 h-5"></span>
                            <p className="bg-secondary w-4/5 h-5"></p>
                        </div>

                        <div className="flex gap-1 items-end flex-col w-1/2">
                            <p className="bg-secondary w-9/10 h-5"></p>
                            <p className="bg-secondary w-3/5 h-5"></p>
                        </div>

                    </div>


                </div>
            </div>
        </>
    );
};

export default GallerySkeleton;