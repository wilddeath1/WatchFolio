import { ChevronRight, ChevronLeft, } from "lucide-react";
const MediaControls = ({ mediaType, setMediaType, mediaIndex, setMediaIndex, viewingWatch, className }) => {
    const mediaList =
        mediaType === "irl"
            ? viewingWatch.irlImages
            : mediaType === "variant"
                ? viewingWatch.variantImages
                : viewingWatch.videoUrls;

    return (
        <>

            <div className={`flex flex-col md:flex-row items-center gap-1 md:gap-6 px-2 py-3 ${className}`}>


                {/* Image Navigation */}
                <div className="w-full md:w-1/2 flex items-center justify-center gap-6">

                    <button
                        className="h-10 w-10 rounded-full bg-secondary text-text hover:bg-secondary-hover cursor-pointer flex items-center justify-center"
                        onClick={() => {

                            if (mediaIndex > 0)
                                setMediaIndex(mediaIndex - 1)


                        }}
                    >
                        <ChevronLeft size={22} />
                    </button>

                    <span className="text-sm font-medium text-text">
                        {mediaList.length === 0 ? 0 : mediaIndex + 1} / {mediaList.length}
                    </span>

                    <button
                        className="h-10 w-10 rounded-full bg-secondary text-text hover:bg-secondary-hover cursor-pointer flex items-center justify-center"
                        onClick={() => {

                            if (mediaIndex + 1 < mediaList.length)
                                setMediaIndex(mediaIndex + 1)

                        }}
                    >
                        <ChevronRight size={22} />
                    </button>

                </div>


                {/* Media Type Buttons */}
                <div className="md:w-1/2 flex items-center justify-center gap-3">

                    <button
                        className={`rounded-full px-4 py-2 cursor-pointer font-medium ${mediaType === "irl"
                            ? "bg-primary text-white"
                            : "bg-secondary text-text hover:bg-secondary-hover"
                            }`}
                        onClick={() => {
                            setMediaType("irl");
                            setMediaIndex(0);
                        }}
                    >
                        IRL
                    </button>

                    <button
                        className={`rounded-full px-4 py-2 cursor-pointer font-medium ${mediaType === "variant"
                            ? "bg-primary text-white"
                            : "bg-secondary text-text hover:bg-secondary-hover"
                            }`}
                        onClick={() => {
                            setMediaType("variant");
                            setMediaIndex(0)
                        }}
                    >
                        Variant
                    </button>

                    <button
                        className={`rounded-full px-4 py-2 cursor-pointer font-medium ${mediaType === "video"
                            ? "bg-primary text-white"
                            : "bg-secondary text-text hover:bg-secondary-hover"
                            }`}
                        onClick={() => {
                            setMediaType("video");
                            setMediaIndex(0)
                        }}
                    >
                        Video
                    </button>

                </div>

            </div >
        </>
    );
};

export default MediaControls;