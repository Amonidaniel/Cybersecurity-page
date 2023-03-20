import Picture from '../assets/picture.jpg'

const Home = () => {
  
    return (
     <div>
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-black shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:col-span-2 xl:col-auto">
                Daniel Amoni, CyberSecurity professional.
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-200">
                Cybersecurity professional with strong knowledge about web pages architecture and programming languages. Proficiency with Web Penetration and Ethical Hacking Tools such as Kali Linux, Nmap, Nessus, Metasploit Framework Structure (MFS)
                <br />
                <br />
                Cybersecurity & Penetration Testing
                <br />
o	Linux, Windows and Mac operating systems
<br />
o	Vulnerability Analysis
<br />
o	Website Application Penetration Testing, Code Injection (SQL, HTML, JavaScript), and Payloads Generation
<br />
o	Penetration testing tools variety (Burpsuite, Nmap, MSFVenom, Metasploit Framework, Bash, Powershell, Nessus)

                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="resume.pdf"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Resume
                  </a>
                 
                </div>
              </div>
              <img
                src={Picture}
                alt="picture"
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
      </div>
    )
  }
  

export default Home;