import AudioPlayer from "./components/audio_player.js";

export default function discover_audio() {
    return (
        <div>
            <section className="bg-white px-4 py-8">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">Discover</h2>
                        <p className="mb-4">
                            We are strategists, designers and developers. Innovators and problem solvers. 
                            Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.
                        </p>
                        <p>
                            We are strategists, designers and developers.
                             Innovators and problem solvers. Small enough to be simple and quick.
                        </p>
                    </div>
                    <div>
                        <AudioPlayer/>
                    </div>
                </div>
            </section>
        </div>
    );
}