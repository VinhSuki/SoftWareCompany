import Introduce from '@/components/common/Introduce'
import { PlayCircleOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import ReasonSection from './components/ReasonSection'
import excuteAOS from '@/utils/AOS'
import { useCallback, useEffect } from 'react'

const Home = () => {
  const callBackAos = useCallback(() => {
    excuteAOS()
  }, [])

  useEffect(() => {
    callBackAos()
  }, [callBackAos])
  return (
    <div>
      <Introduce
        className='lg:h-screen h-auto bg-white relative z-30'
        tag='The best tech company in the year'
        title='Welcome to Virtu company'
        shortContent='The best tech company'
        description='Phasellus odio dolor, tincidunt sed rutrum at, condimentum ac ipsum. Nullam congue pretium nisl. Curabitur at sem et leo dictum pretium. Morbi in rutrum tellus. Donec interdum ut felis et rutrum. Proin vitae venenatis sem. Aenean mattis malesuada dolor eget aliquam.'
      >
        <Space size={30}>
          <div className='relative z-30 xl:w-14 xl:h-14 lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-12 sm:h-12 w-10 h-10'>
            <button className='z-30 absolute rounded-full w-full h-full bg-third text-white text-lg'>
              <PlayCircleOutlined />
            </button>
            <span className='absolute z-10 xl:inset-[8px] lg:inset-[6px] md:inset-[4px] sm:inset-[6px] inset-[4px] bg-primary animate-ping rounded-full'></span>
          </div>
          <Button className='xl:px-6 xl:py-5 lg:px-5 lg:py-4 md:px-4 md:py-3 sm:px-5 sm:py-4 px-4 py-3' type='primary'>
            Read More
          </Button>
        </Space>
      </Introduce>
      <ReasonSection />
    </div>
  )
}

export default Home
