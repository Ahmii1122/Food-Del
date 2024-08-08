import HText from '@/Shared/HText'
import { SelectedPage,ClassType } from '@/Shared/types'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import { motion } from 'framer-motion'
import Class from "./Class"

const classes:Array<ClassType> =[
    {
        name:"Weight Training Classes",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique qui quam ullam mollitia deserunt veniam eveniet illo vel eos, nihil vitae, ipsum libero sapiente eum? Nisi impedit placeat vero tempore.",
        image:image1,
        
    },
    {
        name:"Yoga Classes",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique qui quam ullam mollitia deserunt veniam eveniet illo vel eos, nihil vitae, ipsum libero sapiente eum? Nisi impedit placeat vero tempore.",
        image:image2,
        
    },
    {
        name:"Ab Core  Classe",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique qui quam ullam mollitia deserunt veniam eveniet illo vel eos, nihil vitae, ipsum libero sapiente eum? Nisi impedit placeat vero tempore.",
        image:image3,
        
    },
    {
        name:"Adventure Classes",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique qui quam ullam mollitia deserunt veniam eveniet illo vel eos, nihil vitae, ipsum libero sapiente eum? Nisi impedit placeat vero tempore.",
        image:image4,
        
    },
    {
        name:"Fitness Classes",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique qui quam ullam mollitia deserunt veniam eveniet illo vel eos, nihil vitae, ipsum libero sapiente eum? Nisi impedit placeat vero tempore.",
        image:image5,
        
    },
    {
        name:"Training Classes",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique qui quam ullam mollitia deserunt veniam eveniet illo vel eos, nihil vitae, ipsum libero sapiente eum? Nisi impedit placeat vero tempore.",
        image:image6,
        
    }
]

type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id='ourclasses' className='w-full bg-primary-100'>
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div className='mx-auto w-5/6'
        initial="hidden"
        whileInView="visible"
        viewport={{once:true,amount:0.5}}
        transition={{delay:0.2,duration:0.5}}
        variants={{
            hidden:{
                opacity:0,x:-100
            },
            visible:{opacity:1,x:0}
        }}>
            <div className='md:w-3/5'>
                <HText>Our Classes</HText>
                <p className='py-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam ipsam esse amet neque rerum placeat veniam suscipit sapiente animi, dicta blanditiis odio consectetur unde doloribus cum ullam ex tempora eligendi.</p>
            </div>
        </motion.div>
        <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
            <ul className='w-[2800px] whitespace-nowrap'>
                {classes.map((item:ClassType,index)=>(
                    <Class key={`${item.name}-${index}`} name={item.name}
                    description={item.description}
                    image={item.image}/>
                ))}

            </ul>

        </div>
        </motion.div>
    </section>
  )
}

export default OurClasses