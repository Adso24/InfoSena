const areas = [
  {
    id: 1,
    title: "Construcción",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim aliquam sint, ut recusandae molestias repudiandae veritatis exercitationem, maiores, minus quam esse nisi iste ratione tempore perspiciatis. Ducimus harum reprehenderit cum?",
    image: "/src/images/construccion.jpg",
  },
  {
    id: 2,
    title: "Construccion",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam quos iure minus corporis animi corrupti",
    image: "/src/images/informatica.jpg",
  },
];
export const Construccion = () => {
  return (
    <>
      <h1>{areas[0].description}</h1>
    </>
  );
};
