'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='h-[500px] mt-[110px] flex flex-col items-center justify-center'>
      <h2 className='font-kohob'>Something went wrong!</h2>
      <button
      className='w-[100px] h-[40px] rounded-lg bg-secondary1 font-kohob text-white'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}