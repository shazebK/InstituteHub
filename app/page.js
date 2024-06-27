import ImageSlideShow from "@/components/UI/image_slide_show";

const IMAGES = [
  {
    src : "https://www.nitp.ac.in/static/c379f514b1ed9d9f969ca29d1cea7a3b/9a128/2019-03-18_1920x1080_1_700x500.jpg",
    alt : "Basketball court"
  },
  {
    src : "https://www.nitp.ac.in/static/1d0f98d6015d0a1c1de051c4cbae9abd/9a128/2019-07-26_1_700x500.jpg",
    alt : "Lab"
  },
  {
    src : "https://www.nitp.ac.in/static/3c38fa554f5604d12b4a7ec65069f3ff/9a128/2019-07-26_700x500.jpg",
    alt : "Auditorium"
  }
]

export default function Home(){
  return (
    <div className="w-full px-4 flex flex-col items-center justify-center">
      <div className="w-5/6 text-center my-8">
        <h1 className="text-2xl md:text-3xl">Welcome To</h1>
        <h1 className="text-3xl md:text-4xl">National Institute of Technology Patna</h1>
      </div>

      <div className="w-full md:w-2/3 h-[60vh] rounded-md relative">
        <ImageSlideShow images = {IMAGES} delay = {5000}/>
      </div>

    </div>
  );
}
