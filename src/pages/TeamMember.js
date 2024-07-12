
import { useParams, Link } from 'react-router-dom';

const teamMembers = [
  {
    id: 1,
    name: "Tranter Jaskulski",
    role: "Founder & Specialist",
    image: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80",
    major: "Computer Science",
    school: "Stanford University",
    description: "Tranter is a visionary leader with over 15 years of experience in software development and team management. His innovative approach to problem-solving and passion for technology have been instrumental in shaping our company's success. Tranter's expertise spans across various domains, including artificial intelligence, cloud computing, and cybersecurity."
  },
  // ... Add similar detailed information for other team members
];

const TeamMemberPage = () => {
  const { id } = useParams();
  const member = teamMembers.find(m => m.id === parseInt(id));

  if (!member) return <div className="py-24 text-center">Member not found</div>;

  return (
    <div className="py-24 px-8 max-w-6xl mx-auto">
      <div className="flex items-center mb-6">
        <Link to="/team" className="text-gray-600 hover:text-gray-800 transition-colors duration-300 flex items-center">
          <span className="mdi mdi-arrow-left mr-2"></span>Team
        </Link>
        <span className="mx-3 text-gray-400">|</span>
        <Link to="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300 flex items-center">
          <span className="text-gray-600">{member.name}</span>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src={member.image}
            alt={member.name}
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">{member.name}</h2>
          <p className="text-xl text-gray-600 mb-4">{member.role}</p>
          <p className="text-lg mb-2"><strong>Major:</strong> {member.major}</p>
          <p className="text-lg mb-6"><strong>School:</strong> {member.school}</p>
          <p className="text-lg leading-relaxed">{member.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberPage;

