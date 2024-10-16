

export default function Aboutme() {
    return (
        <div id="a" className="h-screen">
            <div className="flex flex-col justify-evenly w-11/12 mx-auto lg:w-9/12">
                <div className="w-full h-16 flex justify-end items-center gap-4">
                    <a href="#a" className="text-shadow font-bold text-xl text-white">About</a>
                    <a href="#b" className="text-shadow font-bold text-xl text-white">Education</a>
                    <a href="#c" className="text-shadow font-bold text-xl text-white">Projects</a>
                </div>
                <div className="h-4/6 w-full flex flex-col items-center justify-between gap-10 lg:flex-row">
                    <div className="w-full animate-slide-in-1s lg:h-full flex flex-col justify-between border-white gap-10 lg:w-5/12">
                       <div className="mt-20 flex flex-col  border-white">
                            <h1 className="text-4xl font-black tracking-tight text-slate-200">ELKAMAL Mohammed</h1>
                            <h2 className="ml-2 mt-2 text-lg font-bold tracking-tight text-slate-50">Frontend Engineer</h2>
                            <p className="ml-2 mt-8 text-lg tracking-tight text-slate-50">As a dedicated front-end developer and software engineer, I specialize in creating intuitive and engaging user experiences. I am passionate about staying current with industry trends and best practices. My experience as a 1337 student has strengthened my ability to engage with emerging technologies, allowing me to continuously improve my skills. I strive to deliver high-quality, user-centered solutions that meet evolving needs.</p>
                        </div>
                        <div className="w-full flex justify-between">
                            <div className="flex gap-4">
                                <a href="https://x.com/Muhamma84986027" className="border rounded-xl w-12 bg-[#1DA1F2] hover:bg-transparent flex justify-center items-center text-white text-2xl">𝕏</a>
                                <a href="https://www.linkedin.com/in/mohammed-elkamal-b07797199" className="border text-white hover:bg-transparent bg-blue-700 w-12 rounded-xl flex justify-center items-center p-2 fa-brands fa-linkedin-in text-2xl"></a>
                                <a href="https://www.instagram.com/mo_elkamel/" className="transition delay-1000 duration-300 ease-in-out border text-white hover:from-transparent hover:to-from-transparent bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] w-12 rounded-xl flex justify-center items-center p-2 fa-brands fa-instagram text-2xl"></a>
                                <a href="https://github.com/moelkama/" className="border hover:text-white hover:bg-transparent text-black bg-white w-12 rounded-xl flex justify-center items-center p-2 fa-brands fa-github text-2xl"></a>
                            </div>
                            <a href="" className="px-4 hover:text-black text-white hover:bg-white flex gap-2 border rounded-xl justify-center items-center">
                                <i className="text-bold text-4xl fa-solid fa-user"></i>
                                <h1>My CV</h1>
                            </a>
                        </div>
                    </div>
                    <div className="animate-slide-in-2s border lg:h-full border-slate-600 rounded-3xl lg:w-6/12 flex flex-col justify-evenly p-6">
                        <div className="">
                            <p className="mt-2 text-lg font-bold tracking-tight text-slate-100">When I was young, my curiosity always drove me to understand how electronic devices work, and that same curiosity now motivates me to delve deeper into their development, aiming to make them more seamless</p>
                        </div>
                        <div className="">
                            <p className="mt-2 text-lg font-bold tracking-tight text-slate-100">My goal now is to enhance my skills as a front-end developer and continue my studies in technology, particularly in the field of quantum computers, since I am also a physics student.</p>
                        </div>
                        <div className="">
                            <p className="mt-2 text-lg font-bold tracking-tight text-slate-100">I love traveling, exploring, playing football, and watching movies and TV series.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}