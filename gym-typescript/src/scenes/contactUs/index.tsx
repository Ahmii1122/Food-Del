import { SelectedPage } from "@/Shared/types"
import { motion } from "framer-motion"
import {useForm} from "react-hook-form"
import ContactUsPageGraphics from '@/assets/ContactUsPageGraphic.png'
import HText from "@/Shared/HText"
type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const ContactUs = ({setSelectedPage}: Props) => {
    const inputstyles = " mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white";
    const {
        register,
        trigger,
        formState:{errors}
    }=useForm();
    const onSubmit =async (e:any) =>{
        const isvalid = await trigger();
        if(!isvalid){
            e.preventDefault();
        }
    }


  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32" >
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUS)}>
            {/* header */}
          <motion.div className="md:w3/5"
           initial="hidden"
           whileInView="visible"
           viewport={{once:true,amount:0.5}}
           transition={{delay:0.2,duration:0.5}}
           variants={{
               hidden:{
                   opacity:0,x:-100
               },
               visible:{opacity:1,x:0}
           }} >
            <HText>
                <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
            </HText>
            <p className="my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quisquam ut explicabo quaerat magnam sapiente magni, repudiandae cumque! Eos exercitationem eveniet id magni corporis, distinctio laudantium magnam blanditiis sint totam!</p>
            </motion.div> 
             {/*Form and image  */}
             <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div className="mt-10 basis-3/5 md:mt-0"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{once:true,amount:0.5}}
                 transition={{delay:0.2,duration:0.5}}
                 variants={{
                     hidden:{
                         opacity:0,y:100
                     },
                     visible:{opacity:1,x:0}
                 }} >
                    <form target="_blank"
                    onSubmit={onSubmit}
                    action="https://formsubmit.co/af254beaa909425fae0d47caa6f2c880"
                    method="POST">
                        <input className={inputstyles} type="text" 
                        placeholder="NAME"
                        {...register("name",{
                            required:true,
                            maxLength:100,
                        })}/>
                        {errors.name && (
                            <p className="mt-1 text-primary-500 ">
                            {errors.name.type === "required" && "This Field is required"}
                            {errors.name.type === "maxLength" && "Maxlength is 100 charcters"}
                            </p>
                        )}
                        <input className={inputstyles} type="text" 
                        placeholder="EMAIL"
                        {...register("email",{
                            required:true,
                            pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}/>
                        {errors.email && (
                            <p className="mt-1 text-primary-500 ">
                            {errors.email.type === "required" && "This Field is required"}
                            {errors.email.type === "pattern" && "Invalid email addres"}
                            </p>
                        )}
                        <textarea className={inputstyles}
                        rows={4} 
                        cols={50}
                        placeholder="MESSAGE"
                        {...register("message",{
                            required:true,
                            maxLength:2000,
                        })}/>
                        {errors.message && (
                            <p className="mt-1 text-primary-500 ">
                            {errors.message.type === "required" && "This Field is required"}
                            {errors.message.type === "maxLength" && "Maxlength is 2000 charcters"}
                            </p>
                        )}
                        <button type="submit" className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">SUBMIT</button>
                    </form>
                </motion.div>
                <motion.div className="relative mt-16 basis-2/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true,amount:0.5}}
                transition={{delay:0.2,duration:0.5}}
                variants={{
                    hidden:{
                        opacity:0,y:100
                    },
                    visible:{opacity:1,x:0}
                }}>
                <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-10]">
                    <img className="w-full" src={ContactUsPageGraphics} alt="Contact us page graphic" />
                </div>
                </motion.div>
             </div>
        </motion.div>

    </section>
  )
}

export default ContactUs