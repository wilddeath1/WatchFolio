const MediaArea = ({ viewingWatch, mediaIndex, mediaType, className }) => {
    const mediaList =
        mediaType === "irl"
            ? viewingWatch.irlImages
            : mediaType === "variant"
                ? viewingWatch.variantImages
                : viewingWatch.videoUrls;
    const convertedUrl =

        mediaList[mediaIndex]?.includes("https://www.youtube.com/watch?v=")
            ? mediaList[mediaIndex].replace(
                "https://www.youtube.com/watch?v=",
                "https://www.youtube.com/embed/")
            : mediaList[mediaIndex]?.includes("https://youtu.be/")
                ? mediaList[mediaIndex].replace(
                    "https://youtu.be/",
                    "https://www.youtube.com/embed/")
                : mediaList[mediaIndex]?.includes("https://www.youtube.com/shorts/")
                    ? mediaList[mediaIndex].replace(
                        "https://www.youtube.com/shorts/",
                        "https://www.youtube.com/embed/")
                    : mediaList[mediaIndex]?.includes("https://youtube.com/shorts/")
                        ? mediaList[mediaIndex].replace(
                            "https://youtube.com/shorts/",
                            "https://www.youtube.com/embed/")
                        : mediaList[mediaIndex]?.includes("https://www.instagram.com/reel/")
                            ? mediaList[mediaIndex] + "/embed"
                            : "";




    return (
        <>
            <div className={`flex items-center justify-center rounded-2xl bg-surface-secondary p-4 ${className}`}>
                {mediaList.length === 0 ? <h1 className="text-muted" >Not available yet</h1>
                    : mediaType === "video" ? (
                        <iframe
                            src={convertedUrl}
                            className="h-full aspect-9/16 rounded-xl"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />

                    ) : (
                        <img
                            src={mediaList[mediaIndex]}
                            alt={viewingWatch?.model}
                            className="max-h-full max-w-full object-contain rounded-xl"
                        />
                    )}
            </div>

        </>
    );
};

export default MediaArea;

