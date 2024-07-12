import Person from '../components/Person';

const teamMembers = [
  { id: 1, name: "Tranter Jaskulski", role: "Founder & Specialist", image: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80" },
  { id: 2, name: "Tranter Jaskulski", role: "Founder & Specialist", image: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80" },
  { id: 3, name: "Tranter Jaskulski", role: "Founder & Specialist", image: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80" },
  { id: 4, name: "Tranter Jaskulski", role: "Founder & Specialist", image: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80" },
  { id: 5, name: "Tranter Jaskulski", role: "Founder & Specialist", image: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80" },
  { id: 6, name: "Tranter Jaskulski", role: "Founder & Specialist", image: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80" },
  { id: 7, name: "Tranter Jaskulski", role: "Founder & Specialist", image: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80" },

];

const Team = () => (
  <div className="py-24 text-center">
    <h2 className="text-4xl font-bold mb-12">Executive Board</h2>
    <p className="mb-12 text-xl">
      With over 100 years of combined experience, we've got a well-seasoned team at the helm.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {teamMembers.map((member) => (
        <Person key={member.id} {...member} />
      ))}
    </div>
    <h2 className="text-4xl font-bold mb-12 mt-24">Analysts</h2>
    <p className="mb-12 text-xl">
      With over 100 years of combined experience, we've got a well-seasoned team at the helm.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {teamMembers.map((member) => (
        <Person key={member.id} {...member} />
      ))}
    </div>
  </div>
);

export default Team