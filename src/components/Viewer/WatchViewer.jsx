import ViewerHeader from "./ViewerHeader";
import MediaArea from "./MediaArea";
import InfoGrid from "./InfoGrid";
import MediaControls from "./MediaControls";
import FamilySection from "./FamilySection";
import { useState } from "react";

const WatchViewer = ({ viewingWatch, setIsViewing, watches, setViewingId }) => {
  const [mediaType, setMediaType] = useState("irl");
  const [mediaIndex, setMediaIndex] = useState(0);

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center p-4 md:p-6">

      {/* Viewer */}
      <div className="w-full h-[90vh] md:w-6/8 md:h-[87.5vh] bg-card rounded-3xl p-4 flex flex-col overflow-hidden">

        <ViewerHeader setIsViewing={setIsViewing} viewingWatch={viewingWatch} />

        {/* Main Viewer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[minmax(400px,1fr)_auto_auto] gap-2 md:gap-6 flex-1 min-h-0 p-2 overflow-y-auto ">

          <MediaArea
            className="order-1 md:order-0 md:col-start-1 md:row-start-1 min-h-0 h-96 md:h-full"
            viewingWatch={viewingWatch}
            mediaType={mediaType}
            mediaIndex={mediaIndex}
          />

          <InfoGrid
            className="order-3 md:order-0 md:col-start-2 md:row-start-1"
            viewingWatch={viewingWatch}
          />

          <MediaControls
            className="order-2 md:order-0 md:col-span-2 md:row-start-2"
            viewingWatch={viewingWatch}
            mediaType={mediaType}
            setMediaType={setMediaType}
            mediaIndex={mediaIndex}
            setMediaIndex={setMediaIndex}
          />

          <FamilySection
            className="order-4 md:order-0 md:col-span-2 md:row-start-3"
            viewingWatch={viewingWatch}
            watches={watches}
            setViewingId={setViewingId}
            setMediaIndex={setMediaIndex}
            setMediaType={setMediaType}
          />

        </div>

      </div>
    </div>
  );
};

export default WatchViewer;