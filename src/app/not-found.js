import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='mt-[120px] flex flex-col items-center justify-center gap-4 h-[70vh]'>
      <h2 className='text-secondary1 font-kohob text-[24px]'>Page Not Found</h2>
      <p className='font-kohol'>Could not find requested resource</p>
      <Link className='w-[120px] h-[40px] bg-secondary1 rounded-lg flex items-center justify-center text-primary1 font-kohob' href="/">Return Home</Link>
    </div>
  )
}
