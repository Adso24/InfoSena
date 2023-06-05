const area = [
  {
    id: 1,
    title: "gjfskjgl",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam quos iure minus corporis animi corrupti",
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
const resultado = area.filter(({ id }) => id == 2);
export const Construccion = () => {
  return (
    <>
      <div>
        {resultado.map(({ id, title, description }) => {
          return (
            <>
              <div key={id} className="area-individual">
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
