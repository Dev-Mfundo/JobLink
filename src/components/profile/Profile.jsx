import { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    profilePicture: 'Profile Pic',
    name: 'Mfundo',
    email: 'Mfundo@Manje.com',
    phone: '123-456-7890',
    resume: null,
    jobTitle: 'Software Engineer',
    location: 'JOBURG, GP',
    bio: 'software engineer with expertise in full-stack development.',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setProfileData({ ...profileData, resume: files[0] });
    } else {
      setProfileData({ ...profileData, [name]: value });
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    console.log('Profile updated:', profileData);
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <img src={profileData.profilePicture} alt="Profile" className="profile-picture" />
        <h2>{profileData.name}</h2>
        <p>{profileData.jobTitle} | {profileData.location}</p>
        <button onClick={toggleEdit} className="edit-btn">
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={profileData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={profileData.jobTitle}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={profileData.location}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Bio</label>
            <textarea
              name="bio"
              value={profileData.bio}
              onChange={handleChange}
              rows="5"
            ></textarea>
          </div>
          <div className="form-group">
            <label>Upload Resume</label>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="save-btn">Save</button>
        </form>
      ) : (
        <div className="profile-details">
          <p><strong>Email:</strong> {profileData.email}</p>
          <p><strong>Phone:</strong> {profileData.phone}</p>
          <p><strong>Bio:</strong> {profileData.bio}</p>
          <p><strong>Resume:</strong> {profileData.resume ? profileData.resume.name : 'No resume uploaded'}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
