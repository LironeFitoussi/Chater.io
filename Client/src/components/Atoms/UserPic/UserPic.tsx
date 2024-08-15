import React from "react";

interface UserPicProps {
  imageUrl: string;
  altText: string;
}

const UserPic: React.FC<UserPicProps> = ({ imageUrl, altText }) => {
  return (
    <div className="my-4">
      <img className="w-10 rounded-full" src={imageUrl} alt={altText} />
    </div>
  );
};

export default UserPic;
