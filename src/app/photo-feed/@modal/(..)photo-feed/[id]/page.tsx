import Image from 'next/image';
import wonders, { WonderImage } from '../../../wonders'
export default async function Page({params}:{params:Promise<{id:string}>}) {
  const {id} = await params;
  const data:WonderImage[] = wonders.filter(f=>f.id==id)
    return (
     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
  {/* Card */}
  <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6 relative">


    <h1 className="text-2xl font-semibold text-center mb-4">
      {data[0].name}
    </h1>

    <div className="w-full">
      <Image
        src={data[0].src}
        alt={data[0].name}
        width={800}
        height={500}
        className="w-full h-auto rounded-lg object-cover"
        priority
      />
    </div>

    <div className="text-sm text-gray-600 text-center mt-4">
      <p>{data[0].location}</p>
      <p>{data[0].photographer}</p>
    </div>
  </div>
</div>

  )
}
