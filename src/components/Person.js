import { Link } from 'react-router-dom';

const Person = ({ name, role, image, id, clickable }) => (
  <div className="flex flex-col items-center p-8">
    {clickable ?
      <Link to={`/team/${name.toLowerCase().replace(" ", "-")}`}>
        <img
          className="w-80 h-80 mb-4 rounded-lg object-cover"
          src={image}
          alt={name}
        />
      </Link> :
      <img
        className="w-80 h-80 mb-4 rounded-lg object-cover"
        src={image}
        alt={name}
      />}
    <h3 className="mb-1 text-2xl font-bold">{name}</h3>
    <p className="text-sm text-gray-600">{role}</p>
  </div>
)

export default Person;