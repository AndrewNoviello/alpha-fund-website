import Person from '../components/Person';
import { members } from '../config';

const Team = () => (
  <div className="py-24 text-center">
    <h2 className="text-6xl font-bold mb-12">Executive Board</h2>
    <p className="mb-12 text-xl">
      With over 100 years of combined experience, we've got a well-seasoned team at the helm.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {members.leadership.map((member) => (
        <Person key={member} name={member.name} role={member.position} image={"alpha_fund_member_pics/" + member.pic} clickable={true} />
      ))}
    </div>
    <h2 className="text-6xl font-bold mb-12 mt-24">Analysts</h2>
    <p className="mb-12 text-xl">
      With over 100 years of combined experience, we've got a well-seasoned team at the helm.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {members.members.map((member) => (
        <Person key={member} name={member.name} role={member.grade + " Analyst"} image={"alpha_fund_member_pics/" + member.pic} clickable={true} />
      ))}
    </div>
  </div>
);

export default Team