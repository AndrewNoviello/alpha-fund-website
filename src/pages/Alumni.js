
import Person from '../components/Person';
import { alumni } from '../config';

const Alumni = () => (
  <div className="py-24 text-center">
    <h2 className="text-4xl font-bold mb-12">Placements</h2>
    <p className="mb-12 text-xl">
      Cornell Alpha Fund Club’s rigorous education, dynamic collaboration, and alumni network take our members to top firms. Where could you go?
    </p>
    <img
      src="placements.png"
      alt="Description of the image"
      class="w-full h-auto object-cover px-12"
    />
    <h2 className="text-4xl font-bold mb-12 mt-24">Alumni</h2>
    <p className="mb-12 text-xl">
      Here are some of our amazing alumni that have passed through Alpha Fund over the last 17 years.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {alumni.map((person) => (
        <Person key={person} name={person.name} role={person.company} image={"alpha_fund_alumni_pics/" + person.img} clickable={false} />
      ))}
    </div>
  </div>
);

export default Alumni