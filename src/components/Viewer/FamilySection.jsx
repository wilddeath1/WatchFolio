
const FamilySection = () => {
    return (
        <>
            <div className="px-2 pt-3">

                <div className="border-t border-border pt-4">

                    <h3 className="text-lg font-semibold text-heading">
                        More from this family
                    </h3>

                    <div className="flex gap-4 mt-3">

                        <div className="h-20 w-24 rounded-xl bg-surface-secondary flex items-center justify-center text-sm text-muted">
                            Variant
                        </div>

                        <div className="h-20 w-24 rounded-xl bg-surface-secondary flex items-center justify-center text-sm text-muted">
                            Variant
                        </div>

                        <div className="h-20 w-24 rounded-xl bg-surface-secondary flex items-center justify-center text-sm text-muted">
                            Variant
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default FamilySection;