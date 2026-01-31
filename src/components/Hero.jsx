export default function Hero() {
    return (
        <>
        <div
                className="home flex flex-col md:flex-row md:justify-around items-center px-6 py-4 hero__section"
            >
                <div className="md:w-1/2">
                    <img
                        src="/avatar.jpg"
                        alt="avatar"
                        className="rounded-full w-48 h-48 border-white border-8 m-5 shadow-outline avatar block mx-auto md:hidden"
                    />
                    <h1
                        className="text-2xl font-bold text-blue-500 mb-3 text-center md:text-left"
                    >
                        Hi I am Prince Sibanda
                    </h1>
                    <p className="text-gray-400 text-md text-center md:text-left">
                        I'm Prince Sibanda, a skilled developer creating
                        full-stack websites, mobile/desktop apps, and
                        professional graphic designs to elevate your business.
                    </p>
                    <div className="flex flex-col md:flex-row items-center pt-4">
                        <a
                            className="rounded-full cursor-pointer p-3 w-full bg-blue-500 hover:bg-blue-700 m-2 md:w-48 text-xl text-center outline flex flex-row justify-center items-center gap-4"
                            href="https://contact.prince.zone.id"
                            target="_blank"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"
                                />
                                <rect
                                    x="2"
                                    y="4"
                                    width="20"
                                    height="16"
                                    rx="2"
                                />
                            </svg>
                            Contact
                        </a>
                        <button
                            className="rounded-full p-3 w-full bg-green-500 hover:bg-green-700 m-2 md:w-48 text-xl text-center flex flex-row items-center justify-center gap-4"
                            onClick={() => window.location.href = '#projects'}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M10 9.5 8 12l2 2.5" />
                                <path d="M14 21h1" />
                                <path d="m14 9.5 2 2.5-2 2.5" />
                                <path
                                    d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"
                                />
                                <path d="M9 21h1" />
                            </svg>
                            Projects
                        </button>
                    </div>
                </div>
                <img
                    src="/avatar.jpg"
                    alt="avatar"
                    className="rounded-full w-48 h-48 border-white border-8 m-5 shadow-outline avatar hidden md:block"
                />
            </div>
            <div
                className="flex flex-row items-center justify-around py-10 mx-1 mb-3 md:mt-10 rounded-lg shadow-blue px-4 border-4 border-gray-800 bg-1a202c"
            >
                <img
                    src="/header-img.svg"
                    alt=""
                    className="hidden md:block"
                />
                <div className="p-5 text-center">
                    <p className="text-white text-2xl underline">Why Choose Me</p>
                    <p className="text-gray-500 text-xl p-2">
                        Innovative Solutions, Personalized Solutions
                    </p>
                    <p className="text-gray-500 text-xl p-2">
                        Expertise You Can Trust, Service You'll Love
                    </p>
                    <p className="text-gray-500 text-xl p-2">
                        Your Vision, My Expertise
                    </p>
                    <p className="text-gray-500 text-xl p-2">
                        Cutting-Edge Tech, Personal Touch
                    </p>
                </div>
            </div>
            </>
    )
}