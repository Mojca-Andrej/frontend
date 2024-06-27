import Video from 'next-video';
// import mov from '/videos/1.MOV';
import vid2 from '/videos/2.mp4';
import vid3 from '/videos/3.mp4';
 
export default function Videos() {
  return (
    <main className='grid grid-cols1 md:grid-cols-3 gap-4'>
        <Video src={vid2} />
        <Video src={vid3} />
    </main>
    
    );
}