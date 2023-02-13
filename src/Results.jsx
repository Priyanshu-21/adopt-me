// Component Composition : Make component more readable and reusable
import Pet from "./Pet";

const Result = ({ pets }) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>Pet not Found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet 
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            key={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Result;
