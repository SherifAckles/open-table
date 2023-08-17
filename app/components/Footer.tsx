export default function Footer() {
  return (
    <footer className='bg-gradient-to-t from-gray-700 to-gray-800 text-white py-8'>
      <div className='text-center'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} OpenTable. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


