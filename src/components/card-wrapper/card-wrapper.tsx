
const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 z-1">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="relative z-2 bg-white pb-8">
                    <div className="relative pt-6 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardWrapper;