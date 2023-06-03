import React from 'react';
import '../Styles/ProfileSummary.css';

const ProfileSummary = ({ user }) => {
  return (
    <div className="profile-summary">
      <div className="profile-picture-container">
        <img src={user.profilePicture} alt={user.name} className="profile-picture" />
      </div>
      <div className="profile-details">
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-info">
          {user.yearInSchool} - {user.major}
        </p>
      </div>
    </div>
  );
};

export default ProfileSummary;
