function makeFriendsList(friends) { 
  let friendsList = document.createElement('UL'); 
  friends.forEach(function(friend) { 
    let friendy = document.createElement('LI');
    friendy.textContent = friend.firstName + " " + friend.lastName; 
    friendsList.appendChild(friendy);
  })
return friendsList;
}


