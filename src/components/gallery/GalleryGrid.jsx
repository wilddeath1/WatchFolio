import GalleryCard from "./GalleryCard";
import GallerySkeleton from "./GallerySkeleton";



const GalleryGrid = (props) => {




    return (
        <>

            <div className='h-full w-full rounded-3xl p-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 bg-surface' >

                {
                    props.isLoading
                        ? Array.from({ length: 8 }).map((_, index) => (
                            <GallerySkeleton key={index} />
                        ))
                        : props.watches.map((elem) => {
                            return (
                                <div key={elem.id}>
                                    <GalleryCard
                                        watch={elem}
                                        setIsViewing={props.setIsViewing}
                                        setViewingId={props.setViewingId}
                                    />
                                </div>
                            );
                        })
                }

            </div>




        </>
    );
};

export default GalleryGrid;