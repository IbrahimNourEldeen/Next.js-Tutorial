import { StaticImageData } from 'next/image'
import photo1 from './photos/Untitled1.jpeg'
import photo2 from './photos/Untitled2.jpeg'
import photo3 from './photos/Untitled3.jpeg'
import photo4 from './photos/Untitled4.jpeg'
import photo5 from './photos/images5.jpeg'
import photo6 from './photos/images6.jpeg'
import photo7 from './photos/images7.jpeg'

export type WonderImage = {
    id:string,
    name:string,
    src: StaticImageData,
    photographer:string,
    location:string
}
const wonderImages:WonderImage[] = [
    {
        id:'1',
        name:'nature photo',
        src: photo1,
        photographer:'ghareb',
        location:'around the world'
    },{
        id:'2',
        name:'nature photo',
        src: photo2,
        photographer:'ghareb',
        location:'around the world'
    },{
        id:'3',
        name:'nature photo',
        src: photo3,
        photographer:'ghareb',
        location:'around the world'
    },{
        id:'4',
        name:'nature photo',
        src: photo4,
        photographer:'ghareb',
        location:'around the world'
    },{
        id:'5',
        name:'nature photo',
        src: photo5,
        photographer:'ghareb',
        location:'around the world'
    },{
        id:'6',
        name:'nature photo',
        src: photo6,
        photographer:'ghareb',
        location:'around the world'
    },{
        id:'7',
        name:'nature photo',
        src: photo7,
        photographer:'ghareb',
        location:'around the world'
    }
]

export default wonderImages