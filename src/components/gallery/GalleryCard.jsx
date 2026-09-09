const GalleryCard = ({ watch, setIsViewing, setViewingId }) => {
    return (
        <>
            <div className="h-66 xl:h-96  rounded-2xl p-3 flex items-center flex-col shadow-sm bg-card hover:bg-card-hover cursor-pointer" onClick={() => {

                setIsViewing(true);
                setViewingId(watch.id);



            }}>

                <div className="relative group h-5/8 w-full">

                    {/* Product image */}
                    <img
                        src={watch.variantImages[0]}
                        alt={watch.model}
                        className="absolute inset-0 h-full w-full object-contain"
                    />

                    {/* IRL hover image */}
                    {watch.irlImages.length > 0 && (
                        <img
                            src={watch.irlImages[0]}
                            alt={watch.model}
                            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"

                        />
                    )}

                </div>

                <div className="w-full flex flex-col justify-between p-1">

                    <div className="leading-4">
                        <p className="text-muted xl:text-sm">{watch.brand}</p>
                        <h3 className="text-heading xl:text-2xl font-medium truncate sm:mb-4">{watch.model}</h3>

                    </div>

                    <div className="flex justify-between ">

                        <div className="leading-4">
                            <span className="text-muted text-[9px] xl:text-sm">₹</span>
                            <p className="text-heading text-[9px] xl:text-xl font-medium">{watch.price}</p>
                        </div>

                        <div className="leading-4 ">
                            <p className="text-muted text-[9px] xl:text-sm text-right">Case size (L× W× H)</p>
                            <p className="text-text text-[9px] xl:text-sm text-right ">{watch.size}</p>
                        </div>

                    </div>


                </div>
            </div>
        </>
    );
};

export default GalleryCard;