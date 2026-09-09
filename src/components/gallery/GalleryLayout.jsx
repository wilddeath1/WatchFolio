import GalleryHeader from "./GalleryHeader";
import GalleryGrid from "./GalleryGrid";
import WatchViewer from "../Viewer/WatchViewer";
import { useState, useEffect } from "react";
import supabase from "../../lib/supabase";



const GalleryLayout = () => {
    const [isViewing, setIsViewing] = useState(false);
    const [viewingId, setViewingId] = useState(null);
    const [watches, setWatches] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const viewingWatch = watches.find((watch) => watch.id === viewingId);

    const getWatches = async () => {
        const { data, error } = await supabase
            .from("watches")
            .select("*");

        if (error) {
            console.log("the error is", error);
        } else {
            setWatches(data);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        getWatches();
    }, []);


    useEffect(() => {
        document.body.style.overflow = isViewing ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isViewing]);

    return (
        <>
            {/* Viewer Overlay */}
            {isViewing && <WatchViewer viewingWatch={viewingWatch} setIsViewing={setIsViewing} />}


            {/* Gallery */}
            <div className="flex-1 h-auto flex flex-col p-4 gap-2 border-l border-border">
                <GalleryHeader />

                <GalleryGrid
                    setIsViewing={setIsViewing}
                    setViewingId={setViewingId}
                    watches={watches}
                    isLoading={isLoading}
                />
            </div>
        </>
    );
};

export default GalleryLayout;