
import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="py-16 bg-primary-100">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
        <img src={Logo} alt="LOGO" />
        <p className="my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda aperiam debitis aut fuga? Ad fugiat, repellendus quos, ipsa temporibus nemo consequatur soluta minus fuga quidem explicabo porro, ducimus aspernatur architecto!</p>
        <p>© Evogym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
             <h4 className="font-bold">Links</h4>
             <p className="my-5">Massa orci senectus</p>
             <p className="my-5">Et gravida id et eiamt</p>
             <p >Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Contact Us</h4>
             <p className="my-5">Massa orci senectus</p>
             <p className="my-5">(+92)309-4055144</p>
        </div>

        </div>
    </footer>
  )
}

export default Footer