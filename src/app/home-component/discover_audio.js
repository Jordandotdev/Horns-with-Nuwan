import AudioPlayer from "./components/audio_player.js";

export default function discover_audio() {
    return (
        <div>
            <section className="bg-white px-4 py-4">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">Discover</h2>
                        <p className="mb-4">
                            Nuwan Gunawardhana is an Eductor, Recording Artist, Composer and multo-instrumentalist
                            who specializes in Trumpet, Trombone and Harmonica.
                        </p>
                        <p>
                            He performs as a permanent member in two well established bands in Sri Lanka -
                             The A Team and the Outlaws, and is also a member of Gustav Mahler Orchestra of Colombo.
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