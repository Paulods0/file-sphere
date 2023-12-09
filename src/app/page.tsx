import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className=" px-12 py-8 min-h-screen">
      <section className="w-full p-8 bg-white shadow-lg dark:bg-slate-900 grid  lg:grid-cols-2 lg:place-items-center">
        <div className="flex flex-col w-full ">
          <h1 className="text-2xl text-black dark:text-white  lg:text-3xl poppins font-bold mb-6 lg:mb-10">
            Welcome to File Sphere!
          </h1>
          <h3 className="poppins font-semibold text-lg text-black dark:text-white lg:text-xl mb-4 lg:mb-6">
            Embark on a Seamless Journey: Navigating the Expansive Galaxy of
            File Management with Ease in Your Personal Cosmos, Welcome to File
            Sphere!
          </h3>
          <p className=" font-thin w-full lg:w-[480px] poppins text-black dark:text-white">
            🌐Your Personal File Universe 🚀 We're thrilled to have you on board
            with File Sphere – your go-to destination for seamless file
            management and collaboration. Say goodbye to the limitations of
            traditional file storage, and step into a world where your
            documents, photos, and projects orbit around you effortlessly.
          </p>
          <Link
            href={"/dashboard"}
            className="self-start mt-8 flex items-center p-4  bg-black text-white dark:bg-white  dark:text-black "
          >
            Try it for free!
            <span>
              <ArrowRight size={20} />
            </span>
          </Link>
        </div>

        <div className="w-full h-[350px] lg:h-[350px] flex mt-10 lg:mt-0 justify-center items-center">
          <div className="relative w-full h-full rounded-lg bg-white">
            <Image
              quality={80}
              width={500}
              height={500}
              src={"/3.jpg"}
              alt="Hero image"
              className="w-full rounded-xl h-full absolute object-cover inset-0"
            />
          </div>
        </div>
      </section>
      {/**DISCLAIMER SECTION */}
      <section className="flex flex-col mt-10">
        <h2 className="text-[14] font-medium mb-6 lg:mb-0">
          File Sphere is designed to provide you with a secure and efficient
          file management experience. However, it is important to note the
          following disclaimer:
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 gap-6 mb-16">
          <p className="lg:mt-10 ">
            <b>Content Responsibility:</b> You are solely responsible for the
            content you upload, share, or store on File Sphere. Ensure that you
            have the legal right to share the files, and that their content
            complies with all relevant laws and regulations.
          </p>
          <p className="lg:mt-10 ">
            <b>Security Measures:</b> While File Sphere employs security
            measures to protect your data, no system is entirely immune to
            potential risks. Users are encouraged to take appropriate security
            measures, such as using strong passwords, to safeguard their
            accounts.
          </p>
          <p className="lg:mt-10 ">
            <b>Data Loss:</b> While File Sphere employs measures to prevent data
            loss, users should regularly back up important files. File Sphere is
            not liable for any loss of data due to user actions, system
            failures, or unforeseen circumstances.
          </p>
        </div>
        <p className="lg:text-center text-start text-[14px] text-slate-400">
          By using File Sphere, you agree to abide by these terms. <br />
          If you do not agree, please refrain from using File Sphere. For any
          concerns, contact our support team. <br /> Thank you for choosing File
          Sphere. The File Sphere Team
        </p>
      </section>
    </main>
  )
}
