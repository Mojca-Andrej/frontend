import Image from "next/image";
export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-16 px-4 pt-4 pb-8 bg-white">
      <div className="md:col-span-1 text-black">
        <h2 className="text-2xl font-semibold">Pesnica, pisateljica, performerka</h2>
        <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea nam labore. Amet harum modi corporis voluptate consequuntur eaque doloribus, officia ullam iste alias, inventore repellat fugit molestias itaque blanditiis aperiam impedit provident consequatur, doloremque numquam? Veritatis voluptatum nihil reiciendis tempore maiores temporibus aspernatur odio, quaerat ipsa dolores veniam saepe beatae est soluta tenetur maxime molestias, quia distinctio esse dolorum cumque laborum. Vero autem aperiam unde eius? Ut molestiae, laudantium cumque porro quisquam asperiores quos, sapiente, aperiam vel dolores nesciunt inventore? Aut iusto accusamus quasi assumenda, adipisci, unde repellat reprehenderit harum nostrum, rem vero exercitationem optio. Velit vitae at ex consectetur laboriosam praesentium iusto asperiores blanditiis quasi. Sequi, neque minima beatae iste excepturi atque doloribus placeat molestiae voluptas dolorem sint. Culpa expedita architecto id, veniam alias quod et natus odio quia cupiditate perferendis eveniet delectus autem magnam sit excepturi eum iure ducimus tenetur. Quae veniam illum facere minima? Dolore aperiam eos error dolor fugit fuga maxime? Facere dolorem sapiente officia, temporibus sunt id sed nihil iure magnam praesentium tempore possimus fugiat odit. Ducimus est voluptas vero aspernatur praesentium esse nisi architecto fuga magni temporibus nesciunt debitis cumque aliquam, laborum, porro vel veniam dolor cum alias, in assumenda et sed? Ad.      
        </p>
      </div>
      <div className="md:col-span-1 flex justify-center">
        <Image width={"400"} height={"400"} src="/20240622_153911.jpg" alt="Descriptive Alt Text" className="w-full h-auto md:w-2/3" />
      </div>
    </div>
  );
}
