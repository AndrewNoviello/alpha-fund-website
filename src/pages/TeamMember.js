
import { useParams, Link } from 'react-router-dom';
import { members } from '../config';
import { useEffect } from 'react';

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

const TeamMemberPage = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let name = toTitleCase(id.replace("-", " "))

  const member = members.members.find(m => m.name === name) !== undefined ? members.members.find(m => m.name === name) : members.leadership.find(m => m.name === name)

  if (!member) return <div className="py-24 text-center">Member not found.</div>;

  let eboard = "position" in member

  return (
    <div className="py-24 px-8 max-w-6xl mx-auto">
      <div className="flex items-center mb-6">
        <Link to="/team" className="text-gray-600 hover:text-gray-800 transition-colors duration-300 flex items-center">
          <span className="mdi mdi-arrow-left mr-2"></span>{eboard ? "Executive Board" : "Members"}
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
            src={"../alpha_fund_member_pics/" + member.pic}
            alt={member.name}
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">{member.name}</h2>
          {eboard ?
            <p className="text-xl text-gray-600 mb-4">{member.position}</p> :
            <p className="text-xl text-gray-600 mb-4">{member.grade + " Analyst"}</p>

          }
          <p className="text-lg leading-relaxed">{member.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberPage;

