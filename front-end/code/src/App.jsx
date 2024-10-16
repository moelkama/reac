import logo from './logo.svg';
import './App.css';
import Aboutme from './components/Aboutme';
import Education from './components/Education';
import Projects from './components/Projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

function App() {
  return (
    <main className="">
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="bg-yellow-500 h-80 w-80 border-2 border-black"
      >
        <SwiperSlide className="text-black">Slide 1</SwiperSlide>
        <SwiperSlide className="text-black">Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      {/* <Aboutme /> */}
      {/* <Education /> */}
      {/* <Projects /> */}
    </main>
  );
}

export default App;
