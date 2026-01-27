import Image from 'next/image';
import wonders, { WonderImage } from '../wonders'
export default async function Page({params}:{params:Promise<{id:string}>}) {
  const {id} = await params;
  const data:WonderImage[] = wonders.filter(f=>f.id==id)
    return (
     <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
      
      <h1 className="text-2xl font-semibold text-center">
        {data[0].name}
      </h1>

      <div className="w-full max-w-xl">
        <Image
          src={data[0].src}
          alt={data[0].name}
          width={800}
          height={500}
          className="w-full h-auto rounded-lg object-cover"
          priority
        />
      </div>

      <div className="text-sm text-gray-600 text-center">
        <p>{data[0].location}</p>
        <p>{data[0].photographer}</p>
      </div>
    </div>
  )
}
