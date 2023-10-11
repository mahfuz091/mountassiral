const Login = () => {
  return (
    <div className=' flex lg:justify-center items-center  login_bg relative'>
      <div className='overlay'></div>
      <div className=' lg:py-[60px] px-[20px] lg:px-[70px] login'>
        <div className='text-center'>
          <h3 className='font-semibold text-[32px] md:text-2xl mb-[10px]'>
            Login
          </h3>
          <p className='mb-[45px]'>Welcome Back!</p>
        </div>
        <div className='md:px-12 lg:px-0'>
          <div className='mb-5 '>
            <label className='font-medium block mb-[14px]' htmlFor=''>
              Username
            </label>
            <input
              className='border-[#DDDEDE] border w-full  px-[16px] py-[21px] rounded-full placeholder-[#C9C9C9] bg-[#FCFCFC]'
              placeholder='Enter your username'
              type='text'
              name=''
              id=''
            />
          </div>
          <div className=''>
            <label className='font-medium block mb-[14px]' htmlFor=''>
              Password
            </label>
            <input
              className='border-[#DDDEDE] border w-full  px-[16px] py-[21px] rounded-full placeholder-[#C9C9C9] bg-[#FCFCFC]'
              placeholder='Enter password'
              type='password'
              name=''
              id=''
            />
          </div>
          <p className='font-medium text-[#F06D23] mt-5 text-end'>
            Forget Password
          </p>
          <button className=' mt-[30px] w-full rounded-full font-medium text-[19px] bg-[#F06D23] py-[15px] text-white mb-[53px]'>
            Log in
          </button>
          <p className='text-[14px] md:text-base text-center'>
            Dont have and account?{" "}
            <a href='#' className='text-[#F06D23] font-semibold'>
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
