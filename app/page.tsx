import Hello from '@/app/components/Hello'

export default function Home() {
  console.log("This is rendering serverside!!");  

  return (
    <>
      <h1 className="text-3xl text-amber-100">Hello World!!</h1>
      <Hello />
    </>
  );
}
