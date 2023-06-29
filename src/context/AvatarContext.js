import React, { createContext, useState, useContext } from 'react';

const AvatarContext = createContext();

export const AvatarProvider = (props) => {
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAvatars = async (pageNumber) => {
    try {
      setIsLoading(true);

      const response = await fetch(`https://reqres.in/api/users?page=${pageNumber}`);

      const res = await response.json();

      setAvatars(res);
      
      setIsLoading(false);

    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    }
  };

  const context = {
    avatars: avatars,
    isLoading: isLoading,
    getAvatars: getAvatars
  };

  return (
    <AvatarContext.Provider value={context}>
      {props.children}
    </AvatarContext.Provider>
  );
};

export const useFeedbackContext = () => useContext(AvatarContext);

export default AvatarContext;