import { useImmer } from "use-immer";

const Person = () => {
  //   const [person, setPerson] = useState({
  //     name: "John Doe",
  //   });

  const [person, setPerson] = useImmer({
    name: "John Doe",
  });

  return (
    <div className="my-8">
      <h1 className="text-xl font-bold mb-2">Name: {person.name}</h1>
      {person.age && (
        <h2 className="text-xl font-bold mb-2">Age: {person.age}</h2>
      )}
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={() => {
          // setPerson({ ...person, age: 20 });

          setPerson((draft) => {
            draft.age = 20;
          });
        }}
      >
        Add Age
      </button>
    </div>
  );
};

export default Person;
