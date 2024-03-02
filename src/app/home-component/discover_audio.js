import AudioPlayer from "./components/audio_player.js";

//addition of 2 links for spotify and apple music - button component to be created

export default function discover_audio() {
    return (
        <div>
            <section className="bg-offwhite px-4 py-4">
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
                        <div className='flex mt-8 space-x-4 lg:justify-start md:justify-start sm:justify-center' alt='Social-Icons'>
                            <a href="https://www.instagram.com/majestichorns/" target="_blank">
                                <img className='rounded-lg h-8 w-auto transform transition-transform duration-500 ease-in-out hover:scale-110' src="https://img.shields.io/static/v1?message=Spotify&logo=Spotify&label=&color=0F172A&logoColor=white&labelColor=&style=for-the-badge"  alt="instagram logo"  />
                            </a>
                            <a href="https://www.facebook.com/majestichorns" target="_blank">
                                <img className='rounded-lg h-8 w-auto transform transition-transform duration-500 ease-in-out hover:scale-110' src="https://img.shields.io/static/v1?message=Apple%20Music&logo=AppleMusic&label=&color=0F172A&logoColor=white&labelColor=&style=for-the-badge"  alt="gmail logo"  />
                            </a>
                        </div>
                    </div>
                    <div>
                        <AudioPlayer/>
                    </div>
                </div>
            </section>
        </div>
    );
}