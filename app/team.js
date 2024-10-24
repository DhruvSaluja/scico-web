// pages/team.js
import TeamMember from '../components/MemberCard.js';
import members from '@/data/members.js';
const teamMembers = members;

export default function Team() {
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold text-center ">Meet the Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {teamMembers.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
