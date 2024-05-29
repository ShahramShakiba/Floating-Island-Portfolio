import { Canvas } from '@react-three/fiber';
{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
  POPUP
</div> */
}
export default function Home() {
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      ></Canvas>
    </section>
  );
}