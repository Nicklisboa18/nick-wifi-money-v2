export default function Background() {
  return (
    <>
      <div className="absolute inset-0 bg-[#060d23]" />

      <div className="absolute top-[-250px] left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="absolute bottom-[-300px] right-[-200px] h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[200px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1d4ed820,transparent_60%)]" />
    </>
  );
}