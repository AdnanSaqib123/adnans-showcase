import React from 'react';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="relative">
                {/* Main spinning circle */}
                <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>

                {/* Inner pulsing circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>

                {/* Loading text */}
                <div className="mt-8 text-center">
                    <p className="text-white text-lg font-semibold animate-pulse">Loading...</p>
                    <p className="text-gray-400 text-sm mt-2">Please wait</p>
                </div>
            </div>
        </div>
    );
};

export default Loader; 