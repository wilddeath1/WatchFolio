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
                        <p className="text-muted xl:text-sm bg-secondary w-25 h-5"></p>
                        <h3 className="text-heading xl:text-2xl font-medium truncate sm:mb-4 bg-secondary w-45 h-7"></h3>

                    </div>

                    <div className="flex justify-between ">

                        <div className="flex gap-1 flex-col">
                            <span className="text-muted text-[9px] xl:text-sm bg-secondary w-18 h-5"></span>
                            <p className="text-heading text-[9px] xl:text-xl font-medium bg-secondary w-25 h-5"></p>
                        </div>

                        <div className="flex gap-1 flex-col">
                            <p className="text-muted text-[9px] xl:text-sm text-right bg-secondary w-28 h-5"></p>
                            <p className="text-text text-[9px] xl:text-sm text-right bg-secondary w-25 h-5"></p>
                        </div>

                    </div>


                </div>
            </div>
        </>
    );
};

export default GallerySkeleton;