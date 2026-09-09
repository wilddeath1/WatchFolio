
import { Construction, SlidersHorizontal, ListSortDescending } from "lucide-react";

const Sidebar = () => {
    return (
        <div className="">

            <div className='lg:hidden w-full h-14 border-b border-border flex items-center justify-between px-4'>
                <SlidersHorizontal className="text-text" />
                <Construction className="w-8 h-8 text-primary" />
                <h2 className="text-heading font-semibold">
                    Controls in Development
                </h2>
                <ListSortDescending className="text-text" />
            </div>



            <div className="hidden lg:block w-64 h-200 sticky top-14 bg-surface-secondary p-6">
                <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                    <Construction className="w-8 h-8 text-primary" />

                    <div>
                        <h2 className="text-heading font-semibold">
                            Controls in Development
                        </h2>

                        <p className="text-muted text-sm mt-2">
                            Search, filters and sorting will be added here later.
                        </p>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs">
                        IN DEVELOPMENT
                    </span>
                </div>
            </div>


        </div>
    );
};

export default Sidebar;

