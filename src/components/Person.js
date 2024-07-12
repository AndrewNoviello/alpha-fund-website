import { Link } from 'react-router-dom';

const Person = ({ name, role, image, id }) => (
  <div className="flex flex-col items-center p-8">
    <Link to={`/team/${id}`}>
      <img
        className="w-48 h-48 mb-6 rounded-lg object-cover"
        src={image}
        alt={name}
      />
    </Link>
    <h3 className="mb-1 text-2xl font-bold">{name}</h3>
    <p className="text-sm text-gray-600">{role}</p>
  </div>
)

export default Person;