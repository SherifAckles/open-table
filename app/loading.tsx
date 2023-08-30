import Header from "./components/Header";

export default function Loading() {
  return (
    <main>
      <Header />
      <div className='py-3 px-36 mt-10 flex flex-wrap justify-center'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
          <div
            key={num}
            className='animate-pulse bg-slate-200 w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer flex flex-col justify-center items-center'>
            <img
              src='/images/res-loading.gif'
              alt='Loading Animation'
              className='w-20 h-20'
            />
            <p className='mt-2'>Loading...</p>
          </div>
        ))}
      </div>
    </main>
  );
}
