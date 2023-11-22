export const getSender = (loggedUser, users) => {
  if (users && users.length >= 2) {
    return users[0]._id === loggedUser?._id ? users[1]?.name : users[0]?.name;
  }
  // Handle the case when users array is not structured as expected
  return 'Sender Not Found';
};

  export const getSenderFull = (loggedUser, users) => {
    return users[0]._id === loggedUser._id ? users[1] : users[0];
  };