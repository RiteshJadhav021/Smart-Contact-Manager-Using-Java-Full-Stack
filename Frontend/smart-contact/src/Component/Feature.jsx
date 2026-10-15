

export const Feature = () => {
    return (
        <>
            <div className="feature" id="features">
                <div className="feature_txt text-center">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">Everything you need to stay connected.</h1>
                    <p className="text-lg text-gray-600 leading-12  text-xs font-semibold uppercase tracking-[0.3em]">Built for people who take their relationships seriously.</p>
                </div>
                <div className="container  mx-auto flex    items-center rounded-[2rem]  p-6  sm:p-8 lg:p-10 justify-space-evenly gap-6">
                    <div className="box1 flex items-left gap-4 flex-col max-w-md  rounded-[2rem] bg-white p-6 shadow-[0_10px_40px_rgba(17,24,39,0.1)] sm:p-8 lg:p-10">
                        <div className="box1_img">
                            <img src="globe.png" className="w-12" alt="" />
                        </div>
                        <div className="box1_txt">
                            <h1 className="text-2xl font-bold text-gray-900 mb-4 sm:text-3xl lg:text-4xl">Access  contacts </h1>
                            <p className="text-lg text-gray-600 leading-7.5  text-xs font-semibold uppercase tracking-[0.2em]">Never miss a beat with instant access to your contacts on any device.</p>
                        </div>
                    </div>

                    <div className="box1 flex items-left gap-4 flex-col max-w-md  rounded-[2rem] bg-white p-6 shadow-[0_10px_40px_rgba(17,24,39,0.06)] sm:p-8 lg:p-10">
                        <div className="box1_img">
                            <img src="flash.png" className="w-12" alt="" />
                        </div>
                        <div className="box1_txt">
                            <h1 className="text-2xl font-bold text-gray-900 mb-4 sm:text-3xl lg:text-4xl">Instant Search</h1>
                            <p className="text-lg text-gray-600 leading-7.5  text-xs font-semibold uppercase tracking-[0.2em]">Find what you need in an instant, no more scrolling through endless lists.</p>
                        </div>
                    </div>


                    <div className="box1 flex items-left gap-4 flex-col max-w-md  rounded-[2rem] bg-white p-6 shadow-[0_10px_40px_rgba(17,24,39,0.06)] sm:p-8 lg:p-10">
                        <div className="box1_img">
                            <img src="label.png" className="w-12" alt="" />
                        </div>
                        <div className="box1_txt">
                            <h1 className="text-2xl font-bold text-gray-900 mb-4 sm:text-3xl lg:text-4xl">Smart Tagging</h1>
                            <p className="text-lg text-gray-600 leading-7.5  text-xs font-semibold uppercase tracking-[0.2em]">Organize your contacts with intelligent tags and filters.</p>
                        </div>
                    </div>



                </div>

            </div>


        </>
    );
}