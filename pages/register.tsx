import { Navbar } from '@components';
import Image from 'next/image';

const Register = () => {
  return (
    <div className='w-full'>
      <Navbar />

      <main className='flex flex-col items-center mt-16'>
        <h1 className='text-xl text-[#434342] italic'>Hello</h1>
        <p className='italic'>Create Your Account</p>

        <form className='flex flex-col items-center space-y-4 mt-8'>
          <div className=''>
            <input
              type='text'
              name='fullName'
              placeholder='Full name'
              id='fullName'
              className='bg-[#d9d9d9] rounded-xl px-4 py-1.5 placeholder:text-[#434242] placeholder:opacity-90 placeholder:italic'
            />
          </div>
          <div className=''>
            <input
              type='password'
              name='password'
              placeholder='Password'
              id='password'
              className='bg-[#d9d9d9] rounded-xl px-4 py-1.5 placeholder:text-[#434242] placeholder:opacity-90 placeholder:italic'
            />
          </div>
          <div className=''>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email Address'
              className='bg-[#d9d9d9] rounded-xl px-4 py-1.5 placeholder:text-[#434242] placeholder:opacity-90 placeholder:italic'
            />
          </div>
          <div className=''>
            <input
              type='phone'
              name='phone'
              id='phone'
              placeholder='Mobile No.'
              className='bg-[#d9d9d9] rounded-xl px-4 py-1.5 placeholder:text-[#434242] placeholder:opacity-90 placeholder:italic'
            />
          </div>
          <button className='text-xl italic text-[#434342]'>Register</button>
        </form>
      </main>

      <footer className='flex flex-col items-center mt-4'>
        <p className='text-[#434342]'>Or create account with social media</p>
        <div className='flex justify-center space-x-8 mt-4'>
          <Image
            src='/social-media/instagram.svg'
            alt='Instagram Logo'
            width={30}
            height={50}
            priority
          />
          <Image
            src='/social-media/facebook.svg'
            alt='Facebook Logo'
            width={30}
            height={50}
            priority
          />
          <Image
            src='/social-media/twitter.svg'
            alt='Twitter Logo'
            width={30}
            height={50}
            priority
          />
        </div>
      </footer>
    </div>
  );
};

export default Register;
