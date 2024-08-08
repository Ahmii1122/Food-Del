import HText from "@/Shared/HText";
import { BenefitType, SelectedPage } from "@/Shared/types"
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/Shared/ActionButton";
import Benefitspagegraphics from "@/assets/BenefitsPageGraphic.png"
const benefits:Array<BenefitType> = [
    {
        icon:<HomeModernIcon className="h-6 w-6"/>,
        title:"State of the Art Facilities",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quod, doloribus repudiandae deserunt rerum"
    },
    {
        icon:<UserGroupIcon className="h-6 w-6"/>,
        title:"100's of Diverse Classes",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quod, doloribus repudiandae deserunt rerum"
    },
    {
        icon:<AcademicCapIcon className="h-6 w-6"/>,
        title:"Expert and Pro Trainers",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quod, doloribus repudiandae deserunt rerum"
    },
]
const container ={
    hidden:{},
    visible : {
        transition:{staggerChilden:0.2}
    }
}
type Props = {
    setSelectedPage:(value:SelectedPage)=>void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}>
            {/*Header */}
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{
                    opacity:0,x:-50
                },
                visible:{opacity:1,x:0}
            }}
            className="md:my-20 md:w-3/5">
               <HText>MORE THAN JUST GYM.</HText>
               <p className="my-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam natus blanditiis, maiores numquam ea dolorum voluptates odit ratione, perspiciatis culpa deleniti saepe! Est officia at voluptate accusantium veniam tempora in.</p>
            </motion.div>
    {/*Header */}
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once:true,amount:0.5}}
    variants={container} 
     className="md:flex items-center justify-between gap-8 mt-5">
        {benefits.map((benefit)=>(
            <Benefit key={benefit.title}
            icon={benefit.icon}
            title={benefit.title} 
            description={benefit.description}
            setSelectedPage={setSelectedPage}/>
        )
        )}

    </motion.div>
    {/*Graphics and Description */}
    <div className="mt-16 item-center justify-between gap-20 md:mt-28 md:flex">
        {/*Graphics */}
        <img className="mx-auto" src={Benefitspagegraphics} alt="benefits-page-graphics" />
        {/*Description */}
        <div>
            {/*Title */}
            <div className="relative" >
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{once:true,amount:0.5}}
                 transition={{duration:0.5}}
                 variants={{
                     hidden:{
                         opacity:0,x:50
                     },
                     visible:{opacity:1,x:0}
                 }}
                >
                    <HText>Millions of Happy Members Getting{" "}
                        <span className="text-primary-500">FIT</span> </HText>
                </motion.div>
                </div>
            </div>

            {/*Description */}
            <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{once:true,amount:0.5}}
             transition={{ delay:0.2,duration:0.5}}
             variants={{
                 hidden:{
                     opacity:0,x:-100
                 },
                 visible:{opacity:1,x:0}
             }}>
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque molestias fuga deserunt excepturi fugit provident nostrum. Aperiam voluptas iste quae, ea sunt dicta ratione rem? Facere voluptatem magnam officia tempore.</p>
                <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur consectetur expedita illo amet perferendis? Illum natus minima, culpa voluptas velit dolore esse incidunt, ipsam adipisci, repellendus facere dolor doloribus error!
                </p>
            </motion.div>
            {/*Button */}
            <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now

                    </ActionButton>
                </div>

            </div>
        </div>
    </div>
        </motion.div>
    </section>
  )
}

export default Benefits