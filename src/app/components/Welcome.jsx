import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useMemo, useEffect, useState } from 'react'
import userStore from '@/lib/userStore'

export default function Welcome({ display }) {
  const { setQuestionIndex } = userStore()
  // const [randomNum, setrandomNum] = useState(0);

  // const introMessages = useMemo(
  //   () => [
  //     "Ready for a flavor adventure? Answer a few quick questions and we'll whip up a drink you'll love!",
  //     "Forget bland beverages! Unmask your true cocktail personality with our fun and fiery quiz.",
  //     "Can't decide on a cocktail? Let's unlock your taste buds with a personalized mixology journey!",
  //     "Imagine sipping the perfect drink, tailored just for you. Take our quiz and make it a reality!",
  //     "Ditch the guesswork, find your flavor bliss! Discover your signature cocktail in minutes.",
  //     "Elevate your evenings with bespoke cocktails! Unleash your inner bartender with our taste profile quiz.",
  //   ],
  //   []
  // );
  // useEffect(() => {
  //   const randomIndex = Math.floor(Math.random() * introMessages.length);
  //   setrandomNum(randomIndex);
  // }, [introMessages]);
  return (
    <div className='flex items-center justify-center '>
      <div className='relative'>
        <Image
          className='h-full w-screen rounded-md object-cover opacity-70'
          src='/images/welcome.jpg'
          alt='welcome'
          width={1200}
          height={300}
        />
        <div className='absolute inset-0 mt-[150px] flex flex-col items-center justify-start'>
          <h1 className='mb-7 text-4xl font-bold text-[#F2ADA7]'>
            Crafted for Your Palate
          </h1>
          <h2 className='text-xl font-semibold'>
            Discover a world of exquisite cocktails
          </h2>
          {/* <h1>{introMessages[randomNum]}</h1> */}
          <Button
            className='m-[100px] min-w-[200px] bg-[#9BF2F2] text-lg text-slate-700 shadow-md'
            onClick={() => setQuestionIndex(1)}
          >
            <span className=''>Start Mixing</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
