import React from 'react';
import ProfileSummary from './ProfileDetails';

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    profilePicture: 'https://i.pravatar.cc/150?img=3',
    yearInSchool: 'Senior',
    major: 'Computer Science',
  };

  return (
    <div>
      <ProfileSummary user={user} />
    </div>
  );
};

export default UserProfile;
