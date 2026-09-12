
const FamilySection = ({ viewingWatch, watches, setViewingId, setMediaIndex, setMediaType ,className }) => {
    const familyWatches = watches.filter((watch) =>
        watch.familyId === viewingWatch.familyId
    )
    return (
        <>
            <div className={`px-2 pt-3 ${className}`} >

                <div className="border-t border-border pt-4">

                    <h3 className="text-lg font-semibold text-heading">
                        More Variants of {viewingWatch.familyId} family
                    </h3>

                    <div className="flex gap-4 mt-3">

                        {familyWatches.map((elem) => {

                            return (< div key={elem.id} className={`h-20 w-24 rounded-xl bg-surface-secondary hover:bg-secondary-hover flex items-center justify-center text-sm text-muted cursor-pointer
                                 ${elem.id === viewingWatch.id ? "border border-primary" : "border-none"}`}
                                onClick={() => { setViewingId(elem.id); setMediaIndex(0); setMediaType("irl") }
                                } >

                                <div className="relative h-3/4 w-full">


                                    <img
                                        src={elem.variantImages[0]}
                                        alt={elem.model}
                                        className="absolute inset-0 h-full w-full object-contain"
                                    />




                                </div>

                            </div>)

                        })}

                    </div>

                </div>

            </div >
        </>
    );
};

export default FamilySection;