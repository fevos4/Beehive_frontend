import React from 'react';

const teamMembers = [
  { name: 'Petros Lakew', image: 'assets/team.jpeg' },
  { name: 'Samantha Casale', image: 'assets/team.jpeg' },
  { name: 'Feven Tesfaye', image: 'assets/team.jpeg' },
];
const teamMember = [
    { name2: 'Feven Mesfin', image2: 'assets/team.jpeg' },
    { name2: 'Eyerusalem Bahiru', image2: 'assets/team.jpeg' },
  ];

const Team = () => {
  return (
    <div className="min-h-screen bg-white text-center px-4 py-12" id='team'>
      <h2 className="text-4xl font-bold mb-12">Meet Our Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto ">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-40 h-40 relative">
              <div className="clip-hexagon overflow-hidden border-4 border-orange-500 w-full h-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="mt-4 text-lg font-medium">{member.name}</p>
          </div>
        ))}
      </div>
      <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 md:mt-8 max-w-3xl mx-auto'>
      {teamMember.map((member2, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-40 h-40 relative">
              <div className="clip-hexagon overflow-hidden border-4 border-orange-500 w-full h-full">
                <img
                  src={member2.image2}
                  alt={member2.name2}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="mt-4 text-lg font-medium">{member2.name2}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
