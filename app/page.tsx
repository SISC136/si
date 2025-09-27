import { Progress } from "@/components/ui/progress";

export default function HomePage() {
  return (
    <>
      <div className=" flex justify-center items-center h-screen md:bg-[url('/images/blur_preview.png')] bg-[url('/images/blur_preview_small.png')] bg-cover bg-center text-white">
        <div className="text-center ">
          <h1 className=" text-7xl font-bold mb-2">COMING SOON</h1>
          <p className="text-center text-lg">อดใจรออีกแปปน้าา พวกเรากรรมการรุ่นกำลังตั้งใจทำเว็บมาก ๆๆๆๆๆๆ</p>
          <Progress value={70}  className=" mt-4 " />
        </div>
      </div>
    </>
  );
}
